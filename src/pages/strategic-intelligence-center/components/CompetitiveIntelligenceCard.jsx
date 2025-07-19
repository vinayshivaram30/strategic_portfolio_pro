import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CompetitiveIntelligenceCard = ({ intelligence, onViewComparison }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const getPositionColor = (position) => {
    switch (position) {
      case 'Leader': return 'text-success bg-success/10 border-success/20';
      case 'Challenger': return 'text-conversion-orange bg-conversion-orange/10 border-conversion-orange/20';
      case 'Follower': return 'text-muted-foreground bg-muted/50 border-border';
      case 'Niche': return 'text-secondary bg-secondary/10 border-secondary/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'features', label: 'Features', icon: 'Grid3X3' },
    { id: 'market', label: 'Market', icon: 'Target' }
  ];

  return (
    <div className="dashboard-card p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{intelligence.title}</h3>
          <p className="text-sm text-muted-foreground">{intelligence.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Last Updated:</span>
          <span className="text-sm font-medium text-foreground">{intelligence.lastUpdated}</span>
        </div>
      </div>

      <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium executive-transition ${
              activeTab === tab.id
                ? 'bg-card text-foreground executive-shadow'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            {intelligence.competitors.slice(0, 3).map((competitor, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted">
                    <Image 
                      src={competitor.logo} 
                      alt={`${competitor.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{competitor.name}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPositionColor(competitor.position)}`}>
                      {competitor.position}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Market Share</span>
                    <span className="font-medium text-foreground">{competitor.marketShare}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Growth Rate</span>
                    <span className={`font-medium ${competitor.growthRate.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                      {competitor.growthRate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'features' && (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-sm font-medium text-muted-foreground">Feature</th>
                  {intelligence.competitors.slice(0, 3).map((competitor, index) => (
                    <th key={index} className="text-center py-2 text-sm font-medium text-muted-foreground">
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {intelligence.featureComparison.map((feature, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 text-sm text-foreground">{feature.name}</td>
                    {feature.support.map((supported, idx) => (
                      <td key={idx} className="text-center py-3">
                        <Icon 
                          name={supported ? "CheckCircle" : "XCircle"} 
                          size={16} 
                          className={supported ? "text-success" : "text-muted-foreground"} 
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'market' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-3">Market Positioning</h4>
              <div className="space-y-3">
                {intelligence.marketInsights.positioning.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="ArrowRight" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3">Strategic Opportunities</h4>
              <div className="space-y-3">
                {intelligence.marketInsights.opportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="Target" size={16} className="text-conversion-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-6 border-t border-border">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={16} />
            <span>{intelligence.competitorCount} competitors analyzed</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Database" size={16} />
            <span>{intelligence.dataPoints} data points</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="Download"
            iconPosition="left"
          >
            Export Data
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => onViewComparison(intelligence)}
          >
            Full Comparison
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveIntelligenceCard;