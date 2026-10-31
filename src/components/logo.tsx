/** Brand mark: a rounded square with a </> glyph. Mirrors public/favicon.svg. */
export function Logo({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={className}
    >
      <rect width="32" height="32" rx="9" fill="var(--foreground)" />
      <path d="M12.5 11 7.5 16l5 5" stroke="var(--background)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.5 11l5 5-5 5" stroke="var(--background)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.6 9.2 14.4 22.8" stroke="var(--mint)" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}
