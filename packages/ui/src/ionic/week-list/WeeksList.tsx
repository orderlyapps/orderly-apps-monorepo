import { addWeeks, formatDate, previousMonday, subWeeks } from "date-fns";
import {
  IonContent,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonText,
  RefresherCustomEvent,
} from "@ionic/react";
import { getPaths } from "../tabs-app/utils/pathFunctions.js";
import { Fragment, Suspense, useState } from "react";
import { LoadingSpinner } from "../loading-spinner/LoadingSpinner.js";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";

export const WeeksList = <
  Props extends {
    pathFunction: ReturnType<typeof getPaths>;
    page: Parameters<Props["pathFunction"]>[0];
    icon: string;
  },
>({
  pathFunction,
  page,
  icon,
}: Props) => {
  const [oldDates, setOldDates] = useState<string[]>([]);

  const start = previousMonday(new Date());
  const dates = Array.from({ length: 26 }).map((_, i) => {
    const date = addWeeks(start, i);
    return formatDate(date, "yyyy-MM-dd");
  });

  const generateOldDates = (event: RefresherCustomEvent) => {
    const weeksToAdd = 4;
    setTimeout(() => {
      // Check that dates array is not empty and has elements before accessing
      if (!oldDates[0] || !dates[0]) {
        event.detail.complete();
        return;
      }

      const firstDate =
        oldDates.length > 0
          ? subWeeks(new Date(oldDates[0]), 1)
          : subWeeks(new Date(dates[0]), 1);

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

  return (
    <IonContent>
      <Suspense fallback={<LoadingSpinner />}>
        <IonRefresher
          slot="fixed"
          onIonRefresh={generateOldDates}
          // disabled={oldDates.length >= 18}
        >
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList lines="none">
          {[
            ...oldDates,
            ...dates,
            // ...newDates
          ].map((week, index) => (
            <Fragment key={week}>
              {(new Date(week).getDate() <= 7 || index === 0) && (
                <IonItemDivider sticky className="ion-padding">
                  <IonLabel color={"primary"}>
                    {new Date(week).toLocaleString("default", {
                      month: "long",
                    })}
                  </IonLabel>
                </IonItemDivider>
              )}
              <IonItem
                key={week}
                routerLink={pathFunction(page, { week } as any)}
                className="ion-margin"
              >
                <IonLabel>
                  <IonText>
                    <strong>{formatWeekDate(week)}</strong>
                  </IonText>
                </IonLabel>
                <IonIcon slot="start" icon={icon} />
              </IonItem>
            </Fragment>
          ))}
        </IonList>
      </Suspense>
    </IonContent>
  );
};
