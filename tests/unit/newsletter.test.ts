import { describe, expect, it } from "vitest";
import { validateEmail } from "@/lib/validation/newsletter";

describe("newsletter validation", () => {
  it("rejects invalid emails", () => {
    expect(validateEmail("bad-email")).toBe("email_invalid");
  });

  it("accepts valid emails", () => {
    expect(validateEmail("reader@example.com")).toBeNull();
  });
});
