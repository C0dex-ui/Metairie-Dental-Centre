import { useState } from "react";
import { DOCTOR, NAP } from "@/lib/losc";

export function LeadForm({
  variant = "contact",
}: {
  variant?: "contact" | "appointment";
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="border border-line bg-mist p-6 text-navy">
        Thank you. This form is not a reserved appointment. Call {NAP.phone} so the desk can confirm your visit with{" "}
        {DOCTOR.name}.
      </p>
    );
  }

  return (
    <form
      className="grid gap-4"
      suppressHydrationWarning
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-navy">Name</span>
        <input className="hs-input" name="name" required autoComplete="name" suppressHydrationWarning />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-navy">Phone</span>
        <input className="hs-input" name="phone" type="tel" required autoComplete="tel" suppressHydrationWarning />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-navy">Email</span>
        <input className="hs-input" name="email" type="email" autoComplete="email" suppressHydrationWarning />
      </label>
      {variant === "appointment" ? (
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-navy">Preferred date</span>
          <input className="hs-input" name="date" type="date" suppressHydrationWarning />
        </label>
      ) : (
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-navy">Subject</span>
          <input className="hs-input" name="subject" suppressHydrationWarning />
        </label>
      )}
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-navy">Message</span>
        <textarea className="hs-input min-h-32" name="message" rows={5} suppressHydrationWarning />
      </label>
      <p className="text-xs text-muted">
        Appointments are confirmed by phone. This form is a callback request only.
      </p>
      <button type="submit" className="hs-btn hs-btn-primary w-full sm:w-auto">
        {variant === "appointment" ? "Request a callback" : "Send message"}
      </button>
    </form>
  );
}
