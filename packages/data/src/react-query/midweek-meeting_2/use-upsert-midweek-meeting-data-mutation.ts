import {
  useMutation,
  // useQueryClient
} from "@tanstack/react-query";
import { supabase } from "../../supabase/client.js";
import { Tables } from "../../supabase/supabase-types.js";

export const useUpsertMidweekMeetingDataMutation = () => {
  // const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (meetingData: Tables<"midweek_meeting_data">) => {
      const { data, error } = await supabase
        .from("midweek_meeting_data")
        .upsert(meetingData)
        .select();

      if (error) console.error(error);
      else {
        console.log(data);
      }

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },

    onSuccess: (_meetingData) => {
      // queryClient.invalidateQueries({
      //   queryKey: ["publishers"],
      // });
      // queryClient.invalidateQueries({
      //   queryKey: ["publisher", publisher[0].id],
      // });
    },
  });
};
