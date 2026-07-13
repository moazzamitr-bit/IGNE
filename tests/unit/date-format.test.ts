import { describe, expect, it } from "vitest";
import { formatDate, toPersianDigits } from "@/lib/dates/format";

describe("date formatting", () => {
  it("converts latin digits to Persian digits", () => {
    expect(toPersianDigits("2026")).toBe("۲۰۲۶");
  });

  it("formats Persian dates with the Persian calendar", () => {
    expect(formatDate("2026-05-10", "fa")).toContain("۱۴۰۵");
  });
});
