// PRINTED EDITION ENDPOINTS
export const fetchPrintedEdition = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL + "/print-editions";

  const response = await fetch(url, {
    method: "GET",
  });

  return response.json();
};
