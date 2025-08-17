export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Tell Us About Your Business",
      description: "Share your brand voice, goals, and audience. Takes just 10 minutes, and our AI starts learning what makes your business unique.",
      icon: "🎯",
      color: "primary"
    },
    {
      number: "02", 
      title: "Watch the Magic Happen",
      description: "Our system finds trending topics, creates engaging posts in your voice, and queues them for your approval. You review, edit if needed, and approve.",
      icon: "✨",
      color: "secondary"
    },
    {
      number: "03",
      title: "Watch Your Engagement Soar", 
      description: "Sit back as your social media comes alive with consistent, engaging content that your audience loves—and converts.",
      icon: "🚀",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
            From Setup to Success in{' '}
            <span className="gradient-text">
              Just 3 Simple Steps
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`
                    text-4xl font-bold px-4 py-2 rounded-full
                    ${step.color === 'primary' ? 'bg-primary-100 text-primary-600' : ''}
                    ${step.color === 'secondary' ? 'bg-secondary-100 text-secondary-600' : ''}
                    ${step.color === 'accent' ? 'bg-accent-100 text-accent-600' : ''}
                  `}>
                    {step.number}
                  </div>
                  <div className="text-4xl">{step.icon}</div>
                </div>
                
                <h3 className={`
                  text-3xl lg:text-4xl font-bold
                  ${step.color === 'primary' ? 'text-primary-700' : ''}
                  ${step.color === 'secondary' ? 'text-secondary-700' : ''}
                  ${step.color === 'accent' ? 'text-accent-700' : ''}
                `}>
                  {step.title}
                </h3>
                
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Visual */}
              <div className="flex-1">
                <div className={`
                  p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300
                  ${step.color === 'primary' ? 'bg-gradient-to-br from-primary-100 to-primary-200' : ''}
                  ${step.color === 'secondary' ? 'bg-gradient-to-br from-secondary-100 to-secondary-200' : ''}
                  ${step.color === 'accent' ? 'bg-gradient-to-br from-accent-100 to-accent-200' : ''}
                `}>
                  {/* Step 1 Visual - Setup */}
                  {index === 0 && (
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl shadow-md">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                          <span className="font-medium text-primary-700">Business Setup</span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-primary-200 rounded w-full"></div>
                          <div className="h-2 bg-primary-200 rounded w-3/4"></div>
                          <div className="h-2 bg-primary-200 rounded w-1/2"></div>
                        </div>
                        <div className="text-xs text-primary-600 mt-2">Brand voice learning...</div>
                      </div>
                    </div>
                  )}

                  {/* Step 2 Visual - AI Working */}
                  {index === 1 && (
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl shadow-md">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-3 h-3 bg-secondary-500 rounded-full animate-gentle-pulse"></div>
                          <span className="font-medium text-secondary-700">AI Content Creation</span>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-secondary-50 p-3 rounded-lg">
                            <div className="text-sm text-secondary-800">🎯 &ldquo;5 trending topics found for your industry&rdquo;</div>
                          </div>
                          <div className="bg-secondary-50 p-3 rounded-lg">
                            <div className="text-sm text-secondary-800">✍️ &ldquo;3 posts ready for your review&rdquo;</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3 Visual - Results */}
                  {index === 2 && (
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl shadow-md">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                          <span className="font-medium text-accent-700">Results Dashboard</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-accent-50 p-3 rounded-lg text-center">
                            <div className="text-lg font-bold text-accent-700">+127%</div>
                            <div className="text-xs text-accent-600">Engagement</div>
                          </div>
                          <div className="bg-accent-50 p-3 rounded-lg text-center">
                            <div className="text-lg font-bold text-accent-700">45</div>
                            <div className="text-xs text-accent-600">New Followers</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Want to See It in Action?
            </h3>
            <p className="text-lg text-neutral-600 mb-6">
              Watch our interactive demo and see exactly how the process works
            </p>
            <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" />
              </svg>
              Watch Interactive Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
