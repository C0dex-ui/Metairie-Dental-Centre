import { createFileRoute, Outlet } from "@tanstack/react-router";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/blog")({
  beforeLoad: () => toHome("top"),
  component: () => <Outlet />,
});
