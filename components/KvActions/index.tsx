import style from "./style.module.scss";

export const KvActions = ({ children }: React.PropsWithChildren) => {
  return <section className={style["kv-actions"]}>{children}</section>;
};
