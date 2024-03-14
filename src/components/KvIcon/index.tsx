import "./kv-icon.css";

type TKvIcon = {
  icon: string;
  color?: string;
} & React.SVGProps<SVGSVGElement>;

const iconsPath = "/kivid-icons/sprites.svg";

export const KvIcon = ({ icon, color, className = "", ...props }: TKvIcon) => {
  return (
    <svg className={`kv-icon ${className} ${color}`} {...props}>
      <use href={`${iconsPath}#${icon}`} />
    </svg>
  );
};