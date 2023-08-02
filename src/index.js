import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { defaultTheme } from "./theme/defaultTheme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ThemeProvider theme={new defaultTheme()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
