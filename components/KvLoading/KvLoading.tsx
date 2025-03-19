"use client";

import { PropsWithChildren } from "react";
import KvLoader from "./KvLoader";
import "./kv-loading.css";

type TKvLoading = {
  isVisible: boolean;
} & PropsWithChildren;

export const KvLoading = ({ isVisible = false }: TKvLoading) => {
  return (
    <section className={`kv-loading ${isVisible ? "kv-loading--active" : ""}`}>
      {isVisible && <KvLoader />}
    </section>
  );
};

export default KvLoading;
