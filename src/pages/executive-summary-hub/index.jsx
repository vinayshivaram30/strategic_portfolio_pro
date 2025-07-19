import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import ExecutiveBrief from './components/ExecutiveBrief';
import CareerTimeline from './components/CareerTimeline';
import MultiFormatPresentation from './components/MultiFormatPresentation';
import CoreCompetencies from './components/CoreCompetencies';
import IndustryRecognition from './components/IndustryRecognition';
import SmartRecommendations from './components/SmartRecommendations';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ExecutiveSummaryHub = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Executive Summary Hub - Strategic Portfolio Pro';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="FileText" size={24} className="text-secondary" />
              <span className="text-sm font-medium text-secondary uppercase tracking-wide">
                Executive Summary Hub
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Professional Overview
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sophisticated executive assessment center designed for C-level decision makers and executive recruiters. 
              Multi-format presentation with quantified business impact and strategic positioning.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="default"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="bg-conversion-orange hover:bg-conversion-orange/90"
            >
              Download Executive PDF
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Strategic Consultation
            </Button>
            <Button
              variant="ghost"
              size="lg"
              iconName="Play"
              iconPosition="left"
            >
              Watch Video Pitch
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">
        {/* Executive Brief */}
        <section>
          <ExecutiveBrief />
        </section>

        {/* Smart Recommendations */}
        <section>
          <SmartRecommendations />
        </section>

        {/* Multi-Format Presentation */}
        <section>
          <MultiFormatPresentation />
        </section>

        {/* Career Timeline */}
        <section>
          <CareerTimeline />
        </section>

        {/* Core Competencies */}
        <section>
          <CoreCompetencies />
        </section>

        {/* Industry Recognition */}
        <section>
          <IndustryRecognition />
        </section>
      </main>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-white mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready for Strategic Partnership?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Let's discuss how strategic product leadership can drive measurable business outcomes for your organization.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="secondary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              Schedule Executive Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="border-white text-white hover:bg-white/10"
            >
              Discuss Strategic Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">Strategic Portfolio Pro</h3>
                  <p className="text-xs text-muted-foreground">Product Leadership Intelligence</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transforming technical capabilities into market-winning products through strategic precision and quantified results.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Executive Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-secondary executive-transition">
                  Strategic Dashboard
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-secondary executive-transition">
                  Intelligence Center
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-secondary executive-transition">
                  Product Impact Stories
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-secondary executive-transition">
                  Thought Leadership
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Strategic Partnership</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Mail" size={16} />
                  <span>vinay@strategicportfolio.pro</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>Schedule Consultation</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Globe" size={16} />
                  <span>Global Strategic Advisory</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Strategic Portfolio Pro. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-secondary executive-transition">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-secondary executive-transition">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-secondary executive-transition">
                Executive Brief
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExecutiveSummaryHub;