'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useState } from 'react';
import { LuArrowRight } from "react-icons/lu"

type NavButtonProps = {
  href: string;
  label: string;
};

export default function NavButton({ href, label }: NavButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative inline-flex items-center text-xl font-medium"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={href} className="relative w-5 h-5 flex items-center justify-center space-x-1 text-accent">
        <motion.div
          animate={{
            rotate: hovered ? 75 : 0,
            scale: hovered ? 0 : 1
          }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
            scale: { delay: hovered ? 0.15 : 0 }
          }}
          className="absolute"
        >
          /
        </motion.div>
        <motion.div
          animate={{
            scale: hovered ? 1 : 0,
            rotate: hovered ? 0 : -45
          }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
            scale: { delay: hovered ? 0.15 : 0 }
          }}
          className="absolute"
        >
          <LuArrowRight />
        </motion.div>
      </Link>
      <Link href={href}>
        {label}
      </Link>
    </motion.div>
  );
}
