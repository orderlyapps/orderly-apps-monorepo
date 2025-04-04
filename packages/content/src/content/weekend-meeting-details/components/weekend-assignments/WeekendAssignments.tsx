import { useCardModal } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { ReaderSelect } from "./components/ReaderSelect.js";
import { ChairmanSelect } from "./components/ChairmanSelect.js";

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
