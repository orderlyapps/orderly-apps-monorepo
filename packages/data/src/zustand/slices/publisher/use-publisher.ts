export const publisher = "";

export const setPublisher = (
  set: (state: { publisher: string }) => void
) => {
  return (publisher: string) => {
    set({ publisher });
  };
};
