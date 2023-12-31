import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import MainScreen from "./MainScreen";

import "./styles.css";

class App extends React.Component {
  render() {
    // There can only be ONE child element under Router.
    window.website_url = "https://nalamki.de/#/"
    return (
      <div style={{minWidth: "800px"}}>
      <HashRouter>
        <MainScreen />
      </HashRouter>
      </div>
    );
  }
}

// For latest version, check https://react.semantic-ui.com/usage/
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
