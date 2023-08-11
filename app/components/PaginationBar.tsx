import React from "react";

import { DocsWithPaginationProps } from "@/types";

interface PaginationBarProps {
  paginationProps: Omit<DocsWithPaginationProps, "docs">;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

export const PaginationBar: React.FC<PaginationBarProps> = ({
  paginationProps: {
    totalDocs,
    limit,
    totalPages,
    page,
    pagingCounter,
    hasPrevPage,
    hasNextPage,
    prevPage,
    nextPage,
  },
  onPageChange,
  siblingCount = 3,
}) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (
      let i = Math.max(1, page - siblingCount);
      i <= Math.min(totalPages, page + siblingCount);
      i++
    ) {
      pageNumbers.push(
        <li key={i} className="group">
          <a
            href="#"
            className={`flex items-center justify-center h-7 w-7 p-3 rounded-full ${
              i === page
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-300 text-gray-500 group-hover:text-gray-800"
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </a>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center">
      <ul className="flex space-x-2">
        {hasPrevPage && prevPage !== null && (
          <li>
            <a
              href="#"
              className="flex items-center justify-center h-7 w-7 p-3 rounded-full bg-gray-100 hover:bg-gray-300 text-gray-500 group-hover:text-gray-800"
              onClick={() => handlePageChange(prevPage)}
            >
              &laquo;
            </a>
          </li>
        )}
        {Array(totalPages)?.length > 7 && page >= siblingCount + 2 && (
          <li className="flex items-center gap-0.5">
            <a
              href="#"
              className="flex items-center justify-center h-7 w-7 p-3 rounded-full bg-gray-100 hover:bg-gray-300 text-gray-500 group-hover:text-gray-800"
              onClick={() => handlePageChange(1)} // Botón "Primero"
            >
              1
            </a>
            ...
          </li>
        )}
        {renderPageNumbers()}
        {Array(totalPages)?.length > 7 &&
          page <= totalPages - siblingCount - 1 && (
            <li className="flex items-center gap-0.5">
              ...
              <a
                href="#"
                className="flex items-center justify-center h-7 w-7 p-3 rounded-full bg-gray-100 hover:bg-gray-300 text-gray-500 group-hover:text-gray-800"
                onClick={() => handlePageChange(totalPages)} // Botón "Último"
              >
                {totalPages}
              </a>
            </li>
          )}
        {hasNextPage && nextPage !== null && (
          <li>
            <a
              href="#"
              className="flex items-center justify-center h-7 w-7 p-3 rounded-full bg-gray-100 hover:bg-gray-300 text-gray-500 group-hover:text-gray-800"
              onClick={() => handlePageChange(nextPage)}
            >
              &raquo;
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
