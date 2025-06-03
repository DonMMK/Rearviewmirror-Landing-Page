import React from 'react';
import { Car, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6" />
              <span className="font-bold text-lg">Rearviewmirror</span>
            </div>
            <p className="text-primary-100 mb-6 max-w-md">
              Helping couples navigate their relationship's past, present, and future.
            </p>
            <p className="text-primary-200">© {new Date().getFullYear()} Rearviewmirror. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-100 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-primary-100 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-primary-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-100 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-primary-100 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-primary-100 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-primary-100 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-100 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary-100 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary-100 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="font-medium text-white mb-2">Download</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-100 hover:text-white transition-colors">App Store</a></li>
                <li><a href="#" className="text-primary-100 hover:text-white transition-colors">Google Play</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};