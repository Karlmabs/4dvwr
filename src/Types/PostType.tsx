export type Comment = {
  authorName: string;
  content: string;
  creationDate: number;
};

export type Post = {
  id: number;
  authorName: string;
  postTitle: string;
  creationDate: number;
  content: string;
  profileId: number;
  comments: Comment[];
};
