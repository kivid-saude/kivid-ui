"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import loadingSrc from "./loading-borboleta.json";

const KvLoader = () => {
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
