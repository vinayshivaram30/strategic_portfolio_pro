import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Strategic Dashboard', path: '/strategic-dashboard-homepage', icon: 'BarChart3' },
    { name: 'Executive Summary', path: '/executive-summary-hub', icon: 'FileText' },
    { name: 'Intelligence Center', path: '/strategic-intelligence-center', icon: 'Brain' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 executive-transition ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md executive-shadow border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo Section */}
          <Link 
            to="/strategic-dashboard-homepage" 
            className="flex items-center space-x-3 group"
            onClick={closeMobileMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center executive-transition group-hover:scale-105">
                <Icon name="TrendingUp" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-conversion-orange rounded-full animate-pulse-subtle"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary group-hover:text-secondary executive-transition">
                Strategic Portfolio Pro
              </h1>
              <p className="text-xs text-muted-foreground font-medium">
                Product Leadership Intelligence
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium executive-transition ${
                  isActivePath(item.path)
                    ? 'bg-secondary/10 text-secondary border-l-2 border-secondary' :'text-foreground hover:bg-muted hover:text-secondary'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              className="text-sm"
            >
              Executive Brief
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              className="bg-conversion-orange hover:bg-conversion-orange/90 text-white border-0"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted executive-transition"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-foreground"
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border executive-shadow transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0' :'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <nav className="px-6 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium executive-transition ${
                  isActivePath(item.path)
                    ? 'bg-secondary/10 text-secondary border-l-4 border-secondary' :'text-foreground hover:bg-muted hover:text-secondary'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTAs */}
            <div className="pt-4 space-y-3 border-t border-border">
              <Button
                variant="outline"
                fullWidth
                iconName="Download"
                iconPosition="left"
                size="sm"
              >
                Download Executive Brief
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                size="sm"
                className="bg-conversion-orange hover:bg-conversion-orange/90 text-white border-0"
              >
                Schedule Strategic Consultation
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;