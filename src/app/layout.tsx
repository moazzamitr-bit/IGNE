import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://igne.ir"),
  title: {
    default: "اندیشکده حکمرانی و اقتصاد نوین | IGNE",
    template: "%s | IGNE",
  },
  description:
    "وب‌سایت رسمی اندیشکده حکمرانی و اقتصاد نوین؛ پیوند پژوهش، حکمرانی و تصمیم‌سازی.",
  openGraph: {
    title: "اندیشکده حکمرانی و اقتصاد نوین",
    description: "جایی که اندیشه تصمیم می‌سازد",
    images: ["/images/tehran-alborz-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      data-scroll-behavior="smooth"
      className={`${vazirmatn.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
