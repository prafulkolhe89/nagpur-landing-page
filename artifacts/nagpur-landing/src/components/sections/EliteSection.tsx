import { motion } from "framer-motion";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const features = [
  "Fully Customized Website (No Templates, Built for Your Business)",
  "Custom Features & Smart Business Logic",
  "Dedicated Admin Panel / Dashboard Access",
  "Complete Lead Management System (Track Every Inquiry)",
  "WhatsApp, Forms & Automation Setup",
  "Advanced SEO + Local Ranking Strategy",
  "Google, Maps & Analytics Integration",
  "Lightning Fast, Mobile-First Experience",
  "Built to Scale (Future Upgrades Ready)",
  "Dedicated Support & Priority Execution",
];

export default function EliteSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FFFDF5]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-[2rem] overflow-hidden border-2 border-orange-400 shadow-2xl">
            {/* Top gradient banner */}
            <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-sm uppercase tracking-widest">Elite Plan</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  For businesses ready to scale,<br className="hidden sm:block" /> not just exist online
                </h2>
              </div>
              <div className="shrink-0 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-4 text-center">
                <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">Pricing</p>
                <p className="text-white font-extrabold text-xl leading-tight">Custom</p>
                <p className="text-white/80 text-xs mt-0.5">Tailored to your needs</p>
              </div>
            </div>

            {/* Features grid */}
            <div className="bg-white px-8 py-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <MessageCircle className="w-6 h-6" />
                  Discuss Your Elite Project
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
