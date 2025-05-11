import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";

export const Congregation = ({ 
  children,
  modalProps,
}: { 
  children?: React.ReactNode, 
  modalProps: ReturnType<typeof useCardModal>['modalProps'];
}) => {
  return (
    <div className="full centered">
      <h1>Congregation Component</h1>
      {children}
    </div>
  );
};
