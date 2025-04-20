import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../supabase/client.js";
import { TablesInsert } from "../../../supabase/supabase-types.js";
import { useStore } from "../../../zustand/stores/use-store.js";

export const useUpsertSpeakerAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (
      assignmentData: Omit<
        TablesInsert<"speaker_assignments">,
        "congregation_id"
      >
    ) => {
      console.log("🚀 ~ mutationFn: ~ assignmentData:", assignmentData);
      const { data, error } = await supabase
        .from("speaker_assignments")
        .upsert({
          ...assignmentData,
          congregation_id: useStore.getState().congregation.id,
        })
        .select();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: (_data, variables, _context) => {
      queryClient.invalidateQueries({
        queryKey: ["public-talks"],
      });
      queryClient.invalidateQueries({
        queryKey: ["weekend-meeting", variables.week_id],
      });
    },
  });
};
