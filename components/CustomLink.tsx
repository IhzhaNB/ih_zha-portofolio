"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import Link from "next/link";
import { useRef } from "react";
import { svgVariants } from "./SvgIcons";

interface LinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function CustomLink({ href, label, className }: LinkProps) {
  const linkRef = useRef<HTMLDivElement | null>(null);

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const decorateSVG = (svgEl: SVGElement) => {
    svgEl.querySelectorAll("path").forEach((path) => {
      path.setAttribute("stroke", "currentColor");
    });
  };
  useGSAP((_, contextSafe) => {
    let nextIndex: number | null = null;
    if (!linkRef.current) return;

    const container =
      linkRef.current.querySelector<HTMLElement>("[data-draw-elemet]");
    if (!container) return;

    const box = container.querySelector<HTMLElement>("[data-draw-line-box]");
    if (!box) return;

    let enterTween: gsap.core.Tween | null = null;
    let leaveTween: gsap.core.Tween | null = null;

    // Mouse Enter
    const handleMouseEnter = contextSafe!(() => {
      if (enterTween && enterTween.isActive()) return;
      if (leaveTween && leaveTween.isActive()) leaveTween.kill();
      if (nextIndex === null) {
        nextIndex = Math.floor(Math.random() * svgVariants.length);
      }
      box.innerHTML = svgVariants[nextIndex];
      const svg = box.querySelector<SVGElement>("svg");
      if (svg) {
        decorateSVG(svg);
        const path = svg.querySelector<SVGPathElement>("path");
        if (path) {
          gsap.set(path, { drawSVG: "0%" });
          enterTween = gsap.to(path, {
            drawSVG: "100%",
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
              enterTween = null;
            },
          });
        }
      }
      nextIndex = (nextIndex + 1) % svgVariants.length;
    });

    // Mouse Leave
    const handleMouseLeave = contextSafe!(() => {
      const path = box.querySelector<SVGPathElement>("path");
      if (!path) return;
      const playOut = () => {
        if (leaveTween && leaveTween.isActive()) return;
        leaveTween = gsap.to(path, {
          duration: 0.5,
          drawSVG: "100% 100%",
          ease: "power2.inOut",
          onComplete: () => {
            leaveTween = null;
            box.innerHTML = "";
          },
        });
      };
      if (enterTween && enterTween.isActive()) {
        enterTween.eventCallback("onComplete", playOut);
      } else {
        playOut();
      }
    });
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return (
    <div ref={linkRef}>
      <Link
        href={href}
        className={`text-draw inline-block ${className}`}
        data-draw-elemet
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <p className="mb-0 relative">{label}</p>
        <div className="relative w-full h-[0.5em]" data-draw-line-box />
      </Link>
    </div>
  );
}
