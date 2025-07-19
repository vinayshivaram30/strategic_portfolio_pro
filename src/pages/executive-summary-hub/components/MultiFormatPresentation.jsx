import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MultiFormatPresentation = () => {
  const [activeFormat, setActiveFormat] = useState('interactive');

  const formats = [
    {
      id: 'interactive',
      name: 'Interactive Web Version',
      description: 'Comprehensive digital experience with expandable sections',
      icon: 'Monitor',
      color: 'text-secondary'
    },
    {
      id: 'pdf',
      name: 'ATS-Optimized PDF',
      description: 'Traditional resume format for applicant tracking systems',
      icon: 'FileText',
      color: 'text-conversion-orange'
    },
    {
      id: 'video',
      name: 'Video Elevator Pitch',
      description: '2-3 minute strategic value proposition presentation',
      icon: 'Play',
      color: 'text-trust-green'
    }
  ];

  const interactiveContent = {
    sections: [
      {
        title: "Executive Summary",
        content: "Strategic Product Leader with 6+ years transforming AI/IoT innovations into market-winning products. Proven track record of scaling technical solutions to 50M+ global devices while consistently delivering 30%+ improvements across key business metrics.",
        expanded: false
      },
      {
        title: "Core Competencies",
        content: "AI/ML Integration • Cross-Functional Leadership • Technical Architecture • Strategic Planning • Global Product Scaling • Team Development • Business Intelligence • Market Analysis",
        expanded: false
      },
      {
        title: "Strategic Impact",
        content: "Led product initiatives resulting in $15M+ revenue generation, 99.9% system reliability achievement, and 25% reduction in time-to-market. Established frameworks adopted across multiple organizations.",
        expanded: false
      },
      {
        title: "Industry Recognition",
        content: "Protocol2Product platform founder with 5,000+ community members. Regular speaker at product leadership conferences. Mentored 50+ product professionals with measurable career advancement.",
        expanded: false
      }
    ]
  };

  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleDownloadPDF = () => {
    // Mock PDF download functionality
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Vinay_Shivaram_Executive_Summary.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-card rounded-xl executive-shadow-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Multi-Format Professional Overview
        </h2>
        <p className="text-muted-foreground">
          Choose your preferred format for comprehensive executive assessment
        </p>
      </div>

      {/* Format Selection */}
      <div className="p-6 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {formats.map((format) => (
            <button
              key={format.id}
              onClick={() => setActiveFormat(format.id)}
              className={`p-4 rounded-lg border-2 text-left executive-transition ${
                activeFormat === format.id
                  ? 'border-secondary bg-secondary/5' :'border-border hover:border-secondary/50'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Icon name={format.icon} size={20} className={format.color} />
                <span className="font-medium text-foreground">{format.name}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {format.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        {activeFormat === 'interactive' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Interactive Executive Summary</h3>
              <span className="text-sm text-muted-foreground">Click sections to expand</span>
            </div>
            
            {interactiveContent.sections.map((section, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full p-4 text-left bg-muted/30 hover:bg-muted/50 executive-transition flex items-center justify-between"
                >
                  <span className="font-medium text-foreground">{section.title}</span>
                  <Icon 
                    name={expandedSections[index] ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground"
                  />
                </button>
                {expandedSections[index] && (
                  <div className="p-4 bg-card">
                    <p className="text-foreground leading-relaxed">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeFormat === 'pdf' && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-conversion-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="FileText" size={48} className="text-conversion-orange" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              ATS-Optimized Executive Resume
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Traditional format optimized for applicant tracking systems and executive recruiters. Includes comprehensive career history and quantified achievements.
            </p>
            <div className="space-y-4">
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={handleDownloadPDF}
                className="bg-conversion-orange hover:bg-conversion-orange/90"
              >
                Download Executive PDF
              </Button>
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Icon name="FileCheck" size={16} className="mr-1" />
                  ATS Compatible
                </span>
                <span className="flex items-center">
                  <Icon name="Shield" size={16} className="mr-1" />
                  Executive Format
                </span>
                <span className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-1" />
                  2-Page Summary
                </span>
              </div>
            </div>
          </div>
        )}

        {activeFormat === 'video' && (
          <div className="text-center py-12">
            <div className="relative max-w-2xl mx-auto">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Icon name="Play" size={32} className="text-white ml-1" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Strategic Value Proposition</h4>
                  <p className="text-white/80">2:45 Executive Elevator Pitch</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Icon name="Target" size={16} />
                  <span>Strategic Positioning</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Icon name="BarChart3" size={16} />
                  <span>Quantified Impact</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Icon name="Lightbulb" size={16} />
                  <span>Vision & Approach</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiFormatPresentation;