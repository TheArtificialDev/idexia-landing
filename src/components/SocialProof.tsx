export default function SocialProof() {
  const logos = [
    { name: 'TechCorp', width: 'w-24' },
    { name: 'GrowthCo', width: 'w-28' },
    { name: 'InnovateInc', width: 'w-26' },
    { name: 'ScaleUp', width: 'w-24' },
    { name: 'Future Co.', width: 'w-30' },
    { name: 'NextGen', width: 'w-26' },
  ];

  return (
    <section className="py-12 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <p className="text-lg text-neutral-600 font-medium">
            Trusted by business owners who&apos;ve seen their engagement increase by{' '}
            <span className="text-secondary-600 font-bold">127% on average</span>
          </p>
          
          {/* Customer Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {logos.map((logo, index) => (
              <div 
                key={logo.name} 
                className={`${logo.width} h-12 bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-lg flex items-center justify-center animate-gentle-pulse`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <span className="text-neutral-500 font-semibold text-sm">{logo.name}</span>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">2,000+</div>
              <div className="text-sm text-neutral-600">Business Owners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600">127%</div>
              <div className="text-sm text-neutral-600">Avg. Engagement Increase</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-600">5+</div>
              <div className="text-sm text-neutral-600">Hours Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">89%</div>
              <div className="text-sm text-neutral-600">See Results Month 1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
