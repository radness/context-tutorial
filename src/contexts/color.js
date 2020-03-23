import React, { createContext, useState } from "react";

const ColorContext = createContext({
  state: {
    color: "black",
    subcolor: "red"
  },
  actions: {
    setColor: () => {},
    setSubcolor: () => {}
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor }
  };
  return (
    <ColorContext.Proivder value={value}>{children}</ColorContext.Proivder>
  );
};

// const ColorConsumer = ColorContext.Consumer 와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorComsuner 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
