import { useReadFilters } from "../use-filters/useFilters.js";

export const useFilterAndSortParticipants = (
  participants: any,
  assignmentType: "reader" | "chairman"
) => {
  const filters = useReadFilters(assignmentType);
  const filteredAndSortedParticipants = participants
    .filter((a: any) => {
      if (!a.combined.averageAssignments?.weeksValue) return true;
      return (
        a.combined.averageAssignments?.weeksValue &&
        a.combined.averageAssignments?.weeksValue > filters.averageAssignments
      );
    })
    .filter((a: any) => {
      if (!a.combined.previousAssignment?.weeksValue) return true;
      return (
        a.combined.previousAssignment?.weeksValue &&
        a.combined.previousAssignment?.weeksValue > filters.lastAssignment
      );
    })
    .filter((a: any) => {
      if (a[assignmentType].previousAssignment === null) return true;

      return (
        a[assignmentType].previousAssignment?.weeksValue &&
        a[assignmentType].previousAssignment?.weeksValue >
          filters.lastAssignment
      );
    })
    .filter((a: any) => {
      // Handle null weeksBetweenPreviousAndNextAssignment
      if (!a.combined.weeksBetweenPreviousAndNextAssignment) return true;

      if (
        a.combined.weeksBetweenPreviousAndNextAssignment.weeksValue === null
      ) {
        return true;
      }

      return (
        a.combined.weeksBetweenPreviousAndNextAssignment.weeksValue &&
        a.combined.weeksBetweenPreviousAndNextAssignment.weeksValue >
          filters.betweenAssignments
      );
    })
    .sort(
      (a: any, b: any) =>
        (b[filters.sortValue.type][filters.sortValue.stat]?.weeksValue ||
          Infinity) -
        (a[filters.sortValue.type][filters.sortValue.stat]?.weeksValue ||
          Infinity)
    );

  return filteredAndSortedParticipants;
};
