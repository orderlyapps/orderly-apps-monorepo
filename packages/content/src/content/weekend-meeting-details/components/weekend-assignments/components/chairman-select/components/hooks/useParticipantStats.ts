import { useWeekendParticipantsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-weekend-participants-query";
import { startOfDayUTC } from "@amodeo/util/dateTime/start-of-Day-UTC/startOfDayUTC";
import { getAssignmentStats } from "../../../helper/getAssignmentStats.js";
import { ParticipantWithStats } from "../types/ChairmanSelectTypes.js";

export const useParticipantStats = (weekId: string) => {
  const { data: participants, isLoading, error } = useWeekendParticipantsQuery();

  const participantsWithStats = participants?.map(
    ({ assignments, ...rest }) => {
      const thisWeek = startOfDayUTC(weekId).getTime();

      const calculatedAssignments = assignments
        ?.map((a: { week_id: string; assignment: "chairman" | "reader" }) => {
          const weeksValue =
            (startOfDayUTC(a.week_id).getTime() - thisWeek) /
            1000 /
            60 /
            60 /
            24 /
            7;
          return { assignment: a.assignment, weeksValue };
        })
        .sort((a, b) => a.weeksValue - b.weeksValue) || [];
      
      // Ensure participant has all required fields for formatName function
      const participant: ParticipantWithStats = {
        ...rest,
        reader: getAssignmentStats(calculatedAssignments, "reader"),
        chairman: getAssignmentStats(calculatedAssignments, "chairman"),
        combined: getAssignmentStats(calculatedAssignments, "combined"),
      };

      return participant;
    }
  ) || [];

  return {
    participantsWithStats,
    isLoading,
    error
  };
};
