import { motion } from "framer-motion";
import { Search, MessageSquare, Globe2 } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Helping Nagpur businesses grow online
          </h2>
          <p className="text-lg text-gray-600">
            Built for local businesses that want more calls, more trust, and more visibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Google</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">WhatsApp</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
              <Globe2 className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Website</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
