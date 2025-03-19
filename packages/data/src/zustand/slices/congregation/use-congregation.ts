export const congregation = "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5";

export const setCongregation = (
  set: (state: { congregation: string }) => void
) => {
  return (congregation: string) => {
    set({ congregation });
  };
};
