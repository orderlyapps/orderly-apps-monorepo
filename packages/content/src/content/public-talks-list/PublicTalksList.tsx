// import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";

// export const PublicTalksList = ({
//   children,
//   modalProps,
// }: {
//   children?: React.ReactNode,
//   modalProps: ReturnType<typeof useCardModal>['modalProps'];
// }) => {
//   return (
//     <div className="full centered">
//       <h1>Public Talks List Component</h1>
//       {children}
//     </div>
//   );
// };

import { usePublicTalksQuery } from "@amodeo/data/react-query/weekend-meeting/use-public-talks-query";
import { LoadingSpinner } from "@amodeo/ui/ionic/loading-spinner/LoadingSpinner";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { formatName } from "@amodeo/util/formatters/formatName";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonText,
  RefresherCustomEvent,
} from "@ionic/react";
import { addWeeks, formatDate, previousMonday, subWeeks } from "date-fns";
import { Fragment, Suspense, useState } from "react";

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
    <IonContent>
      <Suspense fallback={<LoadingSpinner />}>
        <IonRefresher slot="fixed" onIonRefresh={generateOldDates}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList lines="none">
          {allTalks &&
            allTalks.map((week) => (
              <Fragment key={week.week_id}>
                <IonItem>
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
                        <IonText>{`${formatName(week.speaker)} (${week.home_congregation})`}</IonText>
                      </>
                    )}
                  </IonLabel>
                </IonItem>
              </Fragment>
            ))}
        </IonList>
      </Suspense>
    </IonContent>
  );
};
