import {
  CheckboxCustomEvent,
  IonCheckbox,
  IonItem,
  IonList,
} from "@ionic/react";
import { usePublisherData } from "../../../publisher-data-provider/PublisherDataProvider.js";
import { assignmentTypes } from "../../../details/midweek-participation/MidweekParticipation.js";
import {
  MIDWEEK_ASSIGNMENT_IDS,
  MidweekAssignmentID,
} from "@amodeo/data/supabase/supabase-types";

export function EditMidweekParticipation() {
  const { midweek_participation, detailsToEdit, updateState } =
  usePublisherData();

  const searchString = midweek_participation?.join("");

  if (detailsToEdit !== "midweek_participation") {
    return null;
  }

  const handleUpdate = ({
    event: {
      detail: { checked },
    },
    id,
  }: {
    event: CheckboxCustomEvent<{ checked: boolean }>;
    id: string;
  }) => {
    const assignmentsToUpdate = MIDWEEK_ASSIGNMENT_IDS.filter((assignment) =>
      assignment.includes(id)
    );

    if (checked) {
      updateState({
        midweek_participation: [
          ...(midweek_participation || []),
          ...assignmentsToUpdate,
        ],
      });
    }

    if (!checked) {
      updateState({
        midweek_participation: midweek_participation?.filter(
          (assignment) => !assignmentsToUpdate.includes(assignment)
        ),
      });
    }
  };

  return (
    <IonList>
      {assignmentTypes.map(({ id, label }) => {
        return (
          <IonItem key={id}>
            <IonCheckbox
              checked={searchString?.includes(id)}
              onIonChange={(event) => handleUpdate({ event, id })}
            >
              {label}
            </IonCheckbox>
          </IonItem>
        );
      })}
    </IonList>
  );
}
