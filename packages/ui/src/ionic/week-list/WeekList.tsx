import {
  IonAccordionGroup,
  IonButton,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  RefresherCustomEvent,
} from "@ionic/react";
import { addWeeks, formatDate, startOfWeek, subWeeks } from "date-fns";
import React, { Dispatch, useEffect, Fragment, SetStateAction } from "react";
import { useState } from "react";

type WeekChildProps = {
  week_id?: string;
};

type WeekListProps = {
  children: React.ReactNode;
  setScheduleDates: Dispatch<
    SetStateAction<{ startDate: string; endDate: string }>
  >;
};

export const WeekList = ({ children, setScheduleDates }: WeekListProps) => {
  const [oldDates, setOldDates] = useState<string[]>([]);
  const [currentWeeks, setCurrentWeeks] = useState(26);

  const start = startOfWeek(new Date(), { weekStartsOn: 1 });
  const dates = Array.from({ length: currentWeeks }).map((_, i) => {
    const date = addWeeks(start, i);
    return formatDate(date, "yyyy-MM-dd");
  });

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

      event.detail.complete();
    }, 350);
  };

  const allDates = [...oldDates, ...dates];

  useEffect(() => {
    setScheduleDates({
      startDate: allDates[0] as string,
      endDate: allDates[allDates.length - 1] as string,
    });
  }, [oldDates, currentWeeks]);

  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={generateOldDates}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <IonList>
        {allDates.map((week_id, index) => {
          const weekDate = new Date(week_id);
          const isFirstWeekOfMonth = weekDate.getDate() <= 7;

          if (isFirstWeekOfMonth || index === 0) {
            return (
              <Fragment key={"divider" + week_id}>
                <IonItemDivider sticky className="ion-padding">
                  <IonLabel color="primary">
                    {weekDate.toLocaleString("default", {
                      month: "long",
                    })}
                  </IonLabel>
                </IonItemDivider>
                <Fragment key={week_id}>
                  {React.isValidElement(children)
                    ? React.cloneElement(
                        children as React.ReactElement<WeekChildProps>,
                        { week_id }
                      )
                    : children}
                </Fragment>
              </Fragment>
            );
          }

          return (
            <Fragment key={week_id}>
              {React.isValidElement(children)
                ? React.cloneElement(
                    children as React.ReactElement<WeekChildProps>,
                    { week_id }
                  )
                : children}
            </Fragment>
          );
        })}
      </IonList>

      <IonButton
        fill="clear"
        onClick={() => setCurrentWeeks(currentWeeks + 4)}
        expand="block"
      >
        show more
      </IonButton>
    </>
  );
};
