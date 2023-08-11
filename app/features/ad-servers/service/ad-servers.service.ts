import { fetchClient } from "@/app/utils";

import { DocsWithPaginationProps, AdServerProps } from "@/types";

export enum AdServerPositions {
  fullScreen = "full_screen",
  footer = "footer",
  right = "right",
  sticky1 = "sticky_1",
  sticky2 = "sticky_2",
  sticky3 = "sticky_3",
  sticky4 = "sticky_4",
  sticky5 = "sticky_5",
  netblock1 = "netblock_1",
  netblock2 = "netblock_2",
  netblock3 = "netblock_3",
  netblock4 = "netblock_4",
  netblock5 = "netblock_5",
  netblock6 = "netblock_6",
  netblock7 = "netblock_7",
  netblock8 = "netblock_8",
  netblock9 = "netblock_9",
  netblock10 = "netblock_10",
  netblock11 = "netblock_11",
  netblock12 = "netblock_12",
  netblock13 = "netblock_13",
  netblock14 = "netblock_14",
  horizontal1 = "horizontal_1",
  horizontal2 = "horizontal_2",
  horizontal3 = "horizontal_3",
  horizontal4 = "horizontal_4",
  horizontal5 = "horizontal_5",
  horizontal6 = "horizontal_6",
  horizontal7 = "horizontal_7",
  horizontal8 = "horizontal_8",
  horizontal9 = "horizontal_9",
  horizontal10 = "horizontal_10",
  horizontal11 = "horizontal_11",
}

interface FetchAdServerProps {
  position: AdServerPositions;
}

export const fetchAdServer = async ({ position }: FetchAdServerProps) => {
  let url = "";

  if (position) {
    url = `/position/${position}`;
  }

  const finalUrl = `/ad-servers${url}`;

  const response: DocsWithPaginationProps = await fetchClient(finalUrl, {
    method: "GET",
  });

  return response;
};
