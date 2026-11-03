import { pageMetadata } from '@/lib/seo';
import { Breadcrumbs, CtaBand, Features, JsonLd } from '@/components/kit';
import type { CtaBandProps, FeaturesProps } from '@/components/kit';
import { organizationLd, websiteLd, breadcrumbLd } from '@/lib/schema';

export const metadata = pageMetadata({
  title: "Fitted wardrobes, shelving & kitchens | Harbour & Pine",
  description: "Made-to-measure fitted wardrobes, alcove shelving and kitchen cabinetry in solid oak and painted tulipwood, designed and fitted by our own team.",
  path: "/services",
});

const CRUMBS = [{"name":"Home","path":"/"},{"name":"Services","path":"/services"}];

export default function Page() {
  return (
    <>
      <JsonLd nodes={[organizationLd("LocalBusiness"), websiteLd(), breadcrumbLd(CRUMBS)]} />
      <Breadcrumbs items={CRUMBS} />
      <section className="section pb-0">
        <div className="container-x max-w-3xl">
          <h1 className="tt-display reveal">What we make</h1>
        </div>
      </section>
      <Features {...({
        "variant": "alternating",
        "headline": "Made for one house only",
        "items": [
          {
            "title": "Fitted wardrobes",
            "body": "Measured on site, drawn to scale and built to fit walls that are rarely straight.",
            "icon": "PenTool"
          },
          {
            "title": "Alcove shelving",
            "body": "Cupboards below, open shelves above, proportioned to the room and its fireplace.",
            "icon": "Layers"
          },
          {
            "title": "Kitchen cabinetry",
            "body": "Cabinets in solid oak or painted tulipwood, built around your layout and the way you cook.",
            "icon": "Hammer"
          }
        ]
      } satisfies FeaturesProps)} />
      <CtaBand {...({
        "headline": "Start with a conversation",
        "primaryCta": {
          "label": "Contact us",
          "href": "/contact"
        }
      } satisfies CtaBandProps)} />
    </>
  );
}
