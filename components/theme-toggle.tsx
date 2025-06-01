"use client"

import { LuSun, LuMoon } from "react-icons/lu"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Button from "./button"
import { AnimatePresence, motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) return null

  return (
    <Button onClick={toggleTheme}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -5, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "light" ? (
            <LuMoon className="w-6 h-6" />
          ) : (
            <LuSun className="w-6 h-6" />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  )
}
