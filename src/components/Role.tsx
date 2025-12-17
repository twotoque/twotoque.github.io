import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface LogoTitleProps {
  logoSrc: string;
  logoAlt?: string;
  title: string;
  subtitle: string;
  dateJob?: string;
  dropdownContent?: React.ReactNode;
}

const LogoTitle: React.FC<LogoTitleProps> = ({ 
  logoSrc, 
  logoAlt = "Logo", 
  title, 
  subtitle,
  dateJob,
  dropdownContent 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-full">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex-shrink-0">
            <img 
              src={logoSrc} 
              alt={logoAlt}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <p className="text-left p-0 m-0 text-gray-800 !font-extrabold text-sm break-words">
              {title}
            </p>

            <h5 className="text-left p-0 m-0 text-gray-800 text-xs  break-words">
              {subtitle}
            </h5>

            <h5 className="text-left p-0 m-0 text-gray-800 text-xs  break-words">
              {dateJob}
            </h5>

          </div>
        </div>
        
        {dropdownContent && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex-shrink-0 ml-2 sm:ml-4 p-2  rounded-full transition-colors"
            aria-label="Toggle details"
          >
            {isOpen ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5 " />
            )}
          </button>
        )}
      </div>
      
      {dropdownContent && isOpen && (
        <div className="text-left mt-3 pl-11 sm:pl-13 pr-2 text-gray-700 text-sm">
          {dropdownContent}
        </div>
      )}
    </div>
  );
};
export default LogoTitle;