"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
}

interface AnimatedConnectionGraphProps {
  density?: number;
  speed?: number;
  color?: string;
  className?: string;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const cleaned = hex.replace(/^#/, "");
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned;
  const num = parseInt(full, 16);
  if (isNaN(num)) return null;
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

const DISTANCE_THRESHOLD = 150;

export default function AnimatedConnectionGraph({
  density = 50,
  speed = 0.5,
  color = "#C9A84C",
  className,
}: AnimatedConnectionGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rgb = hexToRgb(color) ?? { r: 201, g: 168, b: 76 };
    const nodeColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4)`;

    let animFrameId: number;
    let nodes: Node[] = [];

    function initNodes(width: number, height: number) {
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: 2 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      const parent = canvas!.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
      initNodes(w, h);
    }

    resize();

    let tick = 0;

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;

      ctx!.clearRect(0, 0, w, h);
      tick += 0.01;

      // Update node positions
      for (const node of nodes) {
        node.x +=
          node.vx + Math.sin(tick + node.phase) * 0.15 * speed;
        node.y +=
          node.vy + Math.cos(tick + node.phase) * 0.15 * speed;

        // Wrap around edges
        if (node.x < -node.radius) node.x = w + node.radius;
        else if (node.x > w + node.radius) node.x = -node.radius;
        if (node.y < -node.radius) node.y = h + node.radius;
        else if (node.y > h + node.radius) node.y = -node.radius;
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < DISTANCE_THRESHOLD) {
            const alpha = (1 - dist / DISTANCE_THRESHOLD) * 0.15;
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx!.fillStyle = nodeColor;
        ctx!.fill();
      }

      animFrameId = requestAnimationFrame(draw);
    }

    draw();

    const observer = new ResizeObserver(() => {
      resize();
    });

    const parent = canvas.parentElement;
    if (parent) {
      observer.observe(parent);
    }

    return () => {
      cancelAnimationFrame(animFrameId);
      observer.disconnect();
    };
  }, [density, speed, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none${className ? ` ${className}` : ""}`}
    />
  );
}
