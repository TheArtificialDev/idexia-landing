import Link from 'next/link';

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "month",
      description: "Perfect for getting started",
      popular: false,
      features: [
        "Never run out of content ideas again (20 AI-generated posts)",
        "Post on the platforms that matter (2 social platforms)",
        "See what's working and what's not (Basic performance insights)",
        "Everything approved by you before it goes live",
        "14-day free trial"
      ],
      cta: "Start Free Trial",
      color: "primary"
    },
    {
      name: "Growth",
      price: "$149", 
      period: "month",
      description: "Most popular for growing businesses",
      popular: true,
      features: [
        "Content that drives real engagement (60 optimized posts monthly)",
        "Reach your audience everywhere (4 social platforms)",
        "Know exactly what your audience wants (Advanced trend analysis)",
        "Monthly strategy sessions to accelerate growth",
        "Quick approval from anywhere (Email + mobile notifications)",
        "A/B testing capabilities"
      ],
      cta: "Start Free Trial",
      color: "secondary"
    },
    {
      name: "Premium",
      price: "$399",
      period: "month", 
      description: "For businesses serious about social media ROI",
      popular: false,
      features: [
        "Unlimited content that converts (150+ posts monthly)",
        "Dominate every platform (Unlimited social accounts)",
        "Your dedicated growth partner (Bi-weekly strategy calls)",
        "Never miss an opportunity (Emergency posting + crisis management)",
        "AI that knows your business better than you do (Advanced brand learning)",
        "Priority phone support + instant response"
      ],
      cta: "Start Free Trial", 
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
            Choose Your{' '}
            <span className="gradient-text">
              Growth Plan
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-primary-200">
            <p className="text-lg text-neutral-700">
              What you&apos;d pay a social media manager for one week gets you an entire month of AI-powered content that{' '}
              <span className="font-semibold text-primary-600">never sleeps, never takes vacation, and gets smarter every day.</span>
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2
                ${plan.popular ? 'border-secondary-300 scale-105' : 'border-neutral-200'}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className={`
                    text-2xl font-bold mb-2
                    ${plan.color === 'primary' ? 'text-primary-700' : ''}
                    ${plan.color === 'secondary' ? 'text-secondary-700' : ''}
                    ${plan.color === 'accent' ? 'text-accent-700' : ''}
                  `}>
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className={`
                      text-5xl font-bold
                      ${plan.color === 'primary' ? 'text-primary-600' : ''}
                      ${plan.color === 'secondary' ? 'text-secondary-600' : ''}
                      ${plan.color === 'accent' ? 'text-accent-600' : ''}
                    `}>
                      {plan.price}
                    </span>
                    <span className="text-neutral-500 ml-2">/{plan.period}</span>
                  </div>
                  
                  {/* Value Proposition */}
                  <div className={`
                    mt-4 text-sm p-3 rounded-lg
                    ${plan.color === 'primary' ? 'bg-primary-50 text-primary-700' : ''}
                    ${plan.color === 'secondary' ? 'bg-secondary-50 text-secondary-700' : ''}
                    ${plan.color === 'accent' ? 'bg-accent-50 text-accent-700' : ''}
                  `}>
                    {plan.name === 'Starter' && 'At $1.63 per day - less than a coffee!'}
                    {plan.name === 'Growth' && 'The price of a nice dinner out monthly'}
                    {plan.name === 'Premium' && 'Less than a part-time employee'}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className={`
                        w-5 h-5 mt-0.5 mr-3 flex-shrink-0
                        ${plan.color === 'primary' ? 'text-primary-500' : ''}
                        ${plan.color === 'secondary' ? 'text-secondary-500' : ''}
                        ${plan.color === 'accent' ? 'text-accent-500' : ''}
                      `} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link 
                  href="/start-trial"
                  className={`
                    block w-full text-center py-4 px-6 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105
                    ${plan.popular 
                      ? 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-lg hover:shadow-xl' 
                      : `border-2 hover:shadow-lg
                        ${plan.color === 'primary' ? 'border-primary-300 text-primary-600 hover:bg-primary-50' : ''}
                        ${plan.color === 'accent' ? 'border-accent-300 text-accent-600 hover:bg-accent-50' : ''}
                      `
                    }
                  `}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Money-Back Guarantee */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-200 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              14-Day Money-Back Guarantee
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              We&apos;re so confident in our results, we&apos;ll take all the risk. If you don&apos;t see a significant improvement in your social media engagement within 30 days, we&apos;ll refund every penny—no questions asked.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-secondary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-secondary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cancel anytime
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-secondary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Results guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
