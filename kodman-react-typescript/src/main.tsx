import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeContextProvider } from "./UseContextHook";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
