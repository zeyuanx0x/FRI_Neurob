import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardHover: Variants = {
  initial: {
    scale: 1,
    rotate: 0,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },
  hover: {
    scale: 1.05,
    rotate: 1,
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const iconHover: Variants = {
  initial: {
    y: 0,
  },
  hover: {
    y: [-2, 2, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const textHover: Variants = {
  initial: {
    textShadow: 'none',
  },
  hover: {
    textShadow: '0 0 8px rgba(59, 130, 246, 0.5)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const sectionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
}; 