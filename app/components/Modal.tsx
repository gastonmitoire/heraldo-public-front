import React from "react";

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  topAction?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  maxWidth?: string;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  topAction,
  isOpen,
  onClose,
  maxWidth,
  className,
}) => {
  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-[100vh] bg-black bg-opacity-50">
      <div
        className={`w-full p-1 bg-white rounded-lg shadow-lg ${
          className ? className : ""
        } ${maxWidth ? maxWidth : "max-w-2xl"}`}
      >
        <nav className="relative flex items-center justify-between px-3 w-full h-10">
          <h2 className="flex-auto hidden md:block text-xl font-bold text-#1C2033">
            {title}
          </h2>

          <span className="flex-1 md:flex-auto flex items-center justify-between md:justify-end gap-3 bg-orange-300">
            {topAction}
            <button
              type="button"
              className="rounded-md"
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
          </span>
        </nav>
        {children}
      </div>
    </div>
  ) : null;
};
