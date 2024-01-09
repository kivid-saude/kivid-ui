type TKvIcon = {
  icon: string;
} & React.SVGProps<SVGSVGElement>;

export const KvIcon = ({ icon, className }: TKvIcon) => {
  return (
    <svg className={`kv-icon ${className ? className : ""}`}>
      <use href={`/icon-${icon}.svg#icon`} />
    </svg>
  );
};
