export type postType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  thumbnail?: {
    url: string;
    height?: number;
    width?: number;
  };
  tag:
    | {
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        name: string;
      }[]
    | null;
};
