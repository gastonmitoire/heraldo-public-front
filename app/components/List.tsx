// list component

import React from "react";

interface ListProps {
  heading: string;
  items: {
    title: string;
  }[];
  className?: string;
  listClassName?: string;
}

export const List: React.FC<ListProps> = ({
  items,
  heading,
  className,
  listClassName,
}) => {
  return (
    <div className={`${className} flex flex-col`}>
      <h3 className="text-2xl font-bold p-3">{heading}</h3>

      <ul
        className={`overflow-y-scroll p-3 divide-y ${
          listClassName ? listClassName : "max-h-[350px]"
        }`}
      >
        {items.map((item, index) => (
          <li key={index} className="text-lg font-bold py-1.5">
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-6 h-6 mr-2 text-blue-500"
            >
              <path
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
