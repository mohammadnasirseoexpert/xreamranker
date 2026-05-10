// app/page.tsx — Homepage for Xtream Ranker (Redesigned)

import type { Metadata } from 'next'
import Hero             from '@/components/sections/Hero'
import StatsBar         from '@/components/sections/StatsBar'
import ServicesOverview from '@/components/sections/ServicesOverview'
import AiAdvantage      from '@/components/sections/AiAdvantage'
import WhyUs            from '@/components/sections/WhyUs'
import Testimonials     from '@/components/sections/Testimonials'
import CtaBanner        from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Xtream Ranker | #1 Digital Marketing Agency UK — SEO, Ads & Web Design',
  description:
    "Xtream Ranker is the UK's results-driven digital marketing agency. We specialize in SEO, Google Ads, Meta Ads, Web Development, Social Media & Content Writing. Get more leads, sales & growth — 24/7 support.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <AiAdvantage />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
