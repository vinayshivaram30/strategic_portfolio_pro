import React from 'react';
import Icon from '../../../components/AppIcon';

const ExecutiveBrief = () => {
  const executiveMetrics = [
    {
      metric: "30%+",
      description: "Average improvement across key business metrics",
      icon: "TrendingUp",
      color: "text-success"
    },
    {
      metric: "50M+",
      description: "Global devices scaled across product portfolio",
      icon: "Globe",
      color: "text-secondary"
    },
    {
      metric: "99.9%",
      description: "System reliability achieved through strategic architecture",
      icon: "Shield",
      color: "text-trust-green"
    },
    {
      metric: "25%",
      description: "Reduction in time-to-market for AI/IoT products",
      icon: "Clock",
      color: "text-conversion-orange"
    }
  ];

  return (
    <div className="bg-card rounded-xl executive-shadow-lg border border-border overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              Vinay Shivaram
            </h1>
            <p className="text-xl lg:text-2xl font-medium text-white/90 mb-4">
              Strategic Product Leader & AI/IoT Architect
            </p>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Product Translator who transforms complex AI/IoT capabilities into market-winning products and measurable business outcomes. Proven track record of scaling technical innovations to global impact while driving quantifiable results across key business metrics.
            </p>
          </div>
          <div className="hidden lg:block ml-8">
            <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon name="User" size={64} className="text-white/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">Strategic Impact Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {executiveMetrics.map((item, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted executive-transition">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                  <Icon name={item.icon} size={24} className={item.color} />
                </div>
              </div>
              <div className={`text-2xl font-bold mb-2 ${item.color}`}>
                {item.metric}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Value Proposition */}
      <div className="px-8 pb-8">
        <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-lg p-6 border border-secondary/20">
          <h4 className="text-lg font-bold text-foreground mb-3 flex items-center">
            <Icon name="Target" size={20} className="text-secondary mr-2" />
            Strategic Positioning
          </h4>
          <p className="text-foreground leading-relaxed">
            <strong className="text-secondary">Product Translator:</strong> Rare intersection of deep technical expertise and strategic business acumen. Builds bridges between technical possibility and business reality, consistently delivering measurable outcomes that matter to the bottom line. Specializes in transforming AI/IoT innovations into scalable market solutions with proven global impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveBrief;