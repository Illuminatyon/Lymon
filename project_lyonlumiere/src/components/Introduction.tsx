import React from 'react';
import { motion } from 'framer-motion';
import { Film } from 'lucide-react';

interface IntroductionProps {
    onStart: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ onStart }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
        >
            {/* Background avec effet de lumière */}
            <motion.div
                className="absolute inset-0 bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: "url(https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg)",
                }}
                animate={{
                    filter: ["brightness(0.3)", "brightness(0.5)", "brightness(0.3)"],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Effet de spotlight */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.8) 70%)"
                }}
                animate={{
                    opacity: [0.7, 0.9, 0.7]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Film className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                </motion.div>

                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                    Lyon - Voyage à Travers les Lumières
                </motion.h1>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-xl md:text-2xl text-yellow-100 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Lyon est une ville de lumières, mais ses secrets brillent dans l'ombre.
                    Explorez son histoire en révélant ses éclats lumineux.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onStart}
                    className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-yellow-300 border-2 border-yellow-300 rounded-full overflow-hidden group"
                >
                    <motion.div
                        className="absolute inset-0 bg-yellow-300"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 2, opacity: 0.1 }}
                        transition={{ duration: 0.5 }}
                    />

                    <motion.div
                        className="relative z-10 flex items-center"
                        whileHover={{ x: 5 }}
                    >
                        Commencer
                        <motion.span
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.div>
                </motion.button>
            </div>

            {/* Points lumineux animés */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </motion.div>
    );
};

export default Introduction;