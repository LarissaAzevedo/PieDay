import React, { useRef, useEffect, useState } from "react";
import "./index.scss";

const Game = () => {
  const canvasRef = useRef(null);
  const [pieImage, setPieImage] = useState(null);

  useEffect(() => {
    const pie = new Image();
    pie.src =
      "https://cdn.discordapp.com/attachments/816386822199312394/817232396336234556/1.png";
    pie.onload = () => setPieImage(pie);
  }, []);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    if (pieImage && canvas) {
      context.fillStyle = "white";
      context.fillRect(0, 0, 400, 256 + 80);
      context.drawImage(pieImage, 50, 0, 200, 150);
    }
  }, [pieImage, canvasRef]);

  return (
    <div className="game">
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default Game;
