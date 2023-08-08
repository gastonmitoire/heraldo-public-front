// printed-edition component
"use client";

import React, { useState, useEffect } from "react";

import { Banner } from "@/app/components/Banner";
import { Button } from "../../components/Button";
import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";
import { List } from "@/app/components/List";
import { PrintedEditionModal } from "./PrintedEditionModal";
import { Skeleton } from "../../components/Skeleton";

import { PrintedEditionProps } from "@/types";

interface PrintedEditionComponentProps {
  printedEdition: PrintedEditionProps;
}

export const PrintedEdition: React.FC<PrintedEditionComponentProps> = ({
  printedEdition,
}) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <article
        className="p-3 border h-min cursor-pointer group hover:bg-gray-100"
        onClick={openModal}
      >
        <img
          src={printedEdition.frontPage.url}
          alt={printedEdition.frontPage.filename}
        />

        <Button
          variant="link"
          className="mx-auto group-hover:text-blue-500"
          iconLeft={
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
            >
              <path
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          }
        >
          Ampliar
        </Button>
      </article>
      <PrintedEditionModal
        isOpen={modal}
        onClose={closeModal}
        url={printedEdition.frontPage.url}
      />
    </>
  );
};
