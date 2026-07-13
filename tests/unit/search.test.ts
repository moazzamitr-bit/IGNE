import { describe, expect, it } from "vitest";
import { contentRepository } from "@/lib/content/repository";
import { includesNormalized, normalizePersianText } from "@/lib/search/normalize";

describe("search", () => {
  it("normalizes Arabic Yeh and Kaf plus zero-width non-joiners", () => {
    expect(normalizePersianText("حكمراني\u200c")).toBe("حکمرانی");
  });

  it("matches normalized Persian text", () => {
    expect(includesNormalized("حکمرانی نوین", "حكمراني")).toBe(true);
  });

  it("returns grouped content results", async () => {
    const results = await contentRepository.search("fa", "حکمرانی");
    expect(results.some((item) => item.type === "publication")).toBe(true);
  });
});
