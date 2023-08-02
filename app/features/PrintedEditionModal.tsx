import React from "react";

import { Modal } from "@/app/components/Modal";
import { SocialMediaShareLinks } from "@/app/components/SocialMediaShareLinks";

import { zoom } from "../utils/index";

interface PrintedEditionModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export const PrintedEditionModal: React.FC<PrintedEditionModalProps> = ({
  isOpen,
  onClose,
  url,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col max-h-screen hover:pt-5">
        <figure
          style={{
            backgroundImage: `url(https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/ediciones_impresas/2023/07/20_200723.jpg)`,
          }}
          className="w-full bg-cover bg-center overflow-hidden hover:pb-20 hover:h-full hover:w-[1000px] relative cursor-zoom-in group"
          onMouseMove={(e) => zoom(e)}
        >
          <img
            src="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/ediciones_impresas/2023/07/20_200723.jpg"
            alt=""
            className="h-[90vh] w-full mx-auto group-hover:opacity-0 transition-opacity duration-300"
          />
        </figure>
        {/* social links (copy link, facebook, twitter, whatsApp) */}
        <SocialMediaShareLinks title="titulo" url="https://www.elheraldo.com" />
      </div>
    </Modal>
  );
};
