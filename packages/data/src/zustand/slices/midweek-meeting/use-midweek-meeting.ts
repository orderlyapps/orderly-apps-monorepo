export const midweekMeeting = {
  isMidweekMeetingEditModalOpen: false,
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
  };
};
