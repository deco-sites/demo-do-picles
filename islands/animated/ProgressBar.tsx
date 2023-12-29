import { useEffect } from "preact/hooks";
import { animate, scroll } from "motion";

export default function ProgressBar() {
  useEffect(() => {
    scroll(animate("#progress-bar", { scaleX: [0, 1] }));
  }, []);

  return (
    <div
      id="progress-bar"
      class="z-10 fixed top-0 left-0 right-0 w-full h-2 scale-x-0 bg-[linear-gradient(93deg,_#02F67C_44.7%,_#3FB67B_118.6%)]"
    >
    </div>
  );
}
