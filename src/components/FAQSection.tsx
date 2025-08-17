'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will it sound like a robot wrote my posts?",
      answer: "Absolutely not. Our AI studies your existing content, learns your voice, and creates posts that sound authentically you. Most customers say their automated posts get more engagement than their manual ones because the AI optimizes for what actually works with your audience."
    },
    {
      question: "What if I don't like a post it creates?",
      answer: "You're always in control. Every post gets sent to you for approval first. Edit it, reject it, or approve it with one click. The AI learns from your feedback and gets better over time, understanding your preferences and style."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most customers see increased engagement within the first week. By day 30, the average business owner sees 127% higher engagement and saves 5+ hours weekly. The AI gets smarter with each interaction, so results continue improving."
    },
    {
      question: "What happens if there's a crisis or breaking news?",
      answer: "Our system monitors for sensitive topics and unusual events, automatically pausing posts when needed. Plus, you can instantly pause all scheduled posts or reach out to your account manager for immediate assistance during any situation."
    },
    {
      question: "Can it really understand my specific industry?",
      answer: "Yes. Our AI analyzes trends specific to your industry and learns from thousands of successful posts in your niche. It understands the difference between what works for fitness studios vs. accounting firms vs. e-commerce brands."
    },
    {
      question: "What if I need to make changes to my brand voice?",
      answer: "The AI continuously learns and adapts. As your brand evolves, simply provide feedback on posts, and the system will adjust. You can also schedule a strategy call with our team to make larger adjustments to your content strategy."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
            Questions Every{' '}
            <span className="gradient-text">
              Smart Business Owner Asks
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`
                  flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200
                  ${openIndex === index 
                    ? 'bg-primary-500 text-white rotate-45' 
                    : 'bg-neutral-200 text-neutral-600'
                  }
                `}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-neutral-100 pt-6">
                    <p className="text-neutral-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-neutral-600 mb-6">
              Our team is here to help you understand exactly how this works for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.001 8.001 0 01-7.266-4.708l-.733-1.347a.5.5 0 01.262-.65l.696-.348A7.978 7.978 0 018 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
                Chat with Our Team
              </button>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 inline-flex items-center justify-center">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
