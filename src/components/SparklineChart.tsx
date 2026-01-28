import { motion } from 'motion/react';

const dataPoints = [45, 52, 48, 65, 72, 78, 92];

export function SparklineChart() {
  const maxValue = Math.max(...dataPoints);
  const height = 60;
  const width = 200;
  const padding = 4;

  // Generate SVG path
  const points = dataPoints.map((value, index) => {
    const x = (index / (dataPoints.length - 1)) * width;
    const y = height - ((value / maxValue) * (height - padding * 2)) - padding;
    return `${x},${y}`;
  });

  const pathData = `M ${points.join(' L ')}`;

  // Generate area path
  const areaPoints = [
    `M 0,${height}`,
    `L ${points[0]}`,
    ...points.slice(1).map(point => `L ${point}`),
    `L ${width},${height}`,
    `Z`
  ].join(' ');

  return (
    <div className="relative w-full h-[60px]">
      <svg width="100%" height="60" viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        {/* Gradient definition */}
        <defs>
          <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <motion.path
          d={areaPoints}
          fill="url(#sparklineGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />

        {/* Line */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Data points */}
        {dataPoints.map((value, index) => {
          const x = (index / (dataPoints.length - 1)) * width;
          const y = height - ((value / maxValue) * (height - padding * 2)) - padding;
          
          return (
            <motion.circle
              key={index}
              cx={x}
              cy={y}
              r="3"
              fill="#10b981"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              className="cursor-pointer hover:r-4 transition-all"
            />
          );
        })}

        {/* Last point highlight */}
        <motion.circle
          cx={(dataPoints.length - 1) / (dataPoints.length - 1) * width}
          cy={height - ((dataPoints[dataPoints.length - 1] / maxValue) * (height - padding * 2)) - padding}
          r="5"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      </svg>
    </div>
  );
}
