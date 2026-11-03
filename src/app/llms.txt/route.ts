import { siteConfig, FULL_ADDRESS } from '@/config/site';
import { SITE_URL } from '@/lib/seo';

/** /llms.txt — a plain, factual summary for AI answer engines. Facts only. */
export const dynamic = 'force-static';

const PAGES: { label: string; path: string; description: string }[] = [
  {
    "label": "Home",
    "path": "/",
    "description": "Made-to-measure wardrobes, alcove shelving and kitchens in solid oak and tulipwood, built in our workshop and fitted in Bristol and Bath homes."
  },
  {
    "label": "Services",
    "path": "/services",
    "description": "Made-to-measure fitted wardrobes, alcove shelving and kitchen cabinetry in solid oak and painted tulipwood, designed and fitted by our own team."
  },
  {
    "label": "About",
    "path": "/about",
    "description": "Harbour & Pine designs, builds and fits bespoke joinery for older homes in Bristol and Bath, from first measure to final fitting by our own team."
  },
  {
    "label": "Contact",
    "path": "/contact",
    "description": "Call or email Harbour & Pine Joinery about fitted wardrobes, shelving or kitchens in Bristol and Bath. Workshop hours Monday to Friday, 8:00 to 17:00."
  }
];

export function GET() {
  const lines = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.description}`,
    '',
    ...(FULL_ADDRESS ? [`- Address: ${FULL_ADDRESS}`] : []),
    ...(siteConfig.contact.phoneDisplay ? [`- Phone: ${siteConfig.contact.phoneDisplay}`] : []),
    ...(siteConfig.contact.email ? [`- Email: ${siteConfig.contact.email}`] : []),
    ...(siteConfig.hours.summary ? [`- Hours: ${siteConfig.hours.summary}`] : []),
    '',
    '## Pages',
    ...PAGES.map((p) => `- [${p.label}](${SITE_URL}${p.path === '/' ? '' : p.path}): ${p.description}`),
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
}
