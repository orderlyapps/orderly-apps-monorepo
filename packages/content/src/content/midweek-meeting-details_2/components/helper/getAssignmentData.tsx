import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { AssignmentProps } from "../Assignment.js";
import { getAssignmentAssistant } from "./getAssignmentAssistant.js";
import { getAssignmentColor } from "./getAssignmentColor.js";
import { getAssignmentDetails } from "./getAssignmentDetails.js";
import { getAssignmentLabel } from "./getAssignmentLabel.js";
import { getAssignmentParticipant } from "./getAssignmentParticipant.js";
import { getAssignmentTime } from "./getAssignmentTime.js";

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
  return { time, details, assistant, label, color, participant, padding, date };
};
