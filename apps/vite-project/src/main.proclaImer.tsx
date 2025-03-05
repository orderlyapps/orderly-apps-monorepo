import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Proclaimer } from "@amodeo/content/proclaimer/Proclaimer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Proclaimer />
  </StrictMode>
);
