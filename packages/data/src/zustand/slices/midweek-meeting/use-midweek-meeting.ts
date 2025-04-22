export const midweekMeeting = {};

export type MidweekMeeting = typeof midweekMeeting;

export const setMidweekMeeting = (
  set: (state: { midweekMeeting: MidweekMeeting }) => void,
  get: () => { midweekMeeting: MidweekMeeting }
) => {
  return {
    midweekMeetingAlertCancellation: () => {
      const midweekMeeting = get().midweekMeeting;
      set({
        midweekMeeting: {
          ...midweekMeeting,
        },
      });
    },
  };
};
