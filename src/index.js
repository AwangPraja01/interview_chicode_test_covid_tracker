import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Covid19ContextProvider from "./contexts/Covid19Context";
import NavigationContextProvider from "./contexts/NavigationContext";

ReactDOM.render(
  <React.StrictMode>
    <NavigationContextProvider>
      <Covid19ContextProvider>
        <App />
      </Covid19ContextProvider>
    </NavigationContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
