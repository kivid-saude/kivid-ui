type TAnimate = {
  children: React.ReactNode;
  animation: string;
  duration?: string;
  delay?: string;
  iterationCount?: string;
};

export const Animate = ({
  children,
  animation,
  duration = "1s",
  delay = "0s",
  iterationCount = "initial",
}: TAnimate) => {
  return (
    <div
      className={`animate__animated animate__${animation}`}
      style={{
        animationDelay: `${delay}`,
        animationDuration: `${duration}`,
        animationIterationCount: `${iterationCount}`,
      }}
    >
      {children}
    </div>
  );
};
