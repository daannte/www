"use client";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import ANIMATION_VARIANTS from "@/lib/animations";

type Pic = {
  src: string;
  alt: string;
  isLandscape?: boolean;
};

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: Pic[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const renderImage = (el: Pic, y: MotionValue<number>, key: string) => (
    <motion.div style={{ y }} key={key}>
      <div className="relative overflow-hidden rounded-lg group transition-transform duration-300 hover:scale-[1.02]">
        <Image
          src={el.src}
          className={cn(
            "w-full object-cover !m-0 !p-0",
            el.isLandscape ? "h-60 object-center" : "h-80 object-left-top"
          )}
          height={400}
          width={el.isLandscape ? 600 : 400}
          alt={el.alt}
        />
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className={cn(
        "h-[46rem] items-start overflow-y-auto w-full no-visible-scrollbar mt-8",
        className
      )}
      ref={gridRef}
      variants={ANIMATION_VARIANTS.item}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-10 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => renderImage(el, translateFirst, `grid-1-${idx}`))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => renderImage(el, translateSecond, `grid-2-${idx}`))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => renderImage(el, translateThird, `grid-3-${idx}`))}
        </div>
      </div>
    </motion.div>
  );
};
