"use client";

import React, { useState } from 'react';
import { Poppins, Open_Sans } from 'next/font/google';
import Script from 'next/script';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function LandingPage() {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleCallClick = () => {
    setShowCalendly(true);
  };

  return (
    <div className={`min-h-screen bg-white text-gray-900 ${openSans.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="px-4 py-6 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold ${poppins.className} bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent`}>
            f
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-12 md:px-8 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight ${poppins.className}`}>
                  Transform Your{' '}
                  <span className="bg-gradient-to-r from-pink-500 via-red-500 to-cyan-400 bg-clip-text text-transparent">
                    Data Chaos
                  </span>{' '}
                  Into Seamless Workflows
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  No-code data onboarding platform that validates, transforms, and structures your data automatically. From billing to EEG data - we handle it all.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pink-100 to-cyan-50 p-6 rounded-2xl border border-pink-200">
                <p className={`text-sm font-semibold text-pink-600 mb-2 ${poppins.className}`}>READY TO START?</p>
                <button
                  onClick={handleCallClick}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  call
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 via-white to-cyan-100 p-8 rounded-3xl shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
                    <div className="flex-1 h-3 bg-gradient-to-r from-pink-200 to-pink-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-4 rounded-xl">
                      <div className="w-full h-2 bg-pink-300 rounded mb-2"></div>
                      <div className="w-3/4 h-2 bg-pink-300 rounded"></div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-200 to-cyan-100 p-4 rounded-xl">
                      <div className="w-full h-2 bg-cyan-300 rounded mb-2"></div>
                      <div className="w-2/3 h-2 bg-cyan-300 rounded"></div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-200 to-blue-100 p-4 rounded-xl">
                      <div className="w-full h-2 bg-blue-300 rounded mb-2"></div>
                      <div className="w-4/5 h-2 bg-blue-300 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:px-8 bg-gradient-to-br from-pink-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${poppins.className}`}>
              Effortlessly harness the power of your data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let your data work for you, not against you with our streamlined data onboarding platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${poppins.className}`}>
                Intuitive drag-and-drop data transformation interface
              </h3>
              <p className="text-gray-600 mb-6">
                Transform complex data workflows with simple visual tools that anyone can master.
              </p>
              <button
                onClick={handleCallClick}
                className="text-red-500 font-semibold hover:text-red-600 transition-colors"
              >
                Get Started →
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${poppins.className}`}>
                Automated validation and error handling for any data type
              </h3>
              <p className="text-gray-600 mb-6">
                Smart algorithms catch errors before they become problems, ensuring data quality.
              </p>
              <button
                onClick={handleCallClick}
                className="text-red-500 font-semibold hover:text-red-600 transition-colors"
              >
                Learn More →
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${poppins.className}`}>
                Seamless ETL automation that scales with your business
              </h3>
              <p className="text-gray-600 mb-6">
                From startup to enterprise, our platform grows with your data needs.
              </p>
              <button
                onClick={handleCallClick}
                className="text-red-500 font-semibold hover:text-red-600 transition-colors"
              >
                Scale Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${poppins.className}`}>
              Watch Your Data Transform
            </h2>
          </div>
          
          <div className="relative bg-gradient-to-r from-pink-100 via-white to-cyan-100 p-8 md:p-12 rounded-3xl">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-xl"></div>
                </div>
                <h3 className={`font-bold text-lg ${poppins.className}`}>Raw Data</h3>
                <p className="text-gray-600 text-sm">Messy, unstructured</p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full md:w-1 md:h-16"></div>
              </div>
              
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-xl animate-spin"></div>
                </div>
                <h3 className={`font-bold text-lg ${poppins.className}`}>Processing</h3>
                <p className="text-gray-600 text-sm">Automated transformation</p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full md:w-1 md:h-16"></div>
              </div>
              
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-xl"></div>
                </div>
                <h3 className={`font-bold text-lg ${poppins.className}`}>Clean Data</h3>
                <p className="text-gray-600 text-sm">Ready to use</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 md:px-8 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className={`text-2xl font-bold ${poppins.className} bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent`}>
              f
            </div>
            
            <div className="flex items-center space-x-8">
              <button
                onClick={handleCallClick}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                call
              </button>
              
              <a
                href="https://x.com/ibrahimansr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-pink-200 text-center text-gray-600">
            <p>Let your data work for you, not against you.</p>
          </div>
        </div>
      </footer>

      {/* Calendly Widget */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-full max-h-[90vh] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              ×
            </button>
            <div
              className="calendly-inline-widget w-full h-full rounded-2xl"
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
