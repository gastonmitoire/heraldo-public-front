"use client";
import { useEffect, useState } from "react";
import CardFuneralNotice from "@/app/components/CardFuneralNotice";
import { Banner } from "@/app/components/Banner";
import {
  FuneralNoticeProps,
  AdServerProps,
  DocsWithPaginationProps,
} from "@/types";
import { fetchFuneralNoticesByDate } from "@/app/features/funeral-notices/service/funeral-notices.service";

const FuneralNoticesContent = ({
  funeralNotices,
  bannerSticky2,
}: {
  funeralNotices: FuneralNoticeProps[];
  bannerSticky2: AdServerProps[];
}) => {
  const [newsToday, setNewsToday] = useState<FuneralNoticeProps[]>([]);
  const [inputDate, setInputDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [inputSearch, setInputSearch] = useState<string>("");

  //const InputDate = new Date().toISOString().split("T")[0];
  useEffect(() => {
    const fetchFuneralNoticeByDate = async () => {
      const dateFuneralNotice: DocsWithPaginationProps =
        await fetchFuneralNoticesByDate({ date: inputDate });
      setNewsToday(dateFuneralNotice.docs);
    };
    fetchFuneralNoticeByDate();
  }, [funeralNotices, inputDate]);

  useEffect(() => {
    const filterNews = funeralNotices.filter((notice) => {
      return notice.title.toLowerCase().includes(inputSearch.toLowerCase());
    });

    setNewsToday(filterNews);
  }, [inputSearch, funeralNotices]);

  const handleChangeDate = (e: any) => {
    setInputDate(e.target.value);
  };

  const handleChangeSearch = (e: any) => {
    setInputSearch(e.target.value);
  };

  return (
    <>
      <header className="w-full flex flex-col items-start gap-4 md:flex-row md:justify-between">
        <h1 className="font-bold text-2xl">Avisos Fúnebres de hoy</h1>

        <article className="flex flex-col gap-8 sm:flex-row sm:gap-4 sm:items-center">
          <div className="relative max-w-[314px]">
            <label htmlFor="input_search" className="w-full py-3 bg-WhiteSmoke">
              <input
                type="text"
                id="input_search"
                name="input_search"
                placeholder="Buscar"
                value={inputSearch}
                onChange={handleChangeSearch}
                className="w-full h-full pl-2 bg-[transparent] outline-none placeholder-black"
              />
            </label>
            <div className="absolute top-0 right-2 text-lg">
              <i className="lni lni-search-alt"></i>
            </div>
          </div>

          <div className="relative max-w-[314px]">
            <label htmlFor="input_date" className="w-full py-3 bg-WhiteSmoke">
              <input
                type="date"
                id="input_date"
                name="input_date"
                placeholder="Filtrar por fecha"
                value={inputDate}
                onChange={handleChangeDate}
                className="w-full h-full px-2 bg-[transparent] outline-none"
              />
            </label>
          </div>
        </article>
      </header>
      <article className="w-full flex items-start justify-start gap-4 px-2 xl:px-4">
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-3">
          <article className="col-span-3 grid grid-cols-3 gap-3">
            {!newsToday.length && (
              <p className="col-span-3 text-center">
                No hay avisos cargados para el día de hoy.
              </p>
            )}
            {newsToday?.map((notice) => (
              <CardFuneralNotice key={notice._id} deceased={notice} />
            ))}
          </article>
          <aside className="flex-col hidden xl:flex">
            {/* BANNER */}
            <div className="min-h-[900px] max-h-[1100px]">
              <Banner
                banner={{
                  title: bannerSticky2[0]?.title,
                  site: bannerSticky2[0]?.site,
                  url: bannerSticky2[0]?.url,
                  desktopImage: bannerSticky2[0]?.desktopImage,
                  mobileImage: bannerSticky2[0]?.mobileImage,
                }}
                className="max-h-[600px] max-w-[300px] flex justify-center object-contain px-5"
                sticky
                border
              />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
};

export default FuneralNoticesContent;
