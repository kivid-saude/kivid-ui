import { KvButton } from "../KvButton/KvButton";
import { KvIcon } from "../KvIcon/KvIcon";
import styles from "./styles.module.css";

type TKvHeader = {
  nav?: React.ReactNode;
  link?: React.ReactNode;
  title?: React.ReactNode;
  logo: React.ReactNode;
  logout: boolean;
};

export const KvHeader = ({ link, title, logo, logout = false }: TKvHeader) => {
  return (
    <header className={styles.header}>
      <div>
        {!!logout && <div className={styles.link}>{link}</div>}

        {logout && (
          <KvButton iconOnly>
            <KvIcon icon="logout" />
          </KvButton>
        )}

        {/* <nav className={styles.nav}>{nav}</nav> */}
      </div>
      <div className={styles.slotEnd}>
        <div className={styles.title}>{title}</div>
        <div className={styles.logo}>{logo}</div>
      </div>
    </header>
  );
};
