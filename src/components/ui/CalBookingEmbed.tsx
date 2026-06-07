import { useEffect, useRef, useState } from 'react';

const CAL_LINK = 'andile-manganye-dev/30min';
const CAL_IFRAME_SRC = `https://cal.com/${CAL_LINK}`;

/** Cal embed: month calendar first, then time slots after a date is chosen. */
export function CalBookingEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-zinc-200 bg-white"
    >
      {shouldLoad ? (
        <iframe
          src={CAL_IFRAME_SRC}
          className="w-full"
          style={{ minHeight: '520px', width: '100%' }}
          frameBorder="0"
          allow="camera;microphone;clipboard-write"
          title="Cal booking"
        />
      ) : (
        <div
          className="flex min-h-[520px] items-center justify-center text-sm text-zinc-500"
          aria-hidden
        >
          Loading scheduler…
        </div>
      )}
    </div>
  );
}
