import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./components/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <Auth0Provider
    domain="dev-uabdwbdjkx2823bh.us.auth0.com"
    clientId="hz38f36qWlldnAfdE5zJxkGxxBhyszbe"
    redirectUri="http://localhost:5173/login"
  >
    <App />
  </Auth0Provider>

  // </React.StrictMode>
);
