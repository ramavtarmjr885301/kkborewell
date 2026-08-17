# K.K. Borewell and Pumps — Website

Next.js 16 + Tailwind CSS v4 website for K.K. Borewell and Pumps (service-only, no online sale/purchase).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

**Option A — via GitHub (recommended)**
1. Create a new GitHub repo and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "K.K. Borewell and Pumps website"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to https://vercel.com -> **Add New Project** -> import the GitHub repo.
3. Framework preset auto-detects as **Next.js** — leave build settings as default.
4. Click **Deploy**. Done — you'll get a live `.vercel.app` URL, and you can attach a custom domain later from Project -> Settings -> Domains.

**Option B — via Vercel CLI (no GitHub needed)**
```bash
npm install -g vercel
vercel login
vercel        # first deploy (preview)
vercel --prod # production deploy
```

## Editing content

- Phone number, WhatsApp link, address, owner name -> `lib/business.ts`
- Services list -> `components/Services.tsx`
- Installation process steps -> `components/Process.tsx`
- Why-choose-us points -> `components/WhyUs.tsx`
- Colors/fonts (design tokens) -> `app/globals.css`

## Notes

- No payment/e-commerce is included by design — this is a services-only site with WhatsApp and Call as the only conversion actions.
- The Google Maps embed in `components/ServiceArea.tsx` currently searches "Rampur Jagir Beta 1 Greater Noida" by text. Replace it with your exact Google Maps share link if you want a pin-perfect location.
