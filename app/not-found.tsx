import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container flex flex-1 flex-col items-start justify-center gap-4 py-24">
      <p className="font-display text-8xl leading-none text-outline sm:text-[14rem]">404</p>
      <p className="border-[3px] border-foreground bg-secondary px-4 py-2 font-sans text-lg font-bold text-secondary-foreground shadow-hard">This page does not exist or has moved.</p>
      <Button asChild size="lg">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
