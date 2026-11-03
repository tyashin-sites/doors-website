import { pageMetadata } from '@/lib/seo';
import { Breadcrumbs, Contact, CtaBand, JsonLd } from '@/components/kit';
import type { ContactProps, CtaBandProps } from '@/components/kit';
import { organizationLd, websiteLd, breadcrumbLd } from '@/lib/schema';

export const metadata = pageMetadata({
  title: "Contact Harbour & Pine Joinery",
  description: "Call or email Harbour & Pine Joinery about fitted wardrobes, shelving or kitchens in Bristol and Bath. Workshop hours Monday to Friday, 8:00 to 17:00.",
  path: "/contact",
});

const CRUMBS = [{"name":"Home","path":"/"},{"name":"Contact","path":"/contact"}];

export default function Page() {
  return (
    <>
      <JsonLd nodes={[organizationLd("LocalBusiness"), websiteLd(), breadcrumbLd(CRUMBS)]} />
      <Breadcrumbs items={CRUMBS} />
      <Contact {...({
        "headline": "Talk to the workshop",
        "body": "A photo of the wall and rough measurements help us answer quickly.",
        "showMap": false,
        "form": true,
        "headingLevel": "h1"
      } satisfies ContactProps)} />
      <CtaBand {...({
        "headline": "Prefer to call?",
        "primaryCta": {
          "label": "Call the workshop",
          "href": "tel:+441174960123"
        }
      } satisfies CtaBandProps)} />
    </>
  );
}
