/** @format */

import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

interface AOSProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export const AOS: React.FC<AOSProps> = ({
  children,
  direction = "up",
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getAnimationProps = () => {
    const distance = 50;

    switch (direction) {
      case "up":
        return {
          from: { opacity: 0, transform: `translateY(${distance}px)` },
          to: { opacity: isVisible ? 1 : 0, transform: `translateY(${isVisible ? 0 : distance}px)` },
          delay,
          config: { mass: 1, tension: 280, friction: 60 },
        };
      case "down":
        return {
          from: { opacity: 0, transform: `translateY(-${distance}px)` },
          to: { opacity: isVisible ? 1 : 0, transform: `translateY(${isVisible ? 0 : -distance}px)` },
          delay,
          config: { mass: 1, tension: 280, friction: 60 },
        };
      case "left":
        return {
          from: { opacity: 0, transform: `translateX(${distance}px)` },
          to: { opacity: isVisible ? 1 : 0, transform: `translateX(${isVisible ? 0 : distance}px)` },
          delay,
          config: { mass: 1, tension: 280, friction: 60 },
        };
      case "right":
        return {
          from: { opacity: 0, transform: `translateX(-${distance}px)` },
          to: { opacity: isVisible ? 1 : 0, transform: `translateX(${isVisible ? 0 : -distance}px)` },
          delay,
          config: { mass: 1, tension: 280, friction: 60 },
        };
      default:
        return {
          from: { opacity: 0, transform: `translateY(${distance}px)` },
          to: { opacity: isVisible ? 1 : 0, transform: `translateY(${isVisible ? 0 : distance}px)` },
          delay,
          config: { mass: 1, tension: 280, friction: 60 },
        };
    }
  };

  const springs = useSpring(getAnimationProps());

  return (
    <div ref={elementRef}>
      <animated.div style={springs}>{children}</animated.div>
    </div>
  );
};
