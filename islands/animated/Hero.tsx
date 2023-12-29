import { useEffect } from "preact/hooks";
import { animate, inView } from "motion";

export interface Props {
  title: string;
}

export default function Hero({ title }: Props) {
  useEffect(() => {
    inView("#hero-title", () => {
      animate("#hero-title", {
        opacity: [0, 0.3, 1],
        transform: [
          "translateY(100px) scale(0.8)",
          "translateY(0px) scale(1)",
        ],
      }, {
        delay: 0.3,
        duration: 2,
        easing: "ease-out",
      });
    });
  }, []);
  return (
    <div class="h-screen bg-black w-full flex items-center justify-center">
      <h1
        id="hero-title"
        class="opacity-0 mx-auto text-9xl font-extrabold text-center text-white leading-[100%] "
      >
        {title}
      </h1>
    </div>
  );
}
