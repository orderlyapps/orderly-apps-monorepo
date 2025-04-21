export const weekendMeeting = {
  isWeekendMeetingAlertOpen: false,

  isWeekendMeetingToastOpen: false,
  weekendMeetingToastColor: "success" as "success" | "danger" | "warning",
  weekendMeetingToastMessage: "",

  speaker_id: "",
  outline_id: "",
  participant_id: "",
  assignment: "" as "reader" | "chairman",

  mutationType: "" as
    | "Delete Speaker"
    | "Update Speaker"
    | "Delete Assignment"
    | "Update Assignment",
};

export type WeekendMeeting = typeof weekendMeeting;

export const setWeekendMeeting = (
  set: (state: { weekendMeeting: WeekendMeeting }) => void,
  get: () => { weekendMeeting: WeekendMeeting }
) => {
  return {
    handleWeekendMeetingAlertCancellation: () => {
      const weekendMeeting = get().weekendMeeting;
      set({
        weekendMeeting: {
          ...weekendMeeting,
          isWeekendMeetingAlertOpen: false,
        },
      });
    },
    handleWeekendMeetingAlertConfirmation: ({
      weekendMeetingToastMessage,
      weekendMeetingToastColor,
    }: {
      weekendMeetingToastMessage: string;
      weekendMeetingToastColor: (typeof weekendMeeting)["weekendMeetingToastColor"];
    }) => {
      const weekendMeeting = get().weekendMeeting;
      set({
        weekendMeeting: {
          ...weekendMeeting,
          weekendMeetingToastMessage,
          weekendMeetingToastColor,
          isWeekendMeetingAlertOpen: false,
          isWeekendMeetingToastOpen: true,
        },
      });
    },
    onWeekendMeetingToastClose: () => {
      const weekendMeeting = get().weekendMeeting;
      set({
        weekendMeeting: {
          ...weekendMeeting,
          isWeekendMeetingToastOpen: false,
        },
      });
    },
    handleDeleteSpeakerAssignmentClick: () => {
      const weekendMeeting = get().weekendMeeting;
      set({
        weekendMeeting: {
          ...weekendMeeting,
          isWeekendMeetingAlertOpen: true,
          mutationType: "Delete Speaker",
        },
      });
    },
    handleSelectSpeakerAssignmentClick: ({
      speaker_id,
      outline_id,
    }: {
      speaker_id: string;
      outline_id: string;
    }) => {
      const weekendMeeting = get().weekendMeeting;
      set({
        weekendMeeting: {
          ...weekendMeeting,
          isWeekendMeetingAlertOpen: true,
          speaker_id,
          outline_id,
          mutationType: "Update Speaker",
        },
      });
    },
    handleDeleteWeekendAssignmentClick: ({
      assignment,
    }: {
      assignment: "reader" | "chairman";
    }) => {
      const weekendMeeting = get().weekendMeeting;
      set({
        weekendMeeting: {
          ...weekendMeeting,
          isWeekendMeetingAlertOpen: true,
          assignment,
          mutationType: `Delete Assignment`,
        },
      });
    },
    handleSelectWeekendAssignmentClick: ({
      participant_id,
      assignment,
    }: {
      participant_id: string;
      assignment: "reader" | "chairman";
    }) => {
      const weekendMeeting = get().weekendMeeting;
      set({
        weekendMeeting: {
          ...weekendMeeting,
          isWeekendMeetingAlertOpen: true,
          participant_id,
          assignment,
          mutationType: `Update Assignment`,
        },
      });
    },
  };
};
