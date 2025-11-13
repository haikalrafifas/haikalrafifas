export const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

interface FadeInUpOptions {
  delay?: number;
  duration?: number;
  initialY?: number;
}

export const fadeInUp = ({
  delay = 0,
  duration = 0.6,
  initialY = 30,
}: FadeInUpOptions) => {
  const options: any = {
    initial: { opacity: 0, y: initialY },
    animate: { opacity: 1, y: 0 },
    transition: { duration, ease: 'easeOut' as const },
  };

  if (delay > 0) {
    options.transition = { ...options.transition, delay };
  }

  return options;
};
