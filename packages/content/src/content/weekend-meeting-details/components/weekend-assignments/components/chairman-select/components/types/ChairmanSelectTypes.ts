// Use correct path for Supabase types
import { Tables } from "@amodeo/data/supabase/exported-types-remote";

export type ParticipantWithStats = {
  id?: string | null;
  first_name?: string | null;
  surname?: string | null;
  last_name?: string | null;
  congregation_id?: string | null;
  combined: AssignmentStats;
  chairman: AssignmentStats;
  reader: AssignmentStats;
};

export type AssignmentStats = {
  allAssignments: { assignment: string; weeksValue: number }[];
  differenceBetweenFirstAndLastAssignment: { weeksValue: number | null };
  averageAssignments: { weeksValue: number | null | false };
  previousAssignment: { weeksValue: number; assignment: string } | null;
  nextAssignment: { weeksValue: number; assignment: string } | null;
  weeksBetweenPreviousAndNextAssignment: { weeksValue: number | null } | null;
  currentWeek?: boolean;
};

export type FilterSettings = {
  lastAssignment: number;
  lastChairmanAssignment: number;
  averageAssignments: number;
  betweenAssignments: number;
  sortValue: {
    type: "combined" | "chairman" | "reader";
    stat: "previousAssignment" | "averageAssignments" | "weeksBetweenPreviousAndNextAssignment";
  };
};

export type ChairmanSelectProps = {
  weekId: string;
  chairman?: Tables<"publishers"> | null;
  onSelectChairman?: (chairman: Tables<"publishers">) => void;
};
