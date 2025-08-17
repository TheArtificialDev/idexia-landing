import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900">
            The Science Behind{' '}
            <span className="gradient-text">
              Social Media That Actually Works
            </span>
          </h1>                        <p className="text-xl text-neutral-600 leading-relaxed max-w-4xl mx-auto">
              Ever wonder how some businesses always seem to post the perfect content at the perfect time? Here&apos;s exactly how our AI transforms struggling social media into a customer-generating machine.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Deep Dive */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Why 87% of Small Businesses Fail at Social Media
          </h2>
          
          {/* Timeline */}
          <div className="bg-gradient-to-br from-red-50 to-accent-50 p-8 rounded-3xl border border-red-200 mb-12">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-red-600 font-bold mb-2">Monday Morning</div>
                <div className="text-neutral-700">&ldquo;I should post something...&rdquo;</div>
              </div>
              <div className="text-center">
                <div className="text-red-600 font-bold mb-2">Wednesday Evening</div>
                <div className="text-neutral-700">&ldquo;I&apos;ll batch content this weekend...&rdquo;</div>
              </div>
              <div className="text-center">
                <div className="text-red-600 font-bold mb-2">Friday Night</div>
                <div className="text-neutral-700">&ldquo;Maybe I&apos;ll just repost something...&rdquo;</div>
              </div>
              <div className="text-center">
                <div className="text-red-600 font-bold mb-2">Sunday Night</div>
                <div className="text-neutral-700">😰 Panic posting random content</div>
              </div>
            </div>
          </div>

          {/* The Real Cost */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-200">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="font-bold text-neutral-900 mb-2">Lost Customers</h3>
              <p className="text-neutral-700 text-sm">Your competitors are staying top-of-mind while you&apos;re invisible</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-200">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="font-bold text-neutral-900 mb-2">Wasted Time</h3>
              <p className="text-neutral-700 text-sm">Hours spent creating content that gets ignored</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-200">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="font-bold text-neutral-900 mb-2">Missed Opportunities</h3>
              <p className="text-neutral-700 text-sm">Trending topics your audience cares about, but you never see them</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-200">
              <div className="text-3xl mb-4">😴</div>
              <h3 className="font-bold text-neutral-900 mb-2">Burnout</h3>
              <p className="text-neutral-700 text-sm">Social media becomes another chore instead of a growth driver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-16">
            How We Turn Social Media Chaos into Consistent Growth
          </h2>

          <div className="space-y-16">
            {/* Phase 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-primary-600 font-bold text-lg mb-2">Phase 1</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Intelligence Gathering</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">What We Do:</h4>
                    <p className="text-neutral-700">Our AI continuously monitors 50+ data sources including Google Trends, Reddit discussions, industry forums, competitor posts, and platform-specific trending topics.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">What This Means for You:</h4>
                    <p className="text-neutral-700">You&apos;ll never miss a trending topic again. While your competitors are posting yesterday&apos;s news, you&apos;re riding the wave of what&apos;s happening right now.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-gentle-pulse"></div>
                    <span className="font-medium">Monitoring 50+ sources</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-primary-50 p-3 rounded-lg text-sm">📊 Google Trends Analysis</div>
                    <div className="bg-primary-50 p-3 rounded-lg text-sm">💬 Reddit Discussions</div>
                    <div className="bg-primary-50 p-3 rounded-lg text-sm">🏢 Industry Forums</div>
                    <div className="bg-primary-50 p-3 rounded-lg text-sm">👥 Competitor Posts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white p-8 rounded-3xl shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-secondary-500 rounded-full animate-gentle-pulse"></div>
                      <span className="font-medium">AI Content Engine</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-secondary-50 p-4 rounded-lg">
                        <div className="text-sm font-medium text-secondary-800 mb-1">Content Analysis</div>
                        <div className="text-xs text-secondary-600">Learning your voice patterns...</div>
                      </div>
                      <div className="bg-secondary-50 p-4 rounded-lg">
                        <div className="text-sm font-medium text-secondary-800 mb-1">Optimization</div>
                        <div className="text-xs text-secondary-600">Trending elements detected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-secondary-600 font-bold text-lg mb-2">Phase 2</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Content Creation</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">What We Do:</h4>
                    <p className="text-neutral-700">Using advanced AI that&apos;s been trained on millions of high-performing posts, we create content that matches your voice, speaks to your audience, and includes trending elements that boost engagement.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">What This Means for You:</h4>
                    <p className="text-neutral-700">Every post sounds like you wrote it, but performs better than content you&apos;d create manually. No more staring at blank screens or posting generic quotes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-16">
            The Tech Stack That Powers Your Success
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-3xl border border-primary-200">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-primary-700 mb-4">Trend Analysis Engine</h3>
              <p className="text-neutral-700 mb-4 italic">Like having a crystal ball for social media trends</p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Analyzes millions of conversations daily</li>
                <li>• Identifies emerging topics before they explode</li>
                <li>• Filters trends relevant to your specific industry</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-3xl border border-secondary-200">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-secondary-700 mb-4">Brand Voice AI</h3>
              <p className="text-neutral-700 mb-4 italic">Writes in your voice, even when you&apos;re sleeping</p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Studies your existing content and communication style</li>
                <li>• Learns from every edit and approval you make</li>
                <li>• Maintains consistency across all platforms</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-3xl border border-accent-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-accent-700 mb-4">Performance Optimization</h3>
              <p className="text-neutral-700 mb-4 italic">Gets smarter with every post</p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Tracks engagement patterns unique to your audience</li>
                <li>• A/B tests different approaches automatically</li>
                <li>• Adapts strategy based on what actually works</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to See It in Action?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Experience the future of social media management with our free trial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-700 px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors">
              Start Free Trial
            </button>
            <button className="bg-transparent text-white px-8 py-3 rounded-full font-semibold border-2 border-white/30 hover:border-white hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
