import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import "./index.css";
import themeOptions from "./theme";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={themeOptions}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
