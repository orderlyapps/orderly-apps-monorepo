import { useMidweekParticipantsQuery } from "@amodeo/data/react-query/midweek-meeting_2/use-midweek-participants-query";
import { useMidweekAssignmentsFormState } from "../use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";
import { startOfWeek } from "date-fns";
import { getExtraData } from "./helper/get-extra-data/getExtraData.js";
import { filterAssignmentParticipants } from "./helper/filter-assignment-participants/filterAssignmentParticipants.js";
import { MidweekAssignments } from "@amodeo/data/supabase/supabase-types";

export type MidweekParticipantsList = ReturnType<
  typeof useMidweekParticipantsList
>;

export type ParticipantType = NonNullable<
  MidweekParticipantsList["data"]
>[number];

export const useMidweekParticipantsList = () => {
  const { data, ...rest } = useMidweekParticipantsQuery();
  if (!data)
    return {
      ...rest,
      data: null,
      currentAssignment: null as unknown as MidweekAssignments,
    };

  const { currentAssignment, shouldFilterAssignmentParticipants } =
    useMidweekAssignmentsFormState();

  const currentWeek = startOfWeek(new Date(), { weekStartsOn: 1 });

  const participants = filterAssignmentParticipants([
    data,
    currentAssignment,
    shouldFilterAssignmentParticipants,
  ]);

  const participantsWithExtraData = getExtraData({
    participants,
    currentWeek,
    currentAssignment,
  });

  const returnData = {
    ...rest,
    data: participantsWithExtraData,
    currentAssignment,
  };

  return returnData;
};
