"use client";

import dynamic from "next/dynamic";
import loadingSrc from "./loading-borboleta.json";

// Client-side only: lottie's bundled goober touches `document` at import time and
// throws during SSR. Mirrors the proven ButterflyLoading pattern.
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false },
);

export const KvLoader = () => {
  return (
    <Player
      loop={true}
      autoplay={true}
      src={loadingSrc}
      style={{ width: "140px", height: "140px" }}
    />
  );
};

export default KvLoader;
