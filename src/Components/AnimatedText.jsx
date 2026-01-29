import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: (custom = {}) => ({
        opacity: 1,
        transition: {
            staggerChildren: custom.stagger || 0.03,
            delayChildren: custom.delay || 0,
        },
    }),
};

const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const wordVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -40 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
};

// Character-by-character animation
export function AnimatedCharacters({ text, className = '', delay = 0, stagger = 0.02 }) {
    const characters = text.split('');

    return (
        <motion.span
            className={`inline-block ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            custom={{ delay, stagger }}
            aria-label={text}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={characterVariants}
                    className="inline-block"
                    style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.span>
    );
}

// Word-by-word animation
export function AnimatedWords({ text, className = '', delay = 0, stagger = 0.08 }) {
    const words = text.split(' ');

    return (
        <motion.span
            className={`inline-block ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            custom={{ delay, stagger }}
            aria-label={text}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block mr-[0.25em]"
                    style={{ perspective: '1000px' }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

// Line reveal animation
export function AnimatedLine({ children, className = '', delay = 0 }) {
    return (
        <div className="overflow-hidden">
            <motion.div
                className={className}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.7,
                    delay,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default AnimatedCharacters;
