// search-bar component

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { PostProps } from "@/types";

import { useQueryClient, useQuery } from "@tanstack/react-query";

import { fetchPostsWithSearch } from "./service/posts.service";

interface SearchBarProps {
  className?: string;
  onClickSelected?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  className,
  onClickSelected,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listOpen, setListOpen] = useState(false);

  const { status, data, error, isFetching, isPreviousData, isSuccess } =
    useQuery({
      queryKey: ["posts", searchTerm],
      queryFn: () =>
        fetchPostsWithSearch({
          search: searchTerm,
        }),
      keepPreviousData: true,
    });

  const posts = data?.docs;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      setListOpen(true);
    } else {
      setListOpen(false);
    }
  }, [searchTerm]);

  return (
    <>
      <div className="relative flex items-center w-full gap-1">
        <span className="px-3">
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          autoFocus
          type="text"
          placeholder="Buscar..."
          className="w-full h-full p-2"
          value={searchTerm}
          onChange={handleOnChange}
        />
        {isFetching ? (
          <span>
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 animate-spin"
            >
              <path
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        ) : (
          <button
            type="reset"
            onClick={() => setSearchTerm("")}
            className={searchTerm.length > 0 ? "visible" : "invisible"}
          >
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 hover:text-gray-700"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {listOpen ? (
          <div className="absolute top-12 z-10 w-full max-h-[250px] overflow-auto flex flex-col gap-1.5 p-1 border rounded-md bg-white">
            {posts?.map((post: PostProps) => (
              <Link
                href={`/noticias/${post.category.slug}/${post.slug}`}
                key={post._id}
                className="flex items-center p-3 gap-1.5 hover:bg-[#eee]"
                onClick={onClickSelected}
              >
                <Image
                  src={post.images[0].url}
                  alt={post.title}
                  width={50}
                  height={50}
                />

                {post.title}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};
