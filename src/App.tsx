import React, { FunctionComponent, MouseEventHandler } from "react";
import "./App.css";
import { KeypadArea, MyFunctionArea, MyInputArea, MyTitle } from "./Component";

// export default Button;

const App: FunctionComponent = () => {
  return (
    <div className="App">
      {/* title: displays the title */}
      <MyTitle name="MoCulator" />

      {/* 
          input area: parent div
            input field: where the input numbers appear
            operator view: where the operator is displayed
            equal to view: where the equal to operator is displayed
      */}
      <MyInputArea />

      {/* 
          function area: where the buttons for CHR, CLR, PHR are displayed
      */}
      <MyFunctionArea />

      {/* 
          keypad area: where the buttons for numbers and operators are displayed
      */}
      <KeypadArea />
    </div>
  );
};

export default App;
