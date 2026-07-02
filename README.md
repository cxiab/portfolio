# ali-habashi.com — portfolio (static, for Cloudflare Pages)

This is the **static** version of the portfolio, extracted from the old Vultr box
and converted to run with **no server / no PHP**. It's ready to deploy to
Cloudflare Pages (free) and serve `ali-habashi.com` with automatic HTTPS.

## What changed vs. the old VPS version
| Old (PHP on nginx) | New (static) |
|---|---|
| `send_email.php` + PHPMailer + `csrf_token.php` | **Web3Forms** (client-side POST, no backend) |
| `track_visitor.php` visitor logging | **Cloudflare Web Analytics** (enable in dashboard, no code) |
| nginx security headers | `_headers` file |

Files: `index.html`, `style.css`, `main.js`, `canvas.js`, `code.svg`, `idk.svg`,
`robots.txt`, `_headers`. That's the whole site.

---

## 1. Configure the contact form (required, ~1 min)
1. Go to **https://web3forms.com**, enter the email you want messages sent to → you get an **access key**.
2. Open `main.js`, find near the contact-form section:
   ```js
   const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
   ```
   Replace the placeholder with your key. Save.

Until you do this, the form shows *"Contact form not configured yet"* instead of sending.

## 2. Push to GitHub
```bash
cd ~/Desktop/Cyber/portfolio-site
git init -b main
git add -A
git commit -m "Static portfolio for Cloudflare Pages"
# create an empty repo on github.com first (e.g. ali-habashi/portfolio), then:
git remote add origin git@github.com:<you>/<repo>.git
git push -u origin main
```

## 3. Deploy on Cloudflare Pages
1. **dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git.**
2. Pick your repo. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`  (the files are at the repo root)
3. **Save and Deploy.** You get a `*.pages.dev` URL in ~30s. Test the site there.

> Prefer no GitHub? Install Wrangler (`npm i -g wrangler`) and run
> `wrangler pages deploy . --project-name portfolio` from this folder.

## 4. Custom domain `ali-habashi.com`
1. In your Pages project → **Custom domains → Set up a domain** → enter `ali-habashi.com` (and add `www` too).
2. If your DNS is already on Cloudflare, it wires the records automatically. If not,
   either move the domain's nameservers to Cloudflare (recommended), or add the
   CNAME/records Cloudflare shows you at your current DNS host.
3. HTTPS provisions automatically. Done.

## 5. (Optional) Analytics
Pages project → **Metrics/Analytics → Web Analytics → Enable.** Cloudflare injects
the beacon automatically for the proxied domain — replaces the old `track_visitor.php`.

---

### Note
The old site also served a separate app at `/HumanOptLabs/` (your Vitalis Next.js
project). That is **not** part of this static portfolio and isn't included here — it
still lives in the full VPS backup if you want to deploy it separately later.
