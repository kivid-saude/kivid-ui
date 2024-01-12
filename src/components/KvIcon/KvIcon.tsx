import "./kv-icon.css";

type TKvIcon = {
  icon: string;
} & React.SVGProps<SVGSVGElement>;

export const KvIcon = ({ icon, className = "", ...props }: TKvIcon) => {
  return (
    <svg className={`kv-icon ${className}`} {...props}>
      <use href={`/icons/icon-${icon}.svg#icon`} />
    </svg>
  );
};
