import { IonAlert, IonLoading } from "@ionic/react";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { useInsertStreetMutation } from "@amodeo/data/react-query/not-at-homes/use-insert-street-mutation";

export const NewStreetAlert = () => {
  const { confirmNewStreetAlert, addStreet, showNewStreetLoading, addSuburb } =
    useStore.use.notAtHomes();
  const { mutateAsync } = useInsertStreetMutation();
  const set = useStore.use.setStoreProperties();

  const handleDismiss = () => {
    set("notAtHomes", { confirmNewStreetAlert: false });
  };

  if (!addStreet) return null;
  if (!addSuburb) return null;

  const handleConfirm = async () => {
    set("notAtHomes", {
      confirmNewStreetAlert: false,
      showNewStreetLoading: true,
    });
    try {
      await mutateAsync({
        p_congregation_id: "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5",
        p_longitude: addStreet.longitude,
        p_latitude: addStreet.latitude,
        p_street_name: addStreet.street_name,
        p_suburb_id: addSuburb.id as number,
      });

      set("notAtHomes", {
        showNewStreetLoading: false,
        showNewStreetToast: true,
        newStreetToastMessage: `Street ${addStreet.street_name} added successfully`,
        newStreetToastColor: "success",
        accordionGroupValue: "closed",
        addStreet,
        searchNewStreet: false,
        streetSearchTerm: "",
      });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";

      // Check for specific Supabase error types if needed
      const isUniqueViolation = errorMessage.includes("duplicate key value");

      set("notAtHomes", {
        showNewStreetLoading: false,
        showNewStreetToast: true,
        newStreetToastColor: isUniqueViolation ? "warning" : "danger",
        newStreetToastMessage: isUniqueViolation
          ? `Street ${addStreet.street_name} already exists`
          : `Failed to add street ${addStreet.street_name}: ${errorMessage}`,
      });
    }
  };

  return (
    <>
      <IonAlert
        isOpen={confirmNewStreetAlert}
        onDidDismiss={handleDismiss}
        header="Confirm Street"
        message={`Are you sure you want to add ${addStreet.street_name}?`}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Add",
            handler: handleConfirm,
          },
        ]}
      />
      <IonLoading isOpen={showNewStreetLoading} spinner="dots"></IonLoading>
    </>
  );
};
