import { orderlyPath } from "#shells/orderly/routes.js";
import { useOutgoingSpeakersQuery } from "@amodeo/data/react-query/weekend-meeting/use-outgoing-speakers-query";
import { usePublicTalksQuery } from "@amodeo/data/react-query/weekend-meeting/use-public-talks-query";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { formatName } from "@amodeo/util/formatters/formatName";
import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonCol,
  IonGrid,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonText,
  RefresherCustomEvent,
} from "@ionic/react";
import { addWeeks, formatDate, previousMonday, subWeeks } from "date-fns";
import { Fragment, useState } from "react";

export const PublicTalksList = () => {
  const [oldDates, setOldDates] = useState<string[]>([]);

  const start = previousMonday(new Date());
  const dates = Array.from({ length: 26 }).map((_, i) => {
    const date = addWeeks(start, i);
    return formatDate(date, "yyyy-MM-dd");
  });
  const { data } = usePublicTalksQuery(
    dates[0] || "",
    dates[dates.length - 1] || ""
  );

  const { data: outgoingSpeakers } = useOutgoingSpeakersQuery(
    dates[0] || "",
    dates[dates.length - 1] || "",
    { enabled: !!data }
  );

  const generateOldDates = (event: RefresherCustomEvent) => {
    const weeksToAdd = 4;
    setTimeout(() => {
      const firstDate = oldDates.length
        ? subWeeks(new Date(oldDates[0] as string), 1)
        : subWeeks(new Date(dates[0] as string), 1);

      const pastDates = Array.from({
        length: weeksToAdd,
      }).map((_, i) => {
        const date = subWeeks(firstDate, weeksToAdd - 1 - i);
        return formatDate(date, "yyyy-MM-dd");
      });
      setOldDates([...pastDates, ...oldDates]);
      // Any calls to load data go here

      event.detail.complete();
    }, 350);
  };

  const allDates = [...oldDates, ...dates];

  const allTalks = allDates.map((week) => ({
    week_id: week,
    ...(data?.find((talk) => talk.week_id === week) || {}),
  })) as typeof data;

  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={generateOldDates}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      {allTalks &&
        allTalks.map((week, index) => (
          <IonAccordionGroup key={week.week_id}>
            {(new Date(week.week_id as string).getDate() <= 7 ||
              index === 0) && (
              <IonItemDivider sticky className="ion-padding">
                <IonLabel color={"primary"}>
                  {new Date(week.week_id as string).toLocaleString("default", {
                    month: "long",
                  })}
                </IonLabel>
              </IonItemDivider>
            )}

            <IonAccordion value={week.week_id || ""}>
              <IonItem slot="header">
                <IonLabel>
                  <IonText color={"primary"}>
                    <strong>{formatWeekDate(week.week_id || "")}</strong>
                  </IonText>
                  {week.speaker && (
                    <>
                      <br />
                      <IonText>
                        <strong>{week.outline?.theme}</strong>
                      </IonText>
                      <br />
                      <IonText>{`${formatName(week.speaker)} ${week.congregation_id !== week.speaker.congregation_id ? `(${week.home_congregation})` : ""}`}</IonText>
                    </>
                  )}
                </IonLabel>
              </IonItem>

              <IonList slot="content" className="ion-padding-bottom">
                <IonItem lines="none">
                  <IonLabel>
                    {week.chairman && (
                      <>
                        <IonGrid>
                          <IonRow class="ion-justify-content-between">
                            <IonCol size="4">
                              <IonText color={"medium"}>
                                <strong>Chairman:</strong>
                              </IonText>
                            </IonCol>
                            <IonCol>
                              <IonText>{formatName(week.chairman)}</IonText>
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                      </>
                    )}

                    {week.reader && (
                      <>
                        <IonGrid>
                          <IonRow class="ion-justify-content-between">
                            <IonCol size="4">
                              <IonText color={"medium"}>
                                <strong>Reader:</strong>
                              </IonText>
                            </IonCol>
                            <IonCol>
                              {week.reader && (
                                <IonText>{formatName(week.reader)}</IonText>
                              )}
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                      </>
                    )}

                    <IonGrid>
                      {outgoingSpeakers
                        ?.find((item) => item.week_id === week.week_id)
                        ?.outgoing_speakers?.filter(
                          (s: any) => week.congregation_id !== s.congregation.id
                        )
                        ?.map((s: any, index: number) => {
                          if (index === 0) {
                            return (
                              <IonRow>
                                <IonCol size="4">
                                  <IonText color={"medium"}>
                                    <strong>Outgoing:</strong>
                                  </IonText>
                                </IonCol>
                                <IonCol>
                                  <Fragment key={index}>
                                    <IonText>
                                      {formatName(s.speaker)} ({s.outline?.id}
                                      ){" "}
                                    </IonText>
                                    <br />
                                    <IonText color={"medium"}>
                                      {s.congregation.name}
                                    </IonText>
                                    <br />
                                    <br />
                                  </Fragment>
                                </IonCol>
                              </IonRow>
                            );
                          }

                          return (
                            <IonRow>
                              <IonCol size="4"></IonCol>
                              <IonCol>
                                <Fragment key={index}>
                                  <IonText>
                                    {formatName(s.speaker)} ({s.outline?.id}
                                    ){" "}
                                  </IonText>
                                  <br />
                                  <IonText color={"medium"}>
                                    {s.congregation.name}
                                  </IonText>
                                  <br />
                                  <br />
                                </Fragment>
                              </IonCol>
                            </IonRow>
                          );
                        })}
                    </IonGrid>
                  </IonLabel>
                </IonItem>
                {/* <IonButton
                  expand="block"
                  className="ion-margin"
                  fill="outline"
                  routerLink={orderlyPath("weekend_meeting_edit", {
                    week_id: week.week_id || "",
                  })}
                >
                  Edit
                </IonButton> */}
              </IonList>
            </IonAccordion>
          </IonAccordionGroup>
        ))}
    </>
  );
};
