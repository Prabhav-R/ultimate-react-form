import React, { useState } from "react";
import "./App.css";
import Form1 from "./components/Form1";
import Header from "./components/Header";
import Title from "./components/Title";

import Container from "@material-ui/core/Container";

import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Result from "./components/Result";

function App() {
  const [stepNumber, setStepNumber] = useState(1);

  let content;

  switch (stepNumber) {
    case 1:
      content = <Form1 setStepNumber={setStepNumber} />;
      break;
    case 2:
      content = <Form2 setStepNumber={setStepNumber} />;
      break;
    case 3:
      content = <Form3 setStepNumber={setStepNumber} />;
      break;
    case 4:
      content = <Result setStepNumber={setStepNumber} />;
      break;
    default:
      content = <Form1 setStepNumber={setStepNumber} />;
  }
  return (
    <Container>
      <Header />
      <Title stepNumber={stepNumber} />

      {content}
    </Container>
  );
}

export default App;
