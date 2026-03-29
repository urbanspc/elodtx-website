"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "submitting" | "success" | "error";

interface WaitlistFormProps {
  compact?: boolean;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PLATFORM_TYPES = [
  { value: "dating", label: "Dating / Social" },
  { value: "hr", label: "HR / Recruitment" },
  { value: "wellness", label: "Wellness / Therapy" },
  { value: "networking", label: "Professional Networking" },
  { value: "enterprise", label: "Enterprise / Teams" },
  { value: "education", label: "Education / Mentorship" },
  { value: "other", label: "Other" },
];

const MAU_OPTIONS = [
  { value: "under_5k", label: "Under 5,000" },
  { value: "5k_50k", label: "5,000 – 50,000" },
  { value: "50k_500k", label: "50,000 – 500,000" },
  { value: "500k_plus", label: "500,000+" },
];

const selectBaseClasses =
  "w-full rounded-lg border border-dark-tertiary bg-dark-secondary px-3 py-2 text-sm text-[rgba(255,255,255,0.85)] outline-none transition-colors focus:border-brand-gold focus:ring-2 focus:ring-[rgba(201,168,76,0.2)] disabled:opacity-50 disabled:cursor-not-allowed appearance-none";

export function WaitlistForm({ compact = false }: WaitlistFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Compact mode state
  const [compactEmail, setCompactEmail] = useState("");
  const [compactEmailError, setCompactEmailError] = useState("");

  // Full form state
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("");
  const [mau, setMau] = useState("");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleCompactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCompactEmailError("");

    if (!compactEmail.trim()) {
      setCompactEmailError("Email is required");
      return;
    }
    if (!EMAIL_REGEX.test(compactEmail)) {
      setCompactEmailError("Please enter a valid email address");
      return;
    }

    setFormState("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: compactEmail }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
      setFormState("success");
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const validateFullForm = () => {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!company.trim()) errors.company = "Company is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    return errors;
  };

  const handleFullSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateFullForm();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setFormState("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, platform, mau, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
      setFormState("success");
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const handleRetry = () => {
    setFormState("idle");
    setErrorMessage("");
  };

  // ─── Success state ────────────────────────────────────────────────────────

  if (formState === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center gap-3 py-6 text-center"
      >
        <CheckCircle size={40} className="text-brand-gold" />
        <p className="text-[rgba(255,255,255,0.85)] font-semibold text-lg">
          You&apos;re on the list!
        </p>
        <p className="text-[rgba(255,255,255,0.5)] text-sm">
          Thank you! We&apos;ll be in touch within 48 hours.
        </p>
      </motion.div>
    );
  }

  // ─── Error state ─────────────────────────────────────────────────────────

  if (formState === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center gap-3 py-6 text-center"
      >
        <AlertCircle size={40} className="text-error" />
        <p className="text-[rgba(255,255,255,0.85)] font-semibold">
          Something went wrong
        </p>
        <p className="text-[rgba(255,255,255,0.5)] text-sm max-w-xs">
          {errorMessage}
        </p>
        <Button
          onClick={handleRetry}
          className="mt-2 bg-brand-gold text-dark-primary hover:bg-brand-gold-light font-medium"
        >
          Try Again
        </Button>
      </motion.div>
    );
  }

  // ─── Compact mode ─────────────────────────────────────────────────────────

  if (compact) {
    return (
      <form onSubmit={handleCompactSubmit} noValidate>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="your@email.com"
              value={compactEmail}
              onChange={(e) => {
                setCompactEmail(e.target.value);
                if (compactEmailError) setCompactEmailError("");
              }}
              disabled={formState === "submitting"}
              className="h-10 bg-dark-secondary border-dark-tertiary focus-visible:border-brand-gold focus-visible:ring-[rgba(201,168,76,0.2)] placeholder:text-[rgba(255,255,255,0.3)] text-[rgba(255,255,255,0.85)]"
              aria-label="Email address"
            />
            {compactEmailError && (
              <p className="mt-1 text-xs text-error">{compactEmailError}</p>
            )}
          </div>
          <Button
            type="submit"
            disabled={formState === "submitting"}
            className="h-10 px-5 bg-brand-gold text-dark-primary font-semibold hover:bg-brand-gold-light shrink-0 disabled:opacity-60"
          >
            {formState === "submitting" ? (
              <span className="flex items-center gap-2">
                <Loader2 size={14} className="animate-spin" />
                Joining…
              </span>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </div>
      </form>
    );
  }

  // ─── Full form ────────────────────────────────────────────────────────────

  const inputClasses =
    "h-10 bg-dark-secondary border-dark-tertiary focus-visible:border-brand-gold focus-visible:ring-[rgba(201,168,76,0.2)] placeholder:text-[rgba(255,255,255,0.3)] text-[rgba(255,255,255,0.85)]";

  return (
    <form onSubmit={handleFullSubmit} noValidate className="flex flex-col gap-4">
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[rgba(255,255,255,0.7)]">
          Name <span className="text-brand-gold">*</span>
        </label>
        <Input
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (fieldErrors.name)
              setFieldErrors((p) => ({ ...p, name: "" }));
          }}
          disabled={formState === "submitting"}
          className={inputClasses}
        />
        {fieldErrors.name && (
          <p className="text-xs text-error">{fieldErrors.name}</p>
        )}
      </div>

      {/* Company */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[rgba(255,255,255,0.7)]">
          Company <span className="text-brand-gold">*</span>
        </label>
        <Input
          type="text"
          placeholder="Your company or platform name"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
            if (fieldErrors.company)
              setFieldErrors((p) => ({ ...p, company: "" }));
          }}
          disabled={formState === "submitting"}
          className={inputClasses}
        />
        {fieldErrors.company && (
          <p className="text-xs text-error">{fieldErrors.company}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[rgba(255,255,255,0.7)]">
          Email <span className="text-brand-gold">*</span>
        </label>
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (fieldErrors.email)
              setFieldErrors((p) => ({ ...p, email: "" }));
          }}
          disabled={formState === "submitting"}
          className={inputClasses}
        />
        {fieldErrors.email && (
          <p className="text-xs text-error">{fieldErrors.email}</p>
        )}
      </div>

      {/* Platform type + MAU — side by side on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[rgba(255,255,255,0.7)]">
            Platform Type
          </label>
          <div className="relative">
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              disabled={formState === "submitting"}
              className={selectBaseClasses}
            >
              <option value="" className="bg-dark-secondary">
                Select type…
              </option>
              {PLATFORM_TYPES.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="bg-dark-secondary"
                >
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[rgba(255,255,255,0.4)] text-xs">
              ▾
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[rgba(255,255,255,0.7)]">
            Monthly Active Users
          </label>
          <div className="relative">
            <select
              value={mau}
              onChange={(e) => setMau(e.target.value)}
              disabled={formState === "submitting"}
              className={selectBaseClasses}
            >
              <option value="" className="bg-dark-secondary">
                Select range…
              </option>
              {MAU_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="bg-dark-secondary"
                >
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[rgba(255,255,255,0.4)] text-xs">
              ▾
            </span>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[rgba(255,255,255,0.7)]">
          Message{" "}
          <span className="text-[rgba(255,255,255,0.3)] font-normal">
            (optional)
          </span>
        </label>
        <Textarea
          placeholder="Tell us about your platform and what you're hoping to achieve with EloDtx…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={formState === "submitting"}
          rows={4}
          className="bg-dark-secondary border-dark-tertiary focus-visible:border-brand-gold focus-visible:ring-[rgba(201,168,76,0.2)] placeholder:text-[rgba(255,255,255,0.3)] text-[rgba(255,255,255,0.85)] resize-none"
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={formState === "submitting"}
        className="h-11 w-full bg-brand-gold text-dark-primary font-semibold hover:bg-brand-gold-light disabled:opacity-60 text-base"
      >
        {formState === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 size={18} className="animate-spin" />
            Submitting…
          </span>
        ) : (
          "Join Waitlist"
        )}
      </Button>

      <p className="text-xs text-[rgba(255,255,255,0.3)] text-center">
        No spam. We&apos;ll reply within 48 hours.
      </p>
    </form>
  );
}
