import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";

export const PublisherDetails = ({ 
  children,
  modalProps,
}: { 
  children?: React.ReactNode, 
  modalProps: ReturnType<typeof useCardModal>['modalProps'];
}) => {
  return (
    <div className="full centered">
      <h1>Publisher Details Component</h1>
      {children}
    </div>
  );
};
