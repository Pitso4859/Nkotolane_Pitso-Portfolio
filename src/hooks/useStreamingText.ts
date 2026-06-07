import { useEffect, useRef, useState } from 'react';

type UseStreamingTextOptions = {
  /** When false, full text is returned (SEO / reduced motion). */
  active: boolean;
  speed?: number;
  delay?: number;
};

export function useStreamingText(
  text: string,
  { active, speed = 28, delay = 0 }: UseStreamingTextOptions
) {
  const [displayed, setDisplayed] = useState<string>(() => active ? '' : text);
  const [isComplete, setIsComplete] = useState(!active);
  const hasStreamedRef = useRef(false);

  useEffect(() => {
    if (!active || hasStreamedRef.current) {
      setDisplayed(text);
      setIsComplete(true);
      return;
    }

    setIsComplete(false);

    let index = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          if (intervalId) window.clearInterval(intervalId);
          setIsComplete(true);
          hasStreamedRef.current = true;
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, active, speed, delay]);

  return {
    displayed,
    isComplete,
    isStreaming: active && !isComplete && displayed.length > 0,
  };
}