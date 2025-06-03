import React from 'react';

export const AppStoreButtons: React.FC<{className?: string}> = ({ className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a 
        href="https://apps.apple.com/us/app/rearviewmirror-couples-app/id6584517029" 
        className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        aria-label="Download on App Store"
      >
        <span className="mr-2">
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.05 13.514C17.049 11.9259 17.814 10.5846 19.342 9.56781C18.502 8.35526 17.199 7.69511 15.455 7.58245C13.795 7.47293 11.954 8.53661 11.328 8.53661C10.671 8.53661 9.03935 7.61724 7.69749 7.61724C5.15206 7.64888 2.44293 9.66188 2.44293 13.7608C2.44293 14.9317 2.64358 16.1378 3.04488 17.3773C3.58946 19.0041 5.91184 24 8.32563 24C9.61418 24 10.5089 23.0964 12.12 23.0964C13.6803 23.0964 14.5027 23.9994 15.9182 23.9994C18.3094 23.9994 20.4597 19.4372 20.9732 17.8028C17.954 16.5155 17.05 13.591 17.05 13.514ZM14.6185 5.47865C15.9468 3.9267 15.8157 2.50222 15.7881 2C14.6342 2.06305 13.2949 2.69926 12.4638 3.51309C11.5683 4.38188 10.992 5.55386 11.099 7.51601C12.3597 7.60762 13.563 6.71453 14.6185 5.47865Z" fill="white"/>
          </svg>
        </span>
        <div className="flex flex-col items-start">
          <span className="text-xs">Download on the</span>
          <span className="font-semibold text-sm">App Store</span>
        </div>
      </a>
      <a 
        href="https://play.google.com/store/apps/details?id=com.donmmk.Rearviewmirror&fbclid=PAZXh0bgNhZW0CMTEAAad4H8Ax4RJXvu3beyZclX64r58pO9i4-d73fzO1P3oSZLRYHD_QNFcjNwjHsw_aem_HtuyDr7l79EnGapOLasmuA" 
        className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        aria-label="Get it on Google Play"
      >
        <span className="mr-2">
          <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 25.34L12.5 13.34L0.5 1.34003V25.34ZM13.5 13.34L23.5 3.34003C22.84 2.94003 22.06 2.71003 21.2 2.71003L3.8 2.70003C2.94 2.70003 2.16 2.93003 1.5 3.34003L11.5 13.34H13.5ZM1.5 3.34003C0.57 4.00003 0 5.08003 0 6.34003V20.34C0 21.6 0.57 22.68 1.5 23.34L11.5 13.34L1.5 3.34003ZM13.5 13.34L23.5 23.34C22.84 23.74 22.06 23.97 21.2 23.97L3.8 23.97C2.94 23.97 2.16 23.74 1.5 23.34L11.5 13.34H13.5Z" fill="white"/>
          </svg>
        </span>
        <div className="flex flex-col items-start">
          <span className="text-xs">Get it on</span>
          <span className="font-semibold text-sm">Google Play</span>
        </div>
      </a>
    </div>
  );
};