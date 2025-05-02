import { Tables, MidweekAssignments } from "@amodeo/data/supabase/supabase-types";

export const filterAssignmentParticipants = ([
  data, currentAssignment, shouldFilterAssignmentParticipants,
]: [Tables<"_view_midweek_participants">[], MidweekAssignments, boolean]) => {
  if (!shouldFilterAssignmentParticipants) return data;
  const participants = data?.filter((participant) => participant.participation.includes(currentAssignment)
  );
  return participants;
};
