import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SuccessStoriesPage() {
  const successStories = [
    {
      name: "Sarah M.",
      business: "Fitness Studio Owner",
      image: "SM",
      challenge: "Sarah was posting sporadically, getting 2-3 likes per post, and spending Sunday evenings stressed about content for the week.",
      results: {
        engagement: "+312%",
        inquiries: "+89%",
        timeSaved: "75%",
        events: "Now sell out"
      },
      quote: "I went from dreading social media to having people tell me they look forward to my posts. My classes are fuller, my community is stronger, and I actually have my evenings back.",
      timeline: "90 days",
      color: "secondary"
    },
    {
      name: "Mike R.",
      business: "Local Restaurant Owner",
      image: "MR", 
      challenge: "Tuesday and Wednesday nights were killing profits. Mike tried posting food photos but couldn't drive consistent traffic.",
      results: {
        revenue: "+156%",
        followers: "+89%",
        engagement: "+267%",
        catering: "+134%"
      },
      quote: "The AI figured out that our audience engages most with behind-the-scenes content on Tuesdays and 'comfort food' posts on Wednesdays. Things I never would have thought to test.",
      timeline: "60 days",
      color: "accent"
    },
    {
      name: "Jennifer L.",
      business: "B2B Consultant",
      image: "JL",
      challenge: "As a B2B consultant, Jennifer struggled to showcase expertise without sounding salesy or boring.",
      results: {
        linkedinEngagement: "+445%",
        speaking: "+200%",
        clients: "+178%",
        recognition: "Industry leader"
      },
      quote: "The AI found trending topics in my industry that I wasn't even aware of. Now I'm part of conversations that matter, and potential clients see me as the expert I've always been.",
      timeline: "120 days",
      color: "primary"
    },
    {
      name: "David C.",
      business: "E-commerce Store Owner",
      image: "DC",
      challenge: "David had decent follower numbers but terrible conversion. Posts got likes but not sales.",
      results: {
        conversion: "+234%",
        revenue: "+289%",
        acquisitionCost: "-67%",
        repeatCustomers: "+123%"
      },
      quote: "Instead of just showing products, the AI created content that solved problems and built relationships. Now my posts actually drive sales, not just vanity metrics.",
      timeline: "45 days",
      color: "secondary"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Real Stories from Business Owners Who{' '}
            <span className="gradient-text">
              Transformed Their Social Media
            </span>
          </h1>
          
          <p className="text-xl text-neutral-600 leading-relaxed max-w-4xl mx-auto">
            These aren&apos;t made-up testimonials. These are real business owners who went from social media frustration to consistent growth—and the specific results they achieved.
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {successStories.map((story, index) => (
            <div key={index} className={`
              bg-gradient-to-br rounded-3xl shadow-2xl border-2 overflow-hidden
              ${story.color === 'primary' ? 'from-primary-50 to-primary-100 border-primary-200' : ''}
              ${story.color === 'secondary' ? 'from-secondary-50 to-secondary-100 border-secondary-200' : ''}
              ${story.color === 'accent' ? 'from-accent-50 to-accent-100 border-accent-200' : ''}
            `}>
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Customer Info */}
                  <div className="text-center lg:text-left">
                    <div className={`
                      w-24 h-24 rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center text-white text-2xl font-bold
                      ${story.color === 'primary' ? 'bg-gradient-to-br from-primary-500 to-primary-600' : ''}
                      ${story.color === 'secondary' ? 'bg-gradient-to-br from-secondary-500 to-secondary-600' : ''}
                      ${story.color === 'accent' ? 'bg-gradient-to-br from-accent-500 to-accent-600' : ''}
                    `}>
                      {story.image}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{story.name}</h3>
                    <p className="text-neutral-600 mb-4">{story.business}</p>
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className={`
                      inline-block px-4 py-2 rounded-full text-sm font-semibold
                      ${story.color === 'primary' ? 'bg-primary-200 text-primary-800' : ''}
                      ${story.color === 'secondary' ? 'bg-secondary-200 text-secondary-800' : ''}
                      ${story.color === 'accent' ? 'bg-accent-200 text-accent-800' : ''}
                    `}>
                      Results in {story.timeline}
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      {/* Challenge */}
                      <div>
                        <h4 className="font-bold text-neutral-900 mb-2">The Challenge:</h4>
                        <p className="text-neutral-700">{story.challenge}</p>
                      </div>

                      {/* Results Grid */}
                      <div>
                        <h4 className="font-bold text-neutral-900 mb-4">The Results:</h4>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {Object.entries(story.results).map(([key, value], resultIndex) => (
                            <div key={resultIndex} className="bg-white/60 p-4 rounded-xl">
                              <div className={`
                                text-2xl font-bold mb-1
                                ${story.color === 'primary' ? 'text-primary-700' : ''}
                                ${story.color === 'secondary' ? 'text-secondary-700' : ''}
                                ${story.color === 'accent' ? 'text-accent-700' : ''}
                              `}>
                                {value}
                              </div>
                              <div className="text-sm text-neutral-600 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <div>
                        <div className={`
                          text-6xl mb-4 opacity-30
                          ${story.color === 'primary' ? 'text-primary-400' : ''}
                          ${story.color === 'secondary' ? 'text-secondary-400' : ''}
                          ${story.color === 'accent' ? 'text-accent-400' : ''}
                        `}>&ldquo;</div>
                        <blockquote className="text-lg text-neutral-800 leading-relaxed italic">
                          {story.quote}
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aggregate Results */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Results Summary Across All Customers
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">127%</div>
              <p className="text-neutral-700">Average Engagement Increase in First 30 Days</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="text-4xl font-bold text-secondary-600 mb-2">5.3</div>
              <p className="text-neutral-700">Hours Saved Weekly on Average</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">67%</div>
              <p className="text-neutral-700">Report Increased Revenue from Social Media</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">94%</div>
              <p className="text-neutral-700">Would Recommend to Other Business Owners</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                Join these successful business owners and transform your social media today
              </p>
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center">
                Start Your Free Trial
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
