import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";

/**
 * Fetches public talks from the database.
 * @param startDate The start date in the format "yyyy-MM-dd".
 * @param endDate The end date in the format "yyyy-MM-dd".
 * @returns The public talks between the given start and end dates.
 */
export const usePublicTalksQuery = (startDate: string, endDate: string) =>
  useQuery({
    queryKey: ["public-talks"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_public_talk_details")
        .select("*")
        .gte("week_id", startDate)
        .lte("week_id", endDate)
        .eq("congregation_id", "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5")
        .order("week_id", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
