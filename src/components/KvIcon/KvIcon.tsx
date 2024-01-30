import "./kv-icon.css";

type TKvIcon = {
  icon: string;
} & React.SVGProps<SVGSVGElement>;

const iconsPath = "/kivid-icons/spritesheet.svg";

export const KvIcon = ({ icon, className = "", ...props }: TKvIcon) => {
  return (
    <svg className={`kv-icon ${className}`} {...props}>
      <use href={`${iconsPath}#${icon}`} />
    </svg>
  );
};
