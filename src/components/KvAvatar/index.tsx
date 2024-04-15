import { ImgHTMLAttributes } from "react";

import styles from "./style.module.scss";
import { kividDefaultAvatar } from "../../common/images-src";

type TKvAvatar = {
  size?: "xlarge" | "large" | "medium" | "small" | "xsmall";
} & ImgHTMLAttributes<HTMLImageElement>;

export const KvAvatar = ({ size = "medium", src, ...props }: TKvAvatar) => {
  const classes = [styles["kv-avatar"], styles[`kv-avatar--size-${size}`]].join(
    " ",
  );

  return <img src={src ?? kividDefaultAvatar} className={classes} {...props} />;
};
