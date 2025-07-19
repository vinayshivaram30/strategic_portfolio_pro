import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProductTeardownCard from './components/ProductTeardownCard';
import MarketFrameworkCard from './components/MarketFrameworkCard';
import TrendAnalysisCard from './components/TrendAnalysisCard';
import CompetitiveIntelligenceCard from './components/CompetitiveIntelligenceCard';
import AnalyticsOverview from './components/AnalyticsOverview';
import FilterControls from './components/FilterControls';

const StrategicIntelligenceCenter = () => {
  const [activeSection, setActiveSection] = useState('teardowns');
  const [filters, setFilters] = useState({
    category: 'all',
    industry: 'all',
    timeframe: 'all',
    sortBy: 'newest',
    resultCount: 47,
    lastUpdate: '2 hours ago'
  });

  // Mock analytics data
  const analyticsData = [
    {
      icon: 'BarChart3',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
      value: '47',
      label: 'Product Analyses',
      change: 12,
      period: 'Dec 2024'
    },
    {
      icon: 'TrendingUp',
      iconBg: 'bg-success/10',
      iconColor: 'text-success',
      value: '23',
      label: 'Market Frameworks',
      change: 8,
      period: 'Dec 2024'
    },
    {
      icon: 'Target',
      iconBg: 'bg-conversion-orange/10',
      iconColor: 'text-conversion-orange',
      value: '15',
      label: 'Trend Reports',
      change: -3,
      period: 'Dec 2024'
    },
    {
      icon: 'Users',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      value: '2.3K',
      label: 'Strategic Downloads',
      change: 25,
      period: 'Dec 2024'
    }
  ];

  // Mock product teardowns data
  const productTeardowns = [
    {
      id: 1,
      product: 'OpenAI ChatGPT Enterprise',
      company: 'OpenAI',
      logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop&crop=center',
      status: 'Live',
      overallScore: 8.7,
      description: `Comprehensive analysis of OpenAI's enterprise AI platform, examining market positioning, technical architecture, and competitive advantages in the generative AI space.`,
      metrics: [
        { category: 'Market Position', score: 9.2 },
        { category: 'Tech Architecture', score: 8.8 },
        { category: 'User Experience', score: 8.1 },
        { category: 'Business Model', score: 8.7 }
      ],
      tags: ['AI/ML', 'Enterprise', 'SaaS', 'Generative AI'],
      keyStrengths: [
        'Market-leading language model capabilities','Strong enterprise security and compliance','Extensive API ecosystem and integrations','Rapid feature development and deployment'
      ],
      strategicGaps: [
        'Limited customization for industry-specific use cases','High computational costs affecting pricing strategy','Dependency on cloud infrastructure scalability'
      ],
      analysisDate: 'Dec 15, 2024',readTime: '12 min read'
    },
    {
      id: 2,
      product: 'AWS IoT Core',company: 'Amazon Web Services',logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center',status: 'Updated',
      overallScore: 8.4,
      description: `Strategic evaluation of AWS IoT Core platform, analyzing device connectivity, data processing capabilities, and competitive positioning in industrial IoT markets.`,
      metrics: [
        { category: 'Market Position', score: 8.9 },
        { category: 'Tech Architecture', score: 9.1 },
        { category: 'User Experience', score: 7.3 },
        { category: 'Business Model', score: 8.3 }
      ],
      tags: ['IoT', 'Cloud', 'Enterprise', 'Industrial'],
      keyStrengths: [
        'Comprehensive device management capabilities','Seamless integration with AWS ecosystem','Robust security and device authentication','Scalable message routing and processing'
      ],
      strategicGaps: [
        'Complex pricing model for small-scale deployments','Steep learning curve for non-AWS users','Limited edge computing optimization'
      ],
      analysisDate: 'Dec 12, 2024',readTime: '15 min read'
    },
    {
      id: 3,
      product: 'Salesforce Einstein AI',company: 'Salesforce',logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',status: 'New',
      overallScore: 7.9,
      description: `Analysis of Salesforce's AI-powered CRM capabilities, examining predictive analytics, automation features, and market differentiation strategies.`,
      metrics: [
        { category: 'Market Position', score: 8.5 },
        { category: 'Tech Architecture', score: 7.8 },
        { category: 'User Experience', score: 8.2 },
        { category: 'Business Model', score: 7.1 }
      ],
      tags: ['CRM', 'AI/ML', 'SaaS', 'Sales Automation'],
      keyStrengths: [
        'Deep CRM integration and workflow automation',
        'Strong predictive analytics for sales forecasting',
        'Extensive third-party app ecosystem',
        'Industry-specific solution templates'
      ],
      strategicGaps: [
        'High total cost of ownership for SMBs',
        'Complex customization requirements',
        'Limited AI transparency and explainability'
      ],
      analysisDate: 'Dec 18, 2024',
      readTime: '10 min read'
    }
  ];

  // Mock market frameworks data
  const marketFrameworks = [
    {
      id: 1,
      name: 'AI Product-Market Fit Framework',
      category: 'Product Strategy',
      icon: 'Brain',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
      complexity: 'Intermediate',
      usageCount: '1.2K',
      description: `Comprehensive framework for evaluating AI product opportunities, assessing technical feasibility, market demand, and competitive positioning for AI-powered solutions.`,
      steps: [
        'Market Problem Identification',
        'Technical Feasibility Assessment',
        'Competitive Landscape Analysis',
        'User Experience Validation',
        'Business Model Optimization'
      ],
      applications: ['AI Startups', 'Enterprise AI', 'ML Products', 'Data Platforms', 'Automation Tools'],
      timeToComplete: '2-3 weeks',
      downloadCount: '847'
    },
    {
      id: 2,
      name: 'IoT Ecosystem Evaluation Matrix',
      category: 'Market Analysis',
      icon: 'Network',
      iconBg: 'bg-conversion-orange/10',
      iconColor: 'text-conversion-orange',
      complexity: 'Advanced',
      usageCount: '890',
      description: `Strategic framework for analyzing IoT market opportunities, device ecosystem requirements, connectivity options, and platform integration strategies.`,
      steps: [
        'Device Landscape Mapping',
        'Connectivity Protocol Analysis',
        'Platform Integration Assessment',
        'Security Framework Evaluation',
        'Scalability Planning'
      ],
      applications: ['Industrial IoT', 'Smart Cities', 'Connected Devices', 'Edge Computing'],
      timeToComplete: '3-4 weeks',
      downloadCount: '623'
    },
    {
      id: 3,
      name: 'SaaS Competitive Intelligence Model',
      category: 'Competitive Analysis',
      icon: 'Target',
      iconBg: 'bg-success/10',
      iconColor: 'text-success',
      complexity: 'Beginner',
      usageCount: '2.1K',
      description: `Systematic approach to analyzing SaaS competitors, feature comparison, pricing strategies, and market positioning for strategic decision-making.`,
      steps: [
        'Competitor Identification',
        'Feature Matrix Development',
        'Pricing Analysis',
        'Market Position Mapping'
      ],
      applications: ['SaaS Products', 'Platform Strategy', 'Feature Planning', 'Pricing Strategy'],
      timeToComplete: '1-2 weeks',
      downloadCount: '1.4K'
    }
  ];

  // Mock trend analysis data
  const trendAnalyses = [
    {
      id: 1,
      title: 'Generative AI in Enterprise Workflows',
      sector: 'Enterprise Software',
      icon: 'Sparkles',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
      impact: 'High',
      timeline: 'Immediate',
      description: `Rapid adoption of generative AI tools across enterprise workflows is transforming productivity, content creation, and decision-making processes. Organizations are integrating AI assistants into daily operations.`,
      marketSize: '$47.5B by 2027',
      opportunityScore: 85,
      keyDrivers: ['Productivity Gains', 'Cost Reduction', 'Competitive Advantage', 'Remote Work'],
      recommendations: [
        'Develop AI-native workflow integrations',
        'Focus on enterprise security and compliance features'
      ],
      growthRate: '+127% YoY',
      lastUpdated: 'Dec 18, 2024'
    },
    {
      id: 2,
      title: 'Edge AI for Industrial IoT',
      sector: 'Industrial Technology',
      icon: 'Cpu',
      iconBg: 'bg-conversion-orange/10',
      iconColor: 'text-conversion-orange',
      impact: 'Medium',
      timeline: 'Short-term',
      description: `Industrial companies are deploying AI processing at the edge to reduce latency, improve real-time decision-making, and minimize cloud dependency for critical operations.`,
      marketSize: '$23.8B by 2026',
      opportunityScore: 72,
      keyDrivers: ['Latency Reduction', 'Data Privacy', 'Operational Efficiency', '5G Adoption'],
      recommendations: [
        'Develop edge-optimized AI models',
        'Partner with industrial equipment manufacturers'
      ],
      growthRate: '+34% YoY',
      lastUpdated: 'Dec 16, 2024'
    },
    {
      id: 3,
      title: 'Sustainable Tech Integration',
      sector: 'Clean Technology',
      icon: 'Leaf',
      iconBg: 'bg-success/10',
      iconColor: 'text-success',
      impact: 'Medium',
      timeline: 'Medium-term',
      description: `Growing emphasis on sustainable technology solutions is driving innovation in energy-efficient computing, carbon tracking, and environmental impact measurement tools.`,
      marketSize: '$31.2B by 2028',
      opportunityScore: 68,
      keyDrivers: ['ESG Compliance', 'Carbon Neutrality', 'Regulatory Pressure', 'Consumer Demand'],
      recommendations: [
        'Integrate sustainability metrics into product design',
        'Develop carbon footprint tracking capabilities'
      ],
      growthRate: '+28% YoY',
      lastUpdated: 'Dec 14, 2024'
    }
  ];

  // Mock competitive intelligence data
  const competitiveIntelligence = {
    title: 'AI Platform Competitive Landscape Q4 2024',
    description: 'Comprehensive analysis of leading AI platforms, comparing features, market positioning, and strategic opportunities.',
    lastUpdated: 'Dec 19, 2024',
    competitorCount: 12,
    dataPoints: 847,
    competitors: [
      {
        name: 'OpenAI',
        logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=50&h=50&fit=crop&crop=center',
        position: 'Leader',
        marketShare: '34.2%',
        growthRate: '+156%'
      },
      {
        name: 'Google AI',
        logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=50&h=50&fit=crop&crop=center',
        position: 'Challenger',
        marketShare: '28.7%',
        growthRate: '+89%'
      },
      {
        name: 'Microsoft AI',
        logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=50&h=50&fit=crop&crop=center',
        position: 'Challenger',
        marketShare: '22.1%',
        growthRate: '+67%'
      }
    ],
    featureComparison: [
      { name: 'Natural Language Processing', support: [true, true, true] },
      { name: 'Code Generation', support: [true, true, true] },
      { name: 'Image Generation', support: [true, true, false] },
      { name: 'Enterprise Security', support: [true, false, true] },
      { name: 'Custom Model Training', support: [false, true, true] },
      { name: 'Multi-modal Capabilities', support: [true, true, false] }
    ],
    marketInsights: {
      positioning: [
        'OpenAI leads in consumer adoption and brand recognition',
        'Google dominates in research and technical capabilities',
        'Microsoft excels in enterprise integration and partnerships'
      ],
      opportunities: [
        'Industry-specific AI solutions remain underserved',
        'Edge AI deployment presents significant growth potential',
        'Regulatory compliance tools create competitive differentiation'
      ]
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'all',
      industry: 'all',
      timeframe: 'all',
      sortBy: 'newest',
      resultCount: 47,
      lastUpdate: '2 hours ago'
    });
  };

  const handleViewAnalysis = (teardown) => {
    console.log('Viewing analysis for:', teardown.product);
  };

  const handleExploreFramework = (framework) => {
    console.log('Exploring framework:', framework.name);
  };

  const handleViewTrendDetails = (trend) => {
    console.log('Viewing trend details:', trend.title);
  };

  const handleViewComparison = (intelligence) => {
    console.log('Viewing comparison:', intelligence.title);
  };

  const sections = [
    { id: 'teardowns', label: 'Product Teardowns', icon: 'Search', count: productTeardowns.length },
    { id: 'frameworks', label: 'Market Frameworks', icon: 'Grid3X3', count: marketFrameworks.length },
    { id: 'trends', label: 'Trend Analysis', icon: 'TrendingUp', count: trendAnalyses.length },
    { id: 'competitive', label: 'Competitive Intel', icon: 'Target', count: 1 }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="strategic-gradient py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Icon name="Brain" size={28} className="text-secondary" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  Strategic Intelligence Center
                </h1>
              </div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Live product analysis platform demonstrating market evaluation and competitive assessment capabilities. 
                Transforming technical insights into strategic business intelligence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Download Intelligence Brief
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Schedule Strategic Review
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Overview */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnalyticsOverview analytics={analyticsData} />
          </div>
        </section>

        {/* Filter Controls */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FilterControls 
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
            />
          </div>
        </section>

        {/* Section Navigation */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 mb-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium executive-transition ${
                    activeSection === section.id
                      ? 'bg-secondary text-white' :'bg-card text-foreground hover:bg-muted border border-border'
                  }`}
                >
                  <Icon name={section.icon} size={16} />
                  <span>{section.label}</span>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    activeSection === section.id
                      ? 'bg-white/20 text-white' :'bg-muted text-muted-foreground'
                  }`}>
                    {section.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {activeSection === 'teardowns' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Product Teardown Analyses</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Deep-dive strategic analyses of leading AI/IoT products, examining market positioning, 
                    technical architecture, user experience, and business model effectiveness.
                  </p>
                </div>
                <div className="grid gap-8">
                  {productTeardowns.map((teardown) => (
                    <ProductTeardownCard
                      key={teardown.id}
                      teardown={teardown}
                      onViewAnalysis={handleViewAnalysis}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'frameworks' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Market Evaluation Frameworks</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Interactive strategic frameworks for market analysis, competitive positioning, 
                    and opportunity assessment. Proven methodologies for strategic decision-making.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {marketFrameworks.map((framework) => (
                    <MarketFrameworkCard
                      key={framework.id}
                      framework={framework}
                      onExplore={handleExploreFramework}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'trends' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Predictive Trend Analysis</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Forward-looking analysis of emerging AI/IoT opportunities with strategic recommendations 
                    for market entry and product development initiatives.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trendAnalyses.map((trend) => (
                    <TrendAnalysisCard
                      key={trend.id}
                      trend={trend}
                      onViewDetails={handleViewTrendDetails}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'competitive' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Competitive Intelligence Dashboard</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Ongoing market research with visual comparisons, feature gap analyses, 
                    and strategic positioning recommendations for competitive advantage.
                  </p>
                </div>
                <CompetitiveIntelligenceCard
                  intelligence={competitiveIntelligence}
                  onViewComparison={handleViewComparison}
                />
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Icon name="Lightbulb" size={48} className="text-secondary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready for Strategic Intelligence Partnership?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your product strategy with data-driven market intelligence and competitive insights. 
                Let's build strategic advantage together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-secondary hover:bg-secondary/90"
              >
                Schedule Strategic Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Intelligence Framework
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Brain" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Strategic Portfolio Pro</h3>
                  <p className="text-sm text-white/70">Product Leadership Intelligence</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Transforming technical capabilities into market-winning products through strategic intelligence and data-driven insights.
              </p>
              <div className="flex space-x-4">
                <Icon name="Linkedin" size={20} className="text-white/60 hover:text-white cursor-pointer executive-transition" />
                <Icon name="Twitter" size={20} className="text-white/60 hover:text-white cursor-pointer executive-transition" />
                <Icon name="Mail" size={20} className="text-white/60 hover:text-white cursor-pointer executive-transition" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Intelligence Center</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white executive-transition">Product Teardowns</a></li>
                <li><a href="#" className="hover:text-white executive-transition">Market Frameworks</a></li>
                <li><a href="#" className="hover:text-white executive-transition">Trend Analysis</a></li>
                <li><a href="#" className="hover:text-white executive-transition">Competitive Intel</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Strategic Resources</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white executive-transition">Executive Briefs</a></li>
                <li><a href="#" className="hover:text-white executive-transition">Framework Library</a></li>
                <li><a href="#" className="hover:text-white executive-transition">Market Reports</a></li>
                <li><a href="#" className="hover:text-white executive-transition">Strategic Consultation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Strategic Portfolio Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-white/60 hover:text-white executive-transition">Privacy Policy</a>
              <a href="#" className="text-sm text-white/60 hover:text-white executive-transition">Terms of Service</a>
              <a href="#" className="text-sm text-white/60 hover:text-white executive-transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StrategicIntelligenceCenter;