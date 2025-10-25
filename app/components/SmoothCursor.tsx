"use client";

import { useEffect, useRef, useState } from "react";

interface SmoothCursorProps {
  size?: number;
  color?: string;
  trailLength?: number;
  speed?: number;
  className?: string;
  showTrail?: boolean;
  magnetic?: boolean;
}

export default function SmoothCursor({
  size = 20,
  color = "#f87171",
  trailLength = 10,
  speed = 0.15,
  className = "",
  showTrail = true,
  magnetic = false,
}: SmoothCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        window.innerWidth <= 768 ||
        "ontouchstart" in window;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || isMobile) return;

    // Initialize trail elements
    const trailElements: HTMLDivElement[] = [];
    if (showTrail) {
      for (let i = 0; i < trailLength; i++) {
        const trailElement = document.createElement("div");
        trailElement.style.position = "fixed";
        trailElement.style.width = `${size - i * 2}px`;
        trailElement.style.height = `${size - i * 2}px`;
        trailElement.style.borderRadius = "50%";
        trailElement.style.backgroundColor = color;
        trailElement.style.opacity = `${1 - i / trailLength}`;
        trailElement.style.pointerEvents = "none";
        trailElement.style.zIndex = "9998";
        trailElement.style.transform = "translate(-50%, -50%)";
        trailElement.style.transition = "opacity 0.1s ease-out";
        document.body.appendChild(trailElement);
        trailElements.push(trailElement);
      }
    }
    trailRefs.current = trailElements;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Check for hoverable elements
      const target = e.target as HTMLElement;
      const isHoverable = target.matches(
        'button, a, [role="button"], input, textarea, select'
      );
      setIsHovering(isHoverable);
    };

    const animate = () => {
      // Smooth cursor movement
      cursorPosition.current.x +=
        (mousePosition.current.x - cursorPosition.current.x) * speed;
      cursorPosition.current.y +=
        (mousePosition.current.y - cursorPosition.current.y) * speed;

      // Update cursor position and size based on hover state
      const currentSize = isHovering ? size * 1.5 : size;
      cursor.style.left = `${cursorPosition.current.x}px`;
      cursor.style.top = `${cursorPosition.current.y}px`;
      cursor.style.width = `${currentSize}px`;
      cursor.style.height = `${currentSize}px`;

      // Update trail positions
      if (showTrail) {
        trailElements.forEach((trail, index) => {
          if (index === 0) {
            trail.style.left = `${cursorPosition.current.x}px`;
            trail.style.top = `${cursorPosition.current.y}px`;
          } else {
            const prevTrail = trailElements[index - 1];
            const prevRect = prevTrail.getBoundingClientRect();
            trail.style.left = `${prevRect.left + prevRect.width / 2}px`;
            trail.style.top = `${prevRect.top + prevRect.height / 2}px`;
          }
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
      if (showTrail) {
        trailElements.forEach((trail) => {
          trail.style.opacity = "1";
        });
      }
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      if (showTrail) {
        trailElements.forEach((trail) => {
          trail.style.opacity = "0";
        });
      }
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Start animation
    animate();

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Remove trail elements
      if (showTrail) {
        trailElements.forEach((trail) => {
          if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
          }
        });
      }
    };
  }, [size, color, trailLength, speed, showTrail, isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-9999 transition-opacity duration-200 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 0,
      }}
    />
  );
}
