import { createContext, use, useState } from "react";
import { usePublisherDetailsQuery } from "@amodeo/data/react-query/publishers/congregation/use-publisher-details-query";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { PublisherDetails } from "@amodeo/data/supabase/supabase-types";
import { useSelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";

const PublisherContext = createContext<
  PublisherDetailsWithDetailsToEdit | undefined
>(undefined);

type PublisherDetailsWithDetailsToEdit = PublisherDetails &
  ReturnType<typeof useProviderState>;

const initialState = {
  detailsToEdit: "" as "name",
};

const EDIT_PUBLISHER_FORM_ID = "edit-publisher-form";

const useProviderState = (publisher: PublisherDetails | undefined) => {
  const [{ detailsToEdit }, setState] = useState({
    ...initialState,
    ...publisher,
  });
  const { openModal, modalID } = useSelectModal(EDIT_PUBLISHER_FORM_ID);

  const openEditModal = ({
    detailsToEdit,
  }: {
    detailsToEdit: typeof initialState.detailsToEdit;
  }) => {
    setState({ detailsToEdit });
    openModal("Edit Publisher");
  };

  return {
    detailsToEdit,
    setState,
    openEditModal,
    modalID,
  };
};

export const PublisherDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { publisher_id } = useOrderlyPageParams("publisher_details");
  const { data } = usePublisherDetailsQuery(publisher_id);
  const providerState = useProviderState(data);

  if (!data) {
    return null;
  }

  const themeContextValue = {
    ...data,
    ...providerState,
  };

  return (
    <PublisherContext value={themeContextValue}>{children}</PublisherContext>
  );
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
