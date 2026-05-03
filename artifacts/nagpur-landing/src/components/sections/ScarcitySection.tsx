import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function ScarcitySection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-orange-500 text-white rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xl border border-orange-400"
        >
          <div className="bg-white/20 p-4 rounded-full shrink-0">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-1">Limited Availability</h3>
            <p className="text-orange-50 font-medium text-lg">
              ⚠️ Only 5 businesses onboarded per week to maintain quality.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
