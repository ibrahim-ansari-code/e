"use client";

import { useState } from 'react';
import Script from 'next/script';
import { Source_Sans_3, Manrope } from 'next/font/google';

const sourceSans = Source_Sans_3({ subsets: ['latin'], display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

export default function LandingPage() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-[#0D1117] text-[#F0F6FC] ${manrope.className} relative overflow-hidden`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Cinematic background with grain */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#21262D] via-[#0D1117] to-[#161B22]"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold ${sourceSans.className} text-[#F0F6FC]`}>
            f
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-40 px-4 md:px-8 pt-12 md:pt-20 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 ${sourceSans.className} leading-tight`}>
            Transform Your Data Chaos
            <span className="block text-[#58A6FF] mt-2">Into Seamless Workflows</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#8B949E] mb-12 max-w-2xl mx-auto leading-relaxed">
            No-code data onboarding platform that validates, transforms, and structures your data automatically. From billing to EEG data - we handle it all.
          </p>

          {/* Subtle initial CTA */}
          <button
            onClick={() => setShowCalendly(true)}
            className="inline-flex items-center px-6 py-3 bg-[#21262D] hover:bg-[#30363D] text-[#F0F6FC] rounded-lg transition-all duration-300 border border-[#30363D] hover:border-[#58A6FF] group"
          >
            <span className="mr-2">call</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Glowing Data Pipeline Visualization */}
      <section className="relative z-30 px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Pipeline stages */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              {/* Input Stage */}
              <div className="relative group">
                <div className="w-32 h-32 bg-gradient-to-br from-[#21262D] to-[#30363D] rounded-2xl border border-[#30363D] flex items-center justify-center shadow-2xl group-hover:shadow-[#58A6FF]/20 transition-all duration-500">
                  <div className="w-16 h-16 bg-[#58A6FF]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#58A6FF]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-center mt-4 text-[#8B949E] font-medium">Raw Data</p>
              </div>

              {/* Flow Arrow */}
              <div className="hidden md:block relative">
                <div className="w-24 h-px bg-gradient-to-r from-[#58A6FF] to-[#58A6FF]/30 relative">
                  <div className="absolute right-0 top-0 w-2 h-2 bg-[#58A6FF] rounded-full transform translate-x-1 -translate-y-1/2 animate-pulse"></div>
                </div>
              </div>

              {/* Transform Stage */}
              <div className="relative group">
                <div className="w-32 h-32 bg-gradient-to-br from-[#21262D] to-[#30363D] rounded-2xl border border-[#30363D] flex items-center justify-center shadow-2xl group-hover:shadow-[#E74C3C]/20 transition-all duration-500">
                  <div className="w-16 h-16 bg-[#E74C3C]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#E74C3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#E74C3C]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-center mt-4 text-[#8B949E] font-medium">Transform</p>
              </div>

              {/* Flow Arrow */}
              <div className="hidden md:block relative">
                <div className="w-24 h-px bg-gradient-to-r from-[#E74C3C] to-[#E74C3C]/30 relative">
                  <div className="absolute right-0 top-0 w-2 h-2 bg-[#E74C3C] rounded-full transform translate-x-1 -translate-y-1/2 animate-pulse"></div>
                </div>
              </div>

              {/* Output Stage */}
              <div className="relative group">
                <div className="w-32 h-32 bg-gradient-to-br from-[#21262D] to-[#30363D] rounded-2xl border border-[#30363D] flex items-center justify-center shadow-2xl group-hover:shadow-[#58A6FF]/20 transition-all duration-500">
                  <div className="w-16 h-16 bg-[#58A6FF]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#58A6FF]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-center mt-4 text-[#8B949E] font-medium">Structured Data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Progressive CTA */}
      <section className="relative z-30 px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${sourceSans.className}`}>
              Effortless Data Transformation
            </h2>
            <p className="text-lg text-[#8B949E] max-w-2xl mx-auto">
              Let your data work for you, not against you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-[#21262D] to-[#30363D] p-8 rounded-2xl border border-[#30363D] hover:border-[#58A6FF]/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="w-12 h-12 bg-[#58A6FF]/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${sourceSans.className}`}>Intuitive Drag-and-Drop</h3>
                <p className="text-[#8B949E] leading-relaxed">Data transformation interface that makes complex operations simple and visual.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-[#21262D] to-[#30363D] p-8 rounded-2xl border border-[#30363D] hover:border-[#E74C3C]/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="w-12 h-12 bg-[#E74C3C]/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#E74C3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${sourceSans.className}`}>Automated Validation</h3>
                <p className="text-[#8B949E] leading-relaxed">Error handling for any data type with intelligent validation rules.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-[#21262D] to-[#30363D] p-8 rounded-2xl border border-[#30363D] hover:border-[#58A6FF]/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="w-12 h-12 bg-[#58A6FF]/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${sourceSans.className}`}>Seamless ETL Automation</h3>
                <p className="text-[#8B949E] leading-relaxed">Scales with your business from startup to enterprise level.</p>
              </div>
            </div>
          </div>

          {/* More prominent CTA as user scrolls deeper */}
          <div className="text-center">
            <button
              onClick={() => setShowCalendly(true)}
              className="inline-flex items-center px-8 py-4 bg-[#E74C3C] hover:bg-[#C0392B] text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#E74C3C]/25 group text-lg font-semibold"
            >
              <span className="mr-3">call</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Data Types Showcase */}
      <section className="relative z-30 px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${sourceSans.className}`}>
              Handle Any Data Type
            </h2>
            <p className="text-lg text-[#8B949E] max-w-2xl mx-auto">
              From billing records to EEG signals - our platform adapts to your data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { type: 'Billing', icon: '💰', color: '#58A6FF' },
              { type: 'Medical', icon: '🏥', color: '#E74C3C' },
              { type: 'IoT Sensors', icon: '📡', color: '#58A6FF' },
              { type: 'Financial', icon: '📊', color: '#E74C3C' }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-[#21262D] to-[#30363D] p-6 rounded-xl border border-[#30363D] hover:border-[#58A6FF]/50 transition-all duration-500 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className={`text-lg font-bold ${sourceSans.className}`}>{item.type}</h3>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#58A6FF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Final urgent CTA */}
          <div className="text-center bg-gradient-to-r from-[#21262D] to-[#30363D] p-12 rounded-2xl border border-[#30363D]">
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${sourceSans.className}`}>
              Ready to Transform Your Data Workflow?
            </h3>
            <p className="text-[#8B949E] mb-8 max-w-xl mx-auto">
              Join teams who've eliminated data chaos and accelerated their operations.
            </p>
            <button
              onClick={() => setShowCalendly(true)}
              className="inline-flex items-center px-10 py-5 bg-[#E74C3C] hover:bg-[#C0392B] text-white rounded-xl transition-all duration-300 shadow-xl hover:shadow-[#E74C3C]/30 group text-xl font-bold"
            >
              <span className="mr-3">call</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-30 px-4 md:px-8 py-12 border-t border-[#21262D]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className={`text-2xl font-bold ${sourceSans.className} text-[#F0F6FC] mb-4 md:mb-0`}>
              f
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://x.com/ibrahimansr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B949E] hover:text-[#58A6FF] transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#21262D] text-center text-[#8B949E]">
            <p>&copy; 2024 f. Effortlessly harness the power of your data.</p>
          </div>
        </div>
      </footer>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#21262D] rounded-2xl border border-[#30363D] w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-[#30363D]">
              <h3 className={`text-xl font-bold ${sourceSans.className}`}>Schedule a Call</h3>
              <button
                onClick={() => setShowCalendly(false)}
                className="text-[#8B949E] hover:text-[#F0F6FC] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-[600px]">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
                style={{ minWidth: '320px', height: '100%' }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
