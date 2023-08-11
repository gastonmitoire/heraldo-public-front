// adserver component

import * as React from "react";

import { AdServerProps } from "@/types";

import { Banner } from "@/app/components/Banner";

import { fetchAdServer, AdServerPositions } from "./service/ad-servers.service";

interface AdServerComponentProps {
  position: AdServerPositions;
  sticky?: boolean;
}

export const AdServerComponent: React.FC<AdServerComponentProps> = async ({
  position,
  sticky,
}) => {
  const { docs: adServers } = await fetchAdServer({
    position,
  });

  const adServer = adServers[0] as AdServerProps;

  return (
    <div className="adserver">
      {adServer && <Banner banner={adServer} sticky={sticky} />}
    </div>
  );
};
