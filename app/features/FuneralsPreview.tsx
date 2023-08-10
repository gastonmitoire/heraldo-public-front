// funerals preview component

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FuneralNoticeProps } from "@/types";

import { FuneralsSwiper } from "./FuneralsSwiper";
import { Heading } from "../components/Heading";

interface Props {
  funerals: FuneralNoticeProps[];
}

export const FuneralsPreview: React.FC<Props> = ({ funerals }) => {
  return (
    <div className="flex flex-col">
      <Heading title="Avisos fúnebres" link="funebres" />
      <div>
        <FuneralsSwiper funerals={funerals.slice(0, 5)} />
      </div>
    </div>
  );
};
