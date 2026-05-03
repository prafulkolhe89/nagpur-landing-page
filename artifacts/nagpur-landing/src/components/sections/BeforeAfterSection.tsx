import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function BeforeAfterSection() {
  const beforePoints = [
    "No website",
    "Low visibility",
    "Few inquiries",
    "Only word-of-mouth"
  ];
  
  const afterPoints = [
    "Visible on Google",
    "Professional website",
    "More calls",
    "WhatsApp leads"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            From invisible to getting inquiries
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
          >
            <h3 className="text-xl font-bold text-gray-500 mb-6 uppercase tracking-wider text-center">Before</h3>
            <ul className="space-y-4">
              {beforePoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-3xl p-8 border border-green-100 shadow-md relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-green-200/50 rounded-full blur-2xl" />
            <h3 className="text-xl font-bold text-green-700 mb-6 uppercase tracking-wider text-center">After</h3>
            <ul className="space-y-4 relative z-10">
              {afterPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-900 font-bold">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
