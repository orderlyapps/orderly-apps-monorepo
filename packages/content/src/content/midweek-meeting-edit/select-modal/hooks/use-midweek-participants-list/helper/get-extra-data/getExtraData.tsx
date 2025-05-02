import {
  Tables,
  MidweekAssignments,
} from "@amodeo/data/supabase/supabase-types";
import { getAverageAssignments } from "./helper/getAverageAssignments.js";
import { getIsCurrrentAssignee } from "./helper/getIsCurrrentAssignee.js";
import { prepareSeedData } from "./helper/prepareSeedData.js";
import { getPastAssignments } from "./helper/getPastAssignments.js";
import { getWeeksBetweenPreviousAndNextAssignments } from "./helper/getWeeksBetweenPreviousAndNextAssignments.js";
import { getLastSpecificAssignment } from "./helper/getLastSpecificAssignment.js";

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
    const averageAssignments = getAverageAssignments(seedData);
    const { lastSpecificAssignment, weeksSinceLastSpecificAssignment } =
      getLastSpecificAssignment(seedData);
    const { pastAssignments, weeksSinceLastAssignment } =
      getPastAssignments(seedData);
    const weeksBetweenPreviousAndNextAssignments =
      getWeeksBetweenPreviousAndNextAssignments(seedData);
    return {
      ...rest,
      isCurrentAssignee,
      pastAssignments,
      lastSpecificAssignment,
      // filters
      averageAssignments,
      weeksSinceLastSpecificAssignment,
      weeksSinceLastAssignment,
      weeksBetweenPreviousAndNextAssignments,
    };
  });
};
