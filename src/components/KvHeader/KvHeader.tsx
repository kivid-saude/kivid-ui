import { KvButton } from "../KvButton/KvButton";
import { KvIcon } from "../KvIcon/KvIcon";
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
      <div>
        <div className={styles.link}>{link}</div>
        <KvButton onlyIcon>
          <KvIcon icon="loggout" />
        </KvButton>
        {/* <nav className={styles.nav}>{nav}</nav> */}
      </div>
      <div className={styles.slotEnd}>
        <div className={styles.title}>{title}</div>
        <div className={styles.logo}>{logo}</div>
      </div>
    </header>
  );
};
