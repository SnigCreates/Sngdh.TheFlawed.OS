import { ExternalLink, Rocket } from 'lucide-react';

const products = [
  {
    name: 'CareerOS',
    description: 'Career management operating system',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'FocusChat',
    description: 'Distraction-free communication',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'UniVerse',
    description: 'University collaboration platform',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
  },
];

export function LiveProducts() {
  return (
    <div className="h-full bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-2 mb-6">
        <Rocket className="w-5 h-5 text-orange-600" />
        <h3 className="text-2xl text-gray-900">Live Products</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <a
            key={index}
            href="#"
            className="group relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br hover:scale-[1.05] transition-all duration-300"
            style={{
              background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
            <div className={`absolute inset-0 ${product.bgColor}`}></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-gray-900">{product.name}</h4>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-sm text-gray-600">{product.description}</p>
              
              <div className={`mt-4 w-full h-1 bg-gradient-to-r ${product.color} rounded-full`}></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
