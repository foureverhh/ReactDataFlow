import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import "./styles.css";

function ClickyButton({ numberOfButton, onSelection }) {
  const makeButton = v => (
    <button key={v} value={v} onClick={event => onSelection(event.target.id)}>
      v
    </button>
  );
  return <div>{_.range(1, numberOfButton + 1).map(makeButton)}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ClickyButton numberOfButton={99} onSelection={console.log} />,
  rootElement
);
