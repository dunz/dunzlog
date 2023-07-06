export type PostData = {
  date: string;
  title: string;
  thumbnail: string;
  tags: string[];
};

export type SimplePost = {
  id: string;
} & PostData;

export type DetailPost = {
  content: string;
} & SimplePost;
