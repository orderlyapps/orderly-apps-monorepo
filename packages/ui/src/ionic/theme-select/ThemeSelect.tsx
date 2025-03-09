import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { useStore } from "@amodeo/data/zustand/stores/use-store";

export function ThemeSelect() {
  const theme = useStore.use.theme();
  const setTheme = useStore.use.setTheme();

  const handleThemeChange = (ev: any) => {
    document.documentElement.classList.toggle(
      "ion-palette-dark",
      ev.target.value === "dark"
    );

    setTheme(ev.target.value);
  };

  return (
    <IonItem>
      <IonLabel>
        <strong>Theme:</strong>
      </IonLabel>
      <IonSelect
        aria-label="Theme"
        interface="popover"
        placeholder="Select theme"
        slot="end"
        value={theme}
        onIonChange={handleThemeChange}
      >
        <IonSelectOption value="dark">Dark</IonSelectOption>
        <IonSelectOption value="light">Light</IonSelectOption>
        {/* <IonSelectOption value="auto">Auto</IonSelectOption> */}
      </IonSelect>
    </IonItem>
  );
}
