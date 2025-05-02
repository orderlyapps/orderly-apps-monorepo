import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useDeleteSpeakerAssignmentMutation } from "@amodeo/data/react-query/weekend-meeting/mutations/use-delete-speaker-assignment-mutation";
import { useDeleteWeekendAssignmentMutation } from "@amodeo/data/react-query/weekend-meeting/mutations/use-delete-weekend-assignment-mutation";
import { useUpsertSpeakerAssignmentMutation } from "@amodeo/data/react-query/weekend-meeting/mutations/use-upsert-speaker-assignment-mutation";
import { useUpsertWeekendAssignmentMutation } from "@amodeo/data/react-query/weekend-meeting/mutations/use-upsert-weekend-assignment-mutation";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { tryCatch } from "@amodeo/util/errors/try-catch";
import { IonAlert } from "@ionic/react";

const getToastData = (error: Error | null, mutationType: string) => {
  return error
    ? {
        weekendMeetingToastColor: "danger" as const,
        weekendMeetingToastMessage: `Failed to ${mutationType.toLowerCase()} assignment`,
      }
    : {
        weekendMeetingToastColor: "success" as const,
        weekendMeetingToastMessage: `Assignment ${mutationType.toLowerCase()} successfully`,
      };
};

export const WeekendMeetingAlert = () => {
  const { isWeekendMeetingAlertOpen, mutationType } =
    useStore.use.weekendMeeting();

  const { week_id } = useOrderlyPageParams("weekend_meeting_details");

  const handleWeekendMeetingAlertConfirmation =
    useStore.use.handleWeekendMeetingAlertConfirmation();

  const handleWeekendMeetingAlertCancellation =
    useStore.use.handleWeekendMeetingAlertCancellation();

  const { mutateAsync: deleteSpeakerAssignment } =
    useDeleteSpeakerAssignmentMutation();

  const { mutateAsync: upsertSpeakerAssignment } =
    useUpsertSpeakerAssignmentMutation();

  const { mutateAsync: deleteWeekendAssignment } =
    useDeleteWeekendAssignmentMutation();

  const { mutateAsync: upsertWeekendAssignment } =
    useUpsertWeekendAssignmentMutation();

  const handleConfirm = async () => {
    if (mutationType === "Delete Speaker") {
      const { error } = await tryCatch(deleteSpeakerAssignment(week_id));
      handleWeekendMeetingAlertConfirmation(getToastData(error, mutationType));
    }

    if (mutationType === "Update Speaker") {
      const { error } = await tryCatch(upsertSpeakerAssignment(week_id));
      handleWeekendMeetingAlertConfirmation(getToastData(error, mutationType));
    }

    if (mutationType === "Delete Assignment") {
      const { error } = await tryCatch(deleteWeekendAssignment(week_id));
      handleWeekendMeetingAlertConfirmation(getToastData(error, mutationType));
    }

    if (mutationType === "Update Assignment") {
      const { data, error } = await tryCatch(upsertWeekendAssignment(week_id));
      console.log("🚀 ~ handleConfirm ~ data:", data);
      handleWeekendMeetingAlertConfirmation(getToastData(error, mutationType));
    }
  };

  return (
    <IonAlert
      isOpen={isWeekendMeetingAlertOpen}
      header="Please Confirm"
      message={
        mutationType.includes("Delete")
          ? "Are you sure you want to delete this assignment?"
          : "Are you sure you want to update this assignment?"
      }
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
          handler: handleWeekendMeetingAlertCancellation,
        },
        {
          text: mutationType.includes("Delete") ? "Delete" : "Update",
          role: "confirm",
          handler: handleConfirm,
        },
      ]}
    />
  );
};
