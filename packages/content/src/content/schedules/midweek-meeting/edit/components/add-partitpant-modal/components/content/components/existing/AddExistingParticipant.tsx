import { AssigmentData } from "#content/schedules/midweek-meeting/.shared/getData/getAssignmentData.js";
import { IonItem, IonList } from "@ionic/react";
import { useAddParticipantForm } from "../../../../hooks/use-add-participant-form.js";
import { useMidweekParticipantsQuery } from "@amodeo/data/react-query/midweek-meeting_2/use-midweek-participants-query";

export const AddExistingParticipant = ({
  assignmentData,
}: {
  assignmentData: AssigmentData;
}) => {
  const { addExistingParticipant } = useAddParticipantForm();

  const { data: participants } = useMidweekParticipantsQuery();

  return (
    <IonList>
      {participants &&
        participants
          .filter(
            (p) => !p.participation.includes(assignmentData.assignment_id)
          )
          .map((participant: any) => {
            return (
              <IonItem
                key={participant.id}
                onClick={() => {
                  addExistingParticipant(participant.id);
                }}
              >
                {participant.first_name} {participant.last_name}
              </IonItem>
            );
          })}
    </IonList>
  );
};
