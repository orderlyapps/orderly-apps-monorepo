/**
 * Formats the name of a person based on the provided options.
 * @param person The user object containing the name details
 * @param options The formatting options for the name
 * @returns The formatted name based on the options
 */
export function formatName(
  person?: Record<
    | "first_name"
    | "last_name"
    // | "display_name"
    // | "middle_name"
    | "congregation_id"
    | "id",
    string | null
  >,
  options?: {
    format: "first last" | "last, first";
  }
) {
  const firstName = person?.first_name || "";
  const lastName = person?.last_name || "";

  if (options?.format === "last, first" && lastName && firstName) {
    // Return last name followed by first name
    return `${lastName}, ${firstName}`;
  }
  return `${firstName} ${lastName}`;
}
