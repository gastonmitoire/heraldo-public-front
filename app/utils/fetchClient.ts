export const fetchClient = (url: string, options: any): Promise<any> => {
  return fetch(process.env.API_URL + url, options)
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
};
