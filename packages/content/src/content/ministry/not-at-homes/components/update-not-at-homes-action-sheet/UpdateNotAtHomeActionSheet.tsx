import { useDeleteNotAtHomeMutation } from "@amodeo/data/react-query/not-at-homes/use-delete-not-at-home-mutation";
import { useUpdateNotAtHomesMutation } from "@amodeo/data/react-query/not-at-homes/use-update-not-at-homes-mutation";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { IonActionSheet } from "@ionic/react";

export function UpdateNotAtHomeActionSheet({}) {
  const { isUpdateNotAtHomesActionSheetOpen, selectedAddress } =
    useStore.use.notAtHomes();
  const toggleUpdateNotAtHomesActionSheetOpen =
    useStore.use.toggleUpdateNotAtHomesActionSheetOpen();

  const { mutateAsync: deleteNotAtHome } = useDeleteNotAtHomeMutation();
  const { mutateAsync: updateNotAtHome } = useUpdateNotAtHomesMutation();

  if (!selectedAddress) {
    return null;
  }

  const handleDelete = async () => {
    try {
      deleteNotAtHome(selectedAddress.id);
    } catch (e) {}
  };

  const handleLetterList = async () => {
    try {
      updateNotAtHome({
        id: selectedAddress.id,
        returned: !selectedAddress.returned,
      } as any);
    } catch (e) {}
  };

  return (
    <IonActionSheet
      isOpen={isUpdateNotAtHomesActionSheetOpen}
      header={`${selectedAddress.unit_number ? `${selectedAddress.unit_number}/` : ""}${selectedAddress.house_number} ${selectedAddress.street}, ${selectedAddress.suburb}`}
      className="action-sheet-jw-blue"
      buttons={[
        {
          text: "Delete",
          role: "destructive",
          data: {
            action: "delete",
          },
          handler: handleDelete,
        },
        {
          text: `Send to ${selectedAddress.returned ? "Return List" : "Letter List"}`,
          data: {
            action: "share",
          },
          handler: handleLetterList,
        },
        {
          text: "Cancel",
          role: "cancel",
          data: {
            action: "cancel",
          },
        },
      ]}
      onDidDismiss={toggleUpdateNotAtHomesActionSheetOpen}
    ></IonActionSheet>
  );
}
