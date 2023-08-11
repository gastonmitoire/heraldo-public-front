// Definition: Type definitions for the project

// user type definition
export interface UserProps {
  _id: number | string;
  email: string;
  username: string;
}

// image type definition
export interface ImageProps {
  _id?: string;
  filename?: string;
  url: string;
}

// section type definition
export interface SectionProps {
  _id: number | string;
  name: string;
  slug: string;
}

// category type definition
export interface CategoryProps {
  _id: number | string;
  name: string;
  description: string;
  slug: string;
  atMenu: boolean;
  posts: Pick<PostProps, "_id">[];
  createdBy: User;
}

// post type definition
export interface PostProps {
  _id: number | string;
  title: string;
  content: string;
  type: string;
  position: string;
  comments: boolean;
  tags: string[];
  images: Image[];
  views: number;
  section: Section;
  category: Category;
  status: string;
  createdBy: User;
  publicationDate: string;
  createdAt: string;
  slug: string;
  flywheel: string;
  excerpt: string;
  flywheel: string;
  liveSports: string;
}

// banner type definition
export interface AdServerProps {
  _id: number | string;
  position: number;
  site: string;
  unlimited: boolean;
  title: string;
  status: "published" | "expired" | "programmed";
  views: number;
  clicks: number;
  createdBy: User;
  dateStarts: string;
  createdAt: string;
  dateEnds: string;
  url: string;
  client: string;
  desktopImage: Image;
  mobileImage: Image;
}

// funeral notice type definition
export interface FuneralNoticeProps {
  _id: number | string;
  title: string;
  deceased: string;
  client: string;
  religion: string;
  status: string;
  content: string;
  createdBy: User;
  date: string;
  createdAt: string;
}

// printed edition type definition
export interface PrintedEditionProps {
  _id: number | string;
  body: string;
  tags: string[];
  createdBy: User;
  date: string;
  createdAt: string;
  frontPage: Image;
  newsletterPDF: Image;
}

// docs with pagination
export interface DocsWithPaginationProps {
  docs: any[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
