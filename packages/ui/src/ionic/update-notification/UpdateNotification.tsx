import { IonToast } from "@ionic/react";

const intervalMS = 1000 * 60 * 1.2; //60 //1.2 minutes

export function UpdateNotification({ useRegisterSW }: { useRegisterSW: any }) {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: any) {
      r &&
        setInterval(() => {
          r.update();
        }, intervalMS);
    },
    onRegisterError(error: Error) {
      console.log("SW registration error", error);
    },
  });

  const closeToast = () => {
    setNeedRefresh(false);
  };

  const handleUpdate = () => {
    updateServiceWorker();
  };

  return (
    <IonToast
      isOpen={needRefresh}
      message="New version available"
      position="bottom"
      buttons={[
        {
          text: "Update now",
          role: "confirm",
          handler: handleUpdate,
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: closeToast,
        },
      ]}
    />
  );
}
