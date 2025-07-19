import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentValueProp, setCurrentValueProp] = useState(0);

  const valuePropositions = [
    {
      id: 1,
      title: "Technical Innovation → Market Reality",
      description: "Transforming complex AI/IoT capabilities into market-winning products that drive measurable business outcomes",
      icon: "Zap"
    },
    {
      id: 2,
      title: "Complex Problems → Scalable Solutions",
      description: "Converting technical challenges into strategic opportunities that scale to 50M+ devices globally",
      icon: "Target"
    },
    {
      id: 3,
      title: "Product Strategy → Business Impact",
      description: "Delivering 30%+ improvements across key metrics while building bridges between innovation and revenue",
      icon: "TrendingUp"
    }
  ];

  const keyMetrics = [
    { label: "Devices Scaled", value: "50M+", icon: "Smartphone" },
    { label: "TTM Reduction", value: "30%+", icon: "Clock" },
    { label: "AI/IoT Products", value: "15+", icon: "Cpu" },
    { label: "Global Markets", value: "25+", icon: "Globe" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueProp((prev) => (prev + 1) % valuePropositions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/95 to-secondary/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Professional Introduction */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm font-medium">
                <Icon name="Award" size={16} />
                <span>Strategic Product Leader</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Vinay Shivaram
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/80 font-medium">
                AI/IoT Product Strategist & Executive Leader
              </p>
            </div>

            {/* Dynamic Metrics Ticker */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {keyMetrics.map((metric, index) => (
                <div 
                  key={metric.label}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center executive-transition hover:bg-white/15"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon name={metric.icon} size={24} className="text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-sm text-white/70">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Rotating Value Propositions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-h-[140px]">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Icon 
                    name={valuePropositions[currentValueProp].icon} 
                    size={24} 
                    className="text-white" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {valuePropositions[currentValueProp].title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {valuePropositions[currentValueProp].description}
                  </p>
                </div>
              </div>
              
              {/* Progress Indicators */}
              <div className="flex space-x-2 mt-4">
                {valuePropositions.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full executive-transition ${
                      index === currentValueProp ? 'bg-secondary w-8' : 'bg-white/30 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Executive Summary
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Strategic Consultation
              </Button>
            </div>
          </div>

          {/* Right Column - Professional Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  {/* Professional Headshot */}
                  <div className="aspect-square rounded-2xl overflow-hidden executive-shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                      alt="Vinay Shivaram - Strategic Product Leader"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Achievement Badge */}
                  <div className="absolute -top-4 -right-4 bg-conversion-orange text-white rounded-full p-3 executive-shadow-lg animate-pulse">
                    <Icon name="Trophy" size={24} />
                  </div>
                  
                  {/* Floating Metrics Card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 executive-shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-trust-green rounded-full flex items-center justify-center">
                        <Icon name="TrendingUp" size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Business Impact</div>
                        <div className="text-lg font-bold text-primary">$50M+ Revenue</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-conversion-orange/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <Icon name="ChevronDown" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;