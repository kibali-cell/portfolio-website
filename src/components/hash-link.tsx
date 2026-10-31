import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { scrollToTarget } from "@/lib/smooth-scroll";

/**
 * Link to a section of the home page. On the home page it glides to the
 * section; from any other page it navigates home and the root hash handler
 * glides there once the page has rendered.
 */
export function HashLink({
  id,
  className,
  children,
  onNavigate,
  ...rest
}: {
  id: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  "aria-label"?: string;
}) {
  const onHome = useRouterState({ select: (s) => s.location.pathname === "/" });
  if (onHome) {
    return (
      <a
        href={`#${id}`}
        className={className}
        {...rest}
        onClick={(e) => {
          const el = document.getElementById(id);
          if (el) {
            e.preventDefault();
            scrollToTarget(el);
            window.history.replaceState(null, "", `#${id}`);
          }
          onNavigate?.();
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to="/" hash={id} className={className} {...rest} onClick={onNavigate}>
      {children}
    </Link>
  );
}
