import { FileText, ArrowUpRight } from 'lucide-react';

export function TechnicalResearch() {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-lg shadow-indigo-200/50 p-6 flex flex-col justify-between hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
      <div>
        <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <FileText className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-xl text-white mb-2">Technical Research</h3>
        <p className="text-indigo-100 text-sm leading-relaxed">
          Deep dives into ECE drone systems and economic frameworks
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-indigo-200">2 Papers</span>
        </div>
        <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </div>
  );
}
