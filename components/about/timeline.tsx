"use client";

import { ABOUT_TIMELINE } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";

export function Timeline() {
  return (
    <div className="relative">
      {/* Vertical center line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-tertiary md:-translate-x-px" />

      <div className="space-y-12">
        {ABOUT_TIMELINE.map((event, index) => {
          const isOdd = index % 2 === 0; // odd items (0-indexed even) go left on desktop

          return (
            <SectionReveal
              key={`${event.year}-${event.title}`}
              direction={isOdd ? "left" : "right"}
              delay={index * 0.12}
            >
              <div className="relative flex items-start md:items-center">
                {/* Gold dot — mobile: left-4, desktop: center */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-brand-gold -translate-x-1/2 mt-1 md:mt-0 z-10 ring-4 ring-dark-primary" />

                {/* Desktop: alternating layout */}
                <div
                  className={`
                    pl-12 md:pl-0 w-full
                    md:grid md:grid-cols-2 md:gap-8
                  `}
                >
                  {isOdd ? (
                    <>
                      {/* Left card on desktop */}
                      <div className="md:text-right md:pr-12">
                        <EventCard event={event} />
                      </div>
                      {/* Empty right side */}
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      {/* Empty left side */}
                      <div className="hidden md:block" />
                      {/* Right card on desktop */}
                      <div className="md:pl-12">
                        <EventCard event={event} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </SectionReveal>
          );
        })}
      </div>
    </div>
  );
}

function EventCard({ event }: { event: { year: string; title: string; description: string } }) {
  return (
    <div>
      <span className="text-brand-gold text-2xl font-bold block mb-1">
        {event.year}
      </span>
      <h3 className="text-white font-semibold text-lg mb-2">{event.title}</h3>
      <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed">
        {event.description}
      </p>
    </div>
  );
}
