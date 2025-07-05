import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const basename = import.meta.env.VITE_BASENAME ?? "/";

const Main = () => (
  <StrictMode>
    <BrowserRouter basename={basename}>
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
