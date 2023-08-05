import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { DetailPost, PostData, SimplePost } from '@/models/post';

const postsDir = path.join(process.cwd(), 'posts');

export function getSimplePostList(): SimplePost[] {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames
    .map((fileName) => {
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
  return fileNames.map((fileName) => {
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

export async function getDetailPost(id: string): Promise<DetailPost> {
  const filePath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { content, data } = matter(fileContents);
  const fileList = getSimplePostList();
  const currentIndex = fileList.findIndex((post) => post.id === id);
  const prevPost = fileList[currentIndex + 1] || null;
  const nextPost = fileList[currentIndex - 1] || null;

  return {
    id,
    content,
    ...(data as PostData),
    prevPost,
    nextPost,
  };
}
