import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { NotFoundPage } from "@/components/not-found";
import { DESCRIPTION, DOCTOR, NAP, SITE_NAME, SITE_URL, TITLE } from "@/lib/losc";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#611759" },
      { name: "author", content: `${DOCTOR.name}, ${DOCTOR.credential}` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/mdc/thomas.webp` },
      { property: "og:image:alt", content: "Dr. Thomas Murphy, family dentist in Metairie" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/mdc/thomas.webp` },
      { name: "geo.region", content: "US-LA" },
      { name: "geo.placename", content: "Metairie" },
      { name: "geo.position", content: `${NAP.lat};${NAP.lng}` },
      { name: "ICBM", content: `${NAP.lat}, ${NAP.lng}` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: "/mdc/hero-poster.jpg" },
      { rel: "icon", type: "image/png", href: "/mdc/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFoundPage,
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-paper text-ink antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
