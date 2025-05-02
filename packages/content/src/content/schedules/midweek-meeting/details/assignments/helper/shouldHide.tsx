import { AssignmentProps } from "../Assignment.js";
import { applyAssignmentDoesNotExist } from "./applyAssignmentDoesNotExist.js";
import { livingAssignmentDoesNotExist } from "./livingAssignmentDoesNotExist.js";
import { schoolDoesNotExist } from "./schoolDoesNotExist.js";

export const shouldHide = ({ assignment_id, data }: AssignmentProps) => {
  if (applyAssignmentDoesNotExist({ assignment_id, data })) return true;
  if (livingAssignmentDoesNotExist({ assignment_id, data })) return true;
  if (schoolDoesNotExist({ assignment_id, data })) return true;
  return false;
};
