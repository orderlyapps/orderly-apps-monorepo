import { useSelectModal } from "./midweek-meeting-edit-modal/SelectModal.js";

type TestProps = {
  children?: React.ReactNode;
};

export const Test = ({ children }: TestProps) => {
  const { onSelect } = useSelectModal("test");
  if (children) return <div>{children}</div>;
  return (
    <div
      onClick={() =>
        onSelect({
          alertMessage: "Are you sure?",
        })
      }
    >
      Test
    </div>
  );
};
