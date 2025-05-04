import {
  Tables,
  MidweekAssignments,
} from "@amodeo/data/supabase/supabase-types";
import { getAverageAssignments } from "./helper/getAverageAssignments.js";
import { getIsCurrrentAssignee } from "./helper/getIsCurrrentAssignee.js";
import { prepareSeedData } from "./helper/prepareSeedData.js";
import { getPreviousAssignments } from "./helper/getPreviousAssignments.js";
import { getWeeksBetweenPreviousAndNextAssignments } from "./helper/getWeeksBetweenPreviousAndNextAssignments.js";
import { getLastSpecificAssignment } from "./helper/getLastSpecificAssignment.js";
import { getNextAssignments } from "./helper/getNextAssignments.js";
import { getCurrentAssignments } from "./helper/getCurrentAssignments.js";

export const getExtraData = ({
  participants,
  currentWeek,
  currentAssignment,
}: {
  participants: Tables<"_view_midweek_participants">[];
  currentWeek: Date;
  currentAssignment: MidweekAssignments;
}) => {
  return participants?.map(({ assignments, ...rest }) => {
    const seedData = prepareSeedData({
      assignments,
      currentWeek,
      currentAssignment,
    });

    const isCurrentAssignee = getIsCurrrentAssignee(seedData);
    const { averageWeeksBetweenAssignments } = getAverageAssignments(seedData);
    const { lastSpecificAssignment, weeksSinceLastSpecificAssignment } =
      getLastSpecificAssignment({ ...seedData, rest });
    const { previousAssignments, weeksSinceLastAssignment } =
      getPreviousAssignments(seedData);
    const { currentAssignments } = getCurrentAssignments(seedData);
    const { nextAssignments, weeksUntillNextAssignment } =
      getNextAssignments(seedData);
    const weeksBetweenPreviousAndNextAssignments =
      getWeeksBetweenPreviousAndNextAssignments(seedData);

    return {
      ...rest,
      isCurrentAssignee,
      previousAssignments,
      lastSpecificAssignment,
      averageWeeksBetweenAssignments,
      weeksSinceLastSpecificAssignment,
      weeksSinceLastAssignment,
      weeksUntillNextAssignment,
      nextAssignments,
      weeksBetweenPreviousAndNextAssignments,
      currentAssignments,
    };
  });
};
