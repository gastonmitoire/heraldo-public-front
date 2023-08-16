"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";

import { Modal } from "@/app/components/Modal";

import { PrintedEditionProps } from "@/types";
import { fetchPrintedEditionByDate } from "./service/printed-edition.service";

interface PrintedEditionModalProps {
  currentPrintedEdition: PrintedEditionProps;
  open: boolean;
  onClose: () => void;
}

export const PrintedEditionModal: React.FC<PrintedEditionModalProps> = ({
  currentPrintedEdition,
  open,
  onClose,
}) => {
  const [mounted, setMounted] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const { status, data, error, isFetching, isPreviousData, isSuccess } =
    useQuery({
      queryKey: ["printed-edition", date],
      queryFn: () =>
        fetchPrintedEditionByDate({
          date,
        }),
      keepPreviousData: true,
    });

  const url = data?.docs[0]?.frontPage.url || currentPrintedEdition;

  // Prevent scrolling when modal is open and enable it when modal is closed.
  // Also, set the min and max date for the date picker.
  if (mounted) {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");

    const datePicker = document.getElementById(
      "print-edition-date"
    ) as HTMLInputElement;

    if (datePicker) {
      datePicker.lang = "es";
      datePicker.min = "2023-06-05";
      datePicker.max = new Date().toISOString().slice(0, 10);
    }
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleClose = () => {
    setDate(new Date().toISOString().slice(0, 10));
    onClose();
  };

  const shareOnFacebook = (url: string) => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "facebook-share-dialog",
      "width=800,height=600"
    );
  };

  const shareOnTwitter = (title: string, url: string) => {
    window.open(
      `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      "twitter-share-dialog",
      "width=800,height=600"
    );
  };

  const shareOnWhatsApp = (title: string, url: string) => {
    window.open(
      `https://api.whatsapp.com/send?text=${title} ${url}`,
      "whatsapp-share-dialog",
      "width=800,height=600"
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Modal
        isOpen={open}
        onClose={handleClose}
        maxWidth="max-w-5xl"
        title={"El Heraldo | Edición impresa"}
        topAction={
          <span className="flex items-center gap-1">
            <p className="text-gray-700">Filtrar por fecha:</p>
            <input
              id="print-edition-date"
              type="date"
              className="border border-gray-300 rounded-md"
              onChange={handleDateChange}
            />
          </span>
        }
      >
        <div className="flex flex-col gap-5 pb-5 max-h-[90vh]">
          <figure className="h-[90%] overflow-auto">
            {isFetching ? (
              <div className="flex items-center justify-center h-[80vh]">
                Cargando edición impresa...
              </div>
            ) : isSuccess ? (
              <Image
                src={url}
                alt={"El Heraldo | Edición impresa"}
                width={1000}
                height={1000}
              />
            ) : (
              <div className="flex items-center justify-center h-[80vh]">
                No se encontró la edición impresa para la fecha seleccionada.
              </div>
            )}
          </figure>
          {/* social links (copy link, facebook, twitter, whatsApp) */}
          <nav className={`flex justify-center gap-5`}>
            <button
              className={`flex items-center justify-center text-2xl text-#1C2033 bg-transparent  rounded-full w-6 h-6`}
              onClick={() =>
                shareOnWhatsApp("El Herlado | Edición impresa", url)
              }
            >
              <svg
                fill="#1C2033"
                width="35"
                height="35"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M54 9.90039C48.2 4.10039 40.3 0.900391 32.2 0.900391C15.2 0.900391 1.3 14.7004 1.3 31.7004C1.3 37.2004 2.7 42.4004 5.4 47.2004L1 63.1004L17.5 58.9004C22 61.3004 27.1 62.7004 32.3 62.7004C49.2 62.6004 63 48.8004 63 31.7004C63 23.5004 59.8 15.8004 54 9.90039ZM32.1 57.4004C27.6 57.4004 22.9 56.1004 19 53.7004L18 53.1004L8.3 55.6004L11 46.2004L10.4 45.2004C7.9 41.1004 6.5 36.3004 6.5 31.5004C6.5 17.4004 17.9 6.00039 32.1 6.00039C38.9 6.00039 45.3 8.70039 50.1 13.5004C54.9 18.3004 57.6 24.8004 57.6 31.7004C57.8 46.0004 46.2 57.4004 32.1 57.4004ZM46.2 38.2004C45.4 37.8004 41.7 35.9004 40.8 35.8004C40.1 35.5004 39.5 35.4004 39.1 36.2004C38.7 37.0004 37.1 38.6004 36.7 39.2004C36.3 39.6004 35.9 39.8004 35 39.3004C34.2 38.9004 31.8 38.2004 28.8 35.4004C26.5 33.4004 24.9 30.9004 24.6 30.0004C24.2 29.2004 24.5 28.9004 25 28.4004C25.4 28.0004 25.8 27.6004 26.1 27.0004C26.5 26.6004 26.5 26.2004 26.9 25.7004C27.3 25.3004 27 24.7004 26.8 24.3004C26.5 23.9004 25.1 20.1004 24.4 18.5004C23.8 16.9004 23.1 17.2004 22.7 17.2004C22.3 17.2004 21.7 17.2004 21.3 17.2004C20.9 17.2004 19.9 17.3004 19.3 18.2004C18.6 19.0004 16.6 20.9004 16.6 24.7004C16.6 28.5004 19.3 32.0004 19.8 32.7004C20.2 33.1004 25.3 41.0004 32.9 44.4004C34.7 45.2004 36.1 45.7004 37.3 46.1004C39.1 46.7004 40.8 46.5004 42.1 46.4004C43.6 46.3004 46.6 44.6004 47.3 42.7004C47.9 41.0004 47.9 39.3004 47.7 39.0004C47.5 38.8004 46.9 38.5004 46.2 38.2004Z" />
              </svg>
            </button>
            <button
              className={`flex items-center justify-center text-2xl text-#1C2033 bg-transparent  rounded-full w-6 h-6 `}
              onClick={() => shareOnFacebook(url)}
            >
              <svg
                fill="#1C2033"
                width="35"
                height="35"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M36.2008 63.8002H28.4008C26.4008 63.8002 24.8008 62.1002 24.8008 60.0002V36.2002H18.4008C16.4008 36.2002 14.8008 34.5002 14.8008 32.4002V25.5002C14.8008 23.4002 16.4008 21.7002 18.4008 21.7002H24.6008V15.4002C24.6008 6.30019 30.0008 0.200195 38.0008 0.200195H44.0008C46.0008 0.200195 47.6008 1.9002 47.6008 4.0002V12.1002C47.6008 14.2002 46.0008 15.9002 44.0008 15.9002H39.9008C39.8008 15.9002 39.8008 15.9002 39.7008 15.9002C39.7008 16.0002 39.7008 16.1002 39.7008 16.2002V21.6002H45.4008C46.6008 21.7002 47.6008 22.2002 48.3008 23.0002C49.0008 23.9002 49.3008 25.1002 49.1008 26.2002L47.9008 33.0002C47.7008 34.8002 46.2008 36.1002 44.3008 36.1002H39.7008V60.0002C39.7008 62.0002 38.1008 63.8002 36.2008 63.8002ZM26.5008 32.7002C27.5008 32.7002 28.3008 33.5002 28.3008 34.5002V60.0002C28.3008 60.2002 28.4008 60.3002 28.4008 60.3002H36.2008C36.2008 60.3002 36.3008 60.2002 36.3008 60.0002V34.3002C36.3008 33.3002 37.1008 32.5002 38.1008 32.5002H44.4008C44.4008 32.5002 44.5008 32.5002 44.5008 32.4002V32.3002L45.7008 25.6002C45.7008 25.4002 45.7008 25.3002 45.6008 25.2002C45.6008 25.2002 45.5008 25.1002 45.4008 25.1002H38.0008C37.0008 25.1002 36.2008 24.3002 36.2008 23.3002V16.2002C36.2008 14.4002 36.5008 12.4002 39.9008 12.4002H44.0008C44.0008 12.4002 44.1008 12.3002 44.1008 12.1002V4.1002C44.1008 3.9002 44.0008 3.8002 44.0008 3.8002H38.1008C32.1008 3.8002 28.2008 8.4002 28.2008 15.5002V23.6002C28.2008 24.6002 27.4008 25.4002 26.4008 25.4002H18.4008C18.4008 25.4002 18.3008 25.5002 18.3008 25.7002V32.6002C18.3008 32.8002 18.4008 32.9002 18.4008 32.9002L26.5008 32.7002Z" />
              </svg>
            </button>
            <button
              className={`flex items-center justify-center text-2xl text-#1C2033 bg-transparent  rounded-full w-5 h-5`}
              onClick={() =>
                shareOnTwitter("El Herlado | Edición impresa", url)
              }
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 300 300"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
              </svg>
            </button>
            <button
              className={`flex items-center justify-center text-2xl text-#1C2033 bg-transparent rounded-full w-6 h-6`}
              onClick={() => navigator.clipboard.writeText(url)}
            >
              <svg
                fill="#1C2033"
                width="35"
                height="35"
                x="0px"
                y="0px"
                viewBox="0 0 64 64"
              >
                <path
                  d="M58.9,42.3l-8.1-8.1c-4.1-4.1-10.5-4.5-15.1-1.2l-4.8-4.8c1.4-1.9,2.2-4.2,2.2-6.7c0-3.1-1.2-6.1-3.4-8.3l-8.1-8.1
	c-4.5-4.5-11.9-4.5-16.5,0C3,7.4,1.8,10.3,1.8,13.4c0,3.1,1.2,6,3.4,8.2l8,8.1c2.3,2.3,5.3,3.4,8.2,3.4c2.2,0,4.3-0.6,6.2-1.8l5,5
	c-1.2,1.8-1.8,4-1.8,6.2c0,3.1,1.2,6,3.4,8.2l8,8.1c2.3,2.3,5.3,3.4,8.2,3.4c3,0,6-1.1,8.2-3.4c2.2-2.2,3.4-5.1,3.4-8.2
	C62.3,47.5,61.1,44.6,58.9,42.3z M16.4,26.5l-8-8.1c-1.4-1.4-2.1-3.2-2.1-5.1c0-1.9,0.7-3.7,2.1-5.1c1.4-1.4,3.2-2.1,5.1-2.1
	c1.8,0,3.7,0.7,5.1,2.1l8.1,8c1.3,1.4,2.1,3.2,2.1,5.1c0,1.3-0.3,2.4-0.9,3.5l-2.5-2.5c-0.9-0.9-2.3-0.9-3.2,0
	c-0.9,0.9-0.9,2.3,0,3.2l2.3,2.3C21.7,29.2,18.5,28.7,16.4,26.5z M55.6,55.6L55.6,55.6c-2.8,2.8-7.4,2.8-10.1,0l-8-8.1
	c-1.4-1.4-2.1-3.2-2.1-5.1c0-1,0.2-2,0.6-2.9l2.3,2.2c0.4,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7c0.9-0.9,0.9-2.3,0-3.2L39,36.3
	c1.1-0.6,2.3-0.9,3.5-0.9c1.8,0,3.7,0.7,5.1,2.1l8.1,8c1.3,1.4,2.1,3.2,2.1,5.1C57.7,52.5,57,54.3,55.6,55.6z"
                />
              </svg>
            </button>
          </nav>
        </div>
      </Modal>
    </>
  );
};
