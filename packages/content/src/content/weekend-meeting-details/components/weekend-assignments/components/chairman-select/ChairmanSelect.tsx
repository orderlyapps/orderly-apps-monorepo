import { useCardModal } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { formatName } from "@amodeo/util/formatters/formatName";
import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useWeekendAssignmentDetailsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-weekend-assignment-details-query";
import { useWeekendParticipantsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-weekend-participants-query";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { startOfDayUTC } from "@amodeo/util/dateTime/start-of-Day-UTC/startOfDayUTC";
import { getAssignmentStats } from "../helper/getAssignmentStats.js";

export const ChairmanSelect = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const { data } = useWeekendAssignmentDetailsQuery(week_id);
  const { data: participants } = useWeekendParticipantsQuery();

  const participantsWithStats = participants?.map(
    ({ assignments, ...rest }) => {
      const thisWeek = startOfDayUTC(week_id).getTime();

      const calculatedAssignments = assignments
        ?.map((a: { week_id: string; assignment: "chairman" | "reader" }) => {
          const weeksFromCurrentDate =
            (startOfDayUTC(a.week_id).getTime() - thisWeek) /
            1000 /
            60 /
            60 /
            24 /
            7;
          return { assignment: a.assignment, weeksFromCurrentDate };
        })
        .sort((a, b) => a.weeksFromCurrentDate - b.weeksFromCurrentDate);

      console.log("🚀 ~ newParticipants ~ newParticipants:", {
        first_name: rest.first_name,
        reader: getAssignmentStats(calculatedAssignments, "reader"),
        chairman: getAssignmentStats(calculatedAssignments, "chairman"),
        combined: getAssignmentStats(calculatedAssignments, "combined"),
      });
      return {
        ...rest,
        reader: getAssignmentStats(calculatedAssignments, "reader"),
        chairman: getAssignmentStats(calculatedAssignments, "chairman"),
        combined: getAssignmentStats(calculatedAssignments, "combined"),
      };
    }
  );

  return (
    <>
      <IonItem onClick={() => setIsOpen(true)}>
        <IonLabel>
          <strong>Chairman:</strong>
        </IonLabel>
        <IonText>{formatName(data?.chairman)}</IonText>
      </IonItem>
      <IonModal {...modalProps} isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>ChairmanSelect</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonAccordionGroup>
            {participantsWithStats &&
              participantsWithStats.map(
                (item: (typeof participantsWithStats)[0]) => {
                  return (
                    <IonAccordion key={item.id} value={item.id || ""}>
                      <IonItem slot="header">
                        <IonText>{formatName(item)}</IonText>
                      </IonItem>
                      <IonList slot="content" inset>
                        <IonItem>
                          <IonText>
                            {
                              item.chairman
                                .weeksBetweenPreviousAndNextAssignment
                            }{" "}
                            current gap
                          </IonText>
                        </IonItem>
                        <IonItem>
                          <IonText>
                            {item.chairman.averageAssignments} average weeks
                            between chairman assignments
                          </IonText>
                        </IonItem>

                        <IonItem>
                          <IonLabel>Previous Assignment</IonLabel>
                          <IonText>
                            {(item.chairman.previousAssignment &&
                              `${item.chairman.previousAssignment * -1} ${item.chairman.previousAssignment < -1 ? "weeks" : "week"}`) ||
                              "N/A"}
                          </IonText>
                        </IonItem>
                        <IonItem>
                          <IonLabel>Next Assignment</IonLabel>
                          <IonText>
                            {(item.chairman.nextAssignment &&
                              `${item.chairman.nextAssignment} ${item.chairman.nextAssignment > 1 ? "weeks" : "week"}`) ||
                              "N/A"}
                          </IonText>
                        </IonItem>
                      </IonList>
                    </IonAccordion>
                  );
                }
              )}
          </IonAccordionGroup>
        </IonContent>
      </IonModal>
    </>
  );
};
