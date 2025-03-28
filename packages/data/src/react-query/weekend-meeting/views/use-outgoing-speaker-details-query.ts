import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";

/**
 * Fetches outgoing speakers from the database.
 * @param week The week id in the format "yyyy-MM-dd".
 * @returns The outgoing speakers for the given week.
 */
export const useOutgoingSpeakerDetailsQuery = (
  week_id: string,
  options: { enabled: boolean }
) =>
  useQuery({
    queryKey: ["outgoing-speakers", week_id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_outgoing_speakers")
        .select("*")
        .eq("week_id", week_id)
        .eq("congregation_id", "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5")
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: options.enabled,
  });
