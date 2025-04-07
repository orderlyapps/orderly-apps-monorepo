import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";

/**
 * Fetches public talks from the database.
 * @param startDate The start date in the format "yyyy-MM-dd".
 * @param endDate The end date in the format "yyyy-MM-dd".
 * @returns The public talks between the given start and end dates.
 */
export const useWeekendMeetingDetailsQuery_DELETE = (
  week: string,
  options: { enabled: boolean }
) =>
  useQuery({
    queryKey: ["weekend-meeting", week],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_public_talks")
        .select("*")
        .eq("week_id", week)
        .eq("congregation_id", "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5")
        .single();

      console.log("🚀 ~ queryFn: ~ error:", error);
      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: options.enabled,
  });
