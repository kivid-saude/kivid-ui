import "./kv-action.css";

type TKvAction = {
  icon: string;
  text?: string;
};

export const KvAction = ({ icon, text }: TKvAction) => {
  return (
    <div className="kv-action">
      {icon}
      {text}
    </div>
  );
};
