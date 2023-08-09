import React from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  maxWidth?: string;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  maxWidth,
  className
}) => {
  return isOpen ? (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-[100vh] overflow-y-hidden bg-black bg-opacity-50"
    >
      <div
        className={`${className ? className: ''} relative w-full p-3 bg-white rounded-lg shadow-lg ${
          maxWidth ? maxWidth : "max-w-2xl"
        }`}
      >
        <button
          className="absolute top-0 right-0 z-50 flex items-center justify-center w-5 h-5 text-2xl font-bold text-white bg-red-500 rounded-full"
          onClick={onClose}
        >
          &times;
        </button>
      {children}
      </div>
    </div>
  ) : null;
};
