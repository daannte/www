"use client";

import { motion } from "motion/react";

import Header from "@/components/sections/header";
import Bio from "@/components/sections/bio";
import Socials from "@/components/sections/socials";
import Projects from "@/components/sections/projects";

import ANIMATION_VARIANTS from "@/lib/animations";

export default function Home() {
  return (
    <motion.main
      className="py-12 sm:py-16 px-6 leading-relaxed"
      variants={ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <Bio />
      <Socials />
      <Projects />
    </motion.main>
  );
}
