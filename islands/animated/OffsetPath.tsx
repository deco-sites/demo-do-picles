import { useEffect } from "preact/hooks";
import { animate, scroll } from "motion";

export default function OffsetPath() {
  useEffect(() => {
    const element = document.querySelector(".earth-container")!;
    scroll(
      ({ y }) => {
        animate(".moon", {
          offsetDistance: `${y.progress * 100}%`,
        });
      },
      {
        target: element,
        offset: ["0 0", "end end"],
      },
    );
  }, []);

  return (
    <div class="bg-black py-28">
      <div class="container mx-auto flex justify-between items-center gap-16">
        <div class="flex-1 flex justify-center">
          <div class="earth-container">
            <div class="earth">🌍</div>
            <div class="moon">🌕</div>
          </div>
        </div>
        <div class="flex-1 flex flex-col gap-4">
          <h1 class="text-4xl font-bold text-white">Offset Path</h1>
          <p class="text-white leading-[120%]">
            The <code>offset-path</code>{" "}
            CSS property lets an element move along a specific path, like a line
            or circle, during an animation. The
            <code>offset-distance</code>{" "}
            property sets where the element is on that path. Together, they let
            you create smooth and complex animations.
          </p>
          <a
            href="https://developer.mozilla.org/docs/Web/CSS/offset-path"
            target="_blank"
            class="w-fit mt-6 inline-block bg-[#02F67C] text-black py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:rotate-[-10deg]"
          >
            Learn More on MDN
          </a>
        </div>
      </div>
    </div>
  );
}
