import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
} from "@tanstack/react-router";
import { LangProvider, useT } from "@/lib/i18n";
import { scrollToTarget } from "@/lib/smooth-scroll";

function NotFoundComponent() {
  const t = useT();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t("notfound.title")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("notfound.sub")}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("notfound.home")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { title: "Jonas Kiwia — Software Engineer & Founder in Tanzania" },
      { name: "description", content: "I build websites and business systems that work as hard as you do. Web developer in Tanzania, available worldwide." },
      { name: "author", content: "Jonas Kiwia" },
      { property: "og:title", content: "Jonas Kiwia — Software Engineer & Founder" },
      { property: "og:description", content: "Portfolio of Jonas Kiwia. Web apps, business systems, and custom platforms." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

/** Glides to #hash targets (e.g. /#contact) after navigation, once the page has rendered. */
function HashScroll() {
  const { hash, pathname } = useRouterState({ select: (s) => s.location });
  useEffect(() => {
    if (!hash) return;
    // The target page may still be loading (code-split chunk) — retry briefly.
    let tries = 0;
    const timer = window.setInterval(() => {
      const el = document.getElementById(hash);
      if (el) {
        window.clearInterval(timer);
        // let the router finish its own scroll-to-top first, then glide
        window.setTimeout(() => scrollToTarget(el), 250);
      } else if (++tries > 30) {
        window.clearInterval(timer);
      }
    }, 100);
    return () => window.clearInterval(timer);
  }, [hash, pathname]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        {/* SPA mode: <html>/<body> live in index.html; HeadContent applies each route's title/meta */}
        <HeadContent />
        <HashScroll />
        <Outlet />
      </LangProvider>
    </QueryClientProvider>
  );
}
