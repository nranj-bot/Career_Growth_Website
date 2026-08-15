# Roya by Nahal — Website

A ready-to-launch static website: Home, About, Services, Products, Contact, Login (placeholder), Privacy Policy, Terms of Service.

## Before you publish — replace these placeholders

1. **Photos** — replace the dashed "photo-slot" boxes on `about.html` with your own `<img>` tags once you have photos. Put image files in the `images/` folder.
2. **Calendly link** — in `contact.html`, replace `https://calendly.com/YOUR-CALENDLY-LINK` with your real Calendly (free plan works fine).
3. **Payment link** — in `contact.html`, replace `https://YOUR-PAYMENT-LINK-HERE` with a Stripe Payment Link or paypal.me link (mainly relevant once the resume template packet is live).
4. **Resume template packet link** — in `products.html`, replace `https://YOUR-STORE-LINK-HERE.com` with your real Gumroad/Stan Store link once your $10 packet is set up.
5. **Books link** — in `products.html`, replace `https://www.lulu.com/spotlight/nahal?srsltid=AfmBOopggk998lHycTfM9Rwe28GOZ3_Qd5f4uxpbuuAHr7Xkg0e9NbWw `with your Amazon/publisher/store link for your books and workbooks.
6. **YouTube & TikTok** — replace `https://www.youtube.com/@YOUR-CHANNEL` and `https://www.tiktok.com/@YOUR-HANDLE` (footer of every page, plus the Products page) with your real handles.
7. **Search bar domain** — in `js/script.js`, replace `YOURDOMAIN.com` with your live domain once you have one.
8. **Testimonials** — swap the placeholder quotes on `index.html` for real client quotes as you collect them.
9. **Legal pages** — fill in the `[date]` and bracketed notes on `privacy.html` and `terms.html`, and consider a quick legal review.

## Business model built into this site

- **Free**: consultations, resume review, mock interviews, courses info, YouTube/TikTok content.
- **Paid ($10)**: the resume template packet, sold through an external store (Gumroad or Stan Store recommended — both are free to set up).
- **Books/workbooks**: linked out to wherever you publish them (Amazon, your own store, etc.).

## Contact form & newsletter — how they work

Both forms use **FormSubmit** (formsubmit.co), a free service that emails you form submissions with no backend required. The first time someone submits, FormSubmit will send you one confirmation email — click the link in it to activate the form permanently.

## Dark mode, search, and login

- Dark mode toggle is fully functional (saves the visitor's choice in their browser).
- The search icon does a Google "site search" — it won't work fully until the site has a real domain (see step 7 above).
- The login icon links to a placeholder page, since a free static site can't securely handle logins — see `login.html` for free membership-tool suggestions.

## Files

```
career-growth-website/
├── index.html
├── about.html
├── services.html
├── products.html
├── contact.html
├── login.html
├── privacy.html
├── terms.html
├── css/style.css
├── js/script.js
└── images/  (add your photos here)
```
