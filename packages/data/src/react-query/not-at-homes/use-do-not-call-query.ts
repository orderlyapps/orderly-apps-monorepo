import { useQuery } from "@tanstack/react-query";
import { Database } from "../../supabase/supabase-types.js";
import { supabase } from "../../supabase/client.js";

export const useDoNotCallQuery = (
  congregationId: Database["public"]["Functions"]["get_do_not_call_with_coordinates"]["Args"]["p_congregation_id"] = "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5"
) =>
  useQuery({
    queryKey: ["do_not_call"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc(
        "get_do_not_call_with_coordinates2" as any,
        { p_congregation_id: congregationId }
      );
      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
