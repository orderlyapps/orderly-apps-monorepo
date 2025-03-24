import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";

/**
 * Fetches outgoing speakers from the database.
 * @param startDate The start date in the format "yyyy-MM-dd".
 * @param endDate The end date in the format "yyyy-MM-dd".
 * @returns The outgoing speakers between the given start and end dates.
 */
export const useOutgoingSpeakersQuery = (
  schedule: {
    startDate: string;
    endDate: string;
  },
  options?: { enabled: boolean }
) =>
  useQuery({
    queryKey: ["outgoing-speakers", schedule.startDate, schedule.endDate],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_outgoing_speakers_2")
        .select("*")
        .gte("week_id", schedule.startDate)
        .lte("week_id", schedule.endDate)
        .eq("congregation_id", "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5")
        .order("week_id", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: !!schedule.startDate && !!schedule.endDate && options?.enabled,
  });
