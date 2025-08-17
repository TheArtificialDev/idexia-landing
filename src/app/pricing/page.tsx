import Navigation from '@/components/Navigation';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Invest in{' '}
            <span className="gradient-text">
              Growth, Not Guesswork
            </span>
          </h1>
          
          <p className="text-xl text-neutral-600 leading-relaxed">
            What you&apos;d pay a freelance social media manager for one week gets you an entire month of AI-powered content that works 24/7, never takes vacation, and gets smarter every day.
          </p>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-neutral-900 mb-8">Compare Your Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Options */}
            <div className="bg-red-50 p-8 rounded-3xl border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-6">Traditional Social Media Management</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Freelancer:</span>
                  <span className="font-semibold text-red-700">$800-1,500/month + inconsistent quality</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Agency:</span>
                  <span className="font-semibold text-red-700">$2,000-5,000/month + long contracts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">DIY:</span>
                  <span className="font-semibold text-red-700">10+ hours/week + mediocre results</span>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="bg-secondary-50 p-8 rounded-3xl border border-secondary-200">
              <h3 className="text-xl font-bold text-secondary-800 mb-6">Our AI Solution</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Starter:</span>
                  <span className="font-semibold text-secondary-700">$49/month + consistent quality</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Growth:</span>
                  <span className="font-semibold text-secondary-700">$149/month + proven results</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Premium:</span>
                  <span className="font-semibold text-secondary-700">$399/month + dedicated support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <PricingSection />

      {/* ROI Calculator */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Calculate Your ROI
          </h2>
          
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800">Current Situation</h3>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Hours spent on social media weekly</label>
                  <input type="number" className="w-full px-4 py-2 border border-neutral-300 rounded-lg" placeholder="5" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Current social media expenses (monthly)</label>
                  <input type="number" className="w-full px-4 py-2 border border-neutral-300 rounded-lg" placeholder="500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Average engagement rate (%)</label>
                  <input type="number" className="w-full px-4 py-2 border border-neutral-300 rounded-lg" placeholder="2.5" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800">With Idexia Studio</h3>
                <div className="bg-secondary-50 p-4 rounded-lg">
                  <div className="text-sm text-neutral-700">Time saved monthly:</div>
                  <div className="text-xl font-bold text-secondary-700">20+ hours</div>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="text-sm text-neutral-700">Projected engagement increase:</div>
                  <div className="text-xl font-bold text-primary-700">127%</div>
                </div>
                <div className="bg-accent-50 p-4 rounded-lg">
                  <div className="text-sm text-neutral-700">Break-even timeline:</div>
                  <div className="text-xl font-bold text-accent-700">Week 2</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
