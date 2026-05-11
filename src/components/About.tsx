"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

const pillars = [
  "User-centered design methodology",
  "Agile & transparent delivery",
  "Scalable, future-proof architecture",
  "Dedicated post-launch support",
  "Clear IP ownership for clients",
  "NDA-protected engagements",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-cobalt-500 mb-4">
              About Gridian
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-6">
              Built by Builders,
              <br />
              <span className="text-cobalt-500">for Visionaries.</span>
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed mb-6">
              Gridian Technologies is a technology and digital solutions company focused on building web applications, SaaS products, AI-powered business tools, automation systems, cloud infrastructure, and mobile applications.
            </p>
            <p className="text-neutral-500 text-base leading-relaxed mb-10">
              From seed-stage startups to Fortune 500 enterprises, we&apos;ve shipped products used by
              millions across 6 countries. Our process is transparent, our code is clean, and our
              commitment to your success is unconditional.
            </p>

            {/* Pillars checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cobalt-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-700">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Bento cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Card 1 - large */}
            <div className="col-span-2 rounded-3xl bg-cobalt-500 p-8 text-white">
              <Sparkles className="w-8 h-8 text-cobalt-100 mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-white/75 text-sm leading-relaxed">
                To be the most trusted technology partner for growth-minded companies — delivering
                digital solutions that are beautiful, robust, and built to last.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-[#F9F9F9] p-6 flex flex-col justify-between min-h-[140px]">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Founded</p>
              <div>
                <p className="text-4xl font-bold text-neutral-900">2024</p>
                <p className="text-sm text-neutral-500 mt-1">2+ years of excellence</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-cobalt-50 p-6 flex flex-col justify-between min-h-[140px]">
              <p className="text-xs font-semibold text-cobalt-400 uppercase tracking-wide">Team Size</p>
              <div>
                <p className="text-4xl font-bold text-cobalt-500">15+</p>
                <p className="text-sm text-cobalt-400 mt-1">Experts worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
