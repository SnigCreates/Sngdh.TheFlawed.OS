import { Zap, Briefcase } from 'lucide-react';

export function ProfileSummary() {
  return (
    <div className="h-full bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
      <div>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-2 rounded-full mb-6">
          <Zap className="w-4 h-4 text-purple-600" />
          <span className="text-sm text-purple-700">Superpower</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl mb-6 text-gray-900 leading-tight">
          Cleared <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">15 ECE Papers</span> in One Cycle
        </h2>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          An achievement that showcases exceptional analytical thinking, time management, and relentless execution. 
          This same discipline now powers everything I build.
        </p>
      </div>

      <div className="border-t border-gray-100 pt-6">
        <div className="flex items-start gap-3">
          <div className="bg-gray-100 rounded-full p-2.5 mt-1">
            <Briefcase className="w-5 h-5 text-gray-700" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500 mb-1">Current Focus</h3>
            <p className="text-gray-900">Founder's Office Operations</p>
            <p className="text-sm text-gray-600 mt-1">Driving strategic initiatives and operational excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
}
