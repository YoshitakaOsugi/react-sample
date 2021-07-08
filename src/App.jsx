import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  //console.log("first");

  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickOnOffButton = () => {
    setFaceShow(!faceShow);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShow || setFaceShow(true);
    } else {
      faceShow && setFaceShow(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>はろー</h1>
      <ColorfulMessage color="blue">元気？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <br />
      <button onClick={onClickOnOffButton}>ON/OFF</button>
      <p>{num}</p>
      {faceShow && <p>(^^♪</p>}
    </>
  );
};

export default App;
