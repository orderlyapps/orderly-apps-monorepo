import { Proclaimer } from "@amodeo/content/shells/proclaimer/Proclaimer";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Proclaimer />
  </StrictMode>
);
