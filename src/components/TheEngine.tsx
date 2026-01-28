import { Cpu, TrendingDown, Layers } from 'lucide-react';

export function TheEngine() {
  return (
    <div className="h-full bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full mb-3">
            <Cpu className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-emerald-700">The Engine</span>
          </div>
          <h3 className="text-2xl text-gray-900 mb-2">AI-Augmented SOP</h3>
          <p className="text-gray-600">
            A systematic operating procedure that integrates AI tools at every stage of the development lifecycle
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[100px]">
          <TrendingDown className="w-8 h-8 text-emerald-600 mb-1" />
          <span className="text-3xl text-emerald-700">60%</span>
          <span className="text-xs text-gray-600 mt-1">SDLC Reduction</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-xl p-4">
          <Layers className="w-5 h-5 text-gray-700 mb-2" />
          <p className="text-xs text-gray-500 mb-1">Phase</p>
          <p className="text-sm text-gray-900">Planning</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <Layers className="w-5 h-5 text-gray-700 mb-2" />
          <p className="text-xs text-gray-500 mb-1">Phase</p>
          <p className="text-sm text-gray-900">Development</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <Layers className="w-5 h-5 text-gray-700 mb-2" />
          <p className="text-xs text-gray-500 mb-1">Phase</p>
          <p className="text-sm text-gray-900">Deployment</p>
        </div>
      </div>
    </div>
  );
}
