import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";

export const useStreetsQuery = ({
  congregationId = "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5",
}: {
  congregationId?: string;
} = {}) =>
  useQuery({
    queryKey: ["streets"],
    queryFn: async () => {
      const { data, error } = await supabase
        .rpc("get_streets_by_congregation", {
          p_congregation_id: congregationId,
        })
        .order("street_name", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
