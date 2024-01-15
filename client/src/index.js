import React, { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./components/App"

ReactDom.render(<StrictMode> <App /> </StrictMode> , document.getElementById("root"));