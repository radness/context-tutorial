import React from "react";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    // <ColorContext.Provider value={{ color: "red" }}>
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
    // <ColorContext.Provider />
  );
};

export default App;
