import { KvSeal, TKvSeal } from ".";

export const KvSealSuccess = ({
  mode = "success",
  size = "medium",
  inverted = false,
  disabled = false,
}: TKvSeal) => {
  return (
    <KvSeal mode={mode} size={size} inverted={inverted} disabled={disabled} />
  );
};
