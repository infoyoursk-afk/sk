# Luxury Photography Website Starter

A responsive black-and-gold photography portfolio website. No paid theme, framework, or build step required.

## Files
- `index.html` — page content and sections
- `style.css` — responsive design
- `script.js` — mobile navigation and enquiry email form

## Before publishing
1. Replace every `STUDIO NAME` / `Studio Name` placeholder in `index.html` with your studio name.
2. In `script.js`, replace `your-email@example.com` with the email address where you want enquiries.
3. Update the page title, description, city, services and contact details.
4. Replace the sample Unsplash image URLs in `style.css` with your own photography where possible. Keep image rights and licensing in mind.
5. Test on mobile and desktop.

## Free hosting with your existing domain (Cloudflare Pages)
1. Create a free account at https://dash.cloudflare.com/
2. Create a GitHub account at https://github.com/ if you don't already have one.
3. Create a new public or private repository, e.g. `photography-website`, and upload `index.html`, `style.css`, and `script.js` to the repository root.
4. In Cloudflare dashboard, go to Workers & Pages → Create → Pages → Connect to Git.
5. Choose the repository. For a plain HTML site, choose no framework; leave build command blank and set build output directory to `/` or the repository root as the dashboard instructs.
6. Deploy and test the generated `*.pages.dev` address.
7. In the Pages project, open Custom domains → Set up a custom domain and enter your domain (e.g. `example.com`). Follow Cloudflare's exact DNS instructions.
8. If the domain is registered elsewhere, add the DNS records shown by Cloudflare at your registrar. Do not delete existing email-related MX/TXT records. DNS changes can take time to propagate.

Cloudflare's dashboard labels may change. Follow the current UI instructions. This starter does not require WordPress, a paid theme, or a paid hosting plan.

## Important limitations
- This is a static portfolio website. It does not include a client login, private proofing gallery, payment processing, or automated photo delivery.
- The contact form opens the visitor's email app after you set your email. It is not a hosted form backend.
- The gallery currently uses sample remote images. Swap them for your own images before launch.
