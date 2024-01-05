import "../kv-form.css";

type TInput = {
  label?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = (props: TInput) => {
  const { label, ...inputProps } = props;
  return (
    <fieldset className="kv-fieldset">
      {!!label && (
        <label htmlFor={inputProps.id ?? ""} className="kv-label">
          {label}
        </label>
      )}
      <input type="text" className="kv-input" {...inputProps} />
    </fieldset>
  );
};
