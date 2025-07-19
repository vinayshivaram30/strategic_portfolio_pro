import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import BusinessImpactDashboard from './components/BusinessImpactDashboard';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import Protocol2ProductShowcase from './components/Protocol2ProductShowcase';
import QuickAccessCards from './components/QuickAccessCards';

const StrategicDashboardHomepage = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Strategic Dashboard - Vinay Shivaram | AI/IoT Product Strategist';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Executive command center showcasing strategic product leadership impact across 50M+ devices, 30%+ TTM reduction, and $95M+ revenue generation in AI/IoT markets.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section with Professional Headshot & Dynamic Metrics */}
        <HeroSection />
        
        {/* Interactive Business Impact Dashboard */}
        <BusinessImpactDashboard />
        
        {/* Featured Case Study Spotlight */}
        <FeaturedCaseStudy />
        
        {/* Protocol2Product Integration */}
        <Protocol2ProductShowcase />
        
        {/* Quick Access Cards */}
        <QuickAccessCards />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-conversion-orange rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">VS</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Vinay Shivaram</h3>
                  <p className="text-sm text-white/70">Strategic Product Leader</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Transforming technical innovation into market-winning products with quantified business impact across global markets.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Strategic Resources</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-white/70 hover:text-white executive-transition">Executive Summary</a>
                <a href="#" className="block text-white/70 hover:text-white executive-transition">Case Studies</a>
                <a href="#" className="block text-white/70 hover:text-white executive-transition">Strategic Frameworks</a>
                <a href="#" className="block text-white/70 hover:text-white executive-transition">Protocol2Product</a>
              </div>
            </div>
            
            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Strategic Partnership</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>Executive Consultation Available</p>
                <p>Global Remote Collaboration</p>
                <p>Speaking Engagements</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Vinay Shivaram. Strategic Product Leadership Excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StrategicDashboardHomepage;