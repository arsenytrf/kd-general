"use client";

import { useState, useRef, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { useBusiness } from "@/contexts/BusinessContext";
import { BadgeCheck, Send } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full bg-slate-50 border border-sand-300 text-slate-900 px-4 py-3 text-[14px] rounded-md placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 transition-colors";

const labelCls = "block text-[11px] font-body uppercase tracking-[0.2em] text-slate-500 mb-1.5 font-semibold";

export default function QuoteForm() {
  const { company, services } = useBusiness();
  const serviceOptions = [...services.map((s) => s.title), "Something else"];
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    if (formData.get("_gotcha")) {
      setStatus("success");
      return;
    }

    try {
      const response = await fetch(company.formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="relative bg-slate-50 border border-sand-200 shadow-[0_20px_50px_-25px_rgba(26,24,20,0.2)] rounded-sm p-10">
        <div className="text-center py-6">
          <div className="w-16 h-16 rounded-full bg-sky-500/10 flex items-center justify-center mx-auto mb-5">
            <BadgeCheck className="w-7 h-7 text-sky-500" />
          </div>
          <h3 className="font-display text-[26px] font-bold uppercase text-slate-900 mb-2">
            Thanks — we got it.
          </h3>
          <p className="text-slate-600 max-w-sm mx-auto text-[15px] leading-relaxed">
            {company.owner} or the team will reach out within 24 hours to schedule
            the walkthrough.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-sky-500 hover:text-sky-600 font-body text-[12px] uppercase tracking-[0.2em] font-semibold transition-colors"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-slate-50 border border-sand-200 shadow-[0_20px_50px_-25px_rgba(26,24,20,0.18)] rounded-sm p-7 md:p-10">
      <div className="mb-7">
        <span className="inline-flex items-center gap-2.5 mb-3">
          <span className="w-5 h-px bg-clay-500" />
          <span className="font-body text-[11px] uppercase tracking-[0.22em] text-clay-500 font-semibold">
            Free estimate
          </span>
        </span>
        <h3 className="font-display text-[28px] md:text-[32px] font-bold uppercase text-slate-900 tracking-tight leading-tight">
          Tell us about the project.
        </h3>
        <p className="text-slate-600 text-[14px] mt-2">
          We respond within 24 hours — usually much faster.
        </p>
      </div>

      {status === "error" && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-[13px] rounded-md">
          Something went wrong on our end. Try again, or call us at{" "}
          <a href={`tel:${company.phoneRaw}`} className="underline font-medium">
            {company.phone}
          </a>
          .
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="absolute opacity-0 pointer-events-none h-0 w-0" aria-hidden="true" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cq-name" className={labelCls}>Your name</label>
            <input type="text" id="cq-name" name="name" required placeholder="Jane Smith" autoComplete="name" className={cn(inputCls)} />
          </div>
          <div>
            <label htmlFor="cq-phone" className={labelCls}>Phone</label>
            <input type="tel" id="cq-phone" name="phone" required placeholder="(503) 555-1234" autoComplete="tel" className={cn(inputCls)} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cq-email" className={labelCls}>Email</label>
            <input type="email" id="cq-email" name="email" placeholder="you@email.com" autoComplete="email" className={cn(inputCls)} />
          </div>
          <div>
            <label htmlFor="cq-service" className={labelCls}>Service</label>
            <select id="cq-service" name="service" required defaultValue="" className={cn(inputCls, "appearance-none cursor-pointer")}>
              <option value="" disabled>Pick a service</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="cq-address" className={labelCls}>Property address (optional)</label>
          <input type="text" id="cq-address" name="address" placeholder="Your property address" className={cn(inputCls)} />
        </div>

        <div>
          <label htmlFor="cq-message" className={labelCls}>Describe the project</label>
          <textarea id="cq-message" name="message" rows={4} placeholder="What do you need done? Timeline, square footage, anything helpful…" className={cn(inputCls, "resize-none")} />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "w-full bg-sky-500 text-sand-50 font-body font-medium py-4 text-[14px] rounded-md transition-all duration-300",
            "hover:bg-sky-600 active:bg-sky-700 disabled:opacity-60 disabled:pointer-events-none",
            "shadow-[0_8px_24px_-8px_rgba(44,74,62,0.45)] hover:shadow-[0_12px_28px_-8px_rgba(44,74,62,0.55)]"
          )}
        >
          {status === "submitting" ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-sand-50/30 border-t-sand-50 rounded-full animate-spin" />
              Sending…
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Send request
              <Send className="w-4 h-4" />
            </span>
          )}
        </button>

        <p className="text-[12px] text-slate-500 text-center mt-2">
          Or just call <a href={`tel:${company.phoneRaw}`} className="text-sky-500 hover:text-sky-600 underline underline-offset-2">{company.phone}</a> — we&rsquo;re around.
        </p>
      </form>
    </div>
  );
}
