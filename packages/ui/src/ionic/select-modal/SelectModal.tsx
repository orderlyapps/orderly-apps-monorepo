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
};

export const useSelectModal = (id: string) => {
  const [modalState, setModalState] = useLocalStorage(
    `select-modal-[${id}]`,
    initialState
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

  const showToast = ({ toastMessage }: { toastMessage: string }) => {
    setModalState({ ...modalState, isToastOpen: true, toastMessage });
  };

  const closeToast = () => {
    setModalState({ ...modalState, isToastOpen: false });
  };

  const onSelect = async ({ alertMessage }: { alertMessage: string }) => {
    setModalState({ ...modalState, isAlertOpen: true, alertMessage });
  };

  return {
    ...modalState,
    openModal,
    closeModal,
    onSelect,
    onAlertDismissed,
    closeToast,
    showToast,
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
    closeModal,
    onAlertDismissed,
    closeToast,
    showToast,
    alertMessage,
    toastMessage,
    modalTitle,
    isModalOpen,
    isAlertOpen,
    isToastOpen,
  } = useSelectModal(id);

  const handleConfirm = async () => {
    const { successMessage, errorMessage } = await onSelect();
    showToast({ toastMessage: successMessage ?? errorMessage });
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
      ></IonAlert>
      <IonToast
        isOpen={isToastOpen}
        message={toastMessage}
        duration={1000}
        position="bottom"
        onDidDismiss={() => closeToast()}
      ></IonToast>
    </>
  );
};
