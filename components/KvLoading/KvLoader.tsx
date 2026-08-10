"use client";

import { LottiePlayer } from "../lottie-player";
import loadingSrc from "./loading-borboleta.json";

export const KvLoader = () => {
  return (
    <LottiePlayer
      loop={true}
      autoplay={true}
      src={loadingSrc}
      style={{ width: "140px", height: "140px" }}
    />
  );
};

export default KvLoader;
