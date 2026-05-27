"use client";

import { motion } from "framer-motion";
import { buttonMotion, cardMotion } from "@/lib/animations";
import { serviceOptions } from "@/lib/site-data";

export default function ContactForm({ compact = false }) {
  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={cardMotion}
      className="glass-panel rounded-[32px] p-6 md:p-8"
    >
      <div className="grid gap-5">
        {!compact && (
          <div>
            <span className="eyebrow">Booking form</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
              Book AC repair or service
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Share the issue, service type, and preferred schedule. Our support
              team will contact you quickly to confirm.
            </p>
          </div>
        )}
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Full name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
          />
        </label>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Phone number
            <input
              type="tel"
              name="phone"
              placeholder="Enter mobile number"
              className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Service needed
            <select
              name="service"
              className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 focus:border-sky-400 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Property type
            <select
              name="property"
              className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 focus:border-sky-400 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select property type
              </option>
              <option>Home</option>
              <option>Office</option>
              <option>Retail / Shop</option>
              <option>Commercial site</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Preferred date
            <input
              type="date"
              name="date"
              className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 focus:border-sky-400 focus:outline-none"
            />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Service address
          <input
            type="text"
            name="address"
            placeholder="Enter your location"
            className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Describe the AC issue
          <textarea
            name="message"
            rows="5"
            placeholder="Cooling issue, water leakage, noise, installation, gas refill, or urgent repair notes"
            className="rounded-3xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
          />
        </label>
        <motion.button
          type="submit"
          variants={buttonMotion}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="primary-button w-full"
        >
          Submit Booking Request
        </motion.button>
      </div>
    </motion.form>
  );
}
