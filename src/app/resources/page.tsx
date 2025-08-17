import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
  const freeResources = [
    {
      title: "The Ultimate Social Media Audit Checklist",
      description: "Download our 47-point checklist to identify exactly what's holding your social media back",
      features: [
        "The 7 critical mistakes that kill engagement",
        "How to audit your competitors' successful content",
        "Which metrics actually matter for business growth"
      ],
      type: "PDF Download",
      color: "primary"
    },
    {
      title: "Small Business Social Media Playbook",
      description: "Our complete 34-page guide to social media that actually generates customers",
      features: [
        "The content framework that works for any industry",
        "How to find trending topics before your competitors", 
        "Platform-specific strategies that convert"
      ],
      type: "Guide",
      color: "secondary"
    },
    {
      title: "ROI Calculator for Social Media",
      description: "See exactly how much revenue your social media should be generating",
      features: [
        "Your current social media ROI",
        "Projected growth with optimized strategy",
        "Break-even point for social media tools and services"
      ],
      type: "Calculator",
      color: "accent"
    }
  ];

  const blogArticles = [
    {
      title: "Why 89% of Small Business Social Media Fails (And How to Fix It)",
      description: "The most common mistakes business owners make and simple fixes that deliver immediate results",
      readTime: "8 min read",
      category: "Strategy"
    },
    {
      title: "The Psychology Behind Viral Content: What Makes People Share",
      description: "Research-backed insights into creating content that your audience can't help but engage with",
      readTime: "12 min read", 
      category: "Psychology"
    },
    {
      title: "Platform-Specific Strategy Guide: What Works on LinkedIn vs Instagram vs Facebook",
      description: "Stop using the same content everywhere—here's how to optimize for each platform",
      readTime: "15 min read",
      category: "Platforms"
    },
    {
      title: "The Content Calendar That Saves 10 Hours Per Week",
      description: "Our proven system for planning, creating, and scheduling content efficiently",
      readTime: "6 min read",
      category: "Productivity"
    }
  ];

  const videoSeries = [
    {
      title: "From Zero to Social Media Hero in 30 Days",
      description: "A step-by-step video course showing exactly how to build an engaging social media presence",
      duration: "2h 45m",
      lessons: 12
    },
    {
      title: "Content That Converts: The Psychology of Social Media Sales",
      description: "Learn the proven frameworks for creating content that turns followers into customers",
      duration: "1h 30m",
      lessons: 8
    },
    {
      title: "Crisis Management on Social Media",
      description: "How to handle negative feedback, PR issues, and maintain your brand reputation online",
      duration: "45m",
      lessons: 5
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">
              Master Social Media Marketing
            </span>
          </h1>
          
          <p className="text-xl text-neutral-600 leading-relaxed max-w-4xl mx-auto">
            Whether you&apos;re just starting out or looking to optimize your existing strategy, these resources will help you build a social media presence that drives real business results.
          </p>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Free Resources
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {freeResources.map((resource, index) => (
              <div key={index} className={`
                rounded-3xl shadow-lg p-8 border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2
                ${resource.color === 'primary' ? 'bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200' : ''}
                ${resource.color === 'secondary' ? 'bg-gradient-to-br from-secondary-50 to-secondary-100 border-secondary-200' : ''}
                ${resource.color === 'accent' ? 'bg-gradient-to-br from-accent-50 to-accent-100 border-accent-200' : ''}
              `}>
                <div className={`
                  inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4
                  ${resource.color === 'primary' ? 'bg-primary-200 text-primary-800' : ''}
                  ${resource.color === 'secondary' ? 'bg-secondary-200 text-secondary-800' : ''}
                  ${resource.color === 'accent' ? 'bg-accent-200 text-accent-800' : ''}
                `}>
                  {resource.type}
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{resource.title}</h3>
                <p className="text-neutral-700 mb-6">{resource.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-neutral-800">What You&apos;ll Learn:</h4>
                  <ul className="space-y-2">
                    {resource.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className={`
                          w-5 h-5 mt-0.5 mr-3 flex-shrink-0
                          ${resource.color === 'primary' ? 'text-primary-500' : ''}
                          ${resource.color === 'secondary' ? 'text-secondary-500' : ''}
                          ${resource.color === 'accent' ? 'text-accent-500' : ''}
                        `} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-neutral-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`
                  w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105
                  ${resource.color === 'primary' ? 'bg-primary-500 text-white hover:bg-primary-600' : ''}
                  ${resource.color === 'secondary' ? 'bg-secondary-500 text-white hover:bg-secondary-600' : ''}
                  ${resource.color === 'accent' ? 'bg-accent-500 text-white hover:bg-accent-600' : ''}
                `}>
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Latest Blog Articles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-neutral-500 text-sm">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{article.title}</h3>
                <p className="text-neutral-700 mb-6">{article.description}</p>
                
                <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center">
                  Read Article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Training Series */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Video Training Series
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {videoSeries.map((video, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl shadow-lg p-8 border border-secondary-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">🎥</div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-secondary-200 text-secondary-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {video.lessons} Lessons
                  </span>
                  <span className="text-neutral-600 text-sm">{video.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{video.title}</h3>
                <p className="text-neutral-700 mb-6">{video.description}</p>
                
                <button className="w-full bg-secondary-500 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-secondary-600 transition-colors">
                  Start Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Get Weekly Social Media Tips
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join 10,000+ business owners getting actionable social media strategies delivered every Tuesday
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 rounded-full text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-700 px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-primary-200 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
