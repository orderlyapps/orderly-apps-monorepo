import { IonSearchbar } from "@ionic/react";
import { ComponentProps } from "react";

export const Searchbar = ({
  ...props
}: ComponentProps<typeof IonSearchbar>) => {
  return (
    <IonSearchbar
      showCancelButton="focus"
      showClearButton="never"
      placeholder="Search"
      debounce={300}
      {...props}
    />
  );
};
