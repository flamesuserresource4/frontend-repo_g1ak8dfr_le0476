export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gray-900 text-white p-10 sm:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.6)_0%,rgba(16,185,129,0.4)_45%,transparent_60%)]" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to turn shoppers into superfans?</h3>
              <p className="mt-3 text-white/80">Install Loyalino on your Shopify store and launch your rewards program in minutes.</p>
            </div>
            <div className="flex sm:justify-end">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 font-medium px-6 py-3 hover:bg-gray-50 transition-colors">
                Add to Shopify
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
