"use client";

import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { aboutItems } from "@/data/data";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const aboutRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      // Text animation 1
      const textSplit = SplitText.create(".about-text", {
        type: "words.lines",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top center",
          // markers: true,
        },
      });

      tl.fromTo(
        textSplit.words,
        {
          "will-change": "opacity",
          opacity: 0,
          filter: "blur(20px)",
        },
        {
          ease: "power2.out",
          opacity: 1,
          filter: "blur(0px)",
          stagger: {
            each: 0.02,
            from: "start",
          },
        },
      );
    },
    { scope: aboutRef },
  );

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 border-t border-neutral-200"
    >
      <div className="container space-y-14">
        {/* Content */}
        <div className="space-y-3">
          {/* title */}
          <div className="text-4xl lg:text-7xl font-bold flex items-center font-poppins">
            <span>Ab</span>
            <Image
              src="/images/about-icon.png"
              alt="About Image"
              width={512}
              height={512}
              className="size-9 lg:size-16 inline-block shrink-0 translate-y-1 lg:translate-y-2"
            />
            <span>ut me</span>
          </div>
          <p className="about-text">
            Hi there! I&apos;m Ihzha, a Backend Developer who loves building the
            invisible engines that power great applications. While my academic
            background in Data Science gave me a deep appreciation for data
            structures and analytics, my true passion lies in software
            engineering.
          </p>
          <p className="about-text">
            I started my coding journey by building web applications with the
            MERN stack, but I quickly discovered my sweet spot in backend
            development. Today, I specialize in the Go ecosystem, crafting
            efficient, scalable APIs and managing robust databases like
            PostgreSQL and Redis. I enjoy the challenge of writing clean code,
            optimizing system performance, and turning complex business logic
            into reliable software. I&apos;m always excited to tackle new
            technical challenges and collaborate with passionate teams.
          </p>
        </div>

        {/* Wrapper */}
        <div className="border-t border-neutral-300">
          {aboutItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-8 border-b border-neutral-300 py-2"
            >
              {/* Icon */}
              <div className="size-24 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={512}
                  height={512}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* content */}
              <div className="">
                <h3 className="about-text text-4xl font-bold uppercase">
                  {item.title}
                </h3>
                <p className="about-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
