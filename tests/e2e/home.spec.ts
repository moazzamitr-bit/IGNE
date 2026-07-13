import { expect, test } from "@playwright/test";

test("Persian home loads and has no mobile overflow", async ({ page }) => {
  await page.goto("/fa");
  await expect(page.getByRole("heading", { name: "اندیشه تصمیم می‌سازد" })).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});

test("mobile menu opens and locale switch preserves path", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/fa");
  await expect(page.locator('.site-header[data-ready="true"]')).toBeVisible();
  await page.getByRole("button", { name: "منوی موبایل" }).click();
  await expect(page.locator("#mobile-menu").getByRole("link", { name: "انتشارات" })).toBeVisible();
  await page.locator("#mobile-menu").getByRole("link", { name: "انتشارات" }).click();
  await expect(page).toHaveURL(/\/fa\/publications/);
  await page.locator(".site-header .locale-switcher").click();
  await expect(page).toHaveURL(/\/en\/publications/);
});

test("search opens and navigates to a publication detail", async ({ page }) => {
  await page.goto("/fa");
  await expect(page.locator('.site-header[data-ready="true"]')).toBeVisible();
  await page.locator('.site-header button[aria-label="جست‌وجو"]').click();
  await expect(page.locator(".search-dialog")).toBeVisible();
  await page.locator(".search-dialog input").fill("حکمرانی");
  await expect(page.getByText("چارچوب تحلیلی کیفیت حکمرانی")).toBeVisible();
  await page.locator('.search-dialog a[href="/fa/publications/governance-quality-framework-demo"]').click();
  await expect(page).toHaveURL(/\/fa\/publications\/governance-quality-framework-demo/);
});

test("newsletter states and carousel keyboard control work", async ({ page }) => {
  await page.goto("/fa");
  await expect(page.locator('.newsletter-frame form[data-ready="true"]')).toBeVisible();
  await page.getByRole("button", { name: "قبلی" }).press("Enter");
  await page.getByPlaceholder("ایمیل خود را وارد کنید").fill("bad-email");
  await page.locator('.newsletter-frame button[type="submit"]').click();
  await expect(page.getByText("لطفاً یک ایمیل معتبر وارد کنید.")).toBeVisible();
  await page.getByPlaceholder("ایمیل خود را وارد کنید").fill("reader@example.com");
  await page.locator('.newsletter-frame button[type="submit"]').click();
  await expect(page.getByText("عضویت شما ثبت شد.")).toBeVisible();
});
