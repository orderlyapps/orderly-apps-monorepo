export const midweekMeeting = {
  isSelectSpeakerModalOpen: false,
  speakerSearchQuery: "",
};

export type MidweekMeeting = typeof midweekMeeting;

export const setMidweekMeeting = (
  set: (state: { midweekMeeting: MidweekMeeting }) => void,
  get: () => { midweekMeeting: MidweekMeeting }
) => {
  return {
    setSelectSpeakerModalOpen: (open: boolean) => {
      const midweekMeeting = get().midweekMeeting;
      set({
        midweekMeeting: {
          ...midweekMeeting,
          isSelectSpeakerModalOpen: open,
        },
      });
    },
    setSpeakerSearchQuery: (query: string) => {
      const midweekMeeting = get().midweekMeeting;
      set({
        midweekMeeting: {
          ...midweekMeeting,
          speakerSearchQuery: query,
        },
      });
    },
  };
};
