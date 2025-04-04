import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import { formatName } from "@amodeo/util/formatters/formatName";
import { useReadFilters } from "../../../helper/use-filters/useFilters.js";
import { useParticipantsList } from "../../../helper/use-participants-list/useParticipantsList.js";

export const AssignmentOptionsHeader = ({
  participant,
  assignmentType,
}: {
  participant: ReturnType<typeof useParticipantsList>["participants"][number];
  assignmentType: "reader" | "chairman";
}) => {
  const {
    sortValue: { type, stat },
  } = useReadFilters(assignmentType);

  const weeksValue =
    participant[type] &&
    (participant?.[type]?.[stat] as { weeksValue: number } | null);
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonText>
            <strong>{formatName(participant as any)}</strong>
          </IonText>
        </IonCol>
        <IonCol>
          <IonText>
            {weeksValue?.weeksValue &&
              `${weeksValue?.weeksValue} ${weeksValue?.weeksValue === 1 ? "week" : "weeks"}`}
            {!weeksValue?.weeksValue && "N/A"}
          </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
