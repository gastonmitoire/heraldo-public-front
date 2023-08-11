// PRINTED EDITION ENDPOINTS
export const fetchPrintedEdition = async () => {
  const url = process.env.API_URL + "/print-editions";

  const response = await fetch(url, {
    method: "GET",
  });

  return response.json();
};
