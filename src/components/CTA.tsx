"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="cobalt-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-12 w-72 h-72 bg-white/5 rounded-full pointer-events-none" />

          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-cobalt-200 mb-4">
              Let&apos;s Work Together
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Ready to Build
              <br />
              Something Extraordinary?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto text-base leading-relaxed mb-10">
              Whether you have a clear vision or just a great idea, we&apos;d love to hear from you.
              Our team typically responds within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919344227218"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-cobalt-500 font-semibold rounded-3xl hover:bg-cobalt-50 transition-colors text-base shadow-sm"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-3xl transition-colors text-base border border-white/20"
              >
                Explore Services
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"
        >
          {[
            { icon: Mail, label: "Email Us", value: "dhanush27109344@gmail.com" },
            { icon: Phone, label: "Call Us", value: "+91 9344227218" },
            { icon: MapPin, label: "Location", value: "Chennai, India" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-white rounded-3xl p-6 flex items-center gap-4 shadow-sm"
            >
              <div className="w-10 h-10 bg-cobalt-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-cobalt-500" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-medium">{label}</p>
                <p className="text-sm font-semibold text-neutral-800">{value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
