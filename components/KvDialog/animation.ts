export const animateOpen = (element: HTMLElement) => {
  return element.animate(
    [
      { transform: "scale(0.75)", opacity: 0 },
      { transform: "none", opacity: 1 },
    ],
    {
      duration: 250,
      fill: "both",
      easing: "ease-in-out",
    }
  );
};

export const animateClose = (element: HTMLElement) => {
  return element.animate(
    [
      { transform: "none", opacity: 1 },
      { transform: "scale(0.75)", opacity: 0 },
    ],
    {
      duration: 250,
      fill: "both",
      easing: "ease-in-out",
    }
  );
};
