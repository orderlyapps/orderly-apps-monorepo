import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { AssignmentProps } from "../Assignment.js";
import { getAssignmentAssistant } from "./getData/getAssistant.js";
import { getAssignmentColor } from "./getData/getColor.js";
import { getAssignmentDetails } from "./getData/getDetails.js";
import { getAssignmentLabel } from "./getData/getLabel.js";
import { getAssignmentParticipant } from "./getData/getParticipant.js";
import { getSchool } from "./getData/getSchool.js";
import { getCounsellor } from "./getData/getCounsellor.js";
import { getAssignmentTime } from "./getData/getTime.js";

export type AssigmentData = ReturnType<typeof getAssignmentData>;

export const getAssignmentData = ({ assignment, data }: AssignmentProps) => {
  const schoolNumber = assignment.match(/school_(\d+).*/)?.[1] || null;

  const applyAssignmentNumber = assignment.match(/.*apply_(\d+)/)?.[1] || null;

  const livingAssignmentNumber =
    assignment.match(/.*living_(\d+)/)?.[1] || null;

  const label = getAssignmentLabel({
    assignment,
    data,
    applyAssignmentNumber,
    livingAssignmentNumber,
  });

  const color = getAssignmentColor({
    assignment,
    data,
    applyAssignmentNumber,
    livingAssignmentNumber,
  });

  const assistant = getAssignmentAssistant({
    assignment,
    data,
    applyAssignmentNumber,
    livingAssignmentNumber,
    schoolNumber,
  });

  const time = getAssignmentTime({
    assignment,
    data,
    applyAssignmentNumber,
    livingAssignmentNumber,
  });

  const details = getAssignmentDetails({
    assignment,
    data,
    applyAssignmentNumber,
    livingAssignmentNumber,
  });

  const participant = getAssignmentParticipant({
    assignment,
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
    assignment,
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
    assignment,
  };
};
