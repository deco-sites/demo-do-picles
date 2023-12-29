import { useEffect } from "preact/hooks";
import { animate } from "motion";

export default function Start() {
  const numberOfStars = 50;

  useEffect(() => {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star) => {
      const duration = Math.random() * 1 + 0.5;
      const delay = Math.random() * 1;

      animate(star, { opacity: [0, 1, 0] }, {
        duration: duration,
        repeat: Infinity,
        delay: delay,
      });
    });
  }, []);

  const starElements = Array.from(
    { length: numberOfStars },
    (_, index) => (
      <div
        key={index}
        className="star absolute bg-white rounded-full opacity-0"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
        }}
      />
    ),
  );

  return (
    <div className="fixed top-0 w-full h-full">
      {starElements}
    </div>
  );
}
