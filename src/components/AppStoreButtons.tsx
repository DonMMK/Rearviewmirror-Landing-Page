import React from 'react';

export const AppStoreButtons: React.FC<{className?: string}> = ({ className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a 
        href="#" 
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
        href="#" 
        className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        aria-label="Get it on Google Play"
      >
        <span className="mr-2">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.90661 0.29756L11.869 10.1999L1.90661 20.1022C1.51249 19.8362 1.3 19.3616 1.3 18.7789V1.62098C1.3 1.03823 1.51249 0.56367 1.90661 0.29756Z" fill="white"/>
            <path d="M13.3429 8.7262L3.27617 1.54128L3.27305 1.53899C3.76091 0.95625 4.50703 0.61846 5.38665 0.61846L15.8723 0.61846C16.7519 0.61846 17.498 0.95625 17.9859 1.53899L17.9828 1.54128L13.3429 8.7262Z" fill="white"/>
            <path d="M17.986 18.8618C17.4981 19.4445 16.7512 19.7823 15.8716 19.7823H5.38593C4.5064 19.7823 3.76027 19.4445 3.27241 18.8618C3.27241 18.8618 3.27553 18.8595 3.27553 18.8595L13.3423 11.6746L17.9821 18.8595C17.9829 18.8603 17.986 18.8618 17.986 18.8618Z" fill="white"/>
            <path d="M13.3436 8.726L17.9834 1.5411C18.1827 1.69246 18.3513 1.88218 18.4851 2.10849L18.4882 2.11313C18.7088 2.49768 18.8426 2.99019 18.8426 3.56606V16.8346C18.8426 17.4105 18.7088 17.903 18.4882 18.2875C18.3544 18.5139 18.185 18.7036 17.9857 18.855L13.3436 11.6747V8.726Z" fill="white"/>
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