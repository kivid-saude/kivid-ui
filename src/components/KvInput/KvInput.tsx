type TInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const KvInput = (props: TInput) => {
  return <input className="kv-input" type="text" {...props} />;
};
