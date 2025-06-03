"use client";

import { motion } from "motion/react";

import Header from "@/components/sections/header";

import ANIMATION_VARIANTS from "@/lib/animations";
import PICS from "@/data/pics"
import { ParallaxScroll } from "@/components/ui/parallax";

export default function Pics() {
  return (
    <motion.main
      className="py-12 sm:py-16 px-6 leading-relaxed"
      variants={ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
    >
      <Header name="Pictures" />
      <ParallaxScroll images={PICS} />
    </motion.main>
  );
}
