import { motion } from "motion/react"
import ANIMATION_VARIANTS from "@/lib/animations"

import ThemeToggle from "@/components/ui/theme-toggle"

export default function Header() {
  return (
    <motion.div
      className="flex justify-between items-center mt-6 sm:mt-12 w-full"
      variants={ANIMATION_VARIANTS.item}
    >
      <h1 className="text-3xl tracking-tight font-medium">Hi, I'm Dante</h1>
      <ThemeToggle />
    </motion.div>
  )
}

