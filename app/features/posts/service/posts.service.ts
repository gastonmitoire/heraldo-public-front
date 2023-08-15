import { fetchClient } from "@/app/utils";

import { DocsWithPaginationProps, PostProps } from "@/types";

export enum PostsPositions {
  urgent = "urgent",
  super_highlight = "super_highlight",
  highlight = "highlight",
  top = "top",
  front = "front",
  video = "video",
  photo_galery = "photo_galery",
  section = "section",
}

export enum PostsCategories {
  locales = "locales",
  policiales = "policiales",
  nacionales = "nacionales",
  internacionales = "internacionales",
  opinion = "opinion",
  tecnologia = "tecnologia",
  turismo = "turismo",
  ecologia = "ecologia",
  cronograma = "cronograma",
  provinciales = "provinciales",
  agro = "agro",
  carnaval = "carnaval",
  efemeride = "efemeride",
  economia = "economia",
  gastronomia = "gastronomia",
  deportes = "deportes",
  cultura = "cultura",
  salud = "salud",
  educacion = "educacion",
  espectaculos = "espectaculos",
  politica = "politica",
  interes_general = "interes_general",
  sociales = "sociales",
  ciencia = "ciencia",
  informativo_docente = "informativo_docente",
  correo_de_lectores = "correo_de_lectores",
}

export interface FetchPostsWithPaginationProps {
  page: number;
  option?: "position" | "category" | "tag";
  value?: PostsPositions | PostsCategories | string;
}

export interface FetchPostsWithOptionsProps {
  option: "position" | "category" | "tag";
  value: PostsPositions | PostsCategories | string;
  postsLimit?: number;
}

export interface FetchPostsWithSearchProps {
  search: string;
}

export const fetchPostsWithSearch = async ({
  search,
}: FetchPostsWithSearchProps): Promise<DocsWithPaginationProps> => {
  const finalUrl = `/posts/search?title=${search}`;

  const response: DocsWithPaginationProps = await fetchClient(finalUrl, {
    method: "GET",
  });

  return response;
};

export const fetchPostsWithPagination = async ({
  page,
  option,
  value,
}: FetchPostsWithPaginationProps): Promise<DocsWithPaginationProps> => {
  let url = "";

  if (option === "position") {
    url = `/position/${value}`;
  } else if (option === "category") {
    url = `/category/${value}`;
  } else if (option === "tag") {
    url = `/tags/${value}`;
  }

  const finalUrl = `/posts${url}?page=${page}`;

  // conditional response based on option
  const response: DocsWithPaginationProps = await fetchClient(finalUrl, {
    method: "GET",
  });

  return response;
};

export const fetchPostsWithOptions = async ({
  option,
  postsLimit,
  value,
}: FetchPostsWithOptionsProps): Promise<PostProps[]> => {
  let url = "";

  if (option === "position") {
    url = `/position/${value}`;
  } else if (option === "category") {
    url = `/category/${value}`;
  } else if (option === "tag") {
    url = `/tags/${value}`;
  }

  const limit =
    option !== "tag" && postsLimit ? `?postsLimit=${postsLimit}` : "";

  const finalUrl = `/posts${url}${limit}`;

  // conditional response based on option
  const response = await fetchClient(finalUrl, {
    method: "GET",
  });

  const sanitizedResponse = Object.keys(response).includes("docs")
    ? response.docs
    : response;

  return sanitizedResponse;
};
