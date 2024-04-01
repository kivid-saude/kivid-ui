import "./kv-icon.css";

type TKvIcon = {
  icon: string;
  color?: string;
} & React.SVGProps<SVGSVGElement>;

const iconsPath = "/kivid-icons/sprites.svg";

export const KvIcon = ({
  icon,
  color = "",
  className = "",
  ...props
}: TKvIcon) => {
  const classes = ["kv-icon", className, color].join(" ");

  return (
    <svg className={classes} {...props}>
      <use href={`${iconsPath}#${icon}`} />
    </svg>
  );
};