// currency and river component

import React from "react";

import { CurrencyAndRiverSwiper } from "./CurrencyAndRiverSwiper";

async function fetchDataCurrency() {
  const res = await fetch(`https://www.dolarsi.com/api/api.php?type=dolar`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const res2 = await fetch(`https://www.dolarsi.com/api/api.php?type=cotizador`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  if (res.status === "error" || res2.status === "error") {
    return [];
  }

  return [
    ...res.filter(
      (curr: any) =>
        curr.casa?.nombre.includes("Oficial") ||
        curr.casa?.nombre?.includes("Blue")
    ),
    ...res2.filter(
      (curr: any) =>
        curr.casa?.nombre.includes("Peso Uruguayo") ||
        curr.casa?.nombre?.includes("Real")
    ),
  ];
}

export const CurrencyAndRiver: React.FC = async () => {
  // Currency & River Calls
  const dataCurrency = await fetchDataCurrency();

  if (dataCurrency.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-5">
      <span className="col-start-2 col-end-5">
        <CurrencyAndRiverSwiper dataCurrency={dataCurrency} dataRiver={[]} />
      </span>
    </div>
  );
};
