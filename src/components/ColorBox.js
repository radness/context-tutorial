// ColorContext 안에 들어 있는 색상을 보여줍니다.
import React from "react";
import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {/* Consumer 사이에 중괄호를 열어서 그 안에 함수를 넣어주는 패턴이나 방식을 Function as a child, Render Props 라고 합니다.
      컴포넌트의 children이 있어야 할 자리에 일반 JSX 혹은 문자열이 아닌 함수를 전달하는 방법입니다.*/}
      {(
        { state } // 비구조화 할당 문법
      ) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
