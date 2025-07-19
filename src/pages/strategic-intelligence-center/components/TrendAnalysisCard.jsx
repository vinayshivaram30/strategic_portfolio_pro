import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrendAnalysisCard = ({ trend, onViewDetails }) => {
  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'Medium': return 'text-conversion-orange bg-conversion-orange/10 border-conversion-orange/20';
      case 'Low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getTimelineColor = (timeline) => {
    switch (timeline) {
      case 'Immediate': return 'text-destructive';
      case 'Short-term': return 'text-conversion-orange';
      case 'Medium-term': return 'text-secondary';
      case 'Long-term': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="dashboard-card p-6 executive-transition strategic-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${trend.iconBg}`}>
            <Icon name={trend.icon} size={24} className={trend.iconColor} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{trend.title}</h3>
            <p className="text-sm text-muted-foreground">{trend.sector}</p>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getImpactColor(trend.impact)}`}>
            {trend.impact} Impact
          </span>
          <div className={`text-sm font-medium ${getTimelineColor(trend.timeline)}`}>
            {trend.timeline}
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        {trend.description}
      </p>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">Market Opportunity</span>
          <span className="text-foreground font-bold">{trend.marketSize}</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-secondary h-2 rounded-full executive-transition"
            style={{ width: `${trend.opportunityScore}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Key Drivers</h4>
          <div className="flex flex-wrap gap-2">
            {trend.keyDrivers.map((driver, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-md border border-secondary/20"
              >
                {driver}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Strategic Recommendations</h4>
          <ul className="space-y-1">
            {trend.recommendations.slice(0, 2).map((rec, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm">
                <Icon name="ArrowRight" size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="TrendingUp" size={16} />
            <span>{trend.growthRate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={16} />
            <span>{trend.lastUpdated}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="Download"
            iconPosition="left"
          >
            Brief
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => onViewDetails(trend)}
          >
            Full Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrendAnalysisCard;