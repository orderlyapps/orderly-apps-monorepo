export const getSchool = (schoolNumber: string | null) => {
  return {
    number: schoolNumber,
    label: schoolNumber === "1" ? "Main Hall" : "Second School",
  };
};
