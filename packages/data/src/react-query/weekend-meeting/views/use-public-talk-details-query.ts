import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";

export const usePublicTalkDetailsQuery = (week_id: string) =>
  useQuery({
    queryKey: ["public-talk-details", week_id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_public_talk_details")
        .select("*")
        .eq("week_id", week_id)
        .eq("congregation_id", "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5")
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
