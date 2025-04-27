import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonAlert,
  IonToast,
} from "@ionic/react";
import { useLocalStorage } from "usehooks-ts";

const initialState = {
  isModalOpen: false,
  isAlertOpen: false,
  isToastOpen: false,
  toastMessage: "",
  alertMessage: "",
};

export const useSelectModal = (id: string) => {
  const [modalState, setModalState] = useLocalStorage(id, initialState);

  const openModal = () => {
    setModalState({ ...modalState, isModalOpen: true });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isModalOpen: false });
  };

  const onAlertDismissed = () => {
    setModalState({ ...modalState, isAlertOpen: false });
  };

  const showToast = ({ toastMessage }: { toastMessage: string }) => {
    setModalState({ ...modalState, isToastOpen: true, toastMessage });
  };

  const closeToast = () => {
    setModalState({ ...modalState, isToastOpen: false });
  };

  const onSelect = async ({ alertMessage }: { alertMessage: string }) => {
    setModalState({ ...modalState, isAlertOpen: true, alertMessage });
  };

  const alertMessage = modalState.alertMessage;
  const toastMessage = modalState.toastMessage;

  return {
    modalState,
    openModal,
    closeModal,
    onSelect,
    onAlertDismissed,
    closeToast,
    alertMessage,
    showToast,
    toastMessage,
  };
};

type SelectModalProps = {
  modalProps: ModalProps;
  id: string;
  children: React.ReactNode;
  onSelect: () => Promise<
    | {
        successMessage: string;
        errorMessage: null;
      }
    | {
        successMessage: null;
        errorMessage: string;
      }
  >;
};

export const SelectModal = ({
  modalProps,
  id,
  children,
  onSelect,
}: SelectModalProps) => {
  const {
    modalState,
    closeModal,
    onAlertDismissed,
    closeToast,
    showToast,
    alertMessage,
    toastMessage,
  } = useSelectModal(id);

  const handleConfirm = async () => {
    const { successMessage, errorMessage } = await onSelect();
    showToast({ toastMessage: successMessage ?? errorMessage });
  };

  return (
    <>
      <IonModal {...modalProps} isOpen={modalState.isModalOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{"title"}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeModal}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>{children}</IonContent>
      </IonModal>
      <IonAlert
        isOpen={modalState.isAlertOpen}
        message={alertMessage}
        buttons={[
          { text: "Close", role: "cancel" },
          { text: "Confirm", handler: handleConfirm, role: "destructive" },
        ]}
        onDidDismiss={onAlertDismissed}
      ></IonAlert>
      <IonToast
        isOpen={modalState.isToastOpen}
        message={toastMessage}
        duration={1000}
        position="bottom"
        onDidDismiss={() => closeToast()}
      ></IonToast>
    </>
  );
};
