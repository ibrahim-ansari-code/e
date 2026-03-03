"use client";

import React, { useState } from 'react';
import { Bebas_Neue, Inter } from 'next/font/google';
import Script from 'next/script';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });
const inter = Inter({ subsets: ['latin'] });

export default function LandingPage() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden ${inter.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="relative z-50 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold text-white ${bebasNeue.className}`}>
            f
          </div>
          <button
            type="button"
            onClick={() => setShowCalendly(true)}
            className="bg-[#E74C3C] hover:bg-[#C0392B] text-white px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)' }}
          >
            call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="absolute -top-8 -left-4 w-24 h-24 bg-[#FF6B35] opacity-20 transform rotate-45"></div>
              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 ${bebasNeue.className}`}>
                <span className="block transform -skew-x-12 inline-block">Transform</span>
                <span className="block text-[#00D4FF] transform skew-x-6">Your Data</span>
                <span className="block transform -skew-x-3">Chaos Into</span>
                <span className="block text-[#FF6B35]">Seamless</span>
                <span className="block transform skew-x-12">Workflows</span>
              </h1>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#E74C3C] to-[#FF6B35]"></div>
                <p className="text-lg md:text-xl text-gray-300 mb-8 pl-8 leading-relaxed">
                  No-code data onboarding platform that validates, transforms, and structures your data automatically. From billing to EEG data - we handle it all.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setShowCalendly(true)}
                  className="bg-[#E74C3C] hover:bg-[#C0392B] text-white px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#E74C3C]/25"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 16px 100%)' }}
                >
                  GET STARTED NOW
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 to-[#FF6B35]/20 transform rotate-3 rounded-lg"></div>
              <div className="relative bg-[#2A2A2A] p-6 md:p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-[#00D4FF] transform rotate-45"></div>
                    <div className="h-2 bg-gradient-to-r from-[#00D4FF] to-[#FF6B35] flex-1 transform skew-x-12"></div>
                    <div className="w-4 h-4 bg-[#FF6B35] rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#1A1A1A] p-4 transform -skew-x-6 hover:skew-x-0 transition-transform">
                      <div className="w-full h-2 bg-[#E74C3C] mb-2"></div>
                      <div className="text-xs text-gray-400">Raw Data</div>
                    </div>
                    <div className="bg-[#1A1A1A] p-4 transform skew-x-6 hover:skew-x-0 transition-transform">
                      <div className="w-full h-2 bg-[#00D4FF] mb-2"></div>
                      <div className="text-xs text-gray-400">Processing</div>
                    </div>
                    <div className="bg-[#1A1A1A] p-4 transform -skew-x-6 hover:skew-x-0 transition-transform">
                      <div className="w-full h-2 bg-[#FF6B35] mb-2"></div>
                      <div className="text-xs text-gray-400">Clean Output</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 md:px-8 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] transform skew-y-2"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${bebasNeue.className}`}>
              <span className="text-[#00D4FF]">Effortless</span> Data <span className="text-[#FF6B35]">Transformation</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-[#2A2A2A] p-8 transform -skew-x-6 group-hover:skew-x-0 transition-all duration-500 hover:bg-[#333333]">
                <div className="transform skew-x-6 group-hover:skew-x-0 transition-transform duration-500">
                  <div className="w-12 h-12 bg-[#E74C3C] mb-6 transform rotate-45"></div>
                  <h3 className={`text-2xl font-bold mb-4 ${bebasNeue.className}`}>Drag & Drop Interface</h3>
                  <p className="text-gray-300">Intuitive drag-and-drop data transformation interface that makes complex data operations simple and visual.</p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-[#2A2A2A] p-8 transform skew-x-6 group-hover:skew-x-0 transition-all duration-500 hover:bg-[#333333]">
                <div className="transform -skew-x-6 group-hover:skew-x-0 transition-transform duration-500">
                  <div className="w-12 h-12 bg-[#00D4FF] mb-6 rounded-full"></div>
                  <h3 className={`text-2xl font-bold mb-4 ${bebasNeue.className}`}>Smart Validation</h3>
                  <p className="text-gray-300">Automated validation and error handling for any data type, ensuring your data integrity from start to finish.</p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-[#2A2A2A] p-8 transform -skew-x-6 group-hover:skew-x-0 transition-all duration-500 hover:bg-[#333333]">
                <div className="transform skew-x-6 group-hover:skew-x-0 transition-transform duration-500">
                  <div className="w-12 h-12 bg-[#FF6B35] mb-6" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                  <h3 className={`text-2xl font-bold mb-4 ${bebasNeue.className}`}>ETL Automation</h3>
                  <p className="text-gray-300">Seamless ETL automation that scales with your business, handling everything from simple imports to complex transformations.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setShowCalendly(true)}
              className="bg-[#E74C3C] hover:bg-[#C0392B] text-white px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#E74C3C]/25"
              style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 16px 100%)' }}
            >
              SCHEDULE DEMO
            </button>
          </div>
        </div>
      </section>

      {/* Data Pipeline Visualization */}
      <section className="relative px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${bebasNeue.className}`}>
              <span className="text-white">Your Data</span> <span className="text-[#E74C3C]">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let your data work for you, not against you.
            </p>
          </div>
          <div className="relative">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#E74C3C] mx-auto mb-4 transform rotate-45 flex items-center justify-center">
                  <div className="text-2xl font-bold transform -rotate-45">1</div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${bebasNeue.className}`}>Upload</h3>
                <p className="text-gray-400 text-sm">Raw chaotic data</p>
              </div>
              <div className="hidden md:block">
                <div className="h-1 bg-gradient-to-r from-[#E74C3C] to-[#00D4FF] transform skew-x-12"></div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#00D4FF] mx-auto mb-4 rounded-full flex items-center justify-center">
                  <div className="text-2xl font-bold">2</div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${bebasNeue.className}`}>Transform</h3>
                <p className="text-gray-400 text-sm">Automated processing</p>
              </div>
              <div className="hidden md:block">
                <div className="h-1 bg-gradient-to-r from-[#00D4FF] to-[#FF6B35] transform -skew-x-12"></div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#FF6B35] mx-auto mb-4 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                  <div className="text-2xl font-bold">3</div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${bebasNeue.className}`}>Deploy</h3>
                <p className="text-gray-400 text-sm">Clean structured output</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={() => setShowCalendly(true)}
          className="bg-[#E74C3C] hover:bg-[#C0392B] text-white px-6 py-3 font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[#E74C3C]/50 animate-pulse"
          style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)' }}
        >
          CALL NOW
        </button>
      </div>

      {/* Footer */}
      <footer className="relative px-4 md:px-8 py-12 mt-24">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-[#1A1A1A] transform -skew-y-1"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`text-3xl font-bold text-white mb-4 md:mb-0 ${bebasNeue.className}`}>
              f
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://x.com/ibrahimansr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 f. Effortlessly harness the power of your data with our streamlined data onboarding platform.
            </p>
          </div>
        </div>
      </footer>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[600px] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
            >
              ×
            </button>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
              style={{ minWidth: '320px', height: '600px' }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
