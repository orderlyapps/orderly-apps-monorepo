import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { IonToast } from "@ionic/react";

export const WeekendMeetingToast = () => {
  const {
    isWeekendMeetingToastOpen,
    weekendMeetingToastColor,
    weekendMeetingToastMessage,
  } = useStore.use.weekendMeeting();

  const onWeekendMeetingToastClose = useStore.use.onWeekendMeetingToastClose();

  return (
    <IonToast
      isOpen={isWeekendMeetingToastOpen}
      message={weekendMeetingToastMessage}
      onDidDismiss={onWeekendMeetingToastClose}
      duration={5000}
      color={weekendMeetingToastColor}
    ></IonToast>
  );
};
