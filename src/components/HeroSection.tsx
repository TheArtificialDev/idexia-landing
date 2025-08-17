import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Stop Stressing About{' '}
                <span className="gradient-text">
                  What to Post Next
                </span>
              </h1>
              
              <p className="text-xl text-neutral-600 leading-relaxed">
                Your business deserves a social media presence that actually drives results. Our AI finds what your audience craves, writes content in your voice, and posts it while you focus on what you do best—running your business.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-primary-100">
              <p className="text-lg text-neutral-700 font-medium">
                Join 2,000+ business owners who&apos;ve discovered the secret to consistent, engaging social media that doesn&apos;t consume their evenings and weekends.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/start-trial"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your 14-Day Free Trial
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="#demo"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" />
                </svg>
                See How It Works
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-accent-100 to-accent-200 p-8 rounded-3xl shadow-2xl">
              {/* Split Screen Visual */}
              <div className="grid grid-cols-1 gap-6">
                {/* Stressed Business Owner */}
                <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-sm font-medium text-red-700">Sunday 11 PM</span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-red-800 font-medium">😰 &ldquo;What should I post tomorrow?&rdquo;</div>
                    <div className="h-2 bg-red-200 rounded animate-pulse"></div>
                    <div className="h-2 bg-red-200 rounded animate-pulse w-3/4"></div>
                    <div className="text-xs text-red-600">Last post: 5 days ago • 3 likes</div>
                  </div>
                </div>

                {/* VS Arrow */}
                <div className="flex justify-center">
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    <span className="text-2xl font-bold text-neutral-600">VS</span>
                  </div>
                </div>

                {/* Relaxed Business Owner */}
                <div className="bg-secondary-50 p-6 rounded-2xl border-2 border-secondary-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-secondary-400 rounded-full animate-gentle-pulse"></div>
                    <span className="text-sm font-medium text-secondary-700">Auto-scheduled</span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-secondary-800 font-medium">😌 &ldquo;Posts going live while I sleep&rdquo;</div>
                    <div className="h-2 bg-secondary-200 rounded"></div>
                    <div className="h-2 bg-secondary-200 rounded w-4/5"></div>
                    <div className="text-xs text-secondary-600">Queue: 30 posts ready • Avg: 45 engagements</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg animate-gentle-float">
              <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg animate-gentle-float" style={{animationDelay: '2s'}}>
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
