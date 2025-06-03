"use client";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type Pic = {
  src: string;
  alt: string;
  caption: string;
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
        <div className={cn(
          "absolute bottom-0 w-full px-3 py-2 text-white text-sm bg-black/60",
          "opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
        )}>
          {el.caption}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      className={cn(
        "h-[40rem] items-start overflow-y-auto w-full no-visible-scrollbar mt-8",
        className
      )}
      ref={gridRef}
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
    </div>
  );
};
