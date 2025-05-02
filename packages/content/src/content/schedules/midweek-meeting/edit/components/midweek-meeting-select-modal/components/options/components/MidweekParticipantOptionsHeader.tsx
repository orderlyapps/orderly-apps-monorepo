import { IonText } from "@ionic/react";
import { filterValues } from "../../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";
import { ParticipantType } from "../../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";

export function MidweekParticipantOptionsHeader({
  participant,
  sortValue,
}: {
  participant: ParticipantType;
  sortValue: keyof typeof filterValues;
}) {
  return (
    <div>
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
    </div>
  );
}
