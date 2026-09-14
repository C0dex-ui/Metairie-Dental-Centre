import { createFileRoute, Outlet } from "@tanstack/react-router";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/areas")({
  beforeLoad: () => toHome("office"),
  component: () => <Outlet />,
});
