export const congregation = "";

export const setCongregation = (
  set: (state: { congregation: string }) => void
) => {
  return (congregation: string) => {
    set({ congregation });
  };
};
