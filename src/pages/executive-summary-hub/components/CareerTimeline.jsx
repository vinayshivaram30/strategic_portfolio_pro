import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CareerTimeline = () => {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const careerPhases = [
    {
      period: "2018-2020",
      title: "Technical Foundation",
      role: "Senior Software Engineer → Technical Lead",
      company: "IoT Innovation Labs",
      description: "Built foundational expertise in AI/ML systems and IoT architecture. Led technical teams of 8+ engineers while developing core competencies in cross-functional collaboration.",
      achievements: [
        "Architected scalable IoT platform serving 1M+ devices",
        "Reduced system latency by 45% through optimization",
        "Mentored 12 junior engineers with 90% retention rate"
      ],
      icon: "Code",
      color: "bg-blue-500"
    },
    {
      period: "2020-2022",
      title: "Strategic Transition",
      role: "Product Manager → Senior Product Manager",
      company: "TechScale Solutions",
      description: "Pivotal transition from technical execution to strategic product leadership. Developed business acumen while maintaining technical depth, establishing the 'Product Translator' approach.",
      achievements: [
        "Launched 3 AI-powered products generating $2.5M ARR",
        "Improved cross-functional team velocity by 35%",
        "Established product discovery framework adopted company-wide"
      ],
      icon: "Zap",
      color: "bg-secondary"
    },
    {
      period: "2022-2024",
      title: "Strategic Leadership",
      role: "Principal Product Manager → Director of Product",
      company: "Global AI Systems",
      description: "Scaled strategic impact across multiple product lines and global markets. Proven ability to drive business outcomes while managing complex technical initiatives at enterprise scale.",
      achievements: [
        "Scaled product portfolio to 50M+ global devices",
        "Achieved 99.9% system reliability across all products",
        "Reduced average time-to-market by 30% through strategic processes"
      ],
      icon: "Crown",
      color: "bg-conversion-orange"
    },
    {
      period: "2024-Present",
      title: "Industry Authority",
      role: "Strategic Product Leader & Thought Leader",
      company: "Protocol2Product Platform",
      description: "Established industry authority through Protocol2Product platform while providing strategic consultation to C-level executives. Mentoring next generation of product leaders.",
      achievements: [
        "Built Protocol2Product community of 5,000+ product professionals",
        "Delivered strategic consultation to 15+ C-level executives",
        "Mentored 50+ product managers with measurable career advancement"
      ],
      icon: "Trophy",
      color: "bg-trust-green"
    }
  ];

  return (
    <div className="bg-card rounded-xl executive-shadow-lg border border-border p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">Career Evolution Timeline</h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Clock" size={16} />
          <span>6+ Years Strategic Growth</span>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="flex flex-wrap gap-2 mb-8">
        {careerPhases.map((phase, index) => (
          <button
            key={index}
            onClick={() => setSelectedPhase(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium executive-transition ${
              selectedPhase === index
                ? 'bg-secondary text-white' :'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {phase.period}
          </button>
        ))}
      </div>

      {/* Selected Phase Details */}
      <div className="space-y-6">
        {careerPhases.map((phase, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              selectedPhase === index ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}
          >
            <div className="flex items-start space-x-6">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-full ${phase.color} flex items-center justify-center flex-shrink-0`}>
                <Icon name={phase.icon} size={24} className="text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-lg text-secondary font-medium mb-1">
                      {phase.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {phase.company} • {phase.period}
                    </p>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed mb-6">
                  {phase.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {phase.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg"
                      >
                        <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Progress Indicator */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Technical Foundation</span>
          <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-secondary via-conversion-orange to-trust-green transition-all duration-500"
              style={{ width: `${((selectedPhase + 1) / careerPhases.length) * 100}%` }}
            />
          </div>
          <span>Industry Authority</span>
        </div>
      </div>
    </div>
  );
};

export default CareerTimeline;