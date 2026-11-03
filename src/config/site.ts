/**
 * siteConfig — EVERY brand string and hard fact lives here. Written by Tyashin
 * Website Studio from the customer's intake; nothing below was invented by a
 * model. Missing facts are null on purpose (see docs/ASSET-DEBT.md).
 */
import { derive, type SiteConfig, type Cta } from '@/lib/site-config';

export const siteConfig: SiteConfig = {
  "name": "Harbour & Pine Joinery",
  "shortName": "Harbour & Pine",
  "tagline": "Fitted joinery that looks like it was always there",
  "description": "Made-to-measure wardrobes, shelving and kitchens in solid oak and tulipwood for older homes in Bristol and Bath.",
  "domain": "doors-website.sites.tyashin.com",
  "locale": "en_US",
  "language": "en",
  "contact": {
    "phoneE164": "+441174960123",
    "phoneDisplay": "+44 117 496 0123",
    "whatsappNumber": null,
    "whatsappMessage": "Hi Harbour & Pine Joinery, I would like to enquire.",
    "email": "hello@harbourandpine.example"
  },
  "address": {
    "line": null,
    "locality": "Bristol and Bath",
    "country": null
  },
  "hours": {
    "summary": "Mon–Fri 8:00–17:00"
  },
  "nav": [
    {
      "label": "Services",
      "href": "/services"
    },
    {
      "label": "About",
      "href": "/about"
    },
    {
      "label": "Contact",
      "href": "/contact"
    }
  ],
  "legalNav": [
    {
      "label": "Privacy",
      "href": "/privacy"
    },
    {
      "label": "Terms",
      "href": "/terms"
    }
  ],
  "socials": []
};

const d = derive(siteConfig);
export const TEL_URL = d.tel;
export const WHATSAPP_URL = d.whatsapp;
export const MAILTO_URL = d.mailto;
export const FULL_ADDRESS = d.fullAddress;
export const MAPS_EMBED_URL = d.mapsEmbed;

/** Where the contact form posts leads; TYASHIN_API_URL overrides it when set. */
export const TYASHIN_API_ORIGIN = "https://website-api.tyashin.com";

/** The one primary action, used by the header, footer and mobile menu. */
export const PRIMARY_CTA: Cta | null = WHATSAPP_URL
  ? { label: 'WhatsApp us', href: WHATSAPP_URL }
  : TEL_URL
    ? { label: 'Call us', href: TEL_URL }
    : { label: 'Contact us', href: '/contact' };
