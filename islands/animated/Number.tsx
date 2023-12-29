import { useEffect } from "preact/hooks";
import { animate, inView } from "motion";

export default function Number() {
  useEffect(() => {
    const num = document.querySelector("#number")!;
    inView(num, () => {
      animate(
        (progress) => (num.innerHTML = `${Math.round(progress * 2400)}+`),
        { duration: 1.5, easing: "ease-out" },
      );
    });
  }, []);

  return (
    <div class="bg-black h-screen w-screen flex flex-col justify-center items-center gap-8 max-w-full overflow-hidden">
      <p class="text-white text-4xl font-bold">We are</p>
      <p id="number" class="text-[#02F67C] text-9xl font-bold -mr-12">
        2000+
      </p>
      <p class="text-white text-4xl font-bold">In 2023!</p>
    </div>
  );
}
