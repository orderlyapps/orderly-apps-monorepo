import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { IonToast } from "@ionic/react";

export function NewStreetToast() {
  const { showNewStreetToast, newStreetToastMessage, newStreetToastColor } =
    useStore.use.notAtHomes();
  const set = useStore.use.setStoreProperties();

  const handleDismiss = () => {
    set("notAtHomes", { showNewStreetToast: false });
  };

  return (
    <>
      <IonToast
        isOpen={showNewStreetToast}
        onDidDismiss={handleDismiss}
        message={newStreetToastMessage}
        color={newStreetToastColor}
        duration={2000}
      />
    </>
  );
}
