# Domain Migration Checklist: veloxforce.ai

## 🎯 Migration Overview

Moving from `https://veloxforce-website.vercel.app/` to `https://veloxforce.ai`

## ✅ Code Changes Completed

### **1. API Configuration Updated**
- ✅ **Internal API calls** now use `https://veloxforce.ai` in production
- ✅ **Environment detection** properly configured for custom domain
- ✅ **OpenRouter client** already configured with correct domain

### **2. Site Configuration Updated**
- ✅ **Site config** (`src/config/site.ts`) updated to `https://veloxforce.ai`
- ✅ **OG images** URLs updated to new domain
- ✅ **Sitemap** will automatically use new domain from site config

### **3. Documentation Updated**
- ✅ **API documentation** reflects new domain
- ✅ **Deployment guides** updated with correct URLs

## 🚀 Vercel Domain Setup Steps

### **1. Add Custom Domain in Vercel**
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Domains**
3. Click **Add Domain**
4. Enter `veloxforce.ai`
5. Click **Add**

### **2. Configure DNS Records**
Vercel will provide DNS configuration. You'll need to add these records to your domain registrar:

**For Root Domain (veloxforce.ai):**
```
Type: A
Name: @
Value: 76.76.19.61
```

**For WWW Subdomain (optional):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### **3. SSL Certificate**
- ✅ Vercel automatically provisions SSL certificates
- ✅ HTTPS will be enforced automatically
- ✅ Certificate auto-renewal is handled by Vercel

## 📧 Email Domain Configuration

### **1. Resend Domain Verification**
Since you're using `team@veloxforce.ai` for emails, ensure:

1. **Add Domain to Resend:**
   - Go to Resend dashboard → Domains
   - Add `veloxforce.ai`
   - Follow DNS verification steps

2. **DNS Records for Email:**
   ```
   Type: TXT
   Name: @
   Value: [Resend verification code]
   
   Type: MX
   Name: @
   Value: [Resend MX records]
   ```

3. **SPF/DKIM Records:**
   ```
   Type: TXT
   Name: @
   Value: v=spf1 include:_spf.resend.com ~all
   
   Type: TXT
   Name: resend._domainkey
   Value: [DKIM key from Resend]
   ```

## 🔧 Environment Variables

### **Production Environment Variables (Vercel)**
Ensure these are set in Vercel project settings:

```bash
# Database
SUPABASE_URL=https://wrkencanfgvyjzghgrmw.supabase.co
SUPABASE_KEY=your_supabase_service_key

# Email Service
RESEND_API_KEY=your_resend_api_key

# AI Services
OPENROUTER_API_KEY=your_openrouter_api_key

# Site Configuration (Optional - will use site config if not set)
NEXT_PUBLIC_BASE_URL=https://veloxforce.ai
```

## 🧪 Testing Checklist

### **1. Pre-Migration Testing**
- [ ] Test email system on current domain
- [ ] Verify all API endpoints work
- [ ] Check quiz submission and report generation
- [ ] Confirm all pages load correctly

### **2. Post-Migration Testing**
- [ ] **Homepage loads** at `https://veloxforce.ai`
- [ ] **All pages accessible** (solutions, blog, contact, etc.)
- [ ] **Quiz functionality** works end-to-end
- [ ] **Email reports** are delivered successfully
- [ ] **Contact forms** send emails correctly
- [ ] **SSL certificate** is active and valid
- [ ] **Redirects** from old domain work (if configured)

### **3. Email Testing**
- [ ] **Test email delivery** to multiple providers (Gmail, Outlook, etc.)
- [ ] **Check spam folders** for initial emails
- [ ] **Verify sender reputation** in email headers
- [ ] **Test report generation** with real quiz submission

## 📊 Monitoring & Analytics

### **1. Update Analytics**
- [ ] **Google Analytics** - verify tracking continues to work
- [ ] **Vercel Analytics** - monitor Core Web Vitals
- [ ] **Search Console** - add new domain property

### **2. SEO Considerations**
- [ ] **Submit new sitemap** to Google Search Console
- [ ] **Update social media links** to new domain
- [ ] **Monitor search rankings** for any impact
- [ ] **Set up 301 redirects** from old domain (if needed)

## 🔄 Rollback Plan

### **If Issues Occur:**
1. **Remove custom domain** from Vercel temporarily
2. **Revert API configuration** to use Vercel URL:
   ```typescript
   baseUrl = 'https://veloxforce-website.vercel.app'
   ```
3. **Update site config** back to Vercel URL
4. **Redeploy** with reverted changes
5. **Investigate and fix** domain/DNS issues
6. **Re-attempt migration** once resolved

## 📝 Post-Migration Tasks

### **1. Update External References**
- [ ] **Social media profiles** (LinkedIn, Twitter, etc.)
- [ ] **Email signatures** and business cards
- [ ] **Marketing materials** and documentation
- [ ] **Partner/client communications**

### **2. Monitor Performance**
- [ ] **Page load times** remain optimal
- [ ] **API response times** are consistent
- [ ] **Email delivery rates** maintain high success
- [ ] **Error rates** stay low

## 🎉 Success Criteria

Migration is successful when:
- ✅ **All pages load** correctly at `https://veloxforce.ai`
- ✅ **Quiz system works** end-to-end with email delivery
- ✅ **SSL certificate** is active and valid
- ✅ **Email delivery** maintains high success rates
- ✅ **Performance metrics** remain optimal
- ✅ **No broken links** or missing resources

---

**Ready for Migration!** 🚀

The codebase is fully prepared for the domain migration to `https://veloxforce.ai`. All internal references have been updated and the system will automatically use the correct URLs once the domain is configured in Vercel.
