import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonList,
  IonText,
} from "@ionic/react";
import { useMidweekParticipantsList } from "../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";
import { ParticipantAssignmentData } from "./participant-assignment-data/ParticipantAssignmentData.js";
import { useMidweekAssignmentsFormState } from "../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";

export const MidweekParticipantOptions = () => {
  const { data, isPending, isError, currentAssignment } =
    useMidweekParticipantsList();
  const { sortValue } = useMidweekAssignmentsFormState();
  if (isPending) return null;
  if (isError) return null;

  // const filteredData = data?.filter((participant) => {
  //   return participant.isCurrentAssignee;
  // });

  const sortedData = data?.sort((a, b) => {
    return (b[sortValue] || Infinity) - (a[sortValue] || Infinity);
  });

  return (
    <IonList>
      <IonAccordionGroup>
        {sortedData?.map((participant) => {
          return (
            <IonAccordion key={participant.id} value={participant.id || ""}>
              <IonItem slot="header">
                <IonText
                  slot="start"
                  color={participant.isCurrentAssignee ? "primary" : ""}
                >
                  <strong>
                    {participant.first_name} {participant.last_name}
                  </strong>
                </IonText>
                <IonText slot="end" className="ion-margin-end">
                  <strong>{participant[sortValue]}</strong>
                </IonText>
              </IonItem>
              <IonItem slot="content" color={"medium"}>
                <ParticipantAssignmentData
                  participant={participant}
                  currentAssignment={currentAssignment}
                ></ParticipantAssignmentData>
              </IonItem>
            </IonAccordion>
          );
        })}
      </IonAccordionGroup>
    </IonList>
  );
};
