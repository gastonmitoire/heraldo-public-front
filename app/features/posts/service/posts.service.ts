import { fetchClient } from "@/app/utils";

import { DocsWithPaginationProps, PostProps } from "@/types";

export enum PostsPositions {
  urgent = "urgent",
  superHighlight = "super_highlight",
  highlight = "highlight",
  top = "top",
  front = "front",
  video = "video",
  photoGalery = "photo_galery",
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
  interesGeneral = "interes_general",
  sociales = "sociales",
  ciencia = "ciencia",
  informativoDocente = "informativo_docente",
  correoDeLectores = "correo_de_lectores",
}

export interface FetchPostsProps {
  option: "position" | "category" | "tag";
  value: PostsPositions | PostsCategories | string;
  postsLimit?: number;
}

export const fetchPostsWithOptions = async ({
  option,
  postsLimit,
  value,
}: FetchPostsProps): Promise<PostProps[]> => {
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
