import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";

/**
 * Fetches outgoing speakers from the database.
 * @returns The outgoing speakers.
 */
export const useSpeakersQuery = (
  options: { enabled?: boolean } = { enabled: true }
) =>
  useQuery({
    queryKey: ["speakers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_speakers")
        .select("*")
        .order("last_name", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: options.enabled,
  });
