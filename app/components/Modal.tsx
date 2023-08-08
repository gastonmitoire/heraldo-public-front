import React from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  maxWidth,
}) => {
  return isOpen ? (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-[100vh] bg-black bg-opacity-50"
    >
      <div
        className={`relative w-full p-1 bg-white rounded-lg shadow-lg ${
          maxWidth ? maxWidth : "max-w-2xl"
        }`}
      >
        <button
          type="button"
          className="absolute top-0 right-0 inline-flex items-center justify-center p-2 rounded-md text-gray-400"
          aria-label="Close menu"
          aria-expanded="true"
          onClick={onClose}
        >
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-500"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  ) : null;
};
