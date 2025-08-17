'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/Idexia Studio.png" 
                alt="Idexia Studio" 
                width={32} 
                height={32}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold text-primary-700">Idexia Studio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/how-it-works" className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                How It Works
              </Link>
              <Link href="/pricing" className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </Link>
              <Link href="/success-stories" className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Success Stories
              </Link>
              <Link href="/resources" className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Resources
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/start-trial" 
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-600 hover:text-primary-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-primary-100">
              <Link href="/" className="block text-neutral-600 hover:text-primary-600 px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="/how-it-works" className="block text-neutral-600 hover:text-primary-600 px-3 py-2 text-base font-medium">
                How It Works
              </Link>
              <Link href="/pricing" className="block text-neutral-600 hover:text-primary-600 px-3 py-2 text-base font-medium">
                Pricing
              </Link>
              <Link href="/success-stories" className="block text-neutral-600 hover:text-primary-600 px-3 py-2 text-base font-medium">
                Success Stories
              </Link>
              <Link href="/resources" className="block text-neutral-600 hover:text-primary-600 px-3 py-2 text-base font-medium">
                Resources
              </Link>
              <Link href="/start-trial" className="block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-2 rounded-lg text-base font-medium mt-4">
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
