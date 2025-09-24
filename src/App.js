import React, { useState, useEffect } from 'react';
import './App.css';

const MagneticApp = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [user, setUser] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [betaMetrics, setBetaMetrics] = useState({
        earlyAdopters: 1247,
        avgSavings: 23,
        dealsCompleted: 89,
        waitlistSize: 2341
    });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        
        // Simulate live metrics for early adopters
        const metricsInterval = setInterval(() => {
            setBetaMetrics(prev => ({
                ...prev,
                earlyAdopters: prev.earlyAdopters + Math.floor(Math.random() * 3),
                dealsCompleted: prev.dealsCompleted + (Math.random() > 0.7 ? 1 : 0)
            }));
        }, 8000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(metricsInterval);
        };
    }, []);

    // Icons optimized for early adopter messaging
    const Icons = {
        Lightning: ({ className }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        Trending: ({ className }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        Rocket: ({ className }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        Crown: ({ className }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l6 6 6-6-3 12H8L5 3z" />
            </svg>
        ),
        Users: ({ className }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        Star: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
        Brain: ({ className }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        )
    };

    const Navigation = () => (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrollY > 50 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-3">
                            {/* Logo placeholder - replace with your actual logo */}
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">M</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold tracking-tight" style={{color: '#306178'}}>Magnetic</span>
                                <span className="px-2 py-0.5 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold rounded-full animate-pulse">
                                    BETA
                                </span>
                            </div>
                        </div>
                        
                        <div className="hidden lg:flex space-x-8 ml-8">
                            {[
                                { name: 'Platform', page: 'dashboard' },
                                { name: 'For Suppliers', page: 'suppliers' },
                                { name: 'For Buyers', page: 'buyers' },
                                { name: 'Success Stories', page: 'success' }
                            ].map(item => (
                                <button 
                                    key={item.page}
                                    onClick={() => setCurrentPage(item.page)}
                                    className={`transition-colors text-sm font-medium ${
                                        currentPage === item.page 
                                            ? 'font-bold' 
                                            : 'hover:opacity-80'
                                    }`}
                                    style={{
                                        color: currentPage === item.page ? '#4F8A6D' : '#306178'
                                    }}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <Icons.Crown className="w-4 h-4" style={{color: '#4F8A6D'}} />
                                    <span className="text-sm font-medium" style={{color: '#306178'}}>Early Adopter</span>
                                </div>
                                <button 
                                    onClick={() => setUser(null)}
                                    className="text-gray-600 hover:text-gray-800 text-sm"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <button 
                                    onClick={() => setCurrentPage('waitlist')}
                                    className="text-sm font-medium hover:opacity-80" 
                                    style={{color: '#306178'}}
                                >
                                    Join Waitlist
                                </button>
                                <button 
                                    onClick={() => setUser({name: 'Alex Chen', company: 'GreenTech Solutions', badge: 'Early Adopter #127'})}
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:shadow-lg transition-all"
                                >
                                    Get Early Access
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );

    const Dashboard = () => (
        <div className="bg-white min-h-screen">
            {/* Beta Status Bar */}
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-center py-2 text-sm font-medium">
                🚀 BETA LAUNCH: {betaMetrics.earlyAdopters.toLocaleString()} early adopters already saving 23% on recycling costs
            </div>

            {/* Hero Section - Early Adopter Focused */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
                <div className="absolute top-20 right-10 opacity-10">
                    <Icons.Rocket className="w-96 h-96" style={{color: '#4F8A6D'}} />
                </div>
                
                <div className="relative z-10 max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            {/* Early Adopter Badge */}
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Icons.Lightning className="w-4 h-4" />
                                <span>Early Access Program</span>
                            </div>
                            
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                <span style={{color: '#306178'}}>The Future of</span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                    B2B Recycling
                                </span>
                                <br />
                                <span style={{color: '#306178'}}>is Here</span>
                            </h1>
                            
                            <p className="text-xl mb-8 leading-relaxed" style={{color: '#8FB1B7'}}>
                                Join 1,200+ forward-thinking companies using AI-powered marketplace to cut recycling costs by 23% and unlock new revenue streams.
                            </p>
                            
                            {/* Social Proof */}
                            <div className="flex items-center space-x-6 mb-8">
                                <div className="flex -space-x-2">
                                    {[1,2,3,4,5].map(i => (
                                        <div key={i} className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center space-x-1 mb-1">
                                        {[1,2,3,4,5].map(i => (
                                            <Icons.Star key={i} className="w-4 h-4 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm" style={{color: '#8FB1B7'}}>4.9/5 from early adopters</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all">
                                    Start Free Trial
                                </button>
                                <button className="border-2 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all" style={{borderColor: '#4F8A6D', color: '#4F8A6D'}}>
                                    Watch Demo
                                </button>
                            </div>
                        </div>
                        
                        {/* Live Metrics Dashboard */}
                        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-xl" style={{color: '#306178'}}>Live Beta Metrics</h3>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium" style={{color: '#4F8A6D'}}>LIVE</span>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 rounded-xl" style={{backgroundColor: '#4F8A6D10'}}>
                                    <Icons.Users className="w-8 h-8 mx-auto mb-2" style={{color: '#4F8A6D'}} />
                                    <div className="text-2xl font-bold" style={{color: '#306178'}}>{betaMetrics.earlyAdopters.toLocaleString()}</div>
                                    <div className="text-sm" style={{color: '#8FB1B7'}}>Early Adopters</div>
                                </div>
                                <div className="text-center p-4 rounded-xl" style={{backgroundColor: '#4F8A6D10'}}>
                                    <Icons.Trending className="w-8 h-8 mx-auto mb-2" style={{color: '#4F8A6D'}} />
                                    <div className="text-2xl font-bold" style={{color: '#306178'}}>{betaMetrics.avgSavings}%</div>
                                    <div className="text-sm" style={{color: '#8FB1B7'}}>Avg. Savings</div>
                                </div>
                                <div className="text-center p-4 rounded-xl" style={{backgroundColor: '#4F8A6D10'}}>
                                    <Icons.Lightning className="w-8 h-8 mx-auto mb-2" style={{color: '#4F8A6D'}} />
                                    <div className="text-2xl font-bold" style={{color: '#306178'}}>{betaMetrics.dealsCompleted}</div>
                                    <div className="text-sm" style={{color: '#8FB1B7'}}>Deals This Week</div>
                                </div>
                                <div className="text-center p-4 rounded-xl" style={{backgroundColor: '#4F8A6D10'}}>
                                    <Icons.Crown className="w-8 h-8 mx-auto mb-2" style={{color: '#4F8A6D'}} />
                                    <div className="text-2xl font-bold" style={{color: '#306178'}}>{betaMetrics.waitlistSize.toLocaleString()}</div>
                                    <div className="text-sm" style={{color: '#8FB1B7'}}>On Waitlist</div>
                                </div>
                            </div>
                            
                            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                                <p className="text-center text-sm font-medium" style={{color: '#306178'}}>
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
                        <h2 className="text-4xl font-bold mb-4" style={{color: '#306178'}}>Why Early Adopters Choose Magnetic</h2>
                        <p className="text-xl" style={{color: '#8FB1B7'}}>Be among the first to revolutionize your recycling operations</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Icons.Lightning,
                                title: 'First-Mover Advantage',
                                description: 'Access premium suppliers before your competitors. Lock in better pricing while others are still using outdated methods.',
                                benefit: '23% cost reduction',
                                color: 'from-yellow-400 to-orange-500'
                            },
                            {
                                icon: Icons.Brain,
                                title: 'AI-Powered Intelligence',
                                description: 'Our machine learning algorithms analyze market trends, predict price movements, and optimize your purchasing decisions.',
                                benefit: '15x faster sourcing',
                                color: 'from-blue-400 to-purple-500'
                            },
                            {
                                icon: Icons.Crown,
                                title: 'Exclusive Beta Features',
                                description: 'Shape the platform with direct feedback. Get lifetime discounts and priority support as a founding user.',
                                benefit: 'Lifetime 50% discount',
                                color: 'from-purple-400 to-pink-500'
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-4" style={{color: '#306178'}}>{feature.title}</h3>
                                <p className="mb-4" style={{color: '#8FB1B7'}}>{feature.description}</p>
                                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-3 py-1 rounded-full">
                                    <Icons.Trending className="w-4 h-4" style={{color: '#4F8A6D'}} />
                                    <span className="text-sm font-bold" style={{color: '#4F8A6D'}}>{feature.benefit}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof from Early Adopters */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4" style={{color: '#306178'}}>Trusted by Industry Leaders</h2>
                        <p className="text-xl" style={{color: '#8FB1B7'}}>See what early adopters are saying</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Magnetic helped us reduce recycling costs by 28% in just 2 months. The AI recommendations are spot-on.",
                                author: "Sarah Chen",
                                company: "EcoTech Manufacturing",
                                role: "Sustainability Director",
                                badge: "Early Adopter #23"
                            },
                            {
                                quote: "Finally, a platform that understands B2B recycling. The quality verification system saved us from 3 bad deals.",
                                author: "Marcus Johnson",
                                company: "Green Solutions Ltd",
                                role: "Operations Manager", 
                                badge: "Beta Tester"
                            },
                            {
                                quote: "The market intelligence is incredible. We're making data-driven decisions instead of guessing pricing.",
                                author: "Priya Patel",
                                company: "Circular Industries",
                                role: "CEO",
                                badge: "Early Adopter #8"
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                                <div className="flex items-center space-x-1 mb-4">
                                    {[1,2,3,4,5].map(j => (
                                        <Icons.Star key={j} className="w-5 h-5 text-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-lg mb-6 italic" style={{color: '#306178'}}>
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-bold" style={{color: '#306178'}}>{testimonial.author}</div>
                                        <div className="text-sm" style={{color: '#8FB1B7'}}>{testimonial.role}</div>
                                        <div className="text-sm font-medium" style={{color: '#4F8A6D'}}>{testimonial.company}</div>
                                    </div>
                                    <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                                        <span className="text-xs font-bold" style={{color: '#4F8A6D'}}>{testimonial.badge}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOMO CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <Icons.Rocket className="w-16 h-16 mx-auto mb-6 animate-bounce" />
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
        </div>
    );

    const SuccessStories = () => (
        <div className="bg-white min-h-screen pt-20">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6" style={{color: '#306178'}}>Success Stories</h1>
                    <p className="text-xl" style={{color: '#8FB1B7'}}>Real results from our early adopter community</p>
                </div>
                
                <div className="text-center py-20">
                    <Icons.Crown className="w-16 h-16 mx-auto mb-4" style={{color: '#8FB1B7'}} />
                    <h3 className="text-2xl font-bold mb-4" style={{color: '#306178'}}>More Success Stories Coming Soon</h3>
                    <p style={{color: '#8FB1B7'}}>Our early adopters are already seeing incredible results. Full case studies launching soon.</p>
                </div>
            </div>
        </div>
    );

    const WaitlistPage = () => (
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen pt-20 flex items-center justify-center">
            <div className="max-w-md mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
                    <Icons.Rocket className="w-16 h-16 mx-auto mb-6" style={{color: '#4F8A6D'}} />
                    <h2 className="text-3xl font-bold mb-4" style={{color: '#306178'}}>Join the Waitlist</h2>
                    <p className="mb-6" style={{color: '#8FB1B7'}}>Be the first to know when we open more beta spots</p>
                    
                    <form name="waitlist" method="POST" data-netlify="true" className="space-y-4 mb-6">
                        <input type="hidden" name="form-name" value="waitlist" />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Your email address"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input 
                            type="text" 
                            name="company"
                            placeholder="Company name"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button 
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                        >
                            Join Waitlist
                        </button>
                    </form>
                    
                    <p className="text-sm mt-4" style={{color: '#8FB1B7'}}>
                        {betaMetrics.waitlistSize.toLocaleString()} people ahead of you
                    </p>
                </div>
            </div>
        </div>
    );

    const renderPage = () => {
        switch(currentPage) {
            case 'success':
                return <SuccessStories />;
            case 'waitlist':
                return <WaitlistPage />;
            case 'suppliers':
            case 'buyers':
                return <div className="bg-white min-h-screen pt-20 flex items-center justify-center">
                    <div className="text-center">
                        <Icons.Brain className="w-16 h-16 mx-auto mb-4" style={{color: '#8FB1B7'}} />
                        <h2 className="text-2xl font-bold mb-4" style={{color: '#306178'}}>Coming Soon</h2>
                        <p style={{color: '#8FB1B7'}}>This section is being crafted for our beta launch.</p>
                    </div>
                </div>;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            {renderPage()}
            
            {/* Footer */}
            <footer className="bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-sm" style={{color: '#8FB1B7'}}>
                        © 2024 Magnetic. Built for the future of B2B recycling.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default MagneticApp;
