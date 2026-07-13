import { BadgeCheck, Banknote, Cpu, Globe2, Landmark, Scale } from "lucide-react";
import type { ResearchArea } from "@/lib/content/types";

const iconMap = {
  innovation: Cpu,
  globe: Globe2,
  infrastructure: Banknote,
  culture: Landmark,
  security: BadgeCheck,
  justice: Scale,
} satisfies Record<ResearchArea["icon"], typeof Cpu>;

export function ResearchIcon({ name }: { name: ResearchArea["icon"] }) {
  const Icon = iconMap[name];
  return <Icon aria-hidden="true" strokeWidth={1.6} />;
}
