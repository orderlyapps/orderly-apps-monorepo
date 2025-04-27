export const midweekMeeting = {
  isMidweekMeetingEditModalOpen: false,
  isMidweekMeetingAlertOpen: false,
};

export type MidweekMeeting = typeof midweekMeeting;

export const setMidweekMeeting = (
  set: (state: { midweekMeeting: MidweekMeeting }) => void,
  get: () => { midweekMeeting: MidweekMeeting }
) => {
  return {
    setMidweekMeetingEditModalOpen: (isOpen: boolean) => {
      const midweekMeeting = get().midweekMeeting;
      set({
        midweekMeeting: {
          ...midweekMeeting,
          isMidweekMeetingEditModalOpen: isOpen,
        },
      });
    },
    setMidweekMeetingAlertOpen: (isOpen: boolean) => {
      const midweekMeeting = get().midweekMeeting;
      set({
        midweekMeeting: {
          ...midweekMeeting,
          isMidweekMeetingAlertOpen: isOpen,
        },
      });
    },
  };
};
