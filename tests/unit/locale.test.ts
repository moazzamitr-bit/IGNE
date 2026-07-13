import { describe, expect, it } from "vitest";
import { switchLocalePath } from "@/lib/i18n/config";

describe("locale routing", () => {
  it("preserves the current path when switching locales", () => {
    expect(switchLocalePath("/fa/publications/example", "en")).toBe("/en/publications/example");
  });
});
