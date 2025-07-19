import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductTeardownCard = ({ teardown, onViewAnalysis }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'text-success bg-success/10 border-success/20';
      case 'Updated': return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'New': return 'text-conversion-orange bg-conversion-orange/10 border-conversion-orange/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 8.5) return 'text-success';
    if (score >= 7.0) return 'text-secondary';
    if (score >= 5.5) return 'text-conversion-orange';
    return 'text-destructive';
  };

  return (
    <div className="dashboard-card p-6 executive-transition strategic-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
            <Image 
              src={teardown.logo} 
              alt={`${teardown.company} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{teardown.product}</h3>
            <p className="text-sm text-muted-foreground">{teardown.company}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(teardown.status)}`}>
            {teardown.status}
          </span>
          <div className="text-right">
            <div className={`text-lg font-bold ${getScoreColor(teardown.overallScore)}`}>
              {teardown.overallScore}/10
            </div>
            <div className="text-xs text-muted-foreground">Overall</div>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {teardown.description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {teardown.metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className={`text-lg font-bold ${getScoreColor(metric.score)}`}>
              {metric.score}
            </div>
            <div className="text-xs text-muted-foreground">{metric.category}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {teardown.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {isExpanded && (
        <div className="border-t border-border pt-4 mb-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Key Strengths</h4>
              <ul className="space-y-1">
                {teardown.keyStrengths.map((strength, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm">
                    <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Strategic Gaps</h4>
              <ul className="space-y-1">
                {teardown.strategicGaps.map((gap, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm">
                    <Icon name="AlertCircle" size={16} className="text-conversion-orange mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{gap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={16} />
            <span>{teardown.analysisDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={16} />
            <span>{teardown.readTime}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Less' : 'More'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => onViewAnalysis(teardown)}
          >
            Full Analysis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductTeardownCard;