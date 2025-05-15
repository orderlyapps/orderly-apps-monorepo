import {
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonLabel,
} from "@ionic/react";

type PasswordInputProps = {
  label: string;
  value: string;
  onChange: (event: string) => void;
};

export const PasswordInput = ({
  label,
  value,
  onChange,
}: PasswordInputProps) => {
  return (
    <IonItem>
      <IonInput
        type="password"
        value={value}
        onIonInput={(e) => onChange(e.detail.value as string)}
      >
        <IonLabel slot="label">
          <strong>{label}</strong>
        </IonLabel>
        <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
      </IonInput>
    </IonItem>
  );
};
