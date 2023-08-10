"use client";
import { useEffect, useState } from "react";
import { FuneralNoticeProps } from "@/types";
import { fetchFuneralNotices } from "@/app/service/app.service";
import dynamic from "next/dynamic";

const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  { ssr: false }
);

const DeceasedInfo = ({ deceased }: { deceased: FuneralNoticeProps }) => {
  const [dataInputs, setDataInputs] = useState<FuneralNoticeProps[]>([]);

  console.log(process.env.NEXT_PUBLIC_API_URL);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFuneralNotices({ deceased: deceased.title });
      setDataInputs(data);
    };
    fetchData();
  }, [deceased]);

  return (
    <div className="flex justify-center items-center flex-col gap-3 bg-white p-5">
      <h2 className="text-black text-sm md:text-base font-bold text-center ">
        {deceased.title}
      </h2>
      <p className="text-black text-sm md:text-base "> {deceased.deceased}</p>
      <p className="text-black text-sm md:text-base ">
        Avisos fúnebres relacionados:
      </p>
      {dataInputs?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 mx-auto mt-3 max-h-[550px] items-center justify-center "
        >
          <p className="border-b-2 border-black border-opacity-30 pb-5 ">
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DeceasedInfo;
