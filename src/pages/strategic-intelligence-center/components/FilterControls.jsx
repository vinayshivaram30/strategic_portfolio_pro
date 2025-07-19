import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FilterControls = ({ filters, onFilterChange, onResetFilters }) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'ai-ml', label: 'AI/ML Platforms' },
    { value: 'iot', label: 'IoT Solutions' },
    { value: 'saas', label: 'SaaS Products' },
    { value: 'fintech', label: 'FinTech' },
    { value: 'healthtech', label: 'HealthTech' }
  ];

  const industryOptions = [
    { value: 'all', label: 'All Industries' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'consumer', label: 'Consumer' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'manufacturing', label: 'Manufacturing' }
  ];

  const timeframeOptions = [
    { value: 'all', label: 'All Time' },
    { value: 'week', label: 'Last Week' },
    { value: 'month', label: 'Last Month' },
    { value: 'quarter', label: 'Last Quarter' },
    { value: 'year', label: 'Last Year' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'score-high', label: 'Highest Score' },
    { value: 'score-low', label: 'Lowest Score' },
    { value: 'alphabetical', label: 'Alphabetical' }
  ];

  return (
    <div className="dashboard-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={20} className="text-secondary" />
          <h3 className="text-lg font-semibold text-foreground">Intelligence Filters</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={onResetFilters}
        >
          Reset Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select
          label="Category"
          options={categoryOptions}
          value={filters.category}
          onChange={(value) => onFilterChange('category', value)}
          className="w-full"
        />

        <Select
          label="Industry"
          options={industryOptions}
          value={filters.industry}
          onChange={(value) => onFilterChange('industry', value)}
          className="w-full"
        />

        <Select
          label="Timeframe"
          options={timeframeOptions}
          value={filters.timeframe}
          onChange={(value) => onFilterChange('timeframe', value)}
          className="w-full"
        />

        <Select
          label="Sort By"
          options={sortOptions}
          value={filters.sortBy}
          onChange={(value) => onFilterChange('sortBy', value)}
          className="w-full"
        />
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Database" size={16} />
            <span>{filters.resultCount} results found</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={16} />
            <span>Updated {filters.lastUpdate}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="Download"
            iconPosition="left"
          >
            Export Results
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Bell"
            iconPosition="left"
          >
            Set Alerts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;