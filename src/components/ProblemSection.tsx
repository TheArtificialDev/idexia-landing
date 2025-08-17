export default function ProblemSection() {
  const painPoints = [
    {
      icon: "📱",
      title: "The Sunday Night Panic",
      description: "It's 9 PM, you haven't posted all week, and you're scrambling to find something—anything—to share before Monday hits.",
      bgColor: "from-red-50 to-accent-50",
      borderColor: "border-red-200"
    },
    {
      icon: "😴",
      title: "The Content Treadmill", 
      description: "You spend hours researching trends, writing posts, and scheduling content, only to get 3 likes and wonder if anyone actually cares.",
      bgColor: "from-accent-50 to-yellow-50",
      borderColor: "border-accent-200"
    },
    {
      icon: "📊",
      title: "The Guessing Game",
      description: "You're posting blindly, hoping something sticks, but you have no idea what your audience actually wants to see.",
      bgColor: "from-purple-50 to-primary-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
            The Social Media Struggle{' '}
            <span className="gradient-text-warning">
              Every Business Owner Knows Too Well
            </span>
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${point.bgColor} p-8 rounded-3xl border-2 ${point.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4">{point.title}</h3>
              <p className="text-neutral-700 italic leading-relaxed">
                &ldquo;{point.description}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Transition to Solution */}
        <div className="text-center bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-primary-200 shadow-lg">
          <p className="text-xl lg:text-2xl text-neutral-700 font-medium leading-relaxed">
            What if there was a way to turn your social media from a{' '}
            <span className="text-red-600 font-bold">time-sucking obligation</span>{' '}
            into a{' '}
            <span className="text-secondary-600 font-bold">results-driving machine</span>{' '}
            that works even while you sleep?
          </p>
          
          <div className="mt-6">
            <div className="inline-flex items-center text-primary-600 font-semibold">
              <span>Keep reading to discover how</span>
              <svg className="ml-2 w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
