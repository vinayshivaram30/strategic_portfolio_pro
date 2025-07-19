import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SmartRecommendations = () => {
  const [userType, setUserType] = useState('recruiter');
  const [viewingBehavior, setViewingBehavior] = useState({
    timeSpent: 0,
    sectionsViewed: [],
    downloadAttempts: 0
  });

  // Mock user behavior tracking
  useEffect(() => {
    const timer = setInterval(() => {
      setViewingBehavior(prev => ({
        ...prev,
        timeSpent: prev.timeSpent + 1
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const recommendations = {
    recruiter: [
      {
        title: "ATS-Optimized Executive Resume",
        description: "Traditional format perfect for client presentations and ATS systems",
        action: "Download PDF",
        icon: "FileText",
        priority: "high",
        reason: "Optimized for recruiter workflows"
      },
      {
        title: "Quick Assessment Metrics",
        description: "Key performance indicators for rapid candidate evaluation",
        action: "View Metrics",
        icon: "BarChart3",
        priority: "high",
        reason: "Essential for client briefings"
      },
      {
        title: "Video Elevator Pitch",
        description: "2-minute strategic value proposition for client preview",
        action: "Watch Video",
        icon: "Play",
        priority: "medium",
        reason: "Enhances candidate presentation"
      }
    ],
    hiring_manager: [
      {
        title: "Strategic Framework Library",
        description: "Detailed methodologies and decision-making processes",
        action: "Explore Frameworks",
        icon: "Layers",
        priority: "high",
        reason: "Evaluate strategic thinking approach"
      },
      {
        title: "Product Impact Case Studies",
        description: "Deep-dive analysis of business outcomes and execution",
        action: "Read Case Studies",
        icon: "BookOpen",
        priority: "high",
        reason: "Assess real-world impact"
      },
      {
        title: "Technical Competency Overview",
        description: "AI/ML and IoT expertise with business application examples",
        action: "View Technical Skills",
        icon: "Code",
        priority: "medium",
        reason: "Understand technical depth"
      }
    ],
    executive: [
      {
        title: "Strategic Consultation Overview",
        description: "High-level partnership opportunities and engagement models",
        action: "Schedule Discussion",
        icon: "Calendar",
        priority: "high",
        reason: "Direct executive engagement"
      },
      {
        title: "Business Impact Metrics",
        description: "Quantified results across revenue, efficiency, and scaling",
        action: "Review Metrics",
        icon: "TrendingUp",
        priority: "high",
        reason: "Focus on bottom-line impact"
      },
      {
        title: "Industry Intelligence Insights",
        description: "Market analysis and competitive positioning expertise",
        action: "Access Intelligence",
        icon: "Brain",
        priority: "medium",
        reason: "Strategic market perspective"
      }
    ]
  };

  const userTypeOptions = [
    { id: 'recruiter', name: 'Executive Recruiter', icon: 'Search' },
    { id: 'hiring_manager', name: 'Hiring Manager', icon: 'Users' },
    { id: 'executive', name: 'C-Level Executive', icon: 'Crown' }
  ];

  const currentRecommendations = recommendations[userType] || recommendations.recruiter;

  const handleRecommendationClick = (recommendation) => {
    setViewingBehavior(prev => ({
      ...prev,
      sectionsViewed: [...prev.sectionsViewed, recommendation.title]
    }));
  };

  return (
    <div className="bg-card rounded-xl executive-shadow-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-foreground">
            Smart Content Recommendations
          </h2>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Zap" size={16} />
            <span>Personalized Experience</span>
          </div>
        </div>
        <p className="text-muted-foreground">
          Tailored content based on your role and viewing behavior
        </p>
      </div>

      {/* User Type Selection */}
      <div className="p-6 border-b border-border bg-muted/20">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="User" size={20} className="text-secondary" />
          <span className="font-medium text-foreground">I am a:</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {userTypeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setUserType(option.id)}
              className={`p-3 rounded-lg border-2 text-left executive-transition ${
                userType === option.id
                  ? 'border-secondary bg-secondary/5 text-secondary' :'border-border hover:border-secondary/50 text-foreground'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name={option.icon} size={18} />
                <span className="font-medium">{option.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-6">
        <div className="space-y-4">
          {currentRecommendations.map((recommendation, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 executive-transition cursor-pointer ${
                recommendation.priority === 'high' ?'border-secondary/30 bg-secondary/5 hover:border-secondary/50' :'border-border hover:border-secondary/30'
              }`}
              onClick={() => handleRecommendationClick(recommendation)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    recommendation.priority === 'high' ?'bg-secondary text-white' :'bg-muted text-muted-foreground'
                  }`}>
                    <Icon name={recommendation.icon} size={20} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-bold text-foreground">
                        {recommendation.title}
                      </h3>
                      {recommendation.priority === 'high' && (
                        <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      {recommendation.description}
                    </p>
                    <p className="text-xs text-secondary italic">
                      {recommendation.reason}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="ml-4"
                >
                  {recommendation.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Analytics */}
      <div className="p-6 border-t border-border bg-gradient-to-r from-muted/30 to-background">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-secondary mb-1">
              {Math.floor(viewingBehavior.timeSpent / 60)}:{(viewingBehavior.timeSpent % 60).toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-muted-foreground">Time Engaged</div>
          </div>
          <div>
            <div className="text-lg font-bold text-trust-green mb-1">
              {viewingBehavior.sectionsViewed.length}
            </div>
            <div className="text-xs text-muted-foreground">Sections Viewed</div>
          </div>
          <div>
            <div className="text-lg font-bold text-conversion-orange mb-1">
              {userType === 'recruiter' ? '95%' : userType === 'hiring_manager' ? '88%' : '92%'}
            </div>
            <div className="text-xs text-muted-foreground">Match Score</div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary mb-1">
              {userType === 'recruiter' ? 'High' : userType === 'hiring_manager' ? 'Very High' : 'Excellent'}
            </div>
            <div className="text-xs text-muted-foreground">Fit Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartRecommendations;