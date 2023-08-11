import { fetchClient } from "@/app/utils";

// PRINTED EDITION ENDPOINTS
export const fetchPrintedEdition = async () => {
  const url = "/print-editions";

  const response = await fetchClient(url, {
    method: "GET",
  });

  return response;
};
