import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-gray-900 text-white rounded-t-[3rem] mt-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Start Getting Customers Today
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto">
              Don't lose another customer to competitors. We'll handle everything so you can focus on your business.
            </p>
            
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-10 h-16 text-xl font-bold shadow-xl shadow-green-900/20 gap-3">
                <MessageCircle className="w-6 h-6" />
                Send 'Hi' on WhatsApp
              </Button>
            </a>
          </motion.div>
          
          <div className="mt-20 pt-8 border-t border-gray-800 text-gray-500 font-medium flex items-center justify-center gap-2">
            <span className="text-orange-500">❤️</span> Made for local businesses in Nagpur.
          </div>
        </div>
      </div>
    </section>
  );
}
