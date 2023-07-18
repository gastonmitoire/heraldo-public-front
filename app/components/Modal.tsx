// modal component

import React from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="relative z-50 w-full max-w-3xl p-5 bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-0 right-0 z-50 flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-red-500 rounded-full"
              onClick={onClose}
            >
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
