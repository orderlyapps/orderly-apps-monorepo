import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { useStore } from "../../../zustand/stores/use-store.js";

export const useVisitingSpeakersQuery = (enabled: boolean = true) =>
  useQuery({
    queryKey: ["visiting-speakers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("publishers")
        .select("*")
        .neq("congregation_id", useStore.getState().congregation.id)
        .order("last_name", { ascending: true })
        .order("first_name", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled,
  });
