import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";

/**
 * Fetches outgoing speakers from the database.
 * @returns The outgoing speakers.
 */
export const useMidweekParticipantsQuery = (
  options: { enabled?: boolean } = { enabled: true }
) =>
  useQuery({
    queryKey: ["midweek_participants"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_midweek_participants")
        .select("*")
        .order("last_name", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: options.enabled,
  });
