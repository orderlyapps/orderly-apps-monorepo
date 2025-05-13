import { createContext, use } from "react";
import { usePublisherDetailsQuery } from "@amodeo/data/react-query/publishers/congregation/use-publisher-details-query";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { PublisherDetails } from "@amodeo/data/supabase/supabase-types";

const PublisherContext = createContext<PublisherDetails | undefined>(undefined);

export const PublisherDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { publisher_id } = useOrderlyPageParams("publisher_details");
  const { data } = usePublisherDetailsQuery(publisher_id);

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
