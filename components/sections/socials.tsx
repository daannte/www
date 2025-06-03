import { motion } from "motion/react"
import Link from "next/link"
import ANIMATION_VARIANTS from "@/lib/animations"
import SOCIAL_LINKS from "@/data/socials"

import Button from "@/components/ui/button"

export default function Socials() {
  return (
    <motion.div
      className="flex flex-col justify-center items-start mt-8"
      variants={ANIMATION_VARIANTS.item}
    >
      <h1 className="text-2xl font-medium tracking-tight">Links</h1>
      <div className="flex mt-8 gap-4">
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
      </div>
    </motion.div>
  )
}
