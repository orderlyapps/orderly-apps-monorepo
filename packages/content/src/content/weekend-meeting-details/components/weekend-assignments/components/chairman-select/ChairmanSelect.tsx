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
  IonRange,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useWeekendAssignmentDetailsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-weekend-assignment-details-query";
import { useWeekendParticipantsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-weekend-participants-query";
import { startOfDayUTC } from "@amodeo/util/dateTime/start-of-Day-UTC/startOfDayUTC";
import { getAssignmentStats } from "../helper/getAssignmentStats.js";
import { useLocalStorage } from "usehooks-ts";

export const ChairmanSelect = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const { data } = useWeekendAssignmentDetailsQuery(week_id);
  const { data: participants } = useWeekendParticipantsQuery();
  const [filters, setFilters] = useLocalStorage("select-chairman-filters", {
    lastAssignment: 0,
    lastChairmanAssignment: 0,
    averageAssignments: 0,
    betweenAssignments: 0,
    sortValue: {
      type: "combined" as "combined" | "chairman" | "reader",
      stat: "previousAssignment" as "previousAssignment",
    },
  });

  const participantsWithStats = participants?.map(
    ({ assignments, ...rest }) => {
      const thisWeek = startOfDayUTC(week_id).getTime();

      const calculatedAssignments = assignments
        ?.map((a: { week_id: string; assignment: "chairman" | "reader" }) => {
          const weeksValue =
            (startOfDayUTC(a.week_id).getTime() - thisWeek) /
            1000 /
            60 /
            60 /
            24 /
            7;
          return { assignment: a.assignment, weeksValue };
        })
        .sort((a, b) => a.weeksValue - b.weeksValue);
      return {
        ...rest,
        reader: getAssignmentStats(calculatedAssignments, "reader"),
        chairman: getAssignmentStats(calculatedAssignments, "chairman"),
        combined: getAssignmentStats(calculatedAssignments, "combined"),
      };
    }
  );

  // console.log(participants?.filter((p) => p.first_name === "Tom")[0]);
  console.log(participantsWithStats?.filter((p) => p.first_name === "Tom")[0]?.combined.previousAssignment?.weeksValue);
  console.log(participantsWithStats?.filter((p) => p.first_name === "Tom")[0]?.combined.nextAssignment?.weeksValue);
  console.log(participantsWithStats?.filter((p) => p.first_name === "Tom")[0]?.combined.weeksBetweenPreviousAndNextAssignment.weeksValue);


  const compareWith = (o1: any, o2: any) => {
    return o1.type === o2.type && o1.stat === o2.stat;
  };
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
          <IonList inset>
            <IonItem>
              <IonSelect
                placeholder="Select"
                onIonChange={({ detail }) => {
                  console.log("🚀 ~ detail:", detail);
                  setFilters({ ...filters, sortValue: detail.value });
                }}
                compareWith={compareWith}
                value={filters.sortValue}
              >
                <IonLabel slot={"label"}>Sort by:</IonLabel>
                <IonSelectOption
                  value={{ type: "combined", stat: "averageAssignments" }}
                >
                  Average Assignments
                </IonSelectOption>
                <IonSelectOption
                  value={{ type: "combined", stat: "previousAssignment" }}
                >
                  Last Assignment
                </IonSelectOption>
                <IonSelectOption
                  value={{ type: "chairman", stat: "previousAssignment" }}
                >
                  Last Chairman Assignment
                </IonSelectOption>
                <IonSelectOption
                  value={{
                    type: "combined",
                    stat: "weeksBetweenPreviousAndNextAssignment",
                  }}
                >
                  Between Assignments
                </IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonRange
                labelPlacement="stacked"
                pin
                label={`Average Assignments ${filters.averageAssignments} Week${filters.averageAssignments > 1 ? "s" : ""}`}
                min={0}
                max={6}
                value={filters.averageAssignments}
                onIonChange={({ detail }) =>
                  setFilters({
                    ...filters,
                    averageAssignments: detail.value as number,
                  })
                }
                ticks={true}
                snaps={true}
              ></IonRange>
            </IonItem>
            <IonItem>
              <IonRange
                labelPlacement="stacked"
                pin
                label={`Last Assignment ${filters.lastAssignment} Week${filters.lastAssignment > 1 ? "s" : ""}`}
                min={0}
                max={6}
                value={filters.lastAssignment}
                onIonChange={({ detail }) =>
                  setFilters({
                    ...filters,
                    lastAssignment: detail.value as number,
                  })
                }
                ticks={true}
                snaps={true}
              ></IonRange>
            </IonItem>

            <IonItem>
              <IonRange
                labelPlacement="stacked"
                pin
                label={`Last Chairman Assignment ${filters.lastChairmanAssignment} Week${filters.lastChairmanAssignment > 1 ? "s" : ""}`}
                min={0}
                max={6}
                value={filters.lastChairmanAssignment}
                onIonChange={({ detail }) =>
                  setFilters({
                    ...filters,
                    lastChairmanAssignment: detail.value as number,
                  })
                }
                ticks={true}
                snaps={true}
              ></IonRange>
            </IonItem>

            <IonItem>
              <IonRange
                labelPlacement="stacked"
                pin
                label={`Between Assignments ${filters.betweenAssignments} Week${filters.betweenAssignments > 1 ? "s" : ""}`}
                min={0}
                max={6}
                value={filters.betweenAssignments}
                onIonChange={({ detail }) =>
                  setFilters({
                    ...filters,
                    betweenAssignments: detail.value as number,
                  })
                }
                ticks={true}
                snaps={true}
              ></IonRange>
            </IonItem>
            <IonAccordionGroup>
              {participantsWithStats &&
                participantsWithStats
                  .filter((a) => {
                    return (
                      a.combined.averageAssignments?.weeksValue &&
                      a.combined.averageAssignments?.weeksValue >
                        filters.averageAssignments
                    );
                  })
                  .filter((a) => {
                    return (
                      a.combined.previousAssignment?.weeksValue &&
                      a.combined.previousAssignment?.weeksValue >
                        filters.lastAssignment
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
                    if (
                      a.combined.weeksBetweenPreviousAndNextAssignment
                        .weeksValue === null 
                        // || a.combined.weeksBetweenPreviousAndNextAssignment
                        // .weeksValue === 0
                    ) {
                      return true;
                    }
                  
                    return (
                      a.combined.weeksBetweenPreviousAndNextAssignment
                        ?.weeksValue &&
                      a.combined.weeksBetweenPreviousAndNextAssignment
                        ?.weeksValue > filters.betweenAssignments
                    );
                  })
                  .sort(
                    (a, b) =>
                      (b[filters.sortValue.type][filters.sortValue.stat]
                        ?.weeksValue || Infinity) -
                      (a[filters.sortValue.type][filters.sortValue.stat]
                        ?.weeksValue || Infinity)
                  )
                  .map((item: (typeof participantsWithStats)[0]) => {
                    return (
                      <IonAccordion key={item.id} value={item.id || ""}>
                        <IonItem slot="header">
                          <IonText className="ion-padding-end">
                            {formatName(item)}
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

                          {!!item.combined.weeksBetweenPreviousAndNextAssignment
                            .weeksValue && (
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

                          {/*      <IonItem>
                            <IonLabel>Average Assignments</IonLabel>
                            <IonText>
                              {(item.combined.averageAssignments &&
                                `${item.combined.averageAssignments * 1} ${item.combined.averageAssignments > 1 ? "weeks" : "week"}`) ||
                                "N/A"}
                            </IonText>
                          </IonItem>

                          <IonItem>
                            <IonLabel>Previous Assignment</IonLabel>
                            <IonText>
                              {(item.combined.previousAssignment &&
                                `${item.combined.previousAssignment.weeksValue * -1} ${item.combined.previousAssignment.weeksValue < -1 ? "weeks" : "week"}`) ||
                                "N/A"}
                            </IonText>
                          </IonItem>

                          <IonItem>
                            <IonLabel>Next Assignment</IonLabel>
                            <IonText>
                              {(item.combined.nextAssignment &&
                                `${item.combined.nextAssignment.weeksValue} ${item.combined.nextAssignment.weeksValue > 1 ? "weeks" : "week"}`) ||
                                "N/A"}
                            </IonText>
                          </IonItem>
                          <IonListHeader>Chairman</IonListHeader>
                          <IonItem>
                            <IonLabel>Weeks Between Assignments</IonLabel>
                            <IonText>
                              {(item.chairman
                                .weeksBetweenPreviousAndNextAssignment &&
                                `${item.chairman.weeksBetweenPreviousAndNextAssignment * 1} ${item.chairman.weeksBetweenPreviousAndNextAssignment > 1 ? "weeks" : "week"}`) ||
                                "N/A"}
                            </IonText>
                          </IonItem>

                          <IonItem>
                            <IonLabel>Average Assignments</IonLabel>
                            <IonText>
                              {(item.chairman.averageAssignments &&
                                `${item.chairman.averageAssignments * 1} ${item.chairman.averageAssignments > 1 ? "weeks" : "week"}`) ||
                                "N/A"}
                            </IonText>
                          </IonItem>

                          <IonItem>
                            <IonLabel>Previous Assignment</IonLabel>
                            <IonText>
                              {(item.chairman.previousAssignment &&
                                `${item.chairman.previousAssignment.weeksValue * -1} ${item.chairman.previousAssignment.weeksValue < -1 ? "weeks" : "week"}`) ||
                                "N/A"}
                            </IonText>
                          </IonItem>

                          <IonItem>
                            <IonLabel>Next Assignment</IonLabel>
                            <IonText>
                              {(item.chairman.nextAssignment &&
                                `${item.chairman.nextAssignment.weeksValue} ${item.chairman.nextAssignment.weeksValue > 1 ? "weeks" : "week"}`) ||
                                "N/A"}
                            </IonText>
                          </IonItem> */}
                        </IonList>
                      </IonAccordion>
                    );
                  })}
            </IonAccordionGroup>
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
};
