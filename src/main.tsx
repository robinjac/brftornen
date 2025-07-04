import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const Main = () => (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const rootElement = document.getElementById("root");

if (rootElement?.hasChildNodes()) {
  hydrateRoot(rootElement, <Main />);
} else {
  createRoot(rootElement!).render(<Main />);
}
