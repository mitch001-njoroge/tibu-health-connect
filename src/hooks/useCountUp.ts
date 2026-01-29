import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const useCountUp = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
}: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOutQuart * end;
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  const displayValue = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { ref, displayValue };
};

// Parse stat value string to extract number and format
export const parseStatValue = (value: string): { 
  number: number; 
  prefix: string; 
  suffix: string;
  decimals: number;
} => {
  // Handle percentages like "60%"
  if (value.endsWith("%")) {
    return { 
      number: parseFloat(value), 
      prefix: "", 
      suffix: "%",
      decimals: 0
    };
  }
  
  // Handle currency like "KSh 2B"
  if (value.startsWith("KSh")) {
    const match = value.match(/KSh\s*(\d+(?:\.\d+)?)(B|M|K)?/);
    if (match) {
      return { 
        number: parseFloat(match[1]), 
        prefix: "KSh ", 
        suffix: match[2] || "",
        decimals: 0
      };
    }
  }
  
  // Handle numbers with suffix like "5M+"
  const suffixMatch = value.match(/^(\d+(?:\.\d+)?)(M\+|K\+|B\+|M|K|B|\+)?$/);
  if (suffixMatch) {
    return { 
      number: parseFloat(suffixMatch[1]), 
      prefix: "", 
      suffix: suffixMatch[2] || "",
      decimals: 0
    };
  }
  
  // Default: try to parse as number
  return { 
    number: parseFloat(value) || 0, 
    prefix: "", 
    suffix: "",
    decimals: 0
  };
};
