import { useWeekendParticipantsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-weekend-participants-query";
import { startOfDayUTC } from "@amodeo/util/dateTime/start-of-Day-UTC/startOfDayUTC";
import { getAssignmentStats } from "./getAssignmentStats.js";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";

export const useParticipantsList = (assignmentType: "reader" | "chairman") => {
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const {
    data: participants,
    isLoading,
    error,
  } = useWeekendParticipantsQuery();

  const participantsWithStats =
    participants
      ?.filter((p) => p.participation.includes(assignmentType))
      .map(({ assignments, participation, ...rest }) => {
        const thisWeek = startOfDayUTC(week_id).getTime();

        const calculatedAssignments =
          assignments
            ?.map(
              (a: { week_id: string; assignment: "chairman" | "reader" }) => {
                const weeksValue =
                  (startOfDayUTC(a.week_id).getTime() - thisWeek) /
                  1000 /
                  60 /
                  60 /
                  24 /
                  7;
                return { assignment: a.assignment, weeksValue };
              }
            )
            .sort((a, b) => a.weeksValue - b.weeksValue) || [];

        // Ensure participant has all required fields for formatName function
        const participant = {
          ...rest,
          [assignmentType]: getAssignmentStats(
            calculatedAssignments,
            assignmentType
          ),
          combined: getAssignmentStats(calculatedAssignments, "combined"),
        };

        return participant as typeof participant & {
          reader?: ReturnType<typeof getAssignmentStats>;
          chairman?: ReturnType<typeof getAssignmentStats>;
        };
      }) || [];

  return {
    participants: participantsWithStats ,
    isLoading,
    error,
  };
};
