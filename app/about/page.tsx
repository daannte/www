"use client";

import { motion } from "motion/react";

import Bio from "@/components/sections/bio";
import Socials from "@/components/sections/socials";

import ANIMATION_VARIANTS from "@/lib/animations";

export default function About() {
  return (
    <motion.main
      className="py-12 sm:py-16 px-6 leading-relaxed"
      variants={ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-3xl tracking-tight font-medium">About</h1>
      <Bio />
      <Socials />
    </motion.main>
  );
}
