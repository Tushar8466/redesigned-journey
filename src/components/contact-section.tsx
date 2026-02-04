"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contactsection" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Content */}
        <div className="space-y-6">
          <div className="h-10 w-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
            ✉️
          </div>

          <h2 className="text-4xl font-bold text-white">
            Contact us
          </h2>

          <p className="text-neutral-400 max-w-md">
            We are always looking for ways to improve our products and services.
            Contact us and let us know how we can help you.
          </p>

          <div className="text-sm text-neutral-400 space-y-1">
            <p>tusharsingla22222@gmail.com</p>
            <p>+1 (800) 123-XX21</p>
            <p>support@yoursaas.ai</p>
          </div>
        </div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 space-y-4"
        >
          <Input label="Full name" placeholder="Your name" />
          <Input label="Email Address" placeholder="Your email" />
          <Input label="Company" placeholder="Your company" />
          <Textarea label="Message" placeholder="Type your message here" />

          <button className="w-fit rounded-lg bg-white text-black px-5 py-2 text-sm font-medium hover:bg-neutral-200 transition">
            Submit
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-neutral-400">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function Textarea({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-neutral-400">{label}</label>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
