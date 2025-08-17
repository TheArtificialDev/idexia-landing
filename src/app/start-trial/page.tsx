import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function StartTrialPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900">
              Start Your{' '}
              <span className="gradient-text">
                14-Day Free Trial
              </span>
            </h1>
            
            <p className="text-xl text-neutral-600 leading-relaxed">
              See exactly how our AI transforms your social media in just two weeks. No credit card required, no hidden fees, no risk.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">What Happens Next</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-8 rounded-3xl border border-primary-200">
              <div className="text-2xl font-bold text-primary-600 mb-4">Day 1</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Setup That Takes Minutes, Not Hours</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Connect your social media accounts (2 minutes)</li>
                <li>• Complete our brand voice questionnaire (8 minutes)</li>
                <li>• Review and approve your first batch of AI-generated content</li>
              </ul>
              <div className="mt-4 p-3 bg-primary-100 rounded-lg">
                <p className="text-sm text-primary-700 font-medium">You&apos;ll see: Content ideas you never would have thought of</p>
              </div>
            </div>

            <div className="bg-secondary-50 p-8 rounded-3xl border border-secondary-200">
              <div className="text-2xl font-bold text-secondary-600 mb-4">Days 2-7</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Watch the Magic Happen</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Fresh content ideas delivered daily to your inbox</li>
                <li>• Approve, edit, or reject with one click</li>
                <li>• See your posting consistency improve immediately</li>
              </ul>
              <div className="mt-4 p-3 bg-secondary-100 rounded-lg">
                <p className="text-sm text-secondary-700 font-medium">You&apos;ll see: Higher engagement than your manual posts</p>
              </div>
            </div>

            <div className="bg-accent-50 p-8 rounded-3xl border border-accent-200">
              <div className="text-2xl font-bold text-accent-600 mb-4">Days 8-14</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Results You Can Measure</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Performance analytics show improvement trends</li>
                <li>• Optimize based on what&apos;s working for your audience</li>
                <li>• Experience the time savings (average: 5+ hours weekly)</li>
              </ul>
              <div className="mt-4 p-3 bg-accent-100 rounded-lg">
                <p className="text-sm text-accent-700 font-medium">You&apos;ll see: Why 89% of trial users become paying customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-neutral-200">
            <h2 className="text-2xl font-bold text-center text-neutral-900 mb-8">
              Start Your Free Trial Now
            </h2>
            
            <form className="space-y-6">
              {/* Step 1: Business Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800">Step 1: Your Business Info</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Business Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your Business Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Industry</label>
                    <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option>Select your industry</option>
                      <option>Fitness & Wellness</option>
                      <option>Food & Restaurant</option>
                      <option>Consulting</option>
                      <option>E-commerce</option>
                      <option>Professional Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Website/Social Media</label>
                  <input 
                    type="url" 
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="https://yourwebsite.com or @yoursocial"
                  />
                </div>
              </div>

              {/* Step 2: Platform Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800">Step 2: Platform Selection</h3>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center p-4 border border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-primary-600" />
                    <span>Facebook</span>
                  </label>
                  <label className="flex items-center p-4 border border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-primary-600" />
                    <span>Instagram</span>
                  </label>
                  <label className="flex items-center p-4 border border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-primary-600" />
                    <span>LinkedIn</span>
                  </label>
                  <label className="flex items-center p-4 border border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-primary-600" />
                    <span>Twitter</span>
                  </label>
                </div>
              </div>

              {/* Step 3: Account Setup */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800">Step 3: Account Setup</h3>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Create Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Choose a secure password"
                  />
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-8 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                Start My Free Trial Now
              </button>
            </form>

            {/* Trust Signals */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <div className="grid grid-cols-4 gap-4 text-center text-sm text-neutral-600">
                <div>
                  <div className="text-primary-600 font-bold">✓</div>
                  <div>14-day trial</div>
                </div>
                <div>
                  <div className="text-primary-600 font-bold">✓</div>
                  <div>No credit card</div>
                </div>
                <div>
                  <div className="text-primary-600 font-bold">✓</div>
                  <div>Cancel anytime</div>
                </div>
                <div>
                  <div className="text-primary-600 font-bold">✓</div>
                  <div>Setup help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
