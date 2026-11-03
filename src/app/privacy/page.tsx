import { pageMetadata } from '@/lib/seo';
import { Breadcrumbs, JsonLd, Prose } from '@/components/kit';
import type { ProseProps } from '@/components/kit';
import { organizationLd, websiteLd, breadcrumbLd } from '@/lib/schema';

export const metadata = pageMetadata({
  title: "Privacy Policy | Harbour & Pine Joinery",
  description: "How Harbour & Pine Joinery collects and uses the information you share with us when you get in touch through this website or by phone or email.",
  path: "/privacy",
});

const CRUMBS = [{"name":"Home","path":"/"},{"name":"Privacy","path":"/privacy"}];

export default function Page() {
  return (
    <>
      <JsonLd nodes={[organizationLd("LocalBusiness"), websiteLd(), breadcrumbLd(CRUMBS)]} />
      <Breadcrumbs items={CRUMBS} />
      <Prose {...({
        "headline": "Privacy Policy",
        "blocks": [
          {
            "heading": "What we collect",
            "paragraphs": [
              "We collect only what you choose to send us, such as your name, phone number, email and details of your project."
            ]
          },
          {
            "heading": "How we use it",
            "paragraphs": [
              "We use it to reply to you and to quote for your project. We do not sell your information."
            ]
          }
        ],
        "headingLevel": "h1"
      } satisfies ProseProps)} />
    </>
  );
}
