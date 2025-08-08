"use client";

import { useEffect } from "react";

const SnowFall = () => {
  useEffect(() => {
    const createSnow = () => {
      const snow = document.createElement("div");
      snow.className = "snowflake";
      snow.style.left = Math.random() * 100 + "vw";
      // speed snow
      snow.style.animationDuration = 5 + Math.random() * 5 + "s";
      snow.style.opacity = Math.random().toString();
      snow.style.fontSize = 8 + Math.random() * 8 + "px";
      snow.innerText = "❄";
      document.body.appendChild(snow);

      setTimeout(() => snow.remove(), 6000);
    };

    const interval = setInterval(createSnow, 150);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default SnowFall;
