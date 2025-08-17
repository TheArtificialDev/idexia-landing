export default function SolutionSection() {
  const benefits = [
    {
      icon: "🎯",
      title: "Always Know What to Post",
      description: "Our AI studies what's trending in your industry across Reddit, Google, LinkedIn, and beyond—then creates content ideas your audience will actually engage with.",
      gradientClass: "gradient-text-primary",
      bgGradientClass: "bg-gradient-primary"
    },
    {
      icon: "✍️",
      title: "Sounds Exactly Like You",
      description: "No more robotic posts. Our system learns your voice, tone, and style, so every post feels authentically yours—even when you didn't write it.",
      gradientClass: "gradient-text-secondary",
      bgGradientClass: "bg-gradient-secondary"
    },
    {
      icon: "📈",
      title: "Get Better Results, Not Just More Posts",
      description: "Every piece of content is analyzed and optimized. We track what works, learn from what doesn't, and continuously improve your results.",
      gradientClass: "gradient-text-accent",
      bgGradientClass: "bg-gradient-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-secondary-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Your{' '}
            <span className="gradient-text">
              AI-Powered Social Media Manager
            </span>{' '}
            That Never Takes a Day Off
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-primary-200 shadow-lg">
            <p className="text-xl lg:text-2xl text-neutral-700 leading-relaxed">
              Imagine waking up to comments, shares, and new customers—all from content that was created, optimized, and posted{' '}
              <span className="font-bold text-primary-600">automatically</span>{' '}
              while you were building your business.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:animate-gentle-pulse">{benefit.icon}</div>
              
              {/* Title */}
              <h3 className={`text-2xl font-bold mb-4 ${benefit.gradientClass}`}>
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-neutral-700 leading-relaxed italic">
                {benefit.description}
              </p>

              {/* Decorative Element */}
              <div className={`mt-6 h-1 ${benefit.bgGradientClass} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-3xl text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-lg mb-6 opacity-90">
              See how our AI transforms your social media in just 3 simple steps
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center">
              Learn How It Works
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
