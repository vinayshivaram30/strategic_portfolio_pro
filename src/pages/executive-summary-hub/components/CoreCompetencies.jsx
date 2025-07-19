import React from 'react';
import Icon from '../../../components/AppIcon';

const CoreCompetencies = () => {
  const competencies = [
    {
      category: "AI/ML Integration",
      impact: "40% Faster Feature Development",
      description: "Accelerated product development through strategic AI/ML implementation and cross-functional technical leadership.",
      icon: "Brain",
      color: "bg-blue-500",
      skills: ["Machine Learning Architecture", "AI Product Strategy", "Technical Integration", "Performance Optimization"]
    },
    {
      category: "Cross-Functional Leadership",
      impact: "25% Improved Team Velocity",
      description: "Enhanced team performance through strategic alignment, clear communication, and effective stakeholder management.",
      icon: "Users",
      color: "bg-secondary",
      skills: ["Team Leadership", "Stakeholder Alignment", "Process Optimization", "Strategic Communication"]
    },
    {
      category: "Technical Architecture",
      impact: "99.9% Reliability Achievement",
      description: "Delivered enterprise-grade system reliability through strategic technical architecture and quality frameworks.",
      icon: "Shield",
      color: "bg-trust-green",
      skills: ["System Architecture", "Scalability Design", "Quality Assurance", "Performance Engineering"]
    },
    {
      category: "Strategic Planning",
      impact: "30% Market Penetration Growth",
      description: "Drove market expansion through data-driven strategic planning and competitive positioning analysis.",
      icon: "Target",
      color: "bg-conversion-orange",
      skills: ["Market Analysis", "Strategic Roadmapping", "Competitive Intelligence", "Business Development"]
    },
    {
      category: "Global Product Scaling",
      impact: "50M+ Devices Reached",
      description: "Successfully scaled product portfolio to global markets with localization and infrastructure optimization.",
      icon: "Globe",
      color: "bg-purple-500",
      skills: ["Global Strategy", "Localization", "Infrastructure Scaling", "Market Adaptation"]
    },
    {
      category: "Team Development",
      impact: "90% Talent Retention Rate",
      description: "Built high-performing teams through mentorship, career development, and strategic talent management.",
      icon: "GraduationCap",
      color: "bg-indigo-500",
      skills: ["Mentorship", "Career Development", "Talent Management", "Knowledge Transfer"]
    }
  ];

  return (
    <div className="bg-card rounded-xl executive-shadow-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Core Competencies as Business Multipliers
        </h2>
        <p className="text-muted-foreground">
          Strategic capabilities that drive measurable business outcomes and competitive advantage
        </p>
      </div>

      {/* Competencies Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border hover:border-secondary/50 executive-transition bg-gradient-to-br from-background to-muted/30"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg ${competency.color} flex items-center justify-center`}>
                    <Icon name={competency.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-secondary executive-transition">
                      {competency.category}
                    </h3>
                    <p className="text-sm font-medium text-success">
                      {competency.impact}
                    </p>
                  </div>
                </div>
                <Icon name="ArrowUpRight" size={20} className="text-muted-foreground group-hover:text-secondary executive-transition" />
              </div>

              {/* Description */}
              <p className="text-foreground leading-relaxed mb-4">
                {competency.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {competency.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full group-hover:bg-secondary/10 group-hover:text-secondary executive-transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="p-6 border-t border-border bg-gradient-to-r from-muted/30 to-background">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary mb-1">6+</div>
            <div className="text-sm text-muted-foreground">Years Strategic Leadership</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-trust-green mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Cross-Functional Teams Led</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-conversion-orange mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Professionals Mentored</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Strategic Initiative Success</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreCompetencies;