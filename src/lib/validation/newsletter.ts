export type NewsletterState = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string): string | null {
  if (!email.trim()) return "email_required";
  if (!EMAIL_REGEX.test(email.trim())) return "email_invalid";
  return null;
}
