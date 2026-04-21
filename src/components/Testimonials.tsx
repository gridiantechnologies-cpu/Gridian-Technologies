"use client";

import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Gridian Technologies completely transformed our platform. The team's technical depth and attention to detail is unmatched. We hit our launch in 10 weeks, under budget.",
    name: "Sarah Mitchell",
    role: "CTO",
    company: "Vantage FinTech",
    avatar: "SM",
    avatarBg: "bg-cobalt-500",
  },
  {
    quote:
      "Working with Gridian felt like having an in-house team that genuinely cared. They pushed back when needed, suggested improvements, and delivered a product our users love.",
    name: "James O'Brien",
    role: "Founder & CEO",
    company: "Nexara Health",
    avatar: "JO",
    avatarBg: "bg-neutral-800",
  },
  {
    quote:
      "The AI integration they built for us reduced our processing time by 70%. The ROI in the first quarter alone justified the entire engagement. Highly recommend.",
    name: "Priya Sharma",
    role: "VP of Engineering",
    company: "LogiFlow",
    avatar: "PS",
    avatarBg: "bg-cobalt-400",
  },
  {
    quote:
      "We've worked with several agencies before, but Gridian's combination of strategic thinking and execution quality is on another level. They are true partners.",
    name: "Thomas Braun",
    role: "Head of Product",
    company: "Solara Energy",
    avatar: "TB",
    avatarBg: "bg-neutral-700",
  },
  {
    quote:
      "From the first discovery call to post-launch, the communication was exceptional. Every deadline was hit. The design system they built is now our brand standard.",
    name: "Aisha Kamara",
    role: "Design Director",
    company: "Bloom Commerce",
    avatar: "AK",
    avatarBg: "bg-cobalt-600",
  },
  {
    quote:
      "Gridian took our messy MVP and turned it into a scalable, production-grade platform in 3 months. Investor demos have never gone smoother.",
    name: "Lucas Wei",
    role: "Co-Founder",
    company: "Orbit Labs",
    avatar: "LW",
    avatarBg: "bg-neutral-900",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-cobalt-500 mb-3">
            Client Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
            Trusted by Teams
            <br />
            <span className="text-cobalt-500">Around the World</span>
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              className="bg-[#F9F9F9] rounded-3xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <Quote className="w-7 h-7 text-cobalt-200 mb-4" />
                <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${t.avatarBg} rounded-2xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-xs text-neutral-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
