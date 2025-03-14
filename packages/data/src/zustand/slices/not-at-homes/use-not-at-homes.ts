export const notAtHomes = {
  isAddModalOpen: false,
};

export type NotAtHomes = typeof notAtHomes;

export const setNotAtHomes = (
  set: (state: { notAtHomes: NotAtHomes }) => void,
  get: () => { notAtHomes: NotAtHomes }
) => {
  return {
    toggleAddModalOpen: () => {
      const { isAddModalOpen } = get().notAtHomes;
      set({
        notAtHomes: {
          ...notAtHomes,
          isAddModalOpen: !isAddModalOpen,
        },
      });
    },
  };
};
