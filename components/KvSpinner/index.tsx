"use client";

import { Player } from "@lottiefiles/react-lottie-player";

import { KeyColors } from "../../types/styles";
import loadingPurple from "./loading-button-purple.json";
import loadingWhite from "./loading-button-white.json";

export const KvSpinner = ({ color }: { color?: KeyColors }) => {
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
