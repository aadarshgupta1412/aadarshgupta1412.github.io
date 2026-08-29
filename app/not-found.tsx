import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm text-[var(--accent)] mb-3">404</p>
        <h1 className="font-display text-4xl font-bold mb-4">Nothing here</h1>
        <Link href="/" className="text-[var(--primary)]">
          Home →
        </Link>
      </div>
    </div>
  );
}
