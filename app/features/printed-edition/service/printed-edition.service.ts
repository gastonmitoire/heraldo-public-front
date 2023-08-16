import { fetchClient } from "@/app/utils";

interface FetchPrintedEditionByDate {
  date: string;
}

export const fetchPrintedEditionByDate = async ({
  date,
}: FetchPrintedEditionByDate) => {
  const url = `/print-editions/date/${date}`;

  const response = await fetchClient(url, {
    method: "GET",
  });

  return response;
};

// PRINTED EDITION ENDPOINTS
export const fetchPrintedEdition = async () => {
  const url = "/print-editions";

  const response = await fetchClient(url, {
    method: "GET",
  });

  return response;
};
