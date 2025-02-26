import { ImgHTMLAttributes } from "react";

import styles from "./style.module.scss";

type TKvAvatar = {
  size?: "xlarge" | "large" | "medium" | "small" | "xsmall";
} & ImgHTMLAttributes<HTMLImageElement>;

const KividDefaultAvatar =
  "https://kivid-assets.s3.sa-east-1.amazonaws.com/default-avatar.svg";

export const KvAvatar = ({ size = "medium", src }: TKvAvatar) => {
  const classes = [styles["kv-avatar"], styles[`kv-avatar--size-${size}`]].join(
    " ",
  );

  return (
    <img src={src ?? KividDefaultAvatar} className={classes} alt="Avatar" />
  );
};
