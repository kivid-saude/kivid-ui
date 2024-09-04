import { DatePatternEnum, formatDateByPattern } from "../../common/date-utils";
import styles from "./styles.module.scss";

const KividLogo =
  "https://kivid-assets.s3.sa-east-1.amazonaws.com/logo-kivid-white-small.png";

type TKvPassportCard = {
  type?: "individual" | "family" | "company";
  companyName?: string;
  userName: string;
  passportDueDate?: Date | string;
  avatar?: React.ReactNode;
};

export const KvPassportCard = ({
  type = "individual",
  companyName = "",
  passportDueDate = "",
  userName = "",
  avatar,
}: TKvPassportCard) => {
  const typeVariantDictionary = {
    individual: "Individual",
    family: "Família",
    company: (
      <div className={styles["kv-passport-card__company-text"]}>
        <span className={styles["kv-passport-card__company-title"]}>
          Passaporte
        </span>{" "}
        <br />
        <span className={styles["kv-passport-card__company-subtitle"]}>
          Empresarial
        </span>
      </div>
    ),
  };

  const classes = [
    styles["kv-passport-card"],
    styles[`kv-passport-card--${type}`],
  ].join(" ");

  const formatedPassportDueDate = formatDateByPattern({
    date: passportDueDate,
    pattern: DatePatternEnum.dot,
  });

  const isCompanyPassport = type === "company";

  return (
    <div className={classes}>
      <header className={styles["kv-passport-card__header"]}>
        <div>
          {!isCompanyPassport && (
            <h2 className={styles["kv-passport-card__title"]}>Passaporte</h2>
          )}

          {!!isCompanyPassport && (
            <h2 className={styles["kv-passport-card__company-name"]}>
              {companyName}
            </h2>
          )}

          <p className={styles["kv-passport-card__subtitle"]}>
            {typeVariantDictionary[type]}
          </p>
        </div>

        {avatar}
      </header>

      <footer className={styles["kv-passport-card__footer"]}>
        <div>
          <h2 className={styles["kv-passport-card__username"]}>{userName}</h2>
          {!isCompanyPassport && (
            <p className={styles["kv-passport-card__due-date"]}>
              Validade <>{formatedPassportDueDate}</>
            </p>
          )}
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
