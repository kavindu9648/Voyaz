import React, { useState, useEffect, useRef } from "react";

const PhotoCarousel = ({ items = [] }) => {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const trackRef = useRef(null);

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setPerView(w < 768 ? 1 : 3);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = Math.max(0, items.length - perView);

  useEffect(() => {
    if (index > maxIndex) setIndex(0);
  }, [perView, maxIndex]);

  const prev = () => {
    setIndex((i) => (i - 1 < 0 ? maxIndex : i - 1));
  };

  const next = () => {
    setIndex((i) => (i + 1 > maxIndex ? 0 : i + 1));
  };

  const goTo = (i) => setIndex(i);

  const slidePercent = (100 / perView) * index;

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-500 tracking-widest uppercase mb-2">
          Things to Do
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Attractions and Experiences
        </h2>
        <div className="w-24 h-1 bg-gray-700 mx-auto my-4 rounded"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${slidePercent}%)` }}
            >
              {items.map((it, idx) => (
                <div
                  key={idx}
                  className="relative shrink-0 rounded-2xl shadow-lg overflow-hidden"
                  style={{ width: `${100 / perView}%` }}
                >
                  <img
                    src={it.src}
                    alt={it.title || `slide-${idx}`}
                    className="w-full h-72 md:h-96 object-cover block"
                  />

                  {it.title && (
                    <div className="absolute left-6 bottom-6 text-white text-2xl md:text-3xl font-serif font-bold drop-shadow-lg">
                      {it.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button
            aria-label="Previous"
            onClick={prev}
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow hover:bg-white z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            aria-label="Next"
            onClick={next}
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow hover:bg-white z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center mt-6">
            {Array.from({ length: Math.max(1, maxIndex + 1) }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full mx-2 ${
                  i === index ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-[#0f5f82] hover:bg-[#0d556f] text-white font-semibold py-3 px-6 md:px-8 rounded-lg shadow-md uppercase inline-flex items-center">
              <span className="mr-6" style={{ letterSpacing: "0.28em" }}>
                MORE Attraction
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
