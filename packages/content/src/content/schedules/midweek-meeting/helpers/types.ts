import { AssignmentProps } from "../Assignment.js";
import { getAssignmentData } from "./getAssignmentData.js";

export type GetAssignmentDataProps = AssignmentProps & {
  applyAssignmentNumber?: string | null;
  livingAssignmentNumber?: string | null;
  schoolNumber?: string | null;
};

export type GetAssignmentDataReturnType = ReturnType<typeof getAssignmentData>;
