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
import { startOfDay } from "date-fns";

export const ChairmanSelect = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const { data } = useWeekendAssignmentDetailsQuery(week_id);
  const { data: participants } = useWeekendParticipantsQuery();

  const newParticipants = participants?.map((participant) => {
    const thisWeek = startOfDay(new Date(week_id)).getTime();

    const assignments = participant?.assignments
      ?.map((a: any) => {
        if (a.assignment === "chairman") {


const assignment = startOfDay(new Date(a.week_id)).getTime()
          
          const gap = assignment - thisWeek;

          // console.log("🚀 ~ ?.map ~ assignment:", assignment)

          console.log(thisWeek  / 1000 / 60 / 60 / 24, assignment  / 1000 / 60 / 60 / 24, gap / 1000 / 60 / 60 / 24 / 7);
          return new Date(a.week_id).setHours(0, 0, 0, 0);
        }
        return null;
      })
      .filter(Boolean);

    const chairmanAssignments = participant?.assignments
      ?.map((a: any) => {
        if (a.assignment === "chairman") {
          return new Date(a.week_id).setHours(0, 0, 0, 0);
        }
        return null;
      })
      .filter(Boolean);

    const readerAssignments = participant?.assignments
      ?.map((a: any) => {
        if (a.assignment === "reader") {
          return new Date(a.week_id).setHours(0, 0, 0, 0);
        }
        return null;
      })
      .filter(Boolean);

    const previousChairmanAssignment = chairmanAssignments
      ?.map((a) => (a && a < thisWeek ? a : null))
      .filter(Boolean)
      .sort((a, b) => (b || 0) - (a || 0))
      .shift();

    const nextChairmanAssignment = chairmanAssignments
      ?.map((a) => (a && a > thisWeek ? a : null))
      .filter(Boolean)
      .sort((a, b) => (a || 0) - (b || 0))
      .shift();

    const weeksBetweenChairmanAssignments =
      previousChairmanAssignment && nextChairmanAssignment
        ? (nextChairmanAssignment - previousChairmanAssignment) /
          1000 /
          60 /
          60 /
          24 /
          7
        : null;

    // console.log("🚀 ~ newParticipants:", weeksBetweenChairmanAssignments);
    return {
      ...participant,
    };
  });

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
            {newParticipants &&
              newParticipants.map((item: any) => {
                return (
                  <IonAccordion key={item.id} value={item.id}>
                    <IonItem slot="header">
                      <IonText>{formatName(item)}</IonText>
                    </IonItem>
                    <IonList slot="content">
                      <IonItem>
                        <IonText>
                          {typeof item.recent_previous_chairman !==
                          "undefined" ? (
                            <>
                              Last:{" "}
                              {formatWeekDate(item.recent_previous_chairman)} -{" "}
                              {item.weeksBetweenRecentAssignments} weeks ago
                            </>
                          ) : (
                            "No previous assignments"
                          )}
                        </IonText>
                        <br />
                      </IonItem>
                      <IonItem>
                        <IonText>
                          {typeof item.recent_next_chairman !== "undefined" ? (
                            <>
                              Next: {formatWeekDate(item.recent_next_chairman)}{" "}
                              - {item.weeksBetweenRecentAssignments} weeks ahead
                            </>
                          ) : (
                            "No future assignments"
                          )}
                        </IonText>
                      </IonItem>
                    </IonList>
                  </IonAccordion>
                );
              })}
          </IonAccordionGroup>
        </IonContent>
      </IonModal>
    </>
  );
};
