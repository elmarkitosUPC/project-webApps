import React from "react";
import Timer from "./Timer";

export default function TopBar({ gameOver, setTime }) {
  return (
    <div
      style={{
        background: "#4a752c",
        padding: "10px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      
      <Timer gameOver={gameOver} sendTime={setTime} />
    </div>
  );
}
