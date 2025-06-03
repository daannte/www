"use client";

import { motion } from "motion/react";

import Projects from "@/components/sections/projects";
import Header from "@/components/sections/header";
import NarrowLayout from "@/components/layouts/narrow";

import ANIMATION_VARIANTS from "@/lib/animations";

export default function About() {
  return (
    <NarrowLayout>
      <motion.main
        className="py-12 sm:py-16 px-6 leading-relaxed"
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate="visible"
      >
        <Header name="Projects" />
        <Projects />
      </motion.main>
    </NarrowLayout>
  );
}
