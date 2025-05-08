import { applyAssignmentDoesNotExist } from "../.shared/applyAssignmentDoesNotExist.js";
import { livingAssignmentDoesNotExist } from "../.shared/livingAssignmentDoesNotExist.js";
import { schoolDoesNotExist } from "../.shared/schoolDoesNotExist.js";
import { AssignmentProps } from "../details/components/assignment/Assignment.js";

export const shouldHide = ({ assignment_id, data }: AssignmentProps) => {
  if (assignment_id === "counselor_2") return false;
  if (applyAssignmentDoesNotExist({ assignment_id, data })) return true;
  if (livingAssignmentDoesNotExist({ assignment_id, data })) return true;
  if (schoolDoesNotExist({ assignment_id, data })) return true;
  return false;
};
