export const congregation_id = "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5";

export const setCongregation = (
  set: (state: { congregation_id: string }) => void
) => {
  return (congregation_id: string) => {
    set({ congregation_id });
  };
};
