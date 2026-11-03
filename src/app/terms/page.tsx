import { pageMetadata } from '@/lib/seo';
import { Breadcrumbs, JsonLd, Prose } from '@/components/kit';
import type { ProseProps } from '@/components/kit';
import { organizationLd, websiteLd, breadcrumbLd } from '@/lib/schema';

export const metadata = pageMetadata({
  title: "Terms of Service | Harbour & Pine Joinery",
  description: "The terms under which Harbour & Pine Joinery provides this website and the general information on it about our joinery services in Bristol and Bath.",
  path: "/terms",
});

const CRUMBS = [{"name":"Home","path":"/"},{"name":"Terms","path":"/terms"}];

export default function Page() {
  return (
    <>
      <JsonLd nodes={[organizationLd("LocalBusiness"), websiteLd(), breadcrumbLd(CRUMBS)]} />
      <Breadcrumbs items={CRUMBS} />
      <Prose {...({
        "headline": "Terms of Service",
        "blocks": [
          {
            "heading": "Using this website",
            "paragraphs": [
              "This website is operated by Harbour & Pine Joinery. Content is general information and may change without notice."
            ]
          }
        ],
        "headingLevel": "h1"
      } satisfies ProseProps)} />
    </>
  );
}
