import { ModalProps } from "@amodeo/ui/ionic/use-card-modal/useCardModal";

export const FieldService = ({ 
  children,
  modalProps,
}: { 
  children?: React.ReactNode, 
  modalProps: ModalProps;
}) => {
  return (
    <div className="full centered">
      <h1>Field Service Component</h1>
      {children}
    </div>
  );
};
