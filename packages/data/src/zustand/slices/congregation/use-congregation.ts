export const congregation = {
  id: "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5",
  name: "Maitland",
};

export type Congregation = typeof congregation;

export const setCongregation = (
  set: (state: { congregation: Congregation }) => void
) => {
  return {
    setCongregation: (congregation: Congregation) => {
      set({ congregation });
    },
  };
};
