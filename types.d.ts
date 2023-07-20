// post type definition
export interface Post {
  title: string;
  excerpt: string;
  images: { url: string }[];
  category: { name: string };
}
