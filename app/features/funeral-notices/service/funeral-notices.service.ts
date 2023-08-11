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
