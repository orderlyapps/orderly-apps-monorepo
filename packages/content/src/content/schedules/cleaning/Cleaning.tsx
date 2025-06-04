import { ModalProps } from "@amodeo/ui/ionic/use-card-modal/useCardModal";

export const Cleaning = ({ 
  children,
  modalProps,
}: { 
  children?: React.ReactNode, 
  modalProps: ModalProps;
}) => {
  return (
    <div className="full centered">
      <h1>Cleaning Component</h1>
      {children}
    </div>
  );
};
