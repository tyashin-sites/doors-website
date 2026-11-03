import Link from 'next/link';
import { siteConfig, PRIMARY_CTA } from '@/config/site';
import { CtaLink } from './CtaLink';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="site-header border-border bg-background/85 sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="header-bar container-x flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-heading flex shrink-0 items-center gap-2 text-xl font-semibold tracking-tight"
          aria-label={`${siteConfig.name} — home`}
        >
          <span
            className="bg-primary text-primary-contrast inline-flex h-8 w-8 items-center justify-center rounded-md text-sm"
            aria-hidden
          >
            {siteConfig.shortName.charAt(0)}
          </span>
          <span>{siteConfig.shortName}</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-foreground/80 hover:text-foreground whitespace-nowrap text-[15px] font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {PRIMARY_CTA ? <CtaLink cta={PRIMARY_CTA} className="hidden sm:inline-flex" /> : null}
          <MobileNav nav={siteConfig.nav} cta={PRIMARY_CTA} />
        </div>
      </div>
    </header>
  );
}
