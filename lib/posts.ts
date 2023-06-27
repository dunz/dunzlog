import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { PostData } from '@/models/post';

const postsDir = path.join(process.cwd(), 'posts');

export function getPostDataList(): PostData[] {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames
    .map(fileName => {
      // Read markdown file as string
      const filePath = path.join(postsDir, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const id = fileName.replace(/\.md$/, '');
      const { data } = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...(data as Omit<PostData, 'id'>),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
}

export async function getPostData(id: any) {
  const filePath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
