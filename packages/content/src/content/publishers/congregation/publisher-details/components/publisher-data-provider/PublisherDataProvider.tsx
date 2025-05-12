import { createContext, use } from "react";
import { usePublisherQuery } from "@amodeo/data/react-query/publishers/congregation/use-publisher-query";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";

export type PublisherData = {
  id: string;
  first_name: string;
  last_name: string;
};

const PublisherContext = createContext<PublisherData | undefined>(undefined);

export const PublisherDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { publisher_id } = useOrderlyPageParams("publisher_details");
  const { data } = usePublisherQuery(publisher_id);

  if (!data) {
    return null;
  }

  return <PublisherContext value={data}>{children}</PublisherContext>;
};

export const usePublisherData = () => {
  const data = use(PublisherContext);

  if (!data) {
    throw new Error(
      "usePublisherData must be used within a PublisherDataProvider"
    );
  }

  return data;
};
