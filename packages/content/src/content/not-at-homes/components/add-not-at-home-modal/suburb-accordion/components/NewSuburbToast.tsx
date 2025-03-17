import { IonToast } from "@ionic/react";
import { useStore } from "@amodeo/data/zustand/stores/use-store";

export function NewSuburbToast() {
  const { isNewSuburbToastOpen, newSuburbToastMessage, newSuburbToastColor } =
    useStore.use.notAtHomes();
  const set = useStore.use.setStoreProperties();

  const handleDismiss = () => {
    set("notAtHomes", { isNewSuburbToastOpen: false });
  };

  return (
    <>
      <IonToast
        isOpen={isNewSuburbToastOpen}
        onDidDismiss={handleDismiss}
        message={newSuburbToastMessage}
        color={newSuburbToastColor}
        duration={2000}
      />
    </>
  );
}
