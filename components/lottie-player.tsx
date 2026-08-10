"use client";

import dynamic from "next/dynamic";

/**
 * O Player do @lottiefiles/react-lottie-player toca `document` já no import, e
 * não só ao renderizar. Em SSR o módulo estoura antes de qualquer render, então
 * toda página que alcance um componente de loading devolve 500 em dev.
 *
 * Carregar só no cliente é o contrato da lib. Ponto único para não repetir o
 * dynamic em cada componente que anima.
 */
export const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((m) => m.Player),
  { ssr: false },
);
