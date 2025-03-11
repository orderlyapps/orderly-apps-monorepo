import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";

export const useCongregationsQuery = () =>
  useQuery({
    queryKey: ["congregations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("congregations")
        .select("*")
        .order("name", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
