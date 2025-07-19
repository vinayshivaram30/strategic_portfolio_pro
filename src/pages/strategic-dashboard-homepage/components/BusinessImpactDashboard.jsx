import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const BusinessImpactDashboard = () => {
  const deviceGrowthData = [
    { year: '2019', devices: 5, revenue: 12 },
    { year: '2020', devices: 12, revenue: 28 },
    { year: '2021', devices: 25, revenue: 45 },
    { year: '2022', devices: 35, revenue: 68 },
    { year: '2023', devices: 45, revenue: 85 },
    { year: '2024', devices: 50, revenue: 95 }
  ];

  const reliabilityData = [
    { quarter: 'Q1 2023', uptime: 94.2, incidents: 12 },
    { quarter: 'Q2 2023', uptime: 96.8, incidents: 8 },
    { quarter: 'Q3 2023', uptime: 98.1, incidents: 5 },
    { quarter: 'Q4 2023', uptime: 99.2, incidents: 3 },
    { quarter: 'Q1 2024', uptime: 99.5, incidents: 2 },
    { quarter: 'Q2 2024', uptime: 99.7, incidents: 1 }
  ];

  const marketImpactData = [
    { name: 'IoT Platforms', value: 35, color: '#00a8a8' },
    { name: 'AI Products', value: 28, color: '#1a2332' },
    { name: 'Mobile Apps', value: 22, color: '#ff6b35' },
    { name: 'Cloud Services', value: 15, color: '#28a745' }
  ];

  const keyMetrics = [
    {
      title: "Global Device Reach",
      value: "50M+",
      change: "+25%",
      trend: "up",
      icon: "Smartphone",
      description: "Connected devices scaled across 25+ markets"
    },
    {
      title: "Time-to-Market Reduction",
      value: "30%+",
      change: "-8 months",
      trend: "up",
      icon: "Clock",
      description: "Average product launch acceleration"
    },
    {
      title: "System Reliability",
      value: "99.7%",
      change: "+5.5%",
      trend: "up",
      icon: "Shield",
      description: "Platform uptime improvement achieved"
    },
    {
      title: "Revenue Impact",
      value: "$95M+",
      change: "+42%",
      trend: "up",
      icon: "DollarSign",
      description: "Business value generated through products"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Icon name="BarChart3" size={16} />
            <span>Business Impact Dashboard</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Quantified Strategic Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time visualization of career impact across device scaling, reliability improvements, and business value creation
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyMetrics.map((metric, index) => (
            <div 
              key={metric.title}
              className="dashboard-card p-6 executive-transition strategic-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  index === 0 ? 'bg-secondary/10 text-secondary' :
                  index === 1 ? 'bg-conversion-orange/10 text-conversion-orange' :
                  index === 2 ? 'bg-trust-green/10 text-trust-green': 'bg-primary/10 text-primary'
                }`}>
                  <Icon name={metric.icon} size={24} />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  metric.trend === 'up' ? 'text-trust-green' : 'text-destructive'
                }`}>
                  <Icon name={metric.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={16} />
                  <span>{metric.change}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">{metric.value}</h3>
                <p className="text-sm font-medium text-foreground">{metric.title}</p>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Device Growth Chart */}
          <div className="dashboard-card p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Device Scaling & Revenue Growth</h3>
                <p className="text-sm text-muted-foreground">Million devices and revenue impact over time</p>
              </div>
              <Icon name="TrendingUp" size={24} className="text-secondary" />
            </div>
            
            <div className="w-full h-80" aria-label="Device Growth and Revenue Chart">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={deviceGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#6c757d"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#6c757d"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e9ecef',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="devices"
                    stackId="1"
                    stroke="#00a8a8"
                    fill="#00a8a8"
                    fillOpacity={0.3}
                    name="Devices (M)"
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stackId="2"
                    stroke="#1a2332"
                    fill="#1a2332"
                    fillOpacity={0.3}
                    name="Revenue ($M)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Reliability Improvement Chart */}
          <div className="dashboard-card p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">System Reliability Improvement</h3>
                <p className="text-sm text-muted-foreground">Uptime percentage and incident reduction</p>
              </div>
              <Icon name="Shield" size={24} className="text-trust-green" />
            </div>
            
            <div className="w-full h-80" aria-label="Reliability Improvement Chart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={reliabilityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
                  <XAxis 
                    dataKey="quarter" 
                    stroke="#6c757d"
                    fontSize={12}
                  />
                  <YAxis 
                    yAxisId="uptime"
                    domain={[94, 100]}
                    stroke="#6c757d"
                    fontSize={12}
                  />
                  <YAxis 
                    yAxisId="incidents"
                    orientation="right"
                    stroke="#6c757d"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e9ecef',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Line
                    yAxisId="uptime"
                    type="monotone"
                    dataKey="uptime"
                    stroke="#28a745"
                    strokeWidth={3}
                    dot={{ fill: '#28a745', strokeWidth: 2, r: 6 }}
                    name="Uptime %"
                  />
                  <Line
                    yAxisId="incidents"
                    type="monotone"
                    dataKey="incidents"
                    stroke="#ff6b35"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: '#ff6b35', strokeWidth: 2, r: 4 }}
                    name="Incidents"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Market Impact Distribution */}
        <div className="dashboard-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Product Portfolio Impact Distribution</h3>
              <p className="text-sm text-muted-foreground">Revenue contribution across product categories</p>
            </div>
            <Icon name="PieChart" size={24} className="text-secondary" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="w-full h-80" aria-label="Market Impact Distribution Chart">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={marketImpactData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {marketImpactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e9ecef',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-4">
              {marketImpactData.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-medium text-foreground">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{item.value}%</div>
                    <div className="text-xs text-muted-foreground">Market Share</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactDashboard;