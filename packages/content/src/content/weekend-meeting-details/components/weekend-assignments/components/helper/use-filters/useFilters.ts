import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { getAssignmentStats } from "../use-participants-list/getAssignmentStats.js";
import { TablesUpdate } from "@amodeo/data/supabase/supabase-types";

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
  selectAlert: false,
  assignmentData: {} as TablesUpdate<"weekend_assignments">,
  alertMessage: "",
  mutationType: "upsert" as "upsert" | "delete",
};

export const useFilters = (assignmentType: "reader" | "chairman") => {
  const [filters, setFilters] = useLocalStorage(
    "select-weekend-" + assignmentType + "-filters",
    initialFilters
  );

  const updateFilter = <K extends keyof typeof initialFilters>(
    newValues: Record<K, (typeof initialFilters)[K]>
  ) => {
    setFilters({
      ...filters,
      ...newValues,
    });
  };

  return {
    filters: {
      ...initialFilters,
      ...filters,
    },
    updateFilter,
  };
};

export const useReadFilters = (assignmentType: "reader" | "chairman") => {
  const filters = useReadLocalStorage(
    "select-weekend-" + assignmentType + "-filters"
  ) as typeof initialFilters;
  return {
    ...initialFilters,
    ...filters,
  };
};
