import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { useStore } from "../../../zustand/stores/use-store.js";

export const usePublishersQuery = (enabled: boolean = true) =>
  useQuery({
    queryKey: ["publishers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("publishers")
        .select("*")
        .eq("congregation_id", useStore.getState().congregation.id)
        .order("last_name", { ascending: true })
        .order("first_name", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled,
  });
