import { GetAssignmentDataReturnType } from "./types.js";

const requests = {
  ASSIGNMENMT:
    "You have a new upcoming part on the Christian Life and Ministry Meeting?\n",
  FILL_IN:
    "Are you available to fill in for the following part on the Christian Life and Ministry Meeting?\n",
  REMINDER:
    "This is just a reminder for your upcoming Christian Life and Ministry Meeting part.\n",
};

export const getSMSContent = (
  {
    participant,
    details,
    time,
    assistant,
    date,
    label,
  }: GetAssignmentDataReturnType,
  type: keyof typeof requests
) => {
  const newLine = "\n";

  const name =
    participant?.first_name && type !== "FILL_IN"
      ? ` ${participant?.first_name}`
      : "";

  const greeting = `Hi${name},`;

  const requestContent = requests[type];

  const dateContent = (date && `\nDATE: ${date}\n`) || "";

  const partContent = `\nPART: ${label}\n`;

  const assistantContent = assistant?.show
    ? `\n${assistant.label.toUpperCase()} ${assistant.assistantsName}\n`
    : "";

  const timeContent = (time && `\nTIME: ${time} min\n`) || "";

  const detailsContent = (details && `\nMATERIAL: ${details}\n`) || "";

  return (
    greeting +
    newLine +
    requestContent +
    dateContent +
    partContent +
    assistantContent +
    timeContent +
    detailsContent
  );
};
