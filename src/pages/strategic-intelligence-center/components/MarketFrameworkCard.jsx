import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MarketFrameworkCard = ({ framework, onExplore }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getComplexityColor = (level) => {
    switch (level) {
      case 'Beginner': return 'text-success bg-success/10 border-success/20';
      case 'Intermediate': return 'text-conversion-orange bg-conversion-orange/10 border-conversion-orange/20';
      case 'Advanced': return 'text-destructive bg-destructive/10 border-destructive/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <div 
      className="dashboard-card p-6 executive-transition strategic-hover cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onExplore(framework)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${framework.iconBg}`}>
            <Icon name={framework.icon} size={24} className={framework.iconColor} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{framework.name}</h3>
            <p className="text-sm text-muted-foreground">{framework.category}</p>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getComplexityColor(framework.complexity)}`}>
            {framework.complexity}
          </span>
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Icon name="Users" size={12} />
            <span>{framework.usageCount}</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {framework.description}
      </p>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">Framework Steps</span>
          <span className="text-foreground font-medium">{framework.steps.length} phases</span>
        </div>
        <div className="flex space-x-1">
          {framework.steps.map((step, index) => (
            <div 
              key={index}
              className={`flex-1 h-2 rounded-full executive-transition ${
                isHovered 
                  ? 'bg-secondary' 
                  : index < 2 ? 'bg-secondary/60' : 'bg-muted'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {framework.applications.slice(0, 3).map((app, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
          >
            {app}
          </span>
        ))}
        {framework.applications.length > 3 && (
          <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
            +{framework.applications.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={16} />
            <span>{framework.timeToComplete}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Download" size={16} />
            <span>{framework.downloadCount}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="BookOpen"
            iconPosition="left"
          >
            Preview
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketFrameworkCard;