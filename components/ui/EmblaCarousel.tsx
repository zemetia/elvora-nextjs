'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';

interface EmblaCarouselProps {
  children: React.ReactNode[];
  options?: EmblaOptionsType;
  showDots?: boolean;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function EmblaCarousel({
  children,
  options = { loop: false },
  showDots = true,
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  className = '',
}: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || !autoPlay) return;

    const autoPlayInterval_id = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else if (options.loop) {
        emblaApi.scrollTo(0);
      }
    }, autoPlayInterval);

    return () => {
      clearInterval(autoPlayInterval_id);
    };
  }, [emblaApi, autoPlay, autoPlayInterval, options.loop]);

  // Pause auto-play on hover/focus
  useEffect(() => {
    if (!emblaApi || !autoPlay) return;

    const emblaNode = emblaApi.rootNode();
    let autoPlayTimer: NodeJS.Timeout;

    const stopAutoPlay = () => {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
    };

    const startAutoPlay = () => {
      autoPlayTimer = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else if (options.loop) {
          emblaApi.scrollTo(0);
        }
      }, autoPlayInterval);
    };

    emblaNode.addEventListener('mouseenter', stopAutoPlay);
    emblaNode.addEventListener('mouseleave', startAutoPlay);
    emblaNode.addEventListener('focusin', stopAutoPlay);
    emblaNode.addEventListener('focusout', startAutoPlay);

    startAutoPlay();

    return () => {
      stopAutoPlay();
      emblaNode.removeEventListener('mouseenter', stopAutoPlay);
      emblaNode.removeEventListener('mouseleave', startAutoPlay);
      emblaNode.removeEventListener('focusin', stopAutoPlay);
      emblaNode.removeEventListener('focusout', startAutoPlay);
    };
  }, [emblaApi, autoPlay, autoPlayInterval, options.loop]);

  return (
    <div className={`embla relative ${className}`}>
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {children.map((child, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            className="embla__button embla__button--prev absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="embla__button embla__button--next absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Navigation Dots */}
      {showDots && scrollSnaps.length > 1 && (
        <div className="embla__dots flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla__dot w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'w-8 bg-sage'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selectedIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
