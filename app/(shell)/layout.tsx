import { SideNav } from '@/components/side-nav';

/** Inner pages: a sticky sidebar plus the page content. */
export default function ShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-wrapper flex-1">
      <div className="container items-start md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
        <aside className="sticky top-14 hidden h-[calc(100svh-3.5rem)] border-r border-grid py-8 pr-4 md:block">
          <SideNav />
        </aside>
        <div className="min-w-0 py-8 lg:py-12">{children}</div>
      </div>
    </div>
  );
}
