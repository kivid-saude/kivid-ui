"use client";

import { Player } from "@lottiefiles/react-lottie-player";

import loadingPurple from "./loading-button-purple.json";
import loadingWhite from "./loading-button-white.json";

const KvSpinner = ({
  color,
}: {
  color?: "success" | "danger" | "tertiary" | "warning" | "light" | "dark";
}) => {
  return (
    <Player
      loop={true}
      autoplay={true}
      src={color === "light" ? loadingPurple : loadingWhite}
      style={{ width: "2rem", height: "2rem" }}
    />
  );
};

export default KvSpinner;
