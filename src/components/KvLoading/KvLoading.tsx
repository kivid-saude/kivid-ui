"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { PropsWithChildren } from "react";
import "./kv-loading.css";
import loadingSrc from "./loading-borboleta.json";

type TKvLoading = {
  isVisible: boolean;
} & PropsWithChildren;

const KvLoading = ({ isVisible = false }: TKvLoading) => {
  return (
    <section className={`kv-loading ${isVisible ? "kv-loading--active" : ""}`}>
      {isVisible && (
        <Player
          loop={true}
          autoplay={true}
          src={loadingSrc}
          style={{ width: "140px", height: "140px" }}
        />
      )}
    </section>
  );
};

export default KvLoading;
