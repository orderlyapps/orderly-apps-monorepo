import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { getAssignmentStats } from "../use-participants-list/getAssignmentStats.js";

export const initialFilters = {
  sortValue: {
    type: "combined",
    stat: "averageAssignments",
  } as {
    type: "combined" | "reader" | "chairman";
    stat: keyof ReturnType<typeof getAssignmentStats>;
  },
  averageAssignments: 0,
  lastAssignment: 0,
  lastChairmanAssignment: 0,
  betweenAssignments: 0,
};

export const useFilters = (assignmentType: "reader" | "chairman") => {
  const [filters, setFilters] = useLocalStorage(
    "select-weekend-" + assignmentType + "-filters",
    initialFilters
  );

  const updateFilter = <K extends keyof typeof initialFilters>(
    key: K,
    value: (typeof initialFilters)[K]
  ) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  return {
    filters: {
      sortValue: filters?.sortValue || initialFilters.sortValue,
      averageAssignments:
        filters?.averageAssignments || initialFilters.averageAssignments,
      lastAssignment: filters?.lastAssignment || initialFilters.lastAssignment,
      lastChairmanAssignment:
        filters?.lastChairmanAssignment ||
        initialFilters.lastChairmanAssignment,
      betweenAssignments:
        filters?.betweenAssignments || initialFilters.betweenAssignments,
    },
    updateFilter,
  };
};

export const useReadFilters = (assignmentType: "reader" | "chairman") => {
  const filters = useReadLocalStorage(
    "select-weekend-" + assignmentType + "-filters"
  ) as typeof initialFilters;
  return {
    sortValue: filters?.sortValue || initialFilters.sortValue,
    averageAssignments:
      filters?.averageAssignments || initialFilters.averageAssignments,
    lastAssignment: filters?.lastAssignment || initialFilters.lastAssignment,
    lastChairmanAssignment:
      filters?.lastChairmanAssignment || initialFilters.lastChairmanAssignment,
    betweenAssignments:
      filters?.betweenAssignments || initialFilters.betweenAssignments,
  };
};
