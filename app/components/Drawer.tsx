// drawer component

import React from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ open, onClose, children }) => {
  return open ? (
    <div className="fixed top-0 w-full h-screen z-50" onClick={onClose}>
      {children}
    </div>
  ) : null;
};
