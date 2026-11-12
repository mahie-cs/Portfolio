import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container flex flex-1 flex-col items-start justify-center gap-4 py-24">
      <p className="font-display text-7xl font-semibold tracking-tight sm:text-9xl">404</p>
      <p className="text-lg text-muted-foreground">This page does not exist or has moved.</p>
      <Button asChild className="rounded-full">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
