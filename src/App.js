import React, { useState } from 'react';
import './App.css';

function App() {
  const [betaMetrics] = useState({
    earlyAdopters: 1247,
    avgSavings: 23,
    dealsCompleted: 89,
    waitlistSize: 2341
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Beta Status Bar */}
      <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-center py-2 text-sm font-medium">
        🚀 BETA LAUNCH: {betaMetrics.earlyAdopters.toLocaleString()} early adopters already saving 23% on recycling costs
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold tracking-tight text-gray-800">Magnetic</span>
                <span className="px-2 py-0.5 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold rounded-full">
                  BETA
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Join Waitlist
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:shadow-lg transition-all">
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Early Adopter Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>⚡</span>
                <span>Early Access Program</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-800">The Future of</span>
                <br />
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  B2B Recycling
                </span>
                <br />
                <span className="text-gray-800">is Here</span>
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed text-gray-600">
                Join 1,200+ forward-thinking companies using AI-powered marketplace to cut recycling costs by 23% and unlock new revenue streams.
              </p>
              
              {/* Social Proof */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">A</div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">B</div>
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">C</div>
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">D</div>
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">E</div>
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                  <p className="text-sm text-gray-600">4.9/5 from early adopters</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all">
                  Start Free Trial
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all">
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Live Metrics Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-xl text-gray-800">Live Beta Metrics</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">LIVE</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-800">{betaMetrics.earlyAdopters.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Early Adopters</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-800">{betaMetrics.avgSavings}%</div>
                  <div className="text-sm text-gray-600">Avg. Savings</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-800">{betaMetrics.dealsCompleted}</div>
                  <div className="text-sm text-gray-600">Deals This Week</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-800">{betaMetrics.waitlistSize.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">On Waitlist</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <p className="text-center text-sm font-medium text-gray-800">
                  🎯 Limited Beta Spots Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Adopter Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Early Adopters Choose Magnetic</h2>
            <p className="text-xl text-gray-600">Be among the first to revolutionize your recycling operations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">First-Mover Advantage</h3>
              <p className="mb-4 text-gray-600">Access premium suppliers before your competitors. Lock in better pricing while others are still using outdated methods.</p>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-3 py-1 rounded-full">
                <span className="text-sm font-bold text-green-600">23% cost reduction</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">AI-Powered Intelligence</h3>
              <p className="mb-4 text-gray-600">Our machine learning algorithms analyze market trends, predict price movements, and optimize your purchasing decisions.</p>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-3 py-1 rounded-full">
                <span className="text-sm font-bold text-green-600">15x faster sourcing</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Exclusive Beta Features</h3>
              <p className="mb-4 text-gray-600">Shape the platform with direct feedback. Get lifetime discounts and priority support as a founding user.</p>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-3 py-1 rounded-full">
                <span className="text-sm font-bold text-green-600">Lifetime 50% discount</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">See what early adopters are saying</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <blockquote className="text-lg mb-6 italic text-gray-800">
                "Magnetic helped us reduce recycling costs by 28% in just 2 months. The AI recommendations are spot-on."
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-800">Sarah Chen</div>
                  <div className="text-sm text-gray-600">Sustainability Director</div>
                  <div className="text-sm font-medium text-green-600">EcoTech Manufacturing</div>
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <span className="text-xs font-bold text-green-600">Early Adopter #23</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <blockquote className="text-lg mb-6 italic text-gray-800">
                "Finally, a platform that understands B2B recycling. The quality verification system saved us from 3 bad deals."
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-800">Marcus Johnson</div>
                  <div className="text-sm text-gray-600">Operations Manager</div>
                  <div className="text-sm font-medium text-green-600">Green Solutions Ltd</div>
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <span className="text-xs font-bold text-green-600">Beta Tester</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <blockquote className="text-lg mb-6 italic text-gray-800">
                "The market intelligence is incredible. We're making data-driven decisions instead of guessing pricing."
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-800">Priya Patel</div>
                  <div className="text-sm text-gray-600">CEO</div>
                  <div className="text-sm font-medium text-green-600">Circular Industries</div>
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <span className="text-xs font-bold text-green-600">Early Adopter #8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOMO CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl font-bold mb-6">Don't Miss the Beta Launch</h2>
          <p className="text-xl mb-8 opacity-90">
            Only 200 beta spots remaining. Join the exclusive community of forward-thinking companies already transforming their recycling operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all">
              Claim Your Beta Spot
            </button>
            <div className="text-sm opacity-75">⏰ Limited time: Beta spots close in 48 hours</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © 2024 Magnetic. Built for the future of B2B recycling.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
