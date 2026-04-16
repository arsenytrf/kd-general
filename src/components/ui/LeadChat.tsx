"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowLeft, Check } from "lucide-react";
import { useBusiness } from "@/contexts/BusinessContext";

/**
 * LeadChat — conversational lead capture.
 * Editorial voice, first-person from Gabriel. Moss + bone palette.
 * Session persists in localStorage so a closed chat picks back up.
 */

type Step = "service" | "urgency" | "contact" | "done";

const STORAGE_KEY = "leadsite.leadchat.v1";

const urgencyOptions = [
  { value: "asap", label: "As soon as possible", note: "Emergency / leak / deadline" },
  { value: "30d", label: "Within a month", note: "Planning to start soon" },
  { value: "90d", label: "Next 2–3 months", note: "Scheduling ahead" },
  { value: "planning", label: "Still gathering quotes", note: "No rush" },
];

interface State {
  step: Step;
  service: string;
  urgency: string;
  name: string;
  phone: string;
  notes: string;
}

const initialState: State = {
  step: "service",
  service: "",
  urgency: "",
  name: "",
  phone: "",
  notes: "",
};

export default function LeadChat() {
  const { company, logoImage, services } = useBusiness();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Hydrate from localStorage */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as State;
        if (parsed.step !== "done") setState(parsed);
      }
    } catch {}
  }, []);

  /* Persist */
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  /* Scroll to bottom when new message added */
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [state.step, state.service, state.urgency]);

  const reset = () => {
    setState(initialState);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  const back = () => {
    setState((s) => {
      if (s.step === "urgency") return { ...s, step: "service", service: "" };
      if (s.step === "contact") return { ...s, step: "urgency", urgency: "" };
      return s;
    });
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!state.name.trim() || !state.phone.trim()) return;
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("source", "LeadChat");
      formData.append("service", state.service);
      formData.append("urgency", state.urgency);
      formData.append("name", state.name);
      formData.append("phone", state.phone);
      formData.append("notes", state.notes);

      await fetch(company.formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      }).catch(() => null);
    } finally {
      setSubmitting(false);
      setState((s) => ({ ...s, step: "done" }));
    }
  };

  const firstName = state.name.trim().split(" ")[0] || "";

  return (
    <>
      {/* Floating trigger */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="trigger"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Chat with Gabe"
          >
            <div className="flex items-center gap-3 bg-sky-950 text-sand-50 pl-3 pr-5 py-3 rounded-sm shadow-[0_12px_30px_-10px_rgba(15,31,24,0.55)] border border-sky-800/80 hover:bg-sky-800 transition-colors duration-300">
              <span className="relative w-9 h-9 rounded-full bg-sand-50 flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logoImage} alt="" className="w-full h-full object-contain p-1" />
                <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-clay-400 rounded-full border-2 border-sky-950" />
              </span>
              <div className="flex flex-col items-start leading-tight">
                <span className="font-display font-bold uppercase tracking-wider text-[14px]">Chat with Gabe</span>
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-sand-200/80">
                  Usually replies in 24h
                </span>
              </div>
              <MessageCircle className="w-4 h-4 text-sand-200/70 group-hover:text-sand-50 transition-colors" strokeWidth={1.6} />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-slate-950/25 backdrop-blur-[2px] lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed z-[70] bg-slate-50 rounded-sm shadow-[0_40px_80px_-30px_rgba(15,31,24,0.5)] border border-slate-900/10 overflow-hidden flex flex-col
                         bottom-4 right-4 left-4 top-16 max-h-[calc(100dvh-5rem)]
                         lg:inset-auto lg:bottom-6 lg:right-6 lg:top-auto lg:left-auto lg:w-[400px] lg:h-[620px]"
              role="dialog"
              aria-label="Chat with Gabe"
            >
              {/* Header */}
              <div className="relative flex items-center gap-3 bg-sky-950 text-sand-50 px-5 py-4 shrink-0">
                <span className="relative w-11 h-11 rounded-full bg-sand-50 flex items-center justify-center overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logoImage} alt="" className="w-full h-full object-contain p-1" />
                  <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-clay-400 rounded-full border-2 border-sand-50" />
                </span>
                <div className="flex flex-col leading-tight flex-1">
                  <span className="font-display font-bold uppercase tracking-wider text-[16px]">{company.owner} at {company.shortName}</span>
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-sand-200/75">
                    Typically responds within a day
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 -mr-2 text-sand-200/60 hover:text-sand-50 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-6 space-y-5">
                {/* Greeting */}
                <BotBubble>
                  Hi, Gabe here. Tell me a bit about what you&rsquo;re looking at — I&rsquo;ll
                  get back to you personally within a day.
                </BotBubble>

                {/* Step 1: service */}
                <BotBubble delay={0.15}>
                  What kind of work is it?
                </BotBubble>

                {state.service && (
                  <UserBubble delay={0}>
                    {state.service}
                  </UserBubble>
                )}

                {!state.service && (
                  <OptionGrid delay={0.25}>
                    {services.map((svc) => (
                      <OptionChip
                        key={svc.slug}
                        onClick={() => setState((s) => ({ ...s, service: svc.title, step: "urgency" }))}
                      >
                        {svc.title}
                      </OptionChip>
                    ))}
                    <OptionChip
                      onClick={() => setState((s) => ({ ...s, service: "Something else", step: "urgency" }))}
                    >
                      Something else
                    </OptionChip>
                  </OptionGrid>
                )}

                {/* Step 2: urgency */}
                {(state.step === "urgency" || state.step === "contact" || state.step === "done") && (
                  <>
                    <BotBubble delay={0.15}>
                      Got it — {state.service.toLowerCase()}. When are you hoping to start?
                    </BotBubble>

                    {state.urgency && (
                      <UserBubble delay={0}>
                        {urgencyOptions.find((o) => o.value === state.urgency)?.label}
                      </UserBubble>
                    )}

                    {!state.urgency && (
                      <OptionList delay={0.25}>
                        {urgencyOptions.map((opt) => (
                          <OptionRow
                            key={opt.value}
                            onClick={() => setState((s) => ({ ...s, urgency: opt.value, step: "contact" }))}
                            label={opt.label}
                            note={opt.note}
                          />
                        ))}
                      </OptionList>
                    )}
                  </>
                )}

                {/* Step 3: contact form */}
                {(state.step === "contact" || state.step === "done") && (
                  <>
                    <BotBubble delay={0.15}>
                      Perfect. Leave me your name and a good number — I&rsquo;ll call you back.
                    </BotBubble>

                    {state.step === "contact" && (
                      <form onSubmit={submit} className="space-y-3 mt-2">
                        <input
                          type="text"
                          placeholder="Your name"
                          autoComplete="name"
                          value={state.name}
                          onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                          required
                          className="w-full bg-slate-50 border border-slate-900/15 rounded-sm px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 transition-colors"
                        />
                        <input
                          type="tel"
                          placeholder="Phone number"
                          autoComplete="tel"
                          value={state.phone}
                          onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
                          required
                          className="w-full bg-slate-50 border border-slate-900/15 rounded-sm px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 transition-colors"
                        />
                        <textarea
                          placeholder="Anything else we should know? (optional)"
                          rows={2}
                          value={state.notes}
                          onChange={(e) => setState((s) => ({ ...s, notes: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-900/15 rounded-lg px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 transition-colors resize-none"
                        />
                        <button
                          type="submit"
                          disabled={submitting || !state.name.trim() || !state.phone.trim()}
                          className="w-full bg-sky-500 hover:bg-sky-600 text-sand-50 font-body font-semibold rounded-sm py-3 text-[14px] transition-colors disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
                        >
                          {submitting ? (
                            <>
                              <span className="w-4 h-4 border-2 border-sand-50/30 border-t-sand-50 rounded-full animate-spin" />
                              Sending…
                            </>
                          ) : (
                            <>
                              Send to Gabe
                              <Send className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </form>
                    )}

                    {state.step === "done" && (
                      <UserBubble delay={0}>
                        {state.name} · {state.phone}
                      </UserBubble>
                    )}
                  </>
                )}

                {/* Done state */}
                {state.step === "done" && (
                  <BotBubble delay={0.3}>
                    <span className="flex items-center gap-2 mb-2 text-clay-600 font-medium">
                      <Check className="w-4 h-4" strokeWidth={2} /> Got it, {firstName}.
                    </span>
                    I&rsquo;ll give you a call back within a day. In the meantime, feel
                    free to ring the shop directly — <a href={`tel:${company.phoneRaw}`} className="text-sky-500 underline underline-offset-2 font-medium">{company.phone}</a>.
                    <br /><br />
                    <span className="font-bold uppercase tracking-wider">— Gabe</span>
                  </BotBubble>
                )}
              </div>

              {/* Footer */}
              <div className="shrink-0 border-t border-slate-900/10 px-5 py-3 flex items-center justify-between bg-slate-50">
                {state.step !== "service" && state.step !== "done" ? (
                  <button
                    onClick={back}
                    className="flex items-center gap-1.5 text-[12px] text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    Back
                  </button>
                ) : state.step === "done" ? (
                  <button
                    onClick={reset}
                    className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    Start over
                  </button>
                ) : (
                  <span />
                )}
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400 font-semibold">
                  {company.city.split(",")[0]} · OR
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------- sub-components ---------- */

function BotBubble({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className="flex items-start gap-2.5"
    >
      <span className="shrink-0 w-7 h-7 rounded-sm bg-sky-500 text-sand-50 flex items-center justify-center font-display font-bold uppercase text-[11px] mt-0.5">
        G
      </span>
      <div className="max-w-[85%] bg-slate-900/[0.06] border border-slate-900/10 rounded-sm px-4 py-3 text-[14px] text-slate-800 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

function UserBubble({ children, delay = 0.1 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className="flex justify-end"
    >
      <div className="max-w-[85%] bg-sky-500 text-sand-50 rounded-sm px-4 py-2.5 text-[14px]">
        {children}
      </div>
    </motion.div>
  );
}

function OptionGrid({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-wrap gap-2 pl-9"
    >
      {children}
    </motion.div>
  );
}

function OptionChip({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-3.5 py-1.5 bg-slate-50 border border-slate-900/15 rounded-sm text-[12px] text-slate-700 hover:border-sky-500 hover:text-sky-500 hover:bg-sky-500/5 transition-colors font-medium"
    >
      {children}
    </button>
  );
}

function OptionList({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="space-y-2 pl-9"
    >
      {children}
    </motion.div>
  );
}

function OptionRow({ label, note, onClick }: { label: string; note: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-3.5 bg-slate-50 border border-slate-900/15 rounded-sm hover:border-sky-500 hover:bg-sky-500/5 transition-colors group"
    >
      <span className="block font-display text-[15px] text-slate-900 font-semibold group-hover:text-sky-500 transition-colors">
        {label}
      </span>
      <span className="block text-[12px] text-slate-500 mt-0.5">{note}</span>
    </button>
  );
}
