# LCM Catering website (Next.js)

## Run it
    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Where to change things
- `lib/site.ts`  phone numbers, email, address, services, promises, clients and gallery captions
- `public/images/hero.webp`  the wide hero photo (replace with any landscape image, about 1920 x 1000)
- `public/images/` + `photos` and `gallery` in `lib/site.ts`  save a photo, then type its path (e.g. `/images/buffet.webp`) in `src`. Empty `src` shows the grey placeholder
- `public/logos/`  client logos. Add the file, then set `logo: "/logos/name.png"` for that client in `lib/site.ts`
- `app/globals.css`  all styling and colours (see the variables at the top)
- `components/QuoteForm.tsx`  the quote form (sends to WhatsApp or email)

## Deploy
Push to GitHub and import the repo on Vercel, or run `npm run build && npm start` on any Node 20+ server.
