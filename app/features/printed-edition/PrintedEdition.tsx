// printed-edition component

import React from "react";

import { PrintedEditionModal } from "./PrintedEditionModal";

import { fetchPrintedEdition } from "./service/printed-edition.service";

export const PrintedEdition: React.FC = async () => {
  const { docs: currentPrintedEdition } = await fetchPrintedEdition();

  const currentPrintedEditionUrl = currentPrintedEdition[0].frontPage.url;

  return (
    <PrintedEditionModal currentPrintedEdition={currentPrintedEditionUrl} />
  );
};
