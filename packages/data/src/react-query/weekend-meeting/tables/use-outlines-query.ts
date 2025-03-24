import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { sortByStringPropertyNumerically } from "@amodeo/util/sort/sortObjectsByStringPropertyNumerically";

export const useOutlinesQuery = (enabled: boolean = true) =>
  useQuery({
    queryKey: ["outlines"],
    queryFn: async () => {
      const { data, error } = await supabase.from("outlines").select("*");

      if (error) {
        throw new Error(error.message);
      }

      return data.sort((a, b) => sortByStringPropertyNumerically(a, b, "id"));
    },
    enabled,
  });
