"use client";

import { motion } from "motion/react";
import Link from "next/link";

import Header from "@/components/sections/header";
import NavButton from "@/components/ui/nav-button";

import ANIMATION_VARIANTS from "@/lib/animations";

export default function Home() {
  return (
    <motion.main
      className="px-6 leading-relaxed flex flex-col justify-center h-full"
      variants={ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <motion.p className="mt-6 text-accent" variants={ANIMATION_VARIANTS.item}>
        I'm a student interested in compsci, home labs, photography, and much more.
      </motion.p>
      <motion.div
        className="mt-6 text-xl flex items-center justify-start gap-4 font-medium"
        variants={ANIMATION_VARIANTS.item}
      >
        <NavButton href="/projects" label="projects" />
        <NavButton href="/pics" label="pics" />
        <NavButton href="/about" label="about" />
      </motion.div>
    </motion.main>
  );
}
