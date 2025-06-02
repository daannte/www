const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    },
  },
  item: {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 }
  }
};

export default ANIMATION_VARIANTS
