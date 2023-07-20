import React from "react";

import { Modal } from "@/app/components/Modal";
import { SocialMediaShareLinks } from "@/app/components/SocialMediaShareLinks";

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
      <div className="max-h-screen flex flex-col overflow-auto">
        <img
          src="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/ediciones_impresas/2023/07/20_200723.jpg"
          alt=""
          className="h-[90vh] w-full mx-auto hover:scale-105 transition-all duration-300 ease-in-out"
        />

        {/* social links (copy link, facebook, twitter, whatsApp) */}
        <SocialMediaShareLinks title="titulo" url="https://www.elheraldo.co" />
      </div>
    </Modal>
  );
};
