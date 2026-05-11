"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Play, Star, Users, Globe, TrendingUp } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const miniStats = [
  { icon: Users, label: "Happy Clients", value: "50+" },
  { icon: Globe, label: "Countries", value: "06" },
  { icon: TrendingUp, label: "Success Rate", value: "98%" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col justify-center pt-20 pb-16">
      {/* Animated background orbs for a premium glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cobalt-200/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-cobalt-300/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Top badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cobalt-50 text-cobalt-500 text-xs font-semibold rounded-full border border-cobalt-100 tracking-wide uppercase">
            <Star className="w-3 h-3 fill-cobalt-500" />
            Premium Digital Agency
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-neutral-900 leading-[1.05] mb-6"
          >
            We Build
            <br />
            <span className="text-cobalt-500">Digital Products</span>
            <br />
            That Scale.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Gridian Technologies crafts world-class web applications, AI solutions,
            and cloud infrastructure for the most ambitious brands in the world.
          </motion.p>

          {/* SEO brand identity — visually subtle, semantically clear */}
          <p className="sr-only">
            Gridian Technologies is a digital technology company in India providing web development,
            AI solutions, SaaS development, cloud infrastructure, mobile app development, and digital
            business solutions. Official website of Gridian Technologies: gridiantechnologies.com
          </p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 bg-cobalt-500 hover:bg-cobalt-600 text-white font-semibold rounded-3xl transition-colors shadow-lg shadow-cobalt-500/20 text-base"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold rounded-3xl transition-colors text-base"
            >
              <Play className="w-4 h-4 fill-neutral-600" />
              See Our Work
            </motion.a>
          </motion.div>
        </div>

        {/* Bento mini-stats row */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {miniStats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="glass-card rounded-3xl p-5 text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 bg-cobalt-50 rounded-2xl mb-3">
                <Icon className="w-4 h-4 text-cobalt-500" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">{value}</div>
              <div className="text-xs text-neutral-500 mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
