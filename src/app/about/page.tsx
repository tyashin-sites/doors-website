import { pageMetadata } from '@/lib/seo';
import { Breadcrumbs, CtaBand, JsonLd, Story } from '@/components/kit';
import type { CtaBandProps, StoryProps } from '@/components/kit';
import { organizationLd, websiteLd, breadcrumbLd } from '@/lib/schema';

export const metadata = pageMetadata({
  title: "About our workshop | Harbour & Pine Joinery",
  description: "Harbour & Pine designs, builds and fits bespoke joinery for older homes in Bristol and Bath, from first measure to final fitting by our own team.",
  path: "/about",
});

const CRUMBS = [{"name":"Home","path":"/"},{"name":"About","path":"/about"}];

export default function Page() {
  return (
    <>
      <JsonLd nodes={[organizationLd("LocalBusiness"), websiteLd(), breadcrumbLd(CRUMBS)]} />
      <Breadcrumbs items={CRUMBS} />
      <section className="section pb-0">
        <div className="container-x max-w-3xl">
          <h1 className="tt-display reveal">The workshop</h1>
        </div>
      </section>
      <Story {...({
        "variant": "split",
        "headline": "Designed, built and fitted by us",
        "paragraphs": [
          "Every piece starts with a visit and a tape measure. We draw it, build it in our workshop and fit it ourselves, so the person who measured the wall is the person who answers for the result."
        ],
        "image": {
          "alt": "Joiner planing an oak board in the workshop",
          "brief": "Hands planing a long oak board at the bench, shavings visible, warm workshop light.",
          "aspect": "landscape"
        },
        "imageSide": "right"
      } satisfies StoryProps)} />
      <CtaBand {...({
        "headline": "See if we can help",
        "primaryCta": {
          "label": "Contact us",
          "href": "/contact"
        }
      } satisfies CtaBandProps)} />
    </>
  );
}
