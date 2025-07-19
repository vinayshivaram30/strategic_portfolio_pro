import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedCaseStudy = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "IoT Platform Scaling Revolution",
      category: "Platform Architecture",
      challenge: "Scale IoT platform from 5M to 50M connected devices while maintaining 99.5%+ uptime",
      solution: "Implemented microservices architecture with edge computing and predictive scaling algorithms",
      impact: {
        devices: "50M+",
        uptime: "99.7%",
        cost: "-40%",
        markets: "25+"
      },
      timeline: "18 months",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tags: ["IoT", "Scalability", "Architecture", "Global"],
      metrics: [
        { label: "Device Capacity", before: "5M", after: "50M", improvement: "900%" },
        { label: "System Uptime", before: "94.2%", after: "99.7%", improvement: "+5.5%" },
        { label: "Operational Cost", before: "100%", after: "60%", improvement: "-40%" },
        { label: "Global Markets", before: "8", after: "25", improvement: "+212%" }
      ]
    },
    {
      id: 2,
      title: "AI Product Launch Acceleration",
      category: "Product Strategy",
      challenge: "Reduce AI product time-to-market from 24 months to under 15 months across portfolio",
      solution: "Developed agile AI development framework with continuous integration and automated testing",
      impact: {
        ttm: "8 months",
        products: "15+",
        revenue: "$35M",
        accuracy: "94%"
      },
      timeline: "12 months",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["AI/ML", "Product Management", "Innovation", "Speed"],
      metrics: [
        { label: "Time-to-Market", before: "24 months", after: "8 months", improvement: "-67%" },
        { label: "Product Launches", before: "2/year", after: "15 total", improvement: "+650%" },
        { label: "Revenue Impact", before: "$8M", after: "$35M", improvement: "+337%" },
        { label: "Model Accuracy", before: "78%", after: "94%", improvement: "+16%" }
      ]
    },
    {
      id: 3,
      title: "Cross-Platform Integration Success",
      category: "Technical Leadership",
      challenge: "Integrate 12 disparate systems into unified platform while maintaining zero downtime",
      solution: "Orchestrated phased migration with API-first architecture and comprehensive testing strategy",
      impact: {
        systems: "12",
        downtime: "0 hours",
        efficiency: "+60%",
        users: "2M+"
      },
      timeline: "15 months",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      tags: ["Integration", "Architecture", "Leadership", "Efficiency"],
      metrics: [
        { label: "Systems Unified", before: "12 separate", after: "1 platform", improvement: "100%" },
        { label: "Downtime", before: "48 hours", after: "0 hours", improvement: "-100%" },
        { label: "Operational Efficiency", before: "100%", after: "160%", improvement: "+60%" },
        { label: "User Satisfaction", before: "72%", after: "94%", improvement: "+22%" }
      ]
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-conversion-orange/10 text-conversion-orange rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Icon name="Star" size={16} />
            <span>Featured Case Study Spotlight</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Strategic Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep-dive into major product successes with quantified business impact and strategic methodologies
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-lg font-medium executive-transition ${
                activeCase === index
                  ? 'bg-secondary text-white' :'bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary'
              }`}
            >
              {study.category}
            </button>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="dashboard-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={currentCase.image}
                alt={currentCase.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              
              {/* Floating Timeline Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-primary">{currentCase.timeline}</span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute bottom-4 left-4 bg-secondary text-white rounded-lg px-3 py-2">
                <span className="text-sm font-medium">{currentCase.category}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <div className="space-y-6">
                {/* Title and Tags */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                    {currentCase.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentCase.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Icon name="AlertTriangle" size={16} className="text-conversion-orange mr-2" />
                      Strategic Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{currentCase.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Icon name="Lightbulb" size={16} className="text-secondary mr-2" />
                      Strategic Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{currentCase.solution}</p>
                  </div>
                </div>

                {/* Key Impact Metrics */}
                <div>
                  <h4 className="font-semibold text-primary mb-4 flex items-center">
                    <Icon name="TrendingUp" size={16} className="text-trust-green mr-2" />
                    Business Impact Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(currentCase.impact).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button
                    variant="default"
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="bg-conversion-orange hover:bg-conversion-orange/90 text-white border-0"
                  >
                    View Complete Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Comparison */}
        <div className="mt-8 dashboard-card p-6">
          <h4 className="text-xl font-bold text-primary mb-6 flex items-center">
            <Icon name="BarChart3" size={20} className="text-secondary mr-2" />
            Before vs After Metrics Analysis
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCase.metrics.map((metric, index) => (
              <div key={metric.label} className="space-y-3">
                <h5 className="font-medium text-foreground">{metric.label}</h5>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Before</span>
                    <span className="font-medium text-foreground">{metric.before}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">After</span>
                    <span className="font-medium text-primary">{metric.after}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="text-sm font-medium">Improvement</span>
                    <span className="font-bold text-trust-green">{metric.improvement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;