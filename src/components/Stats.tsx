"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered", sub: "across 15+ industries" },
  { value: "98%", label: "Client Satisfaction", sub: "measured post-launch" },
  { value: "06", label: "Countries Served", sub: "global reach" },
  { value: "02+", label: "Years of Expertise", sub: "since 2024" },
  { value: "15+", label: "Team Members", sub: "engineers & designers" },
  { value: "3x", label: "Avg. ROI Delivered", sub: "for growth-stage clients" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" ref={ref} className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-cobalt-300 mb-3">
            By the Numbers
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Results That Speak
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card-dark rounded-3xl p-8"
            >
              <div className="text-4xl sm:text-5xl font-bold text-cobalt-300 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-white/40 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
