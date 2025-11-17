import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 shadow-sm p-6"
            >
              <span className="inline-flex items-center text-xs font-medium tracking-wide text-gray-600 bg-white border border-gray-200 rounded-full px-3 py-1 mb-4">
                Loyalty Rewards for Shopify Stores
              </span>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                Turn every purchase into a relationship
              </h1>
              <p className="mt-4 text-gray-600 text-base">
                Loyalino lets you reward customers with points, tiers, and perks that keep them coming back. Easy setup, theme-friendly, and fully customizable.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#get-started" className="inline-flex justify-center items-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
                  Add to Shopify
                </a>
                <a href="#demo" className="inline-flex justify-center items-center rounded-lg bg-white text-gray-900 px-5 py-3 text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
                  View Demo
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs text-gray-500">
                <span>5-min setup</span>
                <span>Theme compatible</span>
                <span>GDPR-ready</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
