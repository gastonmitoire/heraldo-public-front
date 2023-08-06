// currency and river component

import React from "react";

import { CurrencyAndRiverSwiper } from "./CurrencyAndRiverSwiper";

async function fetchDataCurrency() {
  const res = await fetch(`https://www.dolarsi.com/api/api.php?type=dolar`);
  const res2 = await fetch(
    `https://www.dolarsi.com/api/api.php?type=cotizador`
  );

  if (!res.ok || !res2.ok) {
    console.log("error");
    return;
  }

  const data = await res.json();

  const data2 = await res2.json();

  return [
    ...data.filter(
      (curr: any) =>
        curr.casa?.nombre.includes("Oficial") ||
        curr.casa?.nombre?.includes("Blue")
    ),
    ...data2.filter(
      (curr: any) =>
        curr.casa?.nombre.includes("Peso Uruguayo") ||
        curr.casa?.nombre?.includes("Real")
    ),
  ];
}

export const CurrencyAndRiver: React.FC = async () => {
  // Currency & River Calls
  const dataCurrency = await fetchDataCurrency();
  return (
    <div className="flex flex-col">
      <CurrencyAndRiverSwiper dataCurrency={dataCurrency} dataRiver={[]} />
    </div>
  );
};
