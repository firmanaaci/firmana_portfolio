# Google Search Console Setup

Use this checklist after deploying the site.

## Property details

- Property type: `Domain` or `URL prefix`
- Production domain: `https://firmanaamri.vercel.app`
- Sitemap URL: `https://firmanaamri.vercel.app/sitemap.xml`
- Robots URL: `https://firmanaamri.vercel.app/robots.txt`

## Verification

- If using HTML meta tag, set `GOOGLE_SITE_VERIFICATION` in your production environment.
- If using DNS, add the TXT record provided by Google Search Console.

## Submission checklist

1. Open Google Search Console.
2. Verify the property.
3. Submit `sitemap.xml`.
4. Inspect the homepage URL for indexing issues.
5. Request indexing after major updates.

## Notes

- Make sure `NEXT_PUBLIC_SITE_URL` points to the live domain, not `https://example.com`.
- Keep the homepage title and description aligned with the content on the page.
