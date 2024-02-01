import styles from "./styles.module.css";

type TKvHeader = {
  nav?: React.ReactNode;
  link?: React.ReactNode;
  title?: React.ReactNode;
  logo: React.ReactNode;
};

export const KvHeader = ({ link, title, logo }: TKvHeader) => {
  return (
    <header className={styles.header}>
      {/* <nav className={styles.nav}>{nav}</nav> */}
      <div className={styles.link}>{link}</div>
      <div className={styles.slotEnd}>
        <div className={styles.title}>{title}</div>
        <div className={styles.logo}>{logo}</div>
      </div>
    </header>
  );
};
