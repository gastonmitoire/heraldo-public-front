"use client";
import { useState } from "react";
import Image from "next/image";
import { FuneralNoticeProps } from "@/types";
import { Modal } from "./Modal";
import DeceasedInfo from "./DeceasedInfo";

const CardFuneralNotice = ({ deceased }: { deceased: FuneralNoticeProps }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section>
      <button
        className="min-w-[215px] h-[120px] w-[350px] bg-black flex items-center justify-start gap-1 border-r-2 border-black border-opacity-50 relative cursor-pointer transition-all duration-300"
        onClick={handleOpenModal}
      >
        <div className="w-[50px] h-full   flex items-center justify-center px-3 mx-2">
          <figure className="w-[27px] h-[43px] flex items-center ">
            <Image
              src={"/images/imgCrossFuneralNotice.svg"}
              alt="imagen cruz"
              className="w-100 h-100"
              width={27}
              height={43}
            />
          </figure>
        </div>
        <div className="flex w-full text-center justify-center items-center px-5">
          <h2 className="text-white text-sm md:text-base ">{deceased.title}</h2>
        </div>
      </button>
      {openModal && (
        <Modal
          isOpen={openModal}
          onClose={handleCloseModal}
          className={
            "min-w-[90%] md:min-w-[500px] max-h-[80%] max-w-[500px]  overflow-y-auto rounded-none "
          }
        >
          <div className="flex justify-center items-center flex-col gap-3 bg-white p-5">
            <Image
              src={"/images/imgCrossFuneralNoticeBlack.svg"}
              alt="imagen cruz"
              className="w-100 h-100"
              width={27}
              height={43}
            />
            <DeceasedInfo deceased={deceased} />
          </div>
        </Modal>
      )}
    </section>
  );
};

export default CardFuneralNotice;
