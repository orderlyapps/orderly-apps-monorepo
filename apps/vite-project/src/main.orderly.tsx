import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Orderly } from "@amodeo/content/orderly/Orderly";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Orderly />
  </StrictMode>
);
