"use client";

import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import Image from "next/image";
import CustomLink from "./CustomLink";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const titleSplit = SplitText.create(".hero-text", {
        type: "words,lines",
      });

      gsap.fromTo(
        titleSplit.words,
        {
          "will-change": "opacity",
          opacity: 0,
          filter: "blur(20px)",
        },
        {
          ease: "power2.inOut",
          opacity: 1,
          filter: "blur(0px)",
          stagger: {
            each: 0.09,
            from: "start",
          },
        },
      );

      // Title animation
      const textShadowDepth = 4;
      const speed = 0.4;
      const color = `#171717`;

      let t = `0px 0px `;
      let textShadowString = t + color;
      let fromTextShadowString = t + color;

      for (let i = 1; i <= textShadowDepth; i++) {
        t = `,  -${i}px ${i}px `;
        textShadowString += t + color;
        fromTextShadowString += ", 0px 0px " + color;
      }

      gsap.fromTo(
        ".hero-title",
        {
          textShadow: fromTextShadowString,
        },
        {
          duration: speed,
          textShadow: textShadowString,
          x: "8px",
          y: "-8px",
          delay: 1,
        },
      );
    },
    { scope: heroRef },
  );

  return (
    <section ref={heroRef} className="pt-20 pb-10">
      <div className="container flex flex-col items-center">
        <div className="size-22.5 bg-black flex rounded-full overflow-hidden">
          <Image
            src="/image/hero.png"
            alt="Hero Image"
            width={160}
            height={160}
          />
        </div>

        {/* Content */}
        <div className="text-center mt-4 space-y-4">
          <h1 className="font-poppins font-extrabold text-4xl lg:text-6xl uppercase w-full h-full text-neutral-900/90">
            Ihzha Nauval is <span className="lowercase">a</span>{" "}
            <span
              className="hero-title"
              style={{
                WebkitTextStroke: "1px #171717",
                WebkitTextFillColor: "white",
              }}
            >
              Junior Backend
            </span>{" "}
            Developer
          </h1>
          <p className="hero-text sm:max-w-md mx-auto text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo
            minus ducimus tenetur accusantium possimus facilis. Temporibus, cum
            consectetur incidunt minus, consequuntur praesentium recusandae
            saepe atque soluta doloremque corporis est.
          </p>
          <CustomLink
            label="More about me!"
            href="#"
            className="text-xl font-semibold"
          />
        </div>
      </div>
    </section>
  );
}
