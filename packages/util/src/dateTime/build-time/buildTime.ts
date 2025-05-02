import { format, formatDistanceToNow } from "date-fns";

declare const BUILD_TIME: number;

export const buildTime = {
  timeDifference: formatDistanceToNow(new Date(BUILD_TIME), {
    addSuffix: true,
  }),
  formattedBuildTime: format(new Date(BUILD_TIME), "PP 'at' h:mmaaa"),
};

export default buildTime;

