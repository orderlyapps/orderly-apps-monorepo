import { formatName } from "@amodeo/util/formatters/formatName";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonList,
  IonText,
} from "@ionic/react";
import { FilterSettings, ParticipantWithStats } from "../types/ChairmanSelectTypes.js";

type ParticipantListProps = {
  participants: ParticipantWithStats[] | undefined;
  filters: FilterSettings;
  onSelectParticipant?: (participant: ParticipantWithStats) => void;
};

export const ParticipantList = ({
  participants,
  filters,
  onSelectParticipant,
}: ParticipantListProps) => {
  if (!participants) return null;

  const filteredAndSortedParticipants = participants
    .filter((a) => {
      return (
        a.combined.averageAssignments?.weeksValue &&
        a.combined.averageAssignments?.weeksValue > filters.averageAssignments
      );
    })
    .filter((a) => {
      return (
        a.combined.previousAssignment?.weeksValue &&
        a.combined.previousAssignment?.weeksValue > filters.lastAssignment
      );
    })
    .filter((a) => {
      if (a.chairman.previousAssignment === null) return true;

      return (
        a.chairman.previousAssignment?.weeksValue &&
        a.chairman.previousAssignment?.weeksValue >
          filters.lastChairmanAssignment
      );
    })
    .filter((a) => {
      // Handle null weeksBetweenPreviousAndNextAssignment
      if (!a.combined.weeksBetweenPreviousAndNextAssignment) return true;
      
      if (a.combined.weeksBetweenPreviousAndNextAssignment.weeksValue === null) {
        return true;
      }

      return (
        a.combined.weeksBetweenPreviousAndNextAssignment.weeksValue &&
        a.combined.weeksBetweenPreviousAndNextAssignment.weeksValue > filters.betweenAssignments
      );
    })
    .sort(
      (a, b) =>
        (b[filters.sortValue.type][filters.sortValue.stat]
          ?.weeksValue || Infinity) -
        (a[filters.sortValue.type][filters.sortValue.stat]
          ?.weeksValue || Infinity)
    );

  return (
    <IonAccordionGroup>
      {filteredAndSortedParticipants.map((item) => {
        // Transform item to ensure it's compatible with formatName
        const nameDisplay = {
          id: item.id || "",
          congregation_id: item.congregation_id || "",
          first_name: item.first_name || "",
          last_name: item.last_name || item.surname || ""
        };
        
        return (
          <IonAccordion key={item.id} value={item.id || ""}>
            <IonItem slot="header" onClick={() => onSelectParticipant && onSelectParticipant(item)}>
              <IonText className="ion-padding-end">
                {formatName(nameDisplay)}
              </IonText>
              <IonText color={"medium"}>
                {item[filters.sortValue.type][
                  filters.sortValue.stat
                ]?.weeksValue
                  ? `(${
                      item[filters.sortValue.type][
                        filters.sortValue.stat
                      ]?.weeksValue
                    } wks)`
                  : `(N/A)`}
              </IonText>
            </IonItem>
            <IonList slot="content" inset>
              <IonItem>
                <IonLabel>Average Assignments: </IonLabel>

                <IonText>
                  {(item.combined.averageAssignments?.weeksValue &&
                    `${item.combined.averageAssignments.weeksValue} ${item.combined.averageAssignments.weeksValue > 1 ? "weeks" : "week"}`) ||
                    "N/A"}
                </IonText>
              </IonItem>

              <IonItem>
                <IonLabel>Last Assignment: </IonLabel>
                <IonText>
                  {(item.combined.previousAssignment?.weeksValue &&
                    `${item.combined.previousAssignment.weeksValue} ${item.combined.previousAssignment.weeksValue > 1 ? "weeks" : "week"} (${item.combined.previousAssignment.assignment === "chairman" ? "Chairman" : "Reader"})`) ||
                    "N/A"}
                </IonText>
              </IonItem>
              {item.combined.previousAssignment?.assignment !==
                "chairman" && (
                <>
                  <IonItem>
                    <IonLabel>Last Chairman Assignment: </IonLabel>
                    <IonText>
                      {(item.chairman.previousAssignment
                        ?.weeksValue &&
                        `${item.chairman.previousAssignment.weeksValue} ${item.chairman.previousAssignment.weeksValue > 1 ? "weeks" : "week"}`) ||
                        "N/A"}
                    </IonText>
                  </IonItem>
                </>
              )}

              {/* Safely check if weeksBetweenPreviousAndNextAssignment exists and has a weeksValue */}
              {item.combined.weeksBetweenPreviousAndNextAssignment && 
                item.combined.weeksBetweenPreviousAndNextAssignment.weeksValue && (
                <>
                  <IonItem>
                    <IonLabel>Weeks Between Assignments</IonLabel>
                    <IonText>
                      {`${item.combined.weeksBetweenPreviousAndNextAssignment.weeksValue} ${item.combined.weeksBetweenPreviousAndNextAssignment.weeksValue > 1 ? "weeks" : "week"}` ||
                        "N/A"}
                    </IonText>
                  </IonItem>
                </>
              )}
              {
                <>
                  <IonItem>
                    <IonLabel>Next Assignment: </IonLabel>
                    <IonText>
                      {(item.combined.nextAssignment?.weeksValue &&
                        `${item.combined.nextAssignment.weeksValue} ${item.combined.nextAssignment.weeksValue > 1 ? "weeks" : "week"} (${item.combined.nextAssignment.assignment === "chairman" ? "Chairman" : "Reader"})`) ||
                        "N/A"}
                    </IonText>
                  </IonItem>
                </>
              }
            </IonList>
          </IonAccordion>
        );
      })}
    </IonAccordionGroup>
  );
};
