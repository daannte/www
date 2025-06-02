import { motion } from "motion/react"
import Link from "next/link"
import ANIMATION_VARIANTS from "@/lib/animations"
import SOCIAL_LINKS from "@/data/socials"

import Button from "@/components/ui/button"

export default function Socials() {
  return (
    <motion.div
      className="flex items-center justify-start gap-4 mt-8"
      variants={ANIMATION_VARIANTS.item}
    >
      {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <Icon /> {label}
          </Button>
        </Link>
      ))}
    </motion.div>
  )
}
