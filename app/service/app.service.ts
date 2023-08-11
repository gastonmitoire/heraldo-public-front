import { fetchClient } from "@/app/utils";

import {
  AdServerProps,
  CategoryProps,
  DocsWithPaginationProps,
  PostProps,
  FuneralNoticeProps,
} from "@/types";
import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";
// POSTS ENDPOINTS

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

interface FetchPostsWithOptionsProps {
  position?: PostsPositions;
  category?: PostsCategories;
  postsLimit?: number;
  postSlug?: string;
}

export const fetchPosts = async ({
  position,
  category,
  postsLimit,
}: FetchPostsWithOptionsProps) => {
  let url = "";

  if (position) {
    url = `/position/${position}`;
  } else if (category) {
    url = `/category/${category}`;
  }

  const limit = postsLimit ? `?postsLimit=${postsLimit}` : "";

  const finalUrl = `/posts${url}${limit}`;

  const response: PostProps[] = await fetchClient(finalUrl, {
    method: "GET",
  });

  return response;
};

interface fetchPostBySlugProps {
  position?: PostsPositions;
  category?: PostsCategories;
  postsLimit?: number;
  postSlug?: string;
}

export const fetchPostBySlug = async ({ postSlug }: fetchPostBySlugProps) => {
  let url = `/slug/${postSlug}`;

  const finalUrl = `/posts${url}`;

  const response: PostProps = await fetchClient(finalUrl, {
    method: "GET",
  });

  return response;
};

interface FormatDateProps {
  dateString: string;
  dateFormat: string;
}

export const formatDate = async ({
  dateString,
  dateFormat,
}: FormatDateProps) => {
  const parsedDate = parseISO(dateString);
  return format(parsedDate, dateFormat, { locale: es });
};

// FUNEBRES ENDPOINTS

interface FetchFunebresProps {
  deceased?: string;
}

export const fetchFuneralNotices = async ({ deceased }: FetchFunebresProps) => {
  let url = "";

  if (deceased) {
    url = `/search?title=${deceased}`;
  }

  const finalUrl = `/funeral-notices${url}`;

  const funeralNoticesQuery = await fetchClient(finalUrl, {
    method: "GET",
  });
  const response: FuneralNoticeProps[] = funeralNoticesQuery.docs;

  return response;
};

// CATEGORIES ENDPOINTS
export const fetchCategories = async () => {
  const response: CategoryProps[] = await fetchClient("/categories", {
    method: "GET",
  });

  return response;
};
