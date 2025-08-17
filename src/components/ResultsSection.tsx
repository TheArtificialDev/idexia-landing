export default function ResultsSection() {
  const stats = [
    {
      value: "127%",
      label: "average increase in engagement within 30 days",
      icon: "📈",
      color: "primary"
    },
    {
      value: "5 hours",
      label: "saved per week on content creation",
      icon: "⏰",
      color: "secondary" 
    },
    {
      value: "3x more",
      label: "consistent posting schedule",
      icon: "📅",
      color: "accent"
    },
    {
      value: "89%",
      label: "of users see results in their first month",
      icon: "🎯",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
            Real Results from{' '}
            <span className="gradient-text">
              Real Business Owners
            </span>
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-neutral-100"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className={`
                text-4xl font-bold mb-2
                ${stat.color === 'primary' ? 'text-primary-600' : ''}
                ${stat.color === 'secondary' ? 'text-secondary-600' : ''}
                ${stat.color === 'accent' ? 'text-accent-600' : ''}
              `}>
                {stat.value}
              </div>
              <p className="text-neutral-700 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Featured Customer Success Story */}
        <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Customer Photo & Info */}
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  SM
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Sarah M.</h3>
                <p className="text-neutral-600">Fitness Studio Owner</p>
                <div className="flex justify-center lg:justify-start mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="lg:col-span-2">
                <div className="text-6xl text-primary-200 mb-4">&ldquo;</div>
                <blockquote className="text-xl lg:text-2xl text-neutral-800 leading-relaxed mb-6 italic">
                  I went from posting once a week to daily posts that actually get engagement. My business inquiries have doubled, and I&apos;m spending less time on social media than ever before.
                </blockquote>
                
                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-secondary-700">2x</div>
                    <div className="text-sm text-secondary-600">Business Inquiries</div>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-primary-700">Daily</div>
                    <div className="text-sm text-primary-600">Posting Schedule</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Social Proof */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-secondary-600 mb-2">94%</div>
            <p className="text-neutral-700">Customer Satisfaction Rate</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">67%</div>
            <p className="text-neutral-700">Report Increased Revenue</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-accent-600 mb-2">89%</div>
            <p className="text-neutral-700">Still Active After 12 Months</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-3xl text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Them?</h3>
            <p className="text-lg mb-6 opacity-90">
              Start your free trial and see similar results in your business
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center">
              Start Your Free Trial
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
