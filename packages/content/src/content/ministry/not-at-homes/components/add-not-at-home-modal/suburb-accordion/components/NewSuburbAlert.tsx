import { IonAlert, IonLoading } from "@ionic/react";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { useInsertSuburb_2Mutation } from "@amodeo/data/react-query/not-at-homes/use-insert-suburb-2-mutation";

export const NewSuburbAlert = () => {
  const { isNewSuburbAlertOpen, addSuburb, isNewSuburbLoading } =
    useStore.use.notAtHomes();
  const { mutateAsync } = useInsertSuburb_2Mutation();
  const set = useStore.use.setStoreProperties();

  if (!addSuburb) return null;

  const handleDismiss = () => {
    set("notAtHomes", { isNewSuburbAlertOpen: false });
  };

  const handleConfirm = async () => {
    set("notAtHomes", {
      isNewSuburbAlertOpen: false,
      isNewSuburbLoading: true,
    });

    try {
      await mutateAsync(addSuburb);
      set("notAtHomes", {
        isNewSuburbLoading: false,
        isNewSuburbToastOpen: true,
        newSuburbToastMessage: `Suburb ${addSuburb.name} added successfully`,
        newSuburbToastColor: "success",
        accordionGroupValue: "street",
        addSuburb,
        addStreet: undefined,
        searchNewSuburb: false,
        suburbSearchTerm: "",
      });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";

      // Check for specific Supabase error types if needed
      const isUniqueViolation = errorMessage.includes("duplicate key value");

      set("notAtHomes", {
        isNewSuburbLoading: false,
        isNewSuburbToastOpen: true,
        newSuburbToastColor: isUniqueViolation ? "warning" : "danger",
        newSuburbToastMessage: isUniqueViolation
          ? `Suburb ${addSuburb.name} already exists`
          : `Failed to add suburb ${addSuburb.name}: ${errorMessage}`,
      });
    }
  };

  return (
    <>
      <IonAlert
        isOpen={isNewSuburbAlertOpen}
        onDidDismiss={handleDismiss}
        header="Confirm Suburb"
        message={`Are you sure you want to add ${addSuburb?.name}?`}
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
      <IonLoading isOpen={isNewSuburbLoading} spinner="dots"></IonLoading>
    </>
  );
};
