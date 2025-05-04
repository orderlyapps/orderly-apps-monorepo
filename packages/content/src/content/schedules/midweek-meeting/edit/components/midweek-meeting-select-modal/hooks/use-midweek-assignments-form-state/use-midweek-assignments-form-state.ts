import { MidweekAssignments } from "@amodeo/data/supabase/supabase-types";
import { useLocalStorage } from "usehooks-ts";
import { useSelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { AssigmentData } from "#content/schedules/midweek-meeting/.shared/getData/getAssignmentData.js";

export type MidweekAssignmentFilters = keyof typeof filterValues;

export const filterValues = {
  averageWeeksBetweenAssignments: 0,
  weeksSinceLastSpecificAssignment: 0,
  weeksSinceLastAssignment: 0,
  weeksBetweenPreviousAndNextAssignments: 0,
};

const initialMidweekAssignmentsFormState = {
  currentAssignment: "" as MidweekAssignments,
  newAssignmentDetails: null as {
    participant_id: string;
    assignment: MidweekAssignments;
  } | null,
  assignmentData: null as AssigmentData | null,
  filterValues,
  shouldFilterAssignmentParticipants: true,
  sortValue: "averageAssignments" as keyof typeof filterValues,
};

export const useMidweekAssignmentsFormState = () => {
  const [state, setState] = useLocalStorage(
    "midweek-assignments-form-state",
    initialMidweekAssignmentsFormState
  );

  const { openModal, onSelect } = useSelectModal("midweek-meeting-assignments");

  const openSelectParticipantModal = ({
    currentAssignment,
    assignmentData,
    modalTitle,
  }: {
    currentAssignment: MidweekAssignments;
    assignmentData: AssigmentData;
    modalTitle: string;
  }) => {
    setState({ ...state, currentAssignment, assignmentData });
    openModal(modalTitle);
  };

  const updateFilter = ({
    filterName,
    value,
  }: {
    filterName: string;
    value: number;
  }) => {
    setState({
      ...state,
      filterValues: { ...state.filterValues, [filterName]: value },
    });
  };

  const setSortValue = (sortValue: keyof typeof filterValues) => {
    setState({
      ...state,
      sortValue,
    });
  };

  const onSelectParticipant = ({
    alertMessage,
    newAssignmentDetails,
  }: {
    alertMessage: string;
    newAssignmentDetails: typeof state.newAssignmentDetails;
  }) => {
    setState({ ...state, newAssignmentDetails });
    onSelect({ alertMessage });
  };

  return {
    ...state,
    openSelectParticipantModal,
    updateFilter,
    setSortValue,
    onSelectParticipant,
  };
};
