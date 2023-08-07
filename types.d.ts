// Definition: Type definitions for the project

// user type definition
export interface User {
  _id: number | string;
  email: string;
  username: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

// image type definition
export interface Image {
  _id?: string;
  filename?: string;
  url: string;
}

// section type definition
export interface Section {
  _id: number | string;
  name: string;
  slug: string;
}

// category type definition
export interface Category {
  _id: number | string;
  name: string;
  slug: string;
}

// post type definition
export interface Post {
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
  excerpt: string;
  flywheel: string;
}

// banner type definition
export interface AdServer {
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
export interface FuneralNotice {
  _id: number | string;
  title: string;
  deseased: string;
  client: string;
  religion: string;
  status: string;
  content: string;
  createdBy: User;
  date: string;
  createdAt: string;
}

// printed edition type definition
export interface PrintedEditionType {
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
export interface DocsWithPagination {
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
