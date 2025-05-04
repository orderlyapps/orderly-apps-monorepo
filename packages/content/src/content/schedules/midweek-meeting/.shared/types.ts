import { getAssignmentData } from "./getData/getAssignmentData.js";
import { AssignmentProps } from "../details/components/Assignment.js";

export type GetAssignmentDataProps = AssignmentProps & {
  applyAssignmentNumber?: string | null;
  livingAssignmentNumber?: string | null;
  schoolNumber?: string | null;
};

export type GetAssignmentDataReturnType = ReturnType<typeof getAssignmentData>;
