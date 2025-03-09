import { Orderly } from "@amodeo/content/shells/orderly/Orderly";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useRegisterSW } from "virtual:pwa-register/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Orderly useRegisterSW={useRegisterSW} />
  </StrictMode>
);
