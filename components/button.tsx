import { motion } from "motion/react";
import { ReactNode, MouseEventHandler } from "react"

interface ButtonProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <motion.div
      onClick={onClick}
      className="flex items-center bg-button transition-colors dark:hover:bg-button/60 hover:bg-[#ccc] w-fit gap-1 py-2 px-3 rounded-2xl cursor-pointer"
      whileHover={{ scale: 1.01, y: -1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}
