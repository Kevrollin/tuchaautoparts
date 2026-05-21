# Redirect Issue Fix Guide
## Google Search Console: "Page with redirect" Error

**Issue Date:** May 21, 2026  
**Affected Site:** tuchasautospares.com  
**Impact:** Pages not being indexed due to redirect issues

---

## Root Causes & Solutions

### 1. Domain Variant Redirects (Most Common)

**Problem:** Google finds both `tuchasautospares.com` and `www.tuchasautospares.com` but can't index because one redirects to the other.

**Current State:** You're using non-www variant (`tuchasautospares.com`)

**Solution:**
```json
// Add to vercel.json - Force non-www domain
{
  "redirects": [
    {
      "source": "/",
      "destination": "https://tuchasautospares.com",
      "permanent": true
    }
  ]
}
```

**Better approach:** Use Vercel Dashboard
1. Go to Settings → Domains
2. Set Primary Domain to `tuchasautospares.com` (non-www)
3. Add `www.tuchasautospares.com` as alias
4. Vercel will auto-redirect www → non-www

---

### 2. Trailing Slash Inconsistencies

**Problem:** URLs like `/parts` redirect to `/parts/` (or vice versa)

**Check:** 
```bash
# Test both variants
curl -I https://tuchasautospares.com
curl -I https://tuchasautospares.com/
```

**React App Fix:** Add configuration to App.js
```javascript
useEffect(() => {
  // Check if current path has inconsistent trailing slash
  const path = window.location.pathname;
  const shouldHaveTrailingSlash = path !== '/' && path.endsWith('/');
  
  // Keep consistent (no trailing slashes for single-page app)
  if (shouldHaveTrailingSlash) {
    window.history.replaceState({}, document.title, path.slice(0, -1));
  }
}, []);
```

---

### 3. Protocol Mismatch (HTTP → HTTPS)

**Problem:** Site serves over both HTTP and HTTPS, creating redirect chains

**Check:**
```bash
curl -I http://tuchasautospares.com    # Should redirect to HTTPS
curl -I https://tuchasautospares.com   # Should load directly
```

**Vercel Configuration (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        }
      ]
    }
  ]
}
```

This forces HTTPS for all future requests via HSTS.

---

### 4. Redirect Chains (Most Critical)

**Problem:** URL1 → URL2 → URL3 (multiple redirects waste Google's crawl budget)

**Check:**
```bash
# -L follows redirects and shows chain
curl -IL https://tuchasautospares.com/some-page
```

**Fix:** Ensure at most 1 redirect per URL. Update vercel.json to direct-map problematic URLs:
```json
{
  "redirects": [
    {
      "source": "/blog/:path*",
      "destination": "https://tuchasautospares.com/#/blog/:path*",
      "permanent": false
    }
  ]
}
```

---

## Step-by-Step Verification

### Step 1: Test Domain Variants
```bash
# Both should load without redirect
curl -I https://tuchasautospares.com
curl -I https://www.tuchasautospares.com  # Should redirect to above
```

### Step 2: Check Canonical Tags
Open `public/index.html` and verify:
```html
<link rel="canonical" href="https://tuchasautospares.com/" />
```
(No `www` prefix)

### Step 3: Verify Sitemap URLs
Check `public/sitemap.xml`:
- All URLs must use `https://tuchasautospares.com/` format
- No `www` variants
- No trailing slash variations (be consistent)

### Step 4: Check Internal Links
Review [src/components/Navbar.jsx](src/components/Navbar.jsx) and other navigation:
- All links should use relative paths (`/page`, not `https://...`)
- Or absolute with correct domain variant

### Step 5: Test with Google Tools
1. **Google Search Console:**
   - Go to Coverage report
   - Click "Excluded" → "Page with redirect"
   - Test one URL with "Inspect URL" tool
   - Wait for reindexing

2. **Google Mobile-Friendly Test:**
   - https://search.google.com/test/mobile-friendly
   - Check if redirects appear in crawl log

---

## Updated vercel.json Template

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "redirects": [
    {
      "source": "/:path((?!static).*)*",
      "destination": "/",
      "permanent": false
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        }
      ]
    },
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## After Making Changes

1. **Rebuild & Deploy:**
   ```bash
   npm run build
   git add .
   git commit -m "Fix: Resolve redirect indexing issues for GSC"
   git push
   ```

2. **Verify Deployment:** Wait 2-3 minutes for Vercel to build and deploy

3. **Request Indexing in GSC:**
   - Go to Search Console
   - Use "Inspect URL" tool
   - Click "Request Indexing"
   - Do this for affected URLs

4. **Monitor Coverage Report:**
   - Check back in 1-2 weeks
   - "Page with redirect" should decrease
   - "Indexed" count should increase

---

## Common Issues & Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| Still seeing redirects | Vercel domain not set correctly | Check Vercel Dashboard → Settings → Domains |
| 404 after "fixing" | Misconfigured redirect rule | Test URL in browser before deploying |
| Mixed URLs in GSC | Sitemap has both www and non-www | Regenerate sitemap or manually update |
| Slow indexing | Multiple issues combined | Complete ALL steps in this guide |

---

## Additional Resources

- [Google: Redirect and Ranking](https://developers.google.com/search/docs/advanced/crawling/redirect-with-redirects)
- [Vercel: Redirects Configuration](https://vercel.com/docs/edge-network/redirects)
- [Search Console: Coverage Report](https://support.google.com/webmasters/answer/7440203)
