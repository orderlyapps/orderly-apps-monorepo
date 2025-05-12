import { SelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { useNewVisitingSpeakerForm } from "../hooks/use-new-visiting-speaker-form.js";
import {
  IonButton,
  IonInput,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useCongregationsQuery } from "@amodeo/data/react-query/publishers/visiting-speakers/use-congregations-query";
import { useInsertVisitingSpeakerMutation } from "@amodeo/data/react-query/publishers/visiting-speakers/use-insert-visiting-speaker-mutation";
import { tryCatch } from "@amodeo/util/errors/try-catch";

type AddVisitingSpeakerModalProps = {
  modalProps: ModalProps;
};

export const AddVisitingSpeakerModal = ({
  modalProps,
}: AddVisitingSpeakerModalProps) => {
  const {
    first_name,
    last_name,
    congregation_id,
    modalID,
    setFirstName,
    setLastName,
    addNewVisitingSpeaker,
    setCongregation,
  } = useNewVisitingSpeakerForm();

  const { data: congregations } = useCongregationsQuery();

  const { mutateAsync } = useInsertVisitingSpeakerMutation();

  const onSelect = async () => {
    const result = await tryCatch(
      mutateAsync({ first_name, last_name, congregation_id })
    );

    if (result.error) {
      return {
        successMessage: null,
        errorMessage: result.error.message,
        closeOnSuccess: false,
      };
    }

    return {
      successMessage: "Visiting Speaker added",
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

        <IonItem>
          <IonSelect
            label="Congregation"
            placeholder="Select Congregation"
            onIonChange={(e) => setCongregation(e.detail.value!)}
          >
            {congregations?.map((congregation) => (
              <IonSelectOption key={congregation.id} value={congregation.id}>
                {congregation.name}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>

        <IonButton
          expand="block"
          className="ion-margin-top"
          onClick={() => {
            addNewVisitingSpeaker();
          }}
        >
          Submit
        </IonButton>
      </IonList>
    </SelectModal>
  );
};
