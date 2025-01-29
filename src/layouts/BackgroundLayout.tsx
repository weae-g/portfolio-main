import React, { useEffect, useRef } from "react";

const BackgroundLayout: React.FC = () => {
  return (
    <div className="sky">
      <div className="moon"></div>
      <Stars />
    </div>
  );
};

export default BackgroundLayout;

const Stars: React.FC = () => {
  const numStars = 200;
  const starsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const starsContainer = starsContainerRef.current;
    if (!starsContainer) return;

    const stars: HTMLDivElement[] = [];

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const xy = getRandomPosition();
      star.style.top = `${xy[0]}vh`;
      star.style.left = `${xy[1]}vw`;
      stars.push(star);
    }

    stars.forEach((star) => starsContainer.appendChild(star));

    const handleMouseMove = (event: MouseEvent) => {
      stars.forEach((star) => {
        const boundingRect = star.getBoundingClientRect();
        const starX = boundingRect.left + boundingRect.width / 2;
        const starY = boundingRect.top + boundingRect.height / 2;
        const distanceX = event.clientX - starX;
        const distanceY = event.clientY - starY;
        const distanceToCenter = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const maxDistance = 100;

        if (distanceToCenter <= maxDistance) {
          const offsetX = (distanceX / maxDistance) * 100;
          const offsetY = (distanceY / maxDistance) * 100;
          star.style.transition = "transform 0.3s ease";
          star.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        } else {
          resetStarPosition(star);
        }
      });
    };

    const handleMouseLeave = () => {
      stars.forEach((star) => {
        resetStarPosition(star);
      });
    };

    starsContainer.addEventListener("mousemove", handleMouseMove);
    starsContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      starsContainer.removeEventListener("mousemove", handleMouseMove);
      starsContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const getRandomPosition = (): [number, number] => {
    const y = Math.floor(Math.random() * 100);
    const x = Math.floor(Math.random() * 100);
    return [y, x];
  };

  const resetStarPosition = (star: HTMLDivElement) => {
    star.style.transition = "transform 0.3s ease";
    star.style.transform = "translate(0, 0)";
  };

  return <div className="stars" ref={starsContainerRef}></div>;
};
