// lib/config.ts — Central site configuration for Xtream Ranker
// Edit this file to update contact info, nav links, services, etc.

export const SITE = {
  name:    'Xtream Ranker',
  tagline: 'We Help Businesses Get More Leads, Sales & Growth',
  url:     'https://xtreamranker.site',
  phone:   '+44 7354 908420',
  phoneRaw: '+447354908420',
  email:   'hello@xtreamranker.site',
  address: 'Malcolm Rd, Bethnal Green, London E1 4HN, UK',
  hours:   '24/7 — Always Available',
  whatsapp: 'https://wa.me/447354908420?text=Hi%20Xtream%20Ranker%2C%20I%27d%20like%20a%20free%20strategy%20call.',
}

export const NAV_LINKS = [
  { label: 'Home',     href: '/'         },
  { label: 'About',    href: '/about'    },
  { label: 'Services', href: '/services' },
  { label: 'Blog',     href: '/blog'     },
  { label: 'Contact',  href: '/contact'  },
]

export const SERVICES = [
  {
    id:       'seo',
    title:    'SEO & AI Optimisation',
    slug:     'seo-ai-optimisation',
    icon:     'Search',
    tagline:  'Rank Higher, Get Found, Dominate Google',
    description:
      'We combine traditional SEO expertise with cutting-edge AI tools to propel your website to the top of search results — driving consistent, high-intent organic traffic that converts.',
    benefits: [
      'Full technical SEO audit & fixes',
      'AI-powered keyword & content strategy',
      'Authority link building campaigns',
      'Local SEO for UK cities & regions',
      'Monthly ranking & traffic reports',
    ],
    color: 'from-indigo-500 to-violet-600',
  },
  {
    id:       'web',
    title:    'Web Development',
    slug:     'web-development',
    icon:     'Code2',
    tagline:  'Fast, Beautiful Websites That Convert',
    description:
      'We build lightning-fast, mobile-first websites engineered for conversions — not just aesthetics. Every pixel is purposeful, every page is optimised to turn visitors into paying customers.',
    benefits: [
      'Custom design — no cookie-cutter templates',
      'Core Web Vitals optimised (90+ scores)',
      'SEO-ready structure from day one',
      'E-commerce & booking integrations',
      'Ongoing maintenance & support',
    ],
    color: 'from-sky-500 to-blue-600',
  },
  {
    id:       'ads',
    title:    'Google Ads & Meta Ads',
    slug:     'google-meta-ads',
    icon:     'TrendingUp',
    tagline:  'Pay for Results, Not Just Clicks',
    description:
      'Our paid media experts craft high-ROI campaigns across Google Search, Display, and Meta (Facebook & Instagram) — targeting the right audience at the right moment to maximise every £ you spend.',
    benefits: [
      'Full campaign strategy & setup',
      'Laser-targeted audience segmentation',
      'A/B ad creative testing',
      'Conversion tracking & ROAS optimisation',
      'Weekly performance reporting',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    id:       'social',
    title:    'Social Media Marketing',
    slug:     'social-media-marketing',
    icon:     'Share2',
    tagline:  'Build a Brand People Trust & Buy From',
    description:
      'We grow your social presence with strategic content, community management, and paid social — turning followers into loyal customers and brand advocates.',
    benefits: [
      'Multi-platform strategy (IG, FB, LinkedIn, TikTok)',
      'Content calendar & creative production',
      'Community management & engagement',
      'Influencer & partnership outreach',
      'Monthly analytics & growth review',
    ],
    color: 'from-pink-500 to-rose-600',
  },
  {
    id:       'content',
    title:    'Content Writing',
    slug:     'content-writing',
    icon:     'PenTool',
    tagline:  'Words That Sell, Rank & Resonate',
    description:
      'From SEO blog posts to sales copy, landing pages to email sequences — our expert writers produce persuasive, search-optimised content that attracts readers and converts them into revenue.',
    benefits: [
      'SEO-optimised blog & article writing',
      'Landing page & sales copy',
      'Email marketing sequences',
      'Product descriptions & e-commerce copy',
      'Brand voice development',
    ],
    color: 'from-emerald-500 to-teal-600',
  },
]

export const TESTIMONIALS = [
  {
    name:    'James Whitfield',
    role:    'Director, Whitfield Lettings',
    company: 'London Property Group',
    rating:  5,
    text:    'Xtream Ranker transformed our online presence. Within 3 months our organic leads doubled and our cost per acquisition dropped by 40%. Exceptional team, exceptional results.',
  },
  {
    name:    'Priya Sharma',
    role:    'Founder, NutriBliss UK',
    company: 'Health & Wellness Brand',
    rating:  5,
    text:    'Their Google Ads team generated a 6× ROAS in our first month. We had tried two other agencies before — none came close to the level of expertise and communication Xtream Ranker delivers.',
  },
  {
    name:    'Tom Bradley',
    role:    'CEO, BrightTech Solutions',
    company: 'B2B SaaS Company',
    rating:  5,
    text:    'Our website now ranks on page 1 for 18 target keywords. The content writing team captured our brand voice perfectly. Genuinely the best marketing investment we have ever made.',
  },
  {
    name:    'Sarah O\'Connor',
    role:    'Marketing Manager, O\'Connor Dental',
    company: 'Private Dental Practice',
    rating:  5,
    text:    'We were invisible on Google. Now we get 25-30 new patient enquiries per month purely from organic search. The local SEO strategy was spot-on for our practice.',
  },
]

export const STATS = [
  { value: '500+', label: 'Clients Served Across UK' },
  { value: '£12M+', label: 'Revenue Generated for Clients' },
  { value: '97%',  label: 'Client Retention Rate' },
  { value: '24/7', label: 'Support & Availability' },
]

export const WHY_US = [
  {
    title:       'Results-First Approach',
    description: 'We measure every strategy by one metric: your revenue. No vanity metrics — only real, trackable business growth.',
    icon:        'Target',
  },
  {
    title:       'AI-Powered Strategies',
    description: 'We leverage cutting-edge AI tools to outpace competitors in keyword research, content creation, and campaign optimisation.',
    icon:        'Cpu',
  },
  {
    title:       'Full-Service Under One Roof',
    description: 'SEO, ads, web, social, and content — one agency, one strategy, zero communication gaps between disconnected freelancers.',
    icon:        'LayoutGrid',
  },
  {
    title:       'Transparent Reporting',
    description: 'You get full-access dashboards and plain-English monthly reports. No jargon, no smoke and mirrors — just clarity.',
    icon:        'BarChart3',
  },
  {
    title:       'UK Market Expertise',
    description: 'We know the UK consumer, the UK search landscape, and UK compliance. Local knowledge that drives local results.',
    icon:        'MapPin',
  },
  {
    title:       '24/7 Availability',
    description: 'Questions don\'t wait for office hours. Our team is reachable around the clock via WhatsApp, email, or phone.',
    icon:        'Clock',
  },
]
