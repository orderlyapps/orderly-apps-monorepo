import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";

export const useSpeakerOutlinesQuery = () =>
  useQuery({
    queryKey: ["speaker-outlines"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_speaker_outlines")
        .select("*");

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
