import { motion } from "motion/react"
import ANIMATION_VARIANTS from "@/lib/animations"

export default function Bio() {
  return (
    <>
      <motion.p className="mt-6 text-accent" variants={ANIMATION_VARIANTS.item}>
        I'm a recent university graduate from Canada. I enjoy
        exploring and tinkering with new technologies, especially when it comes to
        self-hosting, home lab setups, and building things from scratch.
      </motion.p>
      <motion.p className="mt-6 text-accent" variants={ANIMATION_VARIANTS.item}>
        Outside of tech, I'm into football (the real kind), anime, and recently
        got into photography. I have an appreciation for minimalism in design,
        code, or how I approach daily life. I also like projects that blend
        creativity and problem solving, whether it's through a camera lens or a terminal.
      </motion.p>
    </>
  )
}
