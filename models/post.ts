export type PostData = {
  date: string;
  title: string;
  thumbnail: string;
  tags: string[];
  featured: boolean;
};

export type SimplePost = {
  id: string;
} & PostData;

export type DetailPost = {
  content: string;
} & SimplePost;
