import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "₹5,999",
      period: "/year",
      desc: "Perfect to get started",
      features: [
        "1-page website",
        "Call + WhatsApp button",
        "Mobile optimized"
      ],
      isPopular: false
    },
    {
      name: "Growth",
      price: "₹11,999",
      period: "/year",
      desc: "Best for regular leads",
      features: [
        "3–5 pages website",
        "Google Business optimization",
        "WhatsApp lead capture",
        "Contact form"
      ],
      isPopular: true
    },
    {
      name: "Premium",
      price: "₹19,999",
      period: "/year",
      desc: "For serious growth",
      features: [
        "Full website",
        "Advanced SEO",
        "Google setup",
        "Review system",
        "Priority support"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose your growth plan
          </h2>
          <p className="text-lg text-gray-600">Simple, transparent pricing for local businesses.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.isPopular 
                  ? "bg-gradient-to-b from-orange-50 to-white border-2 border-orange-400 shadow-xl md:-translate-y-4" 
                  : "bg-white border border-gray-200 shadow-md"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" /> MOST POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 font-medium">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.isPopular ? "text-orange-500" : "text-green-500"}`} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button 
                  size="lg" 
                  className={`w-full rounded-xl font-bold text-lg h-14 ${
                    plan.isPopular 
                      ? "bg-orange-500 hover:bg-orange-600 text-white" 
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
