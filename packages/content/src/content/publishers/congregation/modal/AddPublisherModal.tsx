import { SelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { useNewPublisherForm } from "../hooks/use-new-publisher-form.js";
import { IonButton, IonInput, IonItem, IonList } from "@ionic/react";
import { useInsertPublisherMutation } from "@amodeo/data/react-query/publishers/congregation/use-insert-publisher-mutation";
import { tryCatch } from "@amodeo/util/errors/try-catch";

type AddPublisherModalProps = {
  modalProps: ModalProps;
};

export const AddPublisherModal = ({ modalProps }: AddPublisherModalProps) => {
  const {
    modalID,
    setFirstName,
    setLastName,
    addNewPublisher,
    first_name,
    last_name,
  } = useNewPublisherForm();

  const { mutateAsync } = useInsertPublisherMutation();

  const onSelect = async () => {
    const result = await tryCatch(mutateAsync({ first_name, last_name }));

    if (result.error) {
      return {
        successMessage: null,
        errorMessage: result.error.message,
        closeOnSuccess: false,
      };
    }

    return {
      successMessage: "Publisher added",
      errorMessage: null,
      closeOnSuccess: true,
    };
  };
  return (
    <SelectModal modalProps={modalProps} id={modalID} onSelect={onSelect}>
      <IonList inset>
        <IonItem>
          <IonInput
            label="First Name"
            placeholder="Enter First Name"
            onIonChange={(e) => setFirstName(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonInput
            label="Last Name"
            placeholder="Enter Last Name"
            onIonChange={(e) => setLastName(e.detail.value!)}
          />
        </IonItem>

        <IonButton
          expand="block"
          className="ion-margin-top"
          onClick={() => {
            addNewPublisher();
          }}
        >
          Submit
        </IonButton>
      </IonList>
    </SelectModal>
  );
};
