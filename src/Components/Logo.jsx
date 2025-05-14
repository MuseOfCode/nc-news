import { useState, useEffect } from "react";

export default function Logo() {
  const [frame, setFrame] = useState(0);
  const frameWidth = 32;
  const frameHeight = 32;
  const columns = 5;
  const totalFrames = 29;

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % totalFrames);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const column = frame % columns;
  const row = Math.floor(frame / columns);

  const x = column * frameWidth;
  const y = row * frameHeight;

  return (
    <div className="hero-section">
      <div
        className="sprite"
        style={{
          width: `${frameWidth}px`,
          height: `${frameHeight}px`,
          backgroundImage: "url(/assets/logo.png)",
          backgroundPosition: `-${x}px -${y}px`,
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",
        }}
      />
      {/* <p>home</p> */}
    </div>
  );
}
