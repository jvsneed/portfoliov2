export const springTransition = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1]
};

export const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: springTransition
};

export const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};
