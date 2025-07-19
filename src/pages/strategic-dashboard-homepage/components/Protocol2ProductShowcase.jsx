import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const Protocol2ProductShowcase = () => {
  const thoughtLeadershipContent = [
    {
      id: 1,
      title: "The Future of AI-Driven IoT Ecosystems",
      excerpt: "Exploring how artificial intelligence is reshaping IoT device management and creating new opportunities for scalable product architectures.",
      category: "AI Strategy",
      readTime: "8 min read",
      engagement: {
        views: "12.5K",
        shares: "340",
        comments: "89"
      },
      publishDate: "2024-07-15",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      tags: ["AI", "IoT", "Strategy", "Innovation"]
    },
    {
      id: 2,
      title: "Strategic Product Roadmapping in Uncertain Markets",
      excerpt: "A comprehensive framework for building resilient product strategies that adapt to market volatility while maintaining strategic focus.",
      category: "Product Strategy",
      readTime: "12 min read",
      engagement: {
        views: "18.2K",
        shares: "520",
        comments: "156"
      },
      publishDate: "2024-07-10",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Strategy", "Roadmapping", "Leadership", "Planning"]
    },
    {
      id: 3,
      title: "Cross-Functional Team Alignment at Scale",
      excerpt: "Proven methodologies for maintaining strategic alignment across engineering, product, and business teams in high-growth environments.",
      category: "Leadership",
      readTime: "10 min read",
      engagement: {
        views: "15.8K",
        shares: "425",
        comments: "112"
      },
      publishDate: "2024-07-05",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      tags: ["Leadership", "Teams", "Alignment", "Scale"]
    }
  ];

  const platformStats = {
    totalReads: "150K+",
    subscribers: "8.5K",
    articles: "45+",
    engagement: "94%"
  };

  const mentorshipImpact = [
    {
      metric: "Product Managers Mentored",
      value: "25+",
      description: "Senior and junior PMs guided to next career level"
    },
    {
      metric: "Career Promotions",
      value: "18",
      description: "Direct reports and mentees promoted to leadership roles"
    },
    {
      metric: "Strategic Frameworks Shared",
      value: "12",
      description: "Proprietary methodologies adopted by teams globally"
    },
    {
      metric: "Industry Speaking Events",
      value: "30+",
      description: "Conference presentations and strategic workshops delivered"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Icon name="BookOpen" size={16} />
            <span>Protocol2Product Platform</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Thought Leadership & Industry Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic insights, mentorship impact, and industry authority through Protocol2Product content platform
          </p>
        </div>

        {/* Platform Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(platformStats).map(([key, value], index) => (
            <div 
              key={key}
              className="dashboard-card p-6 text-center executive-transition strategic-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-secondary mb-2">{value}</div>
              <div className="text-sm font-medium text-foreground capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {thoughtLeadershipContent.map((article, index) => (
            <div 
              key={article.id}
              className="dashboard-card overflow-hidden executive-transition strategic-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover executive-transition hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-secondary text-white rounded-lg px-3 py-1">
                  <span className="text-sm font-medium">{article.category}</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-primary">{article.readTime}</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary leading-tight hover:text-secondary executive-transition">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Engagement Metrics */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={14} />
                        <span>{article.engagement.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Share2" size={14} />
                        <span>{article.engagement.shares}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={14} />
                        <span>{article.engagement.comments}</span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(article.publishDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mentorship Impact Section */}
        <div className="dashboard-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center">
              <Icon name="Users" size={24} className="text-secondary mr-2" />
              Mentorship & Industry Impact
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quantified impact through strategic mentorship, industry speaking, and knowledge sharing initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mentorshipImpact.map((item, index) => (
              <div 
                key={item.metric}
                className="text-center p-4 bg-muted/50 rounded-lg executive-transition hover:bg-muted/70"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl font-bold text-secondary mb-2">{item.value}</div>
                <div className="text-sm font-medium text-foreground mb-2">{item.metric}</div>
                <div className="text-xs text-muted-foreground">{item.description}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="ExternalLink"
                iconPosition="right"
                className="bg-secondary hover:bg-secondary/90"
              >
                Visit Protocol2Product
              </Button>
              <Button
                variant="outline"
                iconName="Bell"
                iconPosition="left"
              >
                Subscribe to Insights
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Join 8.5K+ product leaders receiving strategic insights and industry analysis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol2ProductShowcase;