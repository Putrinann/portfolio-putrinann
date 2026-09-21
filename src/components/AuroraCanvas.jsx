import { useEffect, useRef } from "react";

const sectionThemes = {
  home: { hue: 50, accent: "253, 243, 184", opacity: 0.72 },
  about: { hue: 342, accent: "255, 220, 232", opacity: 0.78 },
  projects: { hue: 186, accent: "231, 255, 252", opacity: 0.74 },
  contact: { hue: 206, accent: "255, 255, 255", opacity: 0.72 }
};

export default function AuroraCanvas({ activeSection = "home" }) {
  const canvasRef = useRef(null);
  const themeRef = useRef(sectionThemes.home);

  useEffect(() => {
    themeRef.current = sectionThemes[activeSection] || sectionThemes.home;
  }, [activeSection]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { alpha: true });
    let frameId;
    let time = 0;

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * scale);
      canvas.height = Math.floor(window.innerHeight * scale);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(scale, 0, 0, scale, 0, 0);
    };

    const drawBand = ({ yBase, amplitude, width, alpha, phase, hue, accent }) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const gradient = context.createLinearGradient(0, yBase - width, w, yBase + width);
      gradient.addColorStop(0, `rgba(${accent}, 0)`);
      gradient.addColorStop(0.35, `hsla(${hue}, 76%, 56%, ${alpha})`);
      gradient.addColorStop(0.52, `rgba(${accent}, ${alpha * 0.34})`);
      gradient.addColorStop(0.7, `hsla(${hue + 22}, 80%, 52%, ${alpha * 0.72})`);
      gradient.addColorStop(1, `rgba(${accent}, 0)`);

      context.beginPath();
      context.moveTo(-80, h + 80);
      for (let x = -80; x <= w + 80; x += 18) {
        const waveOne = Math.sin(x * 0.004 + time * 0.012 + phase) * amplitude;
        const waveTwo = Math.sin(x * 0.011 - time * 0.008 + phase * 1.8) * amplitude * 0.38;
        context.lineTo(x, yBase + waveOne + waveTwo);
      }
      context.lineTo(w + 80, h + 80);
      context.closePath();
      context.fillStyle = gradient;
      context.fill();
    };

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const theme = themeRef.current;
      time += 1;
      context.clearRect(0, 0, w, h);

      context.globalCompositeOperation = "source-over";
      const vignette = context.createRadialGradient(w * 0.5, h * 0.42, 80, w * 0.5, h * 0.5, Math.max(w, h) * 0.72);
      vignette.addColorStop(0, "rgba(26, 36, 31, 0)");
      vignette.addColorStop(1, "rgba(26, 36, 31, 0.62)");
      context.fillStyle = vignette;
      context.fillRect(0, 0, w, h);

      context.globalCompositeOperation = "lighter";
      context.filter = "blur(34px)";
      drawBand({ yBase: h * 0.2, amplitude: h * 0.08, width: h * 0.14, alpha: theme.opacity * 0.38, phase: 0.2, hue: theme.hue, accent: theme.accent });
      drawBand({ yBase: h * 0.45, amplitude: h * 0.1, width: h * 0.16, alpha: theme.opacity * 0.28, phase: 2.4, hue: theme.hue + 12, accent: theme.accent });
      drawBand({ yBase: h * 0.74, amplitude: h * 0.07, width: h * 0.12, alpha: theme.opacity * 0.2, phase: 4.2, hue: theme.hue - 10, accent: theme.accent });
      context.filter = "none";

      context.globalCompositeOperation = "source-over";
      for (let i = 0; i < 12; i += 1) {
        const x = (Math.sin(time * 0.006 + i * 9.7) * 0.5 + 0.5) * w;
        const y = (Math.cos(time * 0.004 + i * 6.1) * 0.5 + 0.5) * h;
        context.fillStyle = `rgba(${theme.accent}, ${0.011 + (i % 3) * 0.004})`;
        context.beginPath();
        context.arc(x, y, 1.1 + (i % 2), 0, Math.PI * 2);
        context.fill();
      }

      frameId = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="aurora-canvas" aria-hidden="true" />;
}
