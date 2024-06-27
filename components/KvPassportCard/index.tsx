import { DatePatternEnum, formatDateByPattern } from "../../common/date-utils";

import styles from "./styles.module.scss";

const KividLogo =
  "https://kivid-assets.s3.sa-east-1.amazonaws.com/logo-kivid-white-small.png";

type TKvPassportCard = {
  type?: "individual" | "family";
  userName: string;
  passportDueDate?: Date | string;
  avatar?: React.ReactNode;
};

export const KvPassportCard = ({
  type = "individual",
  passportDueDate = "",
  userName = "",
  avatar,
}: TKvPassportCard) => {
  const typeVariantDictionary = {
    individual: "Individual",
    family: "Família",
  };

  const classes = [
    styles["kv-passport-card"],
    styles[`kv-passport-card--variant-${type}`],
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
            {typeVariantDictionary[type]}
          </p>
        </div>

        {avatar}
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
          src={KividLogo}
          alt="Logo do Kivid em tamanho pequeno"
        />
      </footer>
    </div>
  );
};
