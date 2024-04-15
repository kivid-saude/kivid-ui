import { ImgHTMLAttributes } from "react";
import defaultAvatar from "../KvPassportCard/assets/avatar-void.png";
import styles from "./style.module.scss";

type TKvAvatar = {
  size?: "xlarge" | "large" | "medium" | "small" | "xsmall";
} & ImgHTMLAttributes<HTMLImageElement>;

export const KvAvatar = ({ size = "medium", ...props }: TKvAvatar) => {
  const classes = [styles["kv-avatar"], styles[`kv-avatar--size-${size}`]].join(
    " ",
  );

  return (
    <img src={props.src ?? defaultAvatar} className={classes} {...props} />
  );
};
