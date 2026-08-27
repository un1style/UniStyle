# UniStyle — clothing store website

A complete, working storefront for **UniStyle** built with plain HTML/CSS/JS — no
build step, no framework, no server required. It runs entirely in the browser,
using `localStorage` to remember the cart and past orders on each visitor's device.

## What's included

- **Home, Shop, Product, Cart, Checkout, About, Contact** pages
- A 13-item product catalog (`js/products.js`) with categories, sizes, prices,
  sale prices, and stock status — every product is illustrated with a
  generated line-art icon, so there are no external image files to manage
- Working **add to cart / update quantity / remove**, all saved in the browser
- **Search, category filter, and sort** on the shop page
- A **checkout flow with no payment gateway**: the customer fills in shipping
  details and submits — the order is saved locally and marked "pay on
  delivery." Wire up a real payment provider later (see below) whenever you're ready.
- Responsive layout with a mobile nav, and a consistent "stitched seam" visual
  motif throughout

## Running it locally

No install needed. Either:
- Double-click `index.html` to open it in a browser, or
- From this folder, run a tiny local server so relative links behave exactly
  like they will online:
  ```
  python3 -m http.server 8000
  ```
  then visit `http://localhost:8000`.

## Publishing it for free with GitHub Pages

This gives you a free `https://<your-username>.github.io/<repo-name>/` address
with a valid HTTPS certificate — no hosting bill, no separate domain purchase.

1. Create a new repository on GitHub (e.g. `unistyle`) — public repos get free Pages hosting.
2. Upload every file in this folder to the repo, keeping the folder structure
   (`css/`, `js/`, and the `.html` files at the root).
   - Easiest path: on the repo page, click **Add file → Upload files**, drag
     the whole contents of this folder in, and commit.
   - Or with git:
     ```
     git init
     git add .
     git commit -m "Initial UniStyle site"
     git branch -M main
     git remote add origin https://github.com/<your-username>/unistyle.git
     git push -u origin main
     ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`, then **Save**.
5. Wait a minute or two — GitHub will show your live URL at the top of that
   Pages settings screen, typically:
   `https://<your-username>.github.io/unistyle/`

That's it — it's free, served over HTTPS by GitHub, and there's nothing to
patch or maintain on a server.

### Using your own domain name later (optional)

If you later buy a domain (e.g. `unistyle.com`), you can point it at this same
free GitHub Pages site: add a `CNAME` file with your domain name to the repo
root, and add the DNS records GitHub's Pages settings page shows you. Full
steps are in GitHub's own docs if you search "GitHub Pages custom domain."

## Editing the catalog

Everything about the products lives in `js/products.js`:
- Add, remove, or edit items in the `PRODUCTS` array.
- Each product needs an `icon` (one of: `tee`, `shirt`, `sweater`, `hoodie`,
  `jacket`, `pants`, `shorts`, `skirt`, `dress`, `cap`, `tote`) and a `swatch`
  hex color — together these generate the product's icon automatically.
- To use real photos instead of the generated icons, replace the call to
  `getGarmentSVG(p.icon, p.swatch)` in each page's `<script>` with an
  `<img src="images/your-photo.jpg" alt="...">` tag, and add an `image` field
  to the relevant product in `products.js`.

## Adding payment later

You asked to leave payment out for now — the checkout page collects shipping
details and places a "pay on delivery" order. When you're ready to accept
cards online, the most common low-code options are:
- **Stripe Checkout** or **Stripe Payment Links** (hosted, minimal code)
- **PayPal Buttons**
- **Lemon Squeezy** or **Gumroad** if you want a fully hosted checkout

Any of these can slot into `checkout.html` in place of (or alongside) the
current "place order" button.

## Making the contact form actually send email

`contact.html`'s form currently only shows a confirmation message — GitHub
Pages can't run server code to send email. The fastest fix is a free
form-backend service like **Formspree** or **Web3Forms**: sign up, and they
give you a form `action` URL to paste in — no backend code required.

## File structure

```
unistyle/
├── index.html
├── shop.html
├── product.html
├── cart.html
├── checkout.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── products.js   (catalog + icon generator)
│   ├── cart.js        (cart/order logic, localStorage)
│   └── main.js         (nav, toast, footer year, newsletter)
└── README.md
```
