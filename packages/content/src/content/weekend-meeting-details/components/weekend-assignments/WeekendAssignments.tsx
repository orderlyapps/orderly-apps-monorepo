import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useWeekendAssignmentDetailsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-weekend-assignment-details-query";
import { useCardModal } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { formatName } from "@amodeo/util/formatters/formatName";
import { ChairmanSelect } from "./components/chairman-select/ChairmanSelect.js";
import { ReaderSelect } from "./components/reader-select/ReaderSelect.js";

export const WeekendAssignments = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  return (
    <>
      <ChairmanSelect modalProps={modalProps} />
      <ReaderSelect modalProps={modalProps} />
    </>
  );
};
