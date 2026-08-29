export function BlogMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`} aria-hidden>
      <svg width="18" height="18" viewBox="0 0 18 18">
        <rect
          x="3"
          y="3"
          width="12"
          height="12"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="9" cy="9" r="2.2" fill="currentColor" className="blog-mark-dot" />
      </svg>
    </span>
  );
}
