"use client";

import React, { useState } from 'react';
import { Manrope } from 'next/font/google';
import Script from 'next/script';

const manrope = Manrope({ subsets: ['latin'] });

export default function LandingPage() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`${manrope.className} min-h-screen bg-gray-50 text-gray-900`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">f</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
              Transform Your Data Chaos<br />Into Seamless Workflows
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No-code data onboarding platform that validates, transforms, and structures your data automatically. From billing to EEG data - we handle it all.
            </p>
          </div>
          
          <div className="pt-8">
            <button
              type="button"
              onClick={() => setShowCalendly(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 text-xl font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              call
            </button>
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      {showCalendly && (
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Schedule Your Call</h3>
              <button
                onClick={() => setShowCalendly(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
              style={{ minWidth: '320px', height: '630px' }}
            ></div>
          </div>
        </section>
      )}

      {/* Data Flow Visualization */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Raw Data</h3>
            <p className="text-gray-600 leading-relaxed">Messy, unstructured data from any source</p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-24 h-0.5 bg-gray-300 hidden md:block"></div>
            <div className="w-0.5 h-24 bg-gray-300 md:hidden"></div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-red-50 rounded-xl mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-red-500 rounded"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Clean Data</h3>
            <p className="text-gray-600 leading-relaxed">Validated, structured, ready-to-use data</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Effortless Data Transformation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Let your data work for you, not against you.</p>
          </div>
          
          <div className="space-y-12">
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Intuitive drag-and-drop data transformation interface</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Visual workflow builder that makes complex data transformations simple and accessible to everyone.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Automated validation and error handling for any data type</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Smart algorithms detect and fix data quality issues automatically, ensuring clean output every time.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Seamless ETL automation that scales with your business</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Enterprise-grade infrastructure that handles everything from small datasets to massive data lakes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 max-w-6xl mx-auto border-t border-gray-200 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-2xl font-bold tracking-tight">f</div>
          <div className="flex items-center space-x-6">
            <a 
              href="https://x.com/ibrahimansr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
