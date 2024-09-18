import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextState from "./components/ContextState.jsx";

createRoot(document.getElementById("root")).render(
  <ContextState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextState>
);
