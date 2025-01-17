import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SWRConfig } from "swr";
import { fetcher } from "./Utils/helpers.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </StrictMode>
);
