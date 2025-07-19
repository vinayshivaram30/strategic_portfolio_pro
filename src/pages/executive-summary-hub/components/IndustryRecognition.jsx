import React from 'react';
import Icon from '../../../components/AppIcon';

const IndustryRecognition = () => {
  const recognitionItems = [
    {
      category: "Protocol2Product Platform",
      title: "Community Leadership",
      description: "Founded and scaled product management community to 5,000+ active professionals with 85% engagement rate.",
      metrics: [
        { label: "Community Members", value: "5,000+" },
        { label: "Engagement Rate", value: "85%" },
        { label: "Monthly Active Users", value: "3,200+" }
      ],
      icon: "Users",
      color: "bg-secondary"
    },
    {
      category: "Speaking Engagements",
      title: "Industry Thought Leadership",
      description: "Regular keynote speaker at premier product management and AI/IoT conferences, reaching 10,000+ professionals annually.",
      metrics: [
        { label: "Conference Presentations", value: "25+" },
        { label: "Annual Reach", value: "10,000+" },
        { label: "Average Rating", value: "4.8/5" }
      ],
      icon: "Mic",
      color: "bg-conversion-orange"
    },
    {
      category: "Mentorship Program",
      title: "Next-Gen Leader Development",
      description: "Structured mentorship program with measurable career advancement outcomes and industry recognition.",
      metrics: [
        { label: "Mentees Guided", value: "50+" },
        { label: "Promotion Rate", value: "75%" },
        { label: "Salary Increase Avg", value: "40%" }
      ],
      icon: "GraduationCap",
      color: "bg-trust-green"
    }
  ];

  const testimonials = [
    {
      quote: "Vinay\'s strategic approach to product development transformed our AI initiatives from concept to market leader in 18 months.",
      author: "Sarah Chen",
      title: "CEO, TechScale Solutions",
      company: "Fortune 500 Technology Company"
    },
    {
      quote: "His ability to translate complex technical capabilities into clear business value is unmatched in the industry.",
      author: "Michael Rodriguez",
      title: "VP of Product, Global AI Systems",
      company: "Leading AI/IoT Platform"
    },
    {
      quote: "The frameworks Vinay developed are now standard practice across our entire product organization.",
      author: "Jennifer Park",
      title: "Chief Product Officer",
      company: "Enterprise Software Leader"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Recognition Cards */}
      <div className="bg-card rounded-xl executive-shadow-lg border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Industry Recognition & Impact
          </h2>
          <p className="text-muted-foreground">
            Established authority through platform building, thought leadership, and measurable community impact
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {recognitionItems.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border hover:border-secondary/50 executive-transition bg-gradient-to-r from-background to-muted/20"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={item.icon} size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <span className="text-sm font-medium text-secondary uppercase tracking-wide">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-bold text-foreground mt-1 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-foreground leading-relaxed max-w-2xl">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {item.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-lg font-bold text-secondary mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Executive Testimonials */}
      <div className="bg-card rounded-xl executive-shadow-lg border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Executive Testimonials
          </h2>
          <p className="text-muted-foreground">
            C-level endorsements highlighting strategic value and business impact
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gradient-to-br from-muted/30 to-background border border-border hover:border-secondary/30 executive-transition"
              >
                {/* Quote */}
                <div className="mb-4">
                  <Icon name="Quote" size={24} className="text-secondary mb-3" />
                  <p className="text-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-secondary">
                      {testimonial.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryRecognition;