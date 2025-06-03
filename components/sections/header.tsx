import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

import ThemeToggle from "@/components/ui/theme-toggle";
import Button from "@/components/ui/button";

import { LuUndo2 } from "react-icons/lu";
import ANIMATION_VARIANTS from "@/lib/animations";

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  const isHome = usePathname() === "/";

  return (
    <motion.header
      className="mt-6 sm:mt-12 w-full flex items-center justify-between"
      variants={ANIMATION_VARIANTS.item}
    >
      <h1 className="text-3xl font-medium tracking-tight">{name}</h1>

      <div className="flex items-center gap-2">
        {!isHome && (
          <Link href="/">
            <Button>
              <LuUndo2 className="w-6 h-6" />
            </Button>
          </Link>
        )}
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
