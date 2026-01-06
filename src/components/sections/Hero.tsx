"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextPressure from "../ui/TextPressure";
import type { Lang } from "@/types";
import { createT } from "@/lib/i18n";

type HeroProps = {
    lang: Lang;
};

export default function Hero({ lang }: HeroProps) {
  const t = createT(lang);
  
  return (
    <section className="relative h-screen flex items-center justify-center">
      <TextPressure
        text="Sadaf.Nemani"
        flex={false}
        alpha={false}
        stroke={false}
        width={false}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </section>
  )
}
