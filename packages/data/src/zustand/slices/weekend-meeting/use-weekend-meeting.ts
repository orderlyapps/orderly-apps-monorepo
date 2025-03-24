import { TablesInsert } from "../../../supabase/supabase-types.js";

export const weekendMeeting = {
  assignmentDetails: {
    week_id: "",
    congregation_id: "",
    outline_id: "" as string | null,
    speaker_id: "",
  } as TablesInsert<"speaker_assignments">,

  isSelectSpeakerModalOpen: false,
  speakerSearchQuery: "",
  isConfirmDeleteAssignmentAlertOpen: false,
  isConfirmUpsertAssignmentAlertOpen: false,
  confirmUpsertAssignmentAlertMessage: "",
  isSelectOutlineModalOpen: false,
  outlineSearchQuery: "",
};

export type WeekendMeeting = typeof weekendMeeting;

export const setWeekendMeeting = (
  set: (state: { weekendMeeting: WeekendMeeting }) => void,
  get: () => { weekendMeeting: WeekendMeeting }
) => {
  return {
    setSelectSpeakerModalOpen: (open: boolean) => {
      const weekendMeeting = get().weekendMeeting;
      set({
        weekendMeeting: {
          ...weekendMeeting,
          isSelectSpeakerModalOpen: open,
        },
      });
    },

    setSpeakerSearchQuery: (query: string) => {
      const weekendMeeting = get().weekendMeeting;
      set({
        weekendMeeting: {
          ...weekendMeeting,
          speakerSearchQuery: query,
        },
      });
    },

    confirmUpsertSpeakerAssignment: ({
      speaker_id,
      alertMessage,
    }: {
      speaker_id: string;
      alertMessage: string;
    }) => {
      const weekendMeeting = get().weekendMeeting;
      set({
        weekendMeeting: {
          ...weekendMeeting,
          assignmentDetails: {
            ...weekendMeeting.assignmentDetails,
            speaker_id,
          },
          isConfirmUpsertAssignmentAlertOpen: true,
          confirmUpsertAssignmentAlertMessage: alertMessage,
        },
      });
    },

    confirmDeleteSpeakerAssignment: () => {
      console.log("confirmDeleteSpeakerAssignment");
      const weekendMeeting = get().weekendMeeting;
      set({
        weekendMeeting: {
          ...weekendMeeting,
          isConfirmDeleteAssignmentAlertOpen: false,
          isSelectOutlineModalOpen: false,
        },
      });
    },
  };
};
