import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./components/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_APP_AUTH0_REDIRECT_URL;
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectUri}>
    <App />
  </Auth0Provider>
);
