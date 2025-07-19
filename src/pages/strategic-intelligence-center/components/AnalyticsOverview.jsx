import React from 'react';
import Icon from '../../../components/AppIcon';

const AnalyticsOverview = ({ analytics }) => {
  const getChangeColor = (change) => {
    if (change > 0) return 'text-success';
    if (change < 0) return 'text-destructive';
    return 'text-muted-foreground';
  };

  const getChangeIcon = (change) => {
    if (change > 0) return 'TrendingUp';
    if (change < 0) return 'TrendingDown';
    return 'Minus';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {analytics.map((metric, index) => (
        <div key={index} className="dashboard-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${metric.iconBg}`}>
              <Icon name={metric.icon} size={24} className={metric.iconColor} />
            </div>
            <div className={`flex items-center space-x-1 text-sm ${getChangeColor(metric.change)}`}>
              <Icon name={getChangeIcon(metric.change)} size={16} />
              <span className="font-medium">
                {metric.change > 0 ? '+' : ''}{metric.change}%
              </span>
            </div>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-foreground">{metric.value}</h3>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>vs last month</span>
              <span>{metric.period}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsOverview;