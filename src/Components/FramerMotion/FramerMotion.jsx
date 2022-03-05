export const containerVariants = {
  hidden: { opacity: 0, y: '-100vh' },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      staggerChildren: 0.5,
      duration: 0.5,
      stiffness: 100,
    },
  },
  exit: {
    y: '100vh',
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
}
