import { motion } from "framer-motion";
import { AlertCircle, XCircle } from "lucide-react";

export default function PainSection() {
  const painPoints = [
    "No website",
    "Not visible on Google",
    "No easy WhatsApp contact"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your business may be <span className="text-red-500">invisible</span> online
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              People search daily for: <strong className="text-gray-900 bg-orange-100 px-2 py-1 rounded">"Pandit in Nagpur"</strong>, <strong className="text-gray-900 bg-orange-100 px-2 py-1 rounded">"best corrugated box manufacturers in nagpur"</strong>, <strong className="text-gray-900 bg-orange-100 px-2 py-1 rounded">"Best local service near me"</strong>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-10 text-left mb-10 shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              But they don't find you because:
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-red-50 font-medium text-gray-700">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-orange-100 text-orange-800 px-6 py-4 rounded-2xl font-bold shadow-sm border border-orange-200"
          >
            <AlertCircle className="w-6 h-6 shrink-0" />
            <span className="text-left sm:text-center text-sm sm:text-base">Every day you delay, customers go somewhere else.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
