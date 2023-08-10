// pagination-bar component

import React from "react";

interface PaginationBarProps {
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

const PaginationBar: React.FC<PaginationBarProps> = ({
  totalDocs,
  limit,
  totalPages,
  page,
  pagingCounter,
  hasPrevPage,
  hasNextPage,
  prevPage,
  nextPage,
}) => {
  return "OLA";
};
