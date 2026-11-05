# Stuff I Actually Use — Amazon affiliate site

A plain, hand-made-looking affiliate page for Amazon.co.jp. No build step,
no database, no framework: three files.

- `index.html` — the page
- `style.css` — the look
- `products.js` — **the only file you normally edit** (your tag + products)

## 1. Get your affiliate tag

1. Apply at https://affiliate.amazon.co.jp/ (Amazonアソシエイト・プログラム).
2. After approval you get a tracking tag like `yourname-22`.
3. Open `products.js`, set `AFFILIATE_TAG = "yourname-22"`. Done — every
   "View on Amazon" button now carries your tag.

Note: Amazon requires at least 3 qualifying sales within 180 days of
signing up, and they review your site — keep the disclosure in the footer
(it's already there) and only promote products honestly.

## 2. Add / change products

Edit the `PRODUCTS` list in `products.js`. For exact product pages, copy
the link from Amazon's SiteStripe bar (it appears at the top of
amazon.co.jp when you're logged in as an Associate) and paste it as
`link`. Search links (like the starter ones) also work.

Rule of thumb Amazon enforces: **don't write fixed prices on the site** —
prices change. The page already says "check the current price on Amazon."

## 3. Put it online (GitHub Pages, free)

1. Create a GitHub repo (e.g. `my-picks-site`), upload these files.
2. Repo → Settings → Pages → Source: "Deploy from a branch", branch
   `main`, folder `/ (root)`.
3. Your site appears at `https://<username>.github.io/my-picks-site/`.
4. Use that URL when Amazon asks for your website during signup/review.

## Photos

Cards currently use a big emoji tile. When you have your own product
photos, that's the one upgrade worth making — real photos of *your*
charger on *your* desk are what make this kind of page convert.
