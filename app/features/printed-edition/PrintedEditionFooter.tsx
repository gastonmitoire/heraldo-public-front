"use client";

import React, { useState } from "react";

import { PrintedEditionModal } from "./PrintedEditionModal";
import { PrintedEditionProps } from "@/types";

interface PrintedEditionFooterProps {
  printedEdition: PrintedEditionProps;
}

export const PrintedEditionFooter: React.FC<PrintedEditionFooterProps> = ({
  printedEdition,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="hidden xl:flex"
        onClick={() => setOpen(true)}
      >
        Ver tapa del día
      </button>

      <PrintedEditionModal
        open={open}
        onClose={() => setOpen(false)}
        currentPrintedEdition={printedEdition}
      />
    </>
  );
};
