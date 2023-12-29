import { useEffect } from "preact/hooks";
import { animate, spring } from "motion";

export default function AnimatedBoxes() {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box, index) => {
      const delay = index * 1000;

      if (index % 2 === 0) {
        setTimeout(() => {
          animate(box, { rotate: 90 }, { easing: spring(), repeat: Infinity });
        }, delay);
      } else {
        setTimeout(() => {
          animate(
            box,
            { scale: 2, opacity: 1 },
            { easing: spring(), repeat: Infinity, direction: "alternate" },
          );
        }, delay);
      }
    });
  }, []);

  return (
    <div class="w-full py-28 bg-black">
      <div class="h-full container mx-auto px-16 flex justify-between items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            class={`box bg-white m-2 w-16 h-16 rounded-2xl ${
              index % 2 === 0 ? "rotate-box" : "scale-box"
            }`}
            style={{ opacity: 0.5 }}
          >
          </div>
        ))}
      </div>
    </div>
  );
}
