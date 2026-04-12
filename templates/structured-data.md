# Structured Data / AEO Schema Templates
# Inject these JSON-LD blocks into every page type

---

## 1. Course Schema (Landing Page)
Place in <head> of the landing page.

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Bitcoin From Scratch",
  "description": "The only Bitcoin fundamentals course built entirely with 3D animation. 34 video lessons covering monetary history, blockchain mechanics, mining, security, private keys, self-custody, and the Lightning Network.",
  "provider": {
    "@type": "Organization",
    "name": "SatUsPhere",
    "sameAs": "https://satusphere.com",
    "url": "https://satusphere.com",
    "logo": "https://satusphere.com/assets/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@satusphere.com"
    }
  },
  "url": "https://satusphere.com",
  "courseCode": "BFS-001",
  "numberOfCredits": 0,
  "educationalLevel": "Beginner",
  "inLanguage": "en",
  "teaches": [
    "Bitcoin fundamentals",
    "Blockchain technology",
    "Bitcoin mining and proof of work",
    "Cryptocurrency wallets and self-custody",
    "Lightning Network",
    "Bitcoin security"
  ],
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT5H",
    "offers": {
      "@type": "Offer",
      "price": "97.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://checkout.teachable.com/secure/2684007/checkout/order_1y3wjzbk",
      "seller": {
        "@type": "Organization",
        "name": "SatUsPhere"
      }
    }
  },
  "image": "https://satusphere.com/assets/course-banner.png",
  "thumbnailUrl": "https://satusphere.com/assets/course-banner.png"
}
```

---

## 2. Organization Schema (Landing Page + All Pages)
Place in <head> of every page on the site.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SatUsPhere",
  "url": "https://satusphere.com",
  "logo": "https://satusphere.com/assets/logo.png",
  "sameAs": [
    "https://x.com/sat_us_phere",
    "https://www.youtube.com/channel/UC0jGCeBvr8qLmMhRpwda-5Q",
    "https://satusphere.teachable.com"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@satusphere.com",
    "contactType": "customer support"
  },
  "description": "SatUsPhere is a Bitcoin education company that makes complex concepts visual. Creator of Bitcoin From Scratch, the only Bitcoin fundamentals course built entirely with 3D animation."
}
```

---

## 3. FAQ Schema Template (All SEO/AEO Pages)
Replace QUESTION_N and ANSWER_N with each page's actual Q&A pairs.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "QUESTION_1",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER_1"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION_2",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER_2"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION_3",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER_3"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION_4",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER_4"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION_5",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER_5"
      }
    }
  ]
}
```

---

## 4. BreadcrumbList Schema (All SEO/AEO Pages)
Replace PAGE_TITLE and PAGE_SLUG with the actual page values.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://satusphere.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Learn Bitcoin",
      "item": "https://satusphere.com/learn"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "PAGE_TITLE",
      "item": "https://satusphere.com/learn/PAGE_SLUG"
    }
  ]
}
```

---

## 5. Article / Educational Content Schema (SEO Pages)
For AI engines to understand the content type and source.

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "PAGE_H1_TITLE",
  "description": "PAGE_META_DESCRIPTION",
  "author": {
    "@type": "Organization",
    "name": "SatUsPhere",
    "url": "https://satusphere.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SatUsPhere",
    "logo": {
      "@type": "ImageObject",
      "url": "https://satusphere.com/assets/logo.png"
    }
  },
  "datePublished": "2026-04-01",
  "dateModified": "DATE_MODIFIED",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://satusphere.com/learn/PAGE_SLUG"
  },
  "about": {
    "@type": "Thing",
    "name": "Bitcoin",
    "description": "A decentralized digital currency and payment network"
  }
}
```

---

## 6. Speakable Schema (SEO Pages - Voice/AI Search)
Marks the key answer paragraph for voice assistants and AI engines.

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "PAGE_TITLE",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".answer-block", "h1", ".summary"]
  },
  "url": "https://satusphere.com/learn/PAGE_SLUG"
}
```

---

## Usage Notes

- All JSON-LD blocks go inside `<script type="application/ld+json">` tags in `<head>`
- Landing page uses: Course + Organization
- Every SEO page uses: FAQPage + BreadcrumbList + Article + Speakable + Organization
- The `.answer-block` CSS class should wrap the direct answer to the page's main question (first paragraph below H1)
- Update `dateModified` whenever page content changes
