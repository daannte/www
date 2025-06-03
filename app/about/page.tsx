"use client";

import { motion } from "motion/react";

import Bio from "@/components/sections/bio";
import Socials from "@/components/sections/socials";
import NarrowLayout from "@/components/layouts/narrow";

import ANIMATION_VARIANTS from "@/lib/animations";
import Header from "@/components/sections/header";

export default function About() {
  return (
    <NarrowLayout>
      <motion.main
        className="py-12 sm:py-16 px-6 leading-relaxed"
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate="visible"
      >
        <Header name="About" />
        <Bio />
        <Socials />
      </motion.main>
    </NarrowLayout>
  );
}
