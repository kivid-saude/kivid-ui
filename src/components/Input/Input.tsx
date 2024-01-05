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
        <label className="kv-label" htmlFor={inputProps.id ?? ""}>
          {label}
        </label>
      )}
      <input className="kv-input" type="text" {...inputProps} />
    </fieldset>
  );
};
