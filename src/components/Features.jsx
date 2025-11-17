import { Gift, Crown, Percent, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Gift,
    title: 'Points & Rewards',
    desc: 'Award points per purchase, sign-up, and social actions with flexible redemption rules.'
  },
  {
    icon: Crown,
    title: 'VIP Tiers',
    desc: 'Create bronze, silver, and gold tiers to unlock perks and boost lifetime value.'
  },
  {
    icon: Percent,
    title: 'Discounts & Perks',
    desc: 'Auto-generate discount codes, freebies, and early-access drops for loyal fans.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Track engagement, redemptions, and revenue impact right from your dashboard.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">The loyalty stack your brand deserves</h2>
          <p className="mt-3 text-gray-600">Built for Shopify from day one with best-practice UX and performance.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
