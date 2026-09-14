import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/not-found";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
  head: () => ({
    meta: [
      { title: "Page not found | Canal Street Family Dentistry" },
      { name: "robots", content: "noindex" },
    ],
  }),
});
