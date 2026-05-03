import { motion } from "framer-motion";
import { CheckCircle2, Globe, MapPin, MessageCircle } from "lucide-react";

export default function SolutionSection() {
  const solutions = [
    {
      title: "Website that builds trust",
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      desc: "A beautiful, professional 1-page website that tells your story."
    },
    {
      title: "Google presence setup",
      icon: <MapPin className="w-8 h-8 text-orange-500" />,
      desc: "Get found when people search for your services locally."
    },
    {
      title: "WhatsApp lead system",
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      desc: "Customers can reach you instantly with one tap."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-[#FFFDF5]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            We fix this in just <span className="text-orange-500">5 - 10 days ⚡</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            No technical knowledge needed. Everything is done-for-you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
