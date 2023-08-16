import { fetchClient } from "@/app/utils";

import { DocsWithPaginationProps } from "@/types";

export const fetchFuneralNotices = async () => {
  const response: DocsWithPaginationProps = await fetchClient(
    "/funeral-notices",
    {
      method: "GET",
    }
  );

  return response;
};

interface FetchFuneralNoticeByDateProps {
  date: string;
}

export const fetchFuneralNoticesByDate = async ({date}: FetchFuneralNoticeByDateProps ) => {
  const response: DocsWithPaginationProps = await fetchClient(
    `/funeral-notices/date/${date}`,
    {
      method: "GET",
    }
  );

  return response;
};