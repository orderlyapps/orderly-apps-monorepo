import { AssignmentProps } from "../Assignment.js";
import { applyAssignmentDoesNotExist } from "./applyAssignmentDoesNotExist.js";
import { livingAssignmentDoesNotExist } from "./livingAssignmentDoesNotExist.js";
import { schoolDoesNotExist } from "./schoolDoesNotExist.js";

export const shouldHide = ({ assignment, data }: AssignmentProps) => {
  if (applyAssignmentDoesNotExist({ assignment, data })) return true;
  if (livingAssignmentDoesNotExist({ assignment, data })) return true;
  if (schoolDoesNotExist({ assignment, data })) return true;
  return false;
};
