import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickAccessCards = () => {
  const accessCards = [
    {
      id: 1,
      title: "Executive Summary Download",
      description: "Comprehensive professional overview optimized for C-level decision makers and executive recruiters",
      icon: "Download",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      features: [
        "ATS-optimized PDF format",
        "Quantified business impact metrics",
        "Strategic competencies overview",
        "Global experience highlights"
      ],
      cta: "Download PDF",
      ctaIcon: "FileText",
      priority: "high",
      downloadSize: "2.4 MB",
      lastUpdated: "July 2024"
    },
    {
      id: 2,
      title: "Strategic Consultation Booking",
      description: "Schedule executive-level strategic consultation with project scoping and business impact assessment",
      icon: "Calendar",
      iconBg: "bg-conversion-orange/10",
      iconColor: "text-conversion-orange",
      features: [
        "60-minute strategic session",
        "Business impact assessment",
        "Product roadmap review",
        "Implementation planning"
      ],
      cta: "Schedule Consultation",
      ctaIcon: "Calendar",
      priority: "high",
      availability: "Next available: July 22",
      consultationType: "Executive Level"
    },
    {
      id: 3,
      title: "Product Impact Stories",
      description: "Deep-dive case studies demonstrating strategic thinking, execution excellence, and quantified outcomes",
      icon: "BookOpen",
      iconBg: "bg-trust-green/10",
      iconColor: "text-trust-green",
      features: [
        "Interactive case study experiences",
        "Challenge-strategy-execution flows",
        "Quantified business outcomes",
        "Downloadable frameworks"
      ],
      cta: "Explore Case Studies",
      ctaIcon: "ArrowRight",
      priority: "medium",
      totalCases: "12 detailed studies",
      route: "/product-impact-stories"
    },
    {
      id: 4,
      title: "Strategic Intelligence Center",
      description: "Live product analysis, market evaluation frameworks, and competitive intelligence insights",
      icon: "Brain",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      features: [
        "Live product teardown analyses",
        "Market evaluation frameworks",
        "Competitive intelligence insights",
        "Predictive trend analysis"
      ],
      cta: "Access Intelligence",
      ctaIcon: "ExternalLink",
      priority: "medium",
      lastAnalysis: "Updated daily",
      route: "/strategic-intelligence-center"
    },
    {
      id: 5,
      title: "Operating System Frameworks",
      description: "Proprietary strategic methodologies, prioritization matrices, and decision-making frameworks",
      icon: "Settings",
      iconBg: "bg-executive-gray/10",
      iconColor: "text-executive-gray",
      features: [
        "Prioritization matrices",
        "Discovery methodologies",
        "Stakeholder alignment tools",
        "Decision-making processes"
      ],
      cta: "View Frameworks",
      ctaIcon: "Grid",
      priority: "low",
      totalFrameworks: "12 methodologies",
      route: "/operating-system"
    },
    {
      id: 6,
      title: "Executive Network Testimonials",
      description: "C-level endorsements, peer recommendations, and quantified mentorship success stories",
      icon: "Users",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      features: [
        "C-level executive testimonials",
        "Peer recommendations",
        "Mentorship success stories",
        "Quantified outcomes"
      ],
      cta: "View Testimonials",
      ctaIcon: "Star",
      priority: "low",
      testimonialCount: "25+ executives",
      route: "/executive-network"
    }
  ];

  const handleDownload = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = '/assets/documents/vinay-shivaram-executive-summary.pdf';
    link.download = 'Vinay-Shivaram-Executive-Summary.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScheduleConsultation = () => {
    // Mock scheduling functionality - would integrate with Calendly or similar
    window.open('https://calendly.com/vinay-shivaram/strategic-consultation', '_blank');
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-trust-green/10 text-trust-green rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Icon name="Zap" size={16} />
            <span>Quick Access Hub</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Strategic Resources & Engagement
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Instant access to executive summaries, strategic consultations, and comprehensive product impact documentation
          </p>
        </div>

        {/* Priority Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {accessCards.filter(card => card.priority === 'high').map((card, index) => (
            <div 
              key={card.id}
              className="dashboard-card p-8 executive-transition strategic-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 ${card.iconBg} rounded-xl flex items-center justify-center`}>
                  <Icon name={card.icon} size={28} className={card.iconColor} />
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground mb-1">
                    {card.downloadSize || card.availability}
                  </div>
                  <div className="text-xs font-medium text-secondary">
                    {card.lastUpdated || card.consultationType}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-trust-green flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  {card.id === 1 ? (
                    <Button
                      variant="default"
                      fullWidth
                      iconName={card.ctaIcon}
                      iconPosition="left"
                      onClick={handleDownload}
                      className="bg-secondary hover:bg-secondary/90"
                    >
                      {card.cta}
                    </Button>
                  ) : card.id === 2 ? (
                    <Button
                      variant="default"
                      fullWidth
                      iconName={card.ctaIcon}
                      iconPosition="left"
                      onClick={handleScheduleConsultation}
                      className="bg-conversion-orange hover:bg-conversion-orange/90 text-white border-0"
                    >
                      {card.cta}
                    </Button>
                  ) : (
                    <Link to={card.route || '#'}>
                      <Button
                        variant="default"
                        fullWidth
                        iconName={card.ctaIcon}
                        iconPosition="right"
                      >
                        {card.cta}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessCards.filter(card => card.priority !== 'high').map((card, index) => (
            <div 
              key={card.id}
              className="dashboard-card p-6 executive-transition strategic-hover"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${card.iconBg} rounded-lg flex items-center justify-center`}>
                  <Icon name={card.icon} size={20} className={card.iconColor} />
                </div>
                <div className="text-xs text-muted-foreground">
                  {card.totalCases || card.totalFrameworks || card.testimonialCount || card.lastAnalysis}
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </div>

                {/* Key Features */}
                <div className="space-y-1">
                  {card.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-trust-green flex-shrink-0" />
                      <span className="text-xs text-foreground">{feature}</span>
                    </div>
                  ))}
                  <div className="text-xs text-muted-foreground">
                    +{card.features.length - 2} more features
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <Link to={card.route || '#'}>
                    <Button
                      variant="outline"
                      size="sm"
                      fullWidth
                      iconName={card.ctaIcon}
                      iconPosition="right"
                    >
                      {card.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-First Recruiter Section */}
        <div className="mt-12 dashboard-card p-6 bg-gradient-to-r from-secondary/5 to-conversion-orange/5 border-l-4 border-secondary">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Smartphone" size={24} className="text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-primary mb-2">
                Optimized for Executive Recruiters
              </h3>
              <p className="text-muted-foreground mb-4">
                Mobile-first design prioritizes quick assessment and executive summary access for recruiting workflows
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  size="sm"
                  iconName="Download"
                  iconPosition="left"
                  onClick={handleDownload}
                  className="bg-secondary hover:bg-secondary/90"
                >
                  Quick Download
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Share2"
                  iconPosition="left"
                >
                  Share Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessCards;