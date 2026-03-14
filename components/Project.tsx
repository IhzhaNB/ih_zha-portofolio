"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { projects } from "@/data/data";
import { RiGithubLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Project() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
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
        ".projects-title",
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
    { scope: projectsRef },
  );

  return (
    <section id="projects" ref={projectsRef} className="py-20 mb-[60vh]">
      <div className="container border-t border-neutral-300">
        {/* Title */}
        <div className="flex items-center gap-4 py-4">
          {/* Icon */}
          <div className="shrink-0 hidden sm:block">
            <Image
              src="/images/project-icon.png"
              alt="Project Icon"
              width={125}
              height={125}
              className="w-full h-auto object-cover"
            />
          </div>
          <h2 className="text-6xl font-bold font-poppins uppercase">
            Selected{" "}
            <span
              className="projects-title"
              style={{
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              Projects
            </span>
          </h2>
        </div>

        {/* Wrapper */}
        <div className="grid gap-7 mt-12">
          {projects.map((project) => (
            // Card
            <div
              className="px-2 py-2.5 border border-neutral-900 overflow-hidden shadow-[4px_4px_0_0] max-w-160 mx-auto"
              key={project.id}
            >
              {/* img */}
              <div className="relative bg-neutral-900/90 rounded-lg overflow-hidden aspect-4/3">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1780}
                  height={1280}
                  unoptimized={true}
                  className="rounded-md w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-950/10" />
              </div>
              {/* content */}
              <div className="py-2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p>{project.desc}</p>
              </div>
              {/* Wrapper */}
              <div className="flex flex-wrap items-center justify-beetwen py-4 gap-5">
                {/* btns */}
                <div className="flex flex-wrap">
                  <Link
                    href={project.githubUrl}
                    className="btn flex items-center gap-2 font-semibold"
                  >
                    <span>
                      <RiGithubLine />
                    </span>
                    Source Code
                  </Link>
                </div>
                {/* tools */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {project.tools.map((tool) => (
                    <p className="border px-2 rounded-full" key={tool}>
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
