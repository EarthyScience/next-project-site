// Hero banner, with title, subtitle and image/component to the right
import React from 'react';

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  rightContent?: React.ReactNode | null;
}
const  HeroBanner = ({ 
    title = "Welcome to Our template", 
    subtitle = "Discover amazing features that will transform your experience", 
    rightContent 
  }: HeroBannerProps) => {
    return (
      <div className="w-full rounded-lg overflow-hidden shadow-xl">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className="md:w-1/2 mb-8 md:mb-0 space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-[var(--secondary-link-color)]">
            {subtitle}
          </p>
        </div>

        {/* Right content (image or component) */}
        <div className="md:w-1/2 flex justify-center">
          {rightContent || (
            <div className="rounded-lg h-64 w-full flex items-center justify-center shadow-xl">
              <p> Place your image or component here </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;