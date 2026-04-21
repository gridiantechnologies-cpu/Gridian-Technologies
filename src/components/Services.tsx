"use client";

import { motion, Variants } from "framer-motion";
import {
  Code2,
  Brain,
  Cloud,
  Smartphone,
  Palette,
  BarChart3,
  ArrowUpRight,
  Layers,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Code2,
    title: "Web Development",
    description:
      "Blazing-fast, scalable web applications built with Next.js, React, and modern cloud-native architectures.",
    tag: "Core Service",
    large: true,
    accent: "bg-cobalt-50",
    iconBg: "bg-cobalt-500",
    iconColor: "text-white",
  },
  {
    id: 2,
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom AI models, LLM integrations, and intelligent automation to supercharge your business workflows.",
    tag: "Future-Ready",
    large: false,
    accent: "bg-neutral-900",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    dark: true,
  },
  {
    id: 3,
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Resilient, auto-scaling cloud architecture on AWS, GCP, and Azure—built for 99.99% uptime.",
    tag: "DevOps",
    large: false,
    accent: "bg-[#F9F9F9]",
    iconBg: "bg-cobalt-100",
    iconColor: "text-cobalt-500",
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native iOS & Android apps and cross-platform solutions with React Native that users love.",
    tag: "Mobile",
    large: false,
    accent: "bg-[#F9F9F9]",
    iconBg: "bg-cobalt-100",
    iconColor: "text-cobalt-500",
  },
  {
    id: 5,
    icon: Palette,
    title: "UX/UI Design",
    description:
      "Pixel-perfect interfaces grounded in research—designed to convert, delight, and differentiate.",
    tag: "Design",
    large: false,
    accent: "bg-cobalt-500",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    blue: true,
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Data-driven SEO, performance marketing, and growth strategies that deliver measurable ROI.",
    tag: "Growth",
    large: false,
    accent: "bg-[#F9F9F9]",
    iconBg: "bg-cobalt-100",
    iconColor: "text-cobalt-500",
  },
  {
    id: 7,
    icon: Layers,
    title: "Product Strategy",
    description:
      "From discovery workshops to launch roadmaps—we align your product vision with business goals.",
    tag: "Strategy",
    large: true,
    accent: "bg-neutral-50",
    iconBg: "bg-cobalt-500",
    iconColor: "text-white",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-cobalt-500 mb-3">
              What We Do
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              End-to-End Digital
              <br />
              <span className="text-cobalt-500">Excellence</span>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-sm text-base leading-relaxed">
            A full-spectrum agency that handles everything from pixel to production—so you can focus on what matters most.
          </p>
        </div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`${svc.accent} rounded-3xl p-7 flex flex-col justify-between group cursor-pointer ${
                svc.large ? "sm:col-span-2 lg:col-span-1" : ""
              } ${svc.dark ? "text-white" : ""} ${svc.blue ? "text-white" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 ${svc.iconBg} rounded-2xl flex items-center justify-center`}>
                    <svc.icon className={`w-5 h-5 ${svc.iconColor}`} strokeWidth={1.8} />
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      svc.dark
                        ? "bg-white/10 text-white/70"
                        : svc.blue
                        ? "bg-white/20 text-white"
                        : "bg-cobalt-100 text-cobalt-500"
                    }`}
                  >
                    {svc.tag}
                  </span>
                </div>
                <h3
                  className={`text-lg font-bold mb-2 tracking-tight ${
                    svc.dark || svc.blue ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {svc.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    svc.dark ? "text-white/60" : svc.blue ? "text-white/80" : "text-neutral-500"
                  }`}
                >
                  {svc.description}
                </p>
              </div>
              <div className="mt-6">
                <span
                  className={`inline-flex items-center gap-1 text-xs font-semibold ${
                    svc.dark || svc.blue ? "text-white/70 group-hover:text-white" : "text-cobalt-500"
                  } transition-colors`}
                >
                  Learn more
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
