"use client";

import { motion } from "motion/react";

import Header from "@/components/sections/header";
import NavButton from "@/components/ui/nav-button";
import NarrowLayout from "@/components/layouts/narrow";

import ANIMATION_VARIANTS from "@/lib/animations";

export default function Home() {
  return (
    <NarrowLayout>
      <motion.main
        className="px-6 space-y-6 leading-relaxed flex flex-col justify-center h-full"
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate="visible"
      >
        <Header name="Hi, I'm Dante" />
        <motion.p className="text-accent" variants={ANIMATION_VARIANTS.item}>
          I'm interested in compsci, home labs, photography, and much more.
        </motion.p>
        <motion.div
          className="text-xl flex items-center justify-start gap-4 font-medium"
          variants={ANIMATION_VARIANTS.item}
        >
          <NavButton href="/projects" label="projects" />
          <NavButton href="/about" label="about" />
        </motion.div>
      </motion.main>
    </NarrowLayout>
  );
}
