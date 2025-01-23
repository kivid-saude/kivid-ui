import styles from "./styles.module.css";

type TKvSidebar = {
  nav?: React.ReactNode;
  link?: React.ReactNode;
  title?: React.ReactNode;
  logo: React.ReactNode;
  logout?: React.ReactNode;
};

export const KvSidebar = ({
  link,
  title,
  logo,
  nav,
  logout = false,
}: TKvSidebar) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        {!!link && <div className={styles.link}>{link}</div>}

        {logout}

        <nav className={styles.nav}>{nav}</nav>
      </div>
      <div className={styles.slotEnd}>
        <div className={styles.title}>{title}</div>
        <div className={styles.logo}>{logo}</div>
      </div>
    </aside>
  );
};
