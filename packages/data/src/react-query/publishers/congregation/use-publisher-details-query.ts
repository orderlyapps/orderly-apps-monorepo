import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { useStore } from "../../../zustand/stores/use-store.js";

export const usePublisherDetailsQuery = (publisher_id: string) =>
  useQuery({
    queryKey: ["publisher", publisher_id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("_view_publisher_details")
        .select("*")
        .eq("congregation_id", useStore.getState().congregation.id)
        .eq("id", publisher_id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: !!publisher_id,
  });
