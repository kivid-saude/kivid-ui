"use client";

import dynamic from "next/dynamic";

import { KeyColors } from "../../types/styles";
import loadingPurple from "./loading-button-purple.json";
import loadingWhite from "./loading-button-white.json";

// Load lottie client-side only: its bundled goober reaches for `document` at import
// time and throws "document is not defined" during SSR. Mirrors the ButterflyLoading pattern.
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false },
);

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
