import "./dist/styles.css"
import React, { StrictMode } from "react";
import { createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import App from "./components/App.jsx"

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);