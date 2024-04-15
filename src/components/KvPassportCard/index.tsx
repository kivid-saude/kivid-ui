import { DatePatternEnum, formatDateByPattern } from "../../common/date-utils";
import { kividLogo } from "../../common/images-src";
import styles from "./styles.module.scss";

type TKvPassportCard = {
  variant?: "individual" | "family";
  userName: string;
  passportDueDate?: Date | string;
  profileImage?: React.ReactNode;
};

export const KvPassportCard = ({
  variant = "individual",
  passportDueDate = "",
  userName = "",
  profileImage,
}: TKvPassportCard) => {
  const typeVariantDictionary = {
    individual: "Individual",
    family: "Família",
  };

  const classes = [
    styles["kv-passport-card"],
    styles[`kv-passport-card--variant-${variant}`],
  ].join(" ");

  const formatedPassportDueDate = formatDateByPattern({
    date: passportDueDate,
    pattern: DatePatternEnum.dot,
  });

  return (
    <div className={classes}>
      <header className={styles["kv-passport-card__header"]}>
        <div>
          <h2 className={styles["kv-passport-card__title"]}>Passaporte</h2>
          <p className={styles["kv-passport-card__subtitle"]}>
            {typeVariantDictionary[variant]}
          </p>
        </div>

        {profileImage}
      </header>

      <footer className={styles["kv-passport-card__footer"]}>
        <div>
          <h2 className={styles["kv-passport-card__username"]}>{userName}</h2>

          <p className={styles["kv-passport-card__due-date"]}>
            Validade: {<>{formatedPassportDueDate}</>}
          </p>
        </div>

        <img
          className={styles["kv-passport-card__logo"]}
          src={kividLogo.sm}
          alt="Logo do Kivid em tamanho pequeno"
        />
      </footer>
    </div>
  );
};
