import { DatePatternEnum, formatDateByPattern } from "../../common/date-utils";
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
          src="https://kividmidia.s3.sa-east-1.amazonaws.com/media/logo-kivid-white-small.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLWVhc3QtMiJHMEUCIQDpQGkrwhMpm1PCpxlrBP7sX%2FMuNvwdzin6jUKxNbYVOQIgTN5jXYLZXtKAlO%2Fsp7eKRkqu2kyDxF6Cg0EdQAxmhJgq6AIIZBADGgwxMzgwOTI0MjYzMzAiDIU8CUvQHCluEDm8VirFAgAMiiW%2FeMKSt0HsaRfnaEEoKdUS%2Fg8tsbTOcR09o84xF4xdxjWTU51bw6fnYMgj7f8sqAajhzrdVU%2FhmJklliKEhztH%2Fwf5d9ihiWpQjUuvD%2BztxPQ87DJwwwo%2B%2BUpgpIophjCJTSLXyPQLKgSx68H%2F2wH1IqAtPISxG2bK%2BeTcczZZmBoxe9A7ZgxM3Lquio2ipQExrR0iDsKMkoFlBtJFjvGG1qFTNaQdDvoOV5iJoDRtk0LRIL4xFtweH08ET%2BR9h%2F6PQHEJkgqD3NFq09UR7wr6If8wYC%2BOWKkzozHEW2e5WgxWfBlcfIuK2S3uDOXGp%2FvYbc%2Bz4J2dT9%2B2OjvJyWWmZN61r3dPph%2BTzz%2B1Q7kTuUMp1I63WvsLxHUXyu2DFVu5APPNBYA2htecnroup19%2BzCHMEgy7u%2Bu4XmjEEFMQ22Mw6Y3msAY6swL439yhltUPm2R9t3felTqPc9idhp6CL9mKwtorB2x%2FRRIGkYVPsbczI9DOxy4PlbmeQvFbe%2Bg%2Fg4CDV4PycgkTF5OrSDiVoefJfFrG2O74y8IGyNv4%2Fq%2BRulOXP0BOYhZEopN%2BLn4ZsxkVyc8oE6eIUXsRNxvUZlTQfQB%2FwJh3K4Hd4BScRtcFHgKdMai%2FT%2Bv21FBi0CzUpN8Z97tXqLsQj8Z9erhBLlnaWQzoF1OSW9f5c7WsV4%2Fj2%2F5QukSyd3wMHdWfMhXUYDl3GxtPMxV4GoIByGqJKqs0hzb%2FDjh3bcyp0GMBqndJL3hmefhWBC%2B5HhysQthu0vaZpdmP9%2F%2FFqku0bxaAyrffyzauckIA2Fue1iGnZ2Gz47uS0qerzleXJjvc2ShihqycdaHjVtBMS5nB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240412T191101Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASAJXTGRNACM3HF3X%2F20240412%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7c08dce4c8ab095ecf06fb21cf65f15db918f272eadc7036a50004a26d7b70cd"
        />
      </footer>
    </div>
  );
};
