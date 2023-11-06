import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click Me!</Button>
      <Button>Click me too!</Button>
      <Button>Click also me!</Button>
      <Button>Click the button</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
