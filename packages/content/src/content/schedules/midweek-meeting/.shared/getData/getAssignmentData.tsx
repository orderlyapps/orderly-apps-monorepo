import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { AssignmentProps } from "../../details/components/Assignment.js";
import { getAssignmentAssistant } from "./getAssistant.js";
import { getAssignmentColor } from "./getColor.js";
import { getCounsellor } from "./getCounsellor.js";
import { getAssignmentDetails } from "./getDetails.js";
import { getAssignmentLabel } from "./getLabel.js";
import { getAssignmentParticipant } from "./getParticipant.js";
import { getSchool } from "./getSchool.js";
import { getAssignmentTime } from "./getTime.js";

export type AssigmentData = ReturnType<typeof getAssignmentData>;

export const getAssignmentData = ({ assignment_id, data }: AssignmentProps) => {
  const schoolNumber = assignment_id.match(/school_(\d+).*/)?.[1] || null;

  const applyAssignmentNumber =
    assignment_id.match(/.*apply_(\d+)/)?.[1] || null;

  const livingAssignmentNumber =
    assignment_id.match(/.*living_(\d+)/)?.[1] || null;

  const label = getAssignmentLabel({
    assignment_id,
    data,
    applyAssignmentNumber,
    livingAssignmentNumber,
  });

  const color = getAssignmentColor({
    assignment_id,
    data,
    applyAssignmentNumber,
    livingAssignmentNumber,
  });

  const assistant = getAssignmentAssistant({
    assignment_id,
    data,
    applyAssignmentNumber,
    livingAssignmentNumber,
    schoolNumber,
  });

  const time = getAssignmentTime({
    assignment_id,
    data,
    applyAssignmentNumber,
    livingAssignmentNumber,
  });

  const details = getAssignmentDetails({
    assignment_id,
    data,
    applyAssignmentNumber,
    livingAssignmentNumber,
  });

  const participant = getAssignmentParticipant({
    assignment_id,
    data,
    applyAssignmentNumber,
    livingAssignmentNumber,
  });

  const date = formatWeekDate(data.meeting_data.mwb_week_date);

  const padding = "0.2rem";

  const school = {
    ...getSchool(schoolNumber),
    hasSecondSchool: !!data.participants.counselor_2,
  };

  const counsellor = getCounsellor({
    data,
    schoolNumber,
    assignment_id,
  });

  return {
    time,
    details,
    assistant,
    label,
    color,
    participant,
    padding,
    date,
    school,
    counsellor,
    assignment_id,
  };
};
