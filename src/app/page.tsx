import { pageMetadata } from '@/lib/seo';
import { CtaBand, Features, Hero, JsonLd } from '@/components/kit';
import type { CtaBandProps, FeaturesProps, HeroProps } from '@/components/kit';
import { organizationLd, websiteLd } from '@/lib/schema';

export const metadata = pageMetadata({
  title: "Fitted joinery in Bristol & Bath | Harbour & Pine",
  description: "Made-to-measure wardrobes, alcove shelving and kitchens in solid oak and tulipwood, built in our workshop and fitted in Bristol and Bath homes.",
  path: "/",
});

export default function Page() {
  return (
    <>
      <JsonLd nodes={[organizationLd("LocalBusiness"), websiteLd()]} />
      <Hero {...({
        "variant": "editorial",
        "eyebrow": "Bristol & Bath",
        "headline": "Joinery that fits the house you have",
        "sub": "Wardrobes, shelving and kitchens made to measure for awkward walls and older homes, built in our own workshop.",
        "primaryCta": {
          "label": "Call the workshop",
          "href": "tel:+441174960123"
        },
        "secondaryCta": {
          "label": "See our work",
          "href": "/services"
        },
        "image": {
          "alt": "Painted alcove shelving beside a period fireplace",
          "brief": "A finished alcove unit in a period living room, soft daylight from the side, no people.",
          "aspect": "portrait"
        }
      } satisfies HeroProps)} />
      <Features {...({
        "variant": "grid",
        "eyebrow": "What we make",
        "headline": "Three things, made properly",
        "items": [
          {
            "title": "Fitted wardrobes",
            "body": "Built to the wall you have, sloping ceilings and uneven floors included.",
            "icon": "Home",
            "href": "/services"
          },
          {
            "title": "Alcove shelving",
            "body": "Shelving and cupboards that frame a fireplace instead of fighting it.",
            "icon": "Layers",
            "href": "/services"
          },
          {
            "title": "Kitchen cabinetry",
            "body": "Solid oak or painted tulipwood cabinets, designed around how you cook.",
            "icon": "Hammer",
            "href": "/services"
          }
        ],
        "columns": 3
      } satisfies FeaturesProps)} />
      <CtaBand {...({
        "headline": "Tell us about the wall",
        "body": "Send a photo and rough measurements and we will tell you what is possible.",
        "primaryCta": {
          "label": "Email the workshop",
          "href": "mailto:hello@harbourandpine.example"
        }
      } satisfies CtaBandProps)} />
    </>
  );
}
