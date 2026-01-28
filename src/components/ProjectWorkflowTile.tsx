import { motion } from 'motion/react';
import { Layers, Code, Rocket, CheckCircle2 } from 'lucide-react';

const workflowSteps = [
  { icon: Layers, label: 'Design', progress: 100, color: 'purple' },
  { icon: Code, label: 'Development', progress: 75, color: 'blue' },
  { icon: Rocket, label: 'Testing', progress: 60, color: 'emerald' },
  { icon: CheckCircle2, label: 'Deploy', progress: 30, color: 'pink' }
];

const colorMap = {
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', gradient: 'from-purple-500 to-purple-600' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', gradient: 'from-blue-500 to-blue-600' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', gradient: 'from-emerald-500 to-emerald-600' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400', gradient: 'from-pink-500 to-pink-600' }
};

export function ProjectWorkflowTile() {
  return (
    <div className="h-full bg-[#161616] rounded-3xl border border-white/10 p-8 shadow-2xl shadow-black/40 hover:shadow-black/60 transition-shadow duration-500 group relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Current Pipeline</p>
          <h3 className="text-2xl text-white">Project Workflow</h3>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {workflowSteps.map((step, index) => {
            const colors = colorMap[step.color as keyof typeof colorMap];
            const Icon = step.icon;

            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="relative"
              >
                {/* Step Card */}
                <div className={`${colors.bg} border ${colors.border} rounded-2xl p-4 hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                  {/* Icon */}
                  <motion.div
                    className={`w-10 h-10 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center mb-3`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </motion.div>

                  {/* Label */}
                  <p className="text-white text-sm mb-3">{step.label}</p>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Progress</span>
                      <span className={colors.text}>{step.progress}%</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-1.5 bg-black/30 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full relative`}
                        initial={{ width: '0%' }}
                        animate={{ width: `${step.progress}%` }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ['-100%', '200%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 1
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Connector line (except for last item) */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-white/10 transform -translate-y-1/2" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
