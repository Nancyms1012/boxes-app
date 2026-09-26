# 📦 Deployment Guide - boxes-app

## Cloudflare Pages Setup

### 1. Prerequisites
- GitHub repo: https://github.com/Nancyms1012/boxes-app (public)
- Cloudflare account with domain raceclubhub.com

### 2. Environment Variables
Set these in Cloudflare Pages dashboard:

```
NEXT_PUBLIC_SUPABASE_URL=https://ijqalxopeqyqfzwpfmfj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_anon_key>
RESEND_API_KEY=<your_resend_key>
```

### 3. Build Settings
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Build Output Directory:** `.next`
- **Node Version:** 22 (or latest LTS)

### 4. Subdomain Configuration
- **Project Name:** boxes-app
- **Domain:** boxes.raceclubhub.com
- **CNAME:** Deploy via Cloudflare Pages UI

### 5. Auto-Deploy
- Connects to GitHub main branch
- Auto-deploys on every push

### 6. First Deploy
1. Go to Cloudflare Dashboard → Pages
2. Click "Create a project" → Connect to Git
3. Select `Nancyms1012/boxes-app` repo
4. Configure as above
5. Click "Save and Deploy"

### 7. Verify Live
Once deployed, check:
- https://boxes.raceclubhub.com
- Should show boxes/parrilla app

---

## Local Testing Before Deploy

```bash
cd /projects/sandbox/boxes-app
npm install
npm run build
npm run start
# Visit http://localhost:3000
```

## Post-Deploy Tasks
- [ ] Remove `/checkin/boxes` route from formulario-inscripciones
- [ ] Update documentation with new URL
- [ ] Test all features (upload CSV, voice, DNS, etc.)

---

**Status:** Ready for Cloudflare Pages deployment ✅
