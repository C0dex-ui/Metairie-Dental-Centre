import type { ComponentType } from "react";
import {
  Drop,
  FirstAidKit,
  MagicWand,
  Sparkle,
  Tooth,
  Crown,
  Pulse,
  MoonStars,
} from "@phosphor-icons/react";
import type { ServiceSlug } from "@/lib/tigertown";

type Icon = ComponentType<{ className?: string; weight?: "regular" | "fill" | "duotone" }>;

export const SERVICE_ICONS: Record<ServiceSlug, Icon> = {
  whitening: MagicWand,
  bonding: Drop,
  veneers: Sparkle,
  crowns: Crown,
  fillings: Tooth,
  periodontal: Pulse,
  implants: Tooth,
  sedation: MoonStars,
};
