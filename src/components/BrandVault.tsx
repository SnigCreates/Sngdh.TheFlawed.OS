import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';

export function BrandVault() {
  return (
    <div className="h-full bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-amber-600" />
        <h3 className="text-lg text-gray-900">Brand Vault</h3>
      </div>
      
      <div className="flex-1 grid grid-cols-2 gap-3">
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYnJhbmQlMjBhZXN0aGV0aWMlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5NTk5ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Wicknwondr"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <span className="text-white text-xs">Wicknwondr</span>
          </div>
        </div>
        
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0YXRpb25lcnklMjBkZXNpZ24lMjBmbGF0JTIwbGF5fGVufDF8fHx8MTc2OTU5OTg2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Glitch Stationery"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <span className="text-white text-xs">Glitch Stationery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
