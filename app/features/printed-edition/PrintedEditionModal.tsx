import React from "react";

import { Modal } from "@/app/components/Modal";
import { SocialMediaShareLinks } from "@/app/components/SocialMediaShareLinks";

import { zoom } from "../../utils/index";

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
            backgroundImage: `url(${url})`,
          }}
          className="w-full bg-cover bg-center overflow-hidden hover:pb-20 hover:h-full hover:w-[1000px] relative cursor-zoom-in group"
          onMouseMove={(e) => zoom(e)}
        >
          <img
            src={url}
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
