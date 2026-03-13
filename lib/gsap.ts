import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, DrawSVGPlugin, ScrollTrigger, SplitText);
}

export {gsap, useGSAP, DrawSVGPlugin, ScrollTrigger, SplitText};