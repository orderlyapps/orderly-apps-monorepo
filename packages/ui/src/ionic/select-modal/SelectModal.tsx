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
  modalTitle: "",
  closeOnSuccess: false,
};

export const useSelectModal = (modalID: string) => {
  const [modalState, setModalState] = useLocalStorage(
    `modal-[${modalID}]`,
    {...initialState, modalID},
    { initializeWithValue: false }
  );

  const openModal = (modalTitle: string) => {
    setModalState({ ...modalState, modalTitle, isModalOpen: true });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isModalOpen: false });
  };

  const onAlertDismissed = () => {
    setModalState({ ...modalState, isAlertOpen: false });
  };

  const showToast = ({
    toastMessage,
    closeOnSuccess,
  }: {
    toastMessage: string;
    closeOnSuccess: boolean;
  }) => {
    setModalState({
      ...modalState,
      isToastOpen: true,
      toastMessage,
      closeOnSuccess,
    });
  };

  const onToastClose = () => {
    setModalState({
      ...modalState,
      isToastOpen: false,
      isModalOpen: !modalState.closeOnSuccess,
    });
  };

  const onSelect = ({ alertMessage }: { alertMessage: string }) => {
    setModalState({ ...modalState, isAlertOpen: true, alertMessage });
  };

  return {
    ...modalState,
    openModal,
    closeModal,
    onSelect,
    onAlertDismissed,
    onToastClose,
    showToast,
  };
};

type SelectModalProps = {
  modalProps: ModalProps;
  modalID: string;
  children: React.ReactNode;
  onSelect: () => Promise<
    | {
        successMessage: string;
        errorMessage: null;
        closeOnSuccess: boolean;
      }
    | {
        successMessage: null;
        errorMessage: string;
        closeOnSuccess: boolean;
      }
  >;
};

export const SelectModal = ({
  modalProps,
  modalID,
  children,
  onSelect,
}: SelectModalProps) => {
  const {
    closeModal,
    onAlertDismissed,
    onToastClose,
    showToast,
    alertMessage,
    toastMessage,
    modalTitle,
    isModalOpen,
    isAlertOpen,
    isToastOpen,
  } = useSelectModal(modalID);

  const handleConfirm = async () => {
    const { successMessage, errorMessage, closeOnSuccess } = await onSelect();
    showToast({
      toastMessage: successMessage ?? errorMessage,
      closeOnSuccess: !!successMessage && closeOnSuccess,
    });
  };

  return (
    <>
      <IonModal {...modalProps} isOpen={isModalOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{modalTitle}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeModal}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>{children}</IonContent>
      </IonModal>

      <IonAlert
        isOpen={isAlertOpen}
        message={alertMessage}
        buttons={[
          { text: "Close", role: "cancel" },
          { text: "Confirm", handler: handleConfirm, role: "destructive" },
        ]}
        onDidDismiss={onAlertDismissed}
      />

      <IonToast
        isOpen={isToastOpen}
        message={toastMessage}
        duration={1000}
        position="top"
        onDidDismiss={onToastClose}
        onWillPresent={() => console.log("Toast will present")}
      />
    </>
  );
};
