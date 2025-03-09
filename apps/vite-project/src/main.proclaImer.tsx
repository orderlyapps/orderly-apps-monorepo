import { Proclaimer } from "@amodeo/content/shells/proclaimer/Proclaimer";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useRegisterSW } from "virtual:pwa-register/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Proclaimer useRegisterSW={useRegisterSW} />
  </StrictMode>
);
