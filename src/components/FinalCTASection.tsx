import Link from 'next/link';

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA Content */}
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Transform Your Social Media from{' '}
            <span className="text-accent-200">Stress to Success?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed max-w-4xl mx-auto">
            Join thousands of business owners who&apos;ve discovered the secret to social media that actually works. Start your free trial today and watch your engagement soar while you focus on what you do best.
          </p>

          {/* Risk Reversal */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white font-semibold">14-day free trial</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="text-white font-semibold">No credit card required</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="text-white font-semibold">Cancel anytime</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white font-semibold">Results guaranteed</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/start-trial"
              className="bg-white text-primary-700 px-12 py-4 rounded-full text-xl font-bold hover:bg-accent-50 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center"
            >
              Start Your Free Trial Now
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/demo"
              className="bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-200 inline-flex items-center"
            >
              <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Schedule a Demo
            </Link>
          </div>

          {/* Social Proof Numbers */}
          <div className="pt-12 border-t border-white/20">
            <p className="text-primary-200 mb-6">Join the growing community of successful business owners</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-white">2,000+</div>
                <div className="text-primary-200 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">127%</div>
                <div className="text-primary-200 text-sm">Avg. Engagement Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">5M+</div>
                <div className="text-primary-200 text-sm">Posts Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">89%</div>
                <div className="text-primary-200 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-20 h-20 bg-white rounded-full animate-gentle-float"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="w-32 h-32 bg-accent-300 rounded-full animate-gentle-float" style={{animationDelay: '3s'}}></div>
        </div>
      </div>
    </section>
  );
}
