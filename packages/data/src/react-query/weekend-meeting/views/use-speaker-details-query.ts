import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";

export const useSpeakerDetailsQuery = (speaker_id: string) =>
  useQuery({
    queryKey: ["speaker-details", speaker_id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_speakers")
        .select("*")
        .eq("id", speaker_id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
