// printed-edition component
"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Button } from "@/app/components/Button";

import { PrintedEditionModal } from "./PrintedEditionModal";

import { PrintedEditionProps } from "@/types";
import { fetchPrintedEdition } from "./service/printed-edition.service";

interface PrintedEditionComponentProps {
  currentPrintedEdition: PrintedEditionProps;
}

export const PrintedEdition: React.FC<PrintedEditionComponentProps> = ({
  currentPrintedEdition,
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
        className="flex flex-col border divide-y h-min cursor-pointer group hover:bg-gray-200"
        onClick={openModal}
      >
        <h3 className="p-3 text-2xl font-bold bg-white">Tapa del día</h3>
        <Image
          src={currentPrintedEdition.frontPage.url}
          alt={"El Heraldo | Edición impresa"}
          width={500}
          height={400}
        />

        <Button
          variant="link"
          className="mx-auto group-hover:text-primary"
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
        open={modal}
        onClose={closeModal}
        currentPrintedEdition={currentPrintedEdition}
      />
    </>
  );
};
