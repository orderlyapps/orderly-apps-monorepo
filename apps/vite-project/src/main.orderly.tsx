import { Orderly } from "@amodeo/content/shells/orderly/Orderly";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Orderly />
  </StrictMode>
);
