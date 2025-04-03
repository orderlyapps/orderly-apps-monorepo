import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { FilterSettings } from "../types/ChairmanSelectTypes.js";

export const useChairmanFilters = () => {
  const defaultFilters: FilterSettings = {
    lastAssignment: 0,
    lastChairmanAssignment: 0,
    averageAssignments: 0,
    betweenAssignments: 0,
    sortValue: {
      type: "combined",
      stat: "previousAssignment",
    },
  };

  const [filters, setFilters] = useLocalStorage<FilterSettings>(
    "select-chairman-filters",
    defaultFilters
  );

  const updateFilter = <K extends keyof FilterSettings>(
    key: K,
    value: FilterSettings[K]
  ) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  return {
    filters,
    updateFilter,
    setFilters,
  };
};

export const useReadChairmanFilters = (): FilterSettings => {
  const filters = useReadLocalStorage<FilterSettings>("select-chairman-filters");
  
  // Fallback to default values if localStorage is empty
  return filters || {
    lastAssignment: 0,
    lastChairmanAssignment: 0,
    averageAssignments: 0,
    betweenAssignments: 0,
    sortValue: {
      type: "combined",
      stat: "previousAssignment",
    },
  };
};
