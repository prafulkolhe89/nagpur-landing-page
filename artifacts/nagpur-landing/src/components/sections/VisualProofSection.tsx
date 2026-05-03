import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export default function VisualProofSection() {
  return (
    <section className="py-20 bg-orange-50/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            This is how your business can look
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Professional. Trustworthy. Easy to contact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Pandit Site Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
          >
            {/* Browser Header */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            
            {/* Page Content */}
            <div className="flex-1 bg-[#FFF8F0] p-6 relative">
              <div className="flex justify-between items-center mb-8">
                <div className="font-bold text-orange-800 text-xl tracking-tight">Shree<span className="text-orange-500">Puja</span></div>
                <div className="w-8 h-8 rounded bg-orange-200" />
              </div>
              
              <div className="max-w-[80%]">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl mb-4">🕉️</div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3">Authentic Pandit Services in Nagpur</h3>
                <div className="h-2 w-16 bg-orange-400 rounded-full mb-6" />
                <p className="text-sm text-gray-600 mb-6">Expert pandits for Vastu Shanti, Griha Pravesh, and all spiritual needs.</p>
                
                <div className="flex gap-3">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="bg-white text-gray-800 border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              {/* Decorative image placeholder */}
              <div className="absolute right-0 bottom-0 w-32 h-40 bg-gradient-to-tl from-orange-200 to-transparent rounded-tl-full opacity-50" />
            </div>
            <div className="p-4 bg-white border-t border-gray-100 text-center text-sm font-semibold text-gray-500">
              Pandit Service Website
            </div>
          </motion.div>

          {/* Tiffin Site Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
          >
            {/* Browser Header */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            
            {/* Page Content */}
            <div className="flex-1 bg-[#F5FBF7] p-6 relative">
              <div className="flex justify-between items-center mb-8">
                <div className="font-bold text-green-800 text-xl tracking-tight">Ghar<span className="text-green-500">Ka</span>Khana</div>
                <div className="w-8 h-8 rounded bg-green-200" />
              </div>
              
              <div className="max-w-[80%]">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4">🍱</div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3">Fresh, Healthy Tiffin Delivery</h3>
                <div className="h-2 w-16 bg-green-400 rounded-full mb-6" />
                <p className="text-sm text-gray-600 mb-6">Home-cooked meals delivered daily across Nagpur. Pure veg options available.</p>
                
                <div className="flex gap-3">
                  <div className="bg-green-500 text-white rounded-full px-5 py-2 font-medium text-sm flex items-center gap-2 shadow-md">
                    <MessageCircle className="w-4 h-4" /> Book Tiffin
                  </div>
                </div>
              </div>
              
              {/* Decorative image placeholder */}
              <div className="absolute right-0 bottom-0 w-32 h-40 bg-gradient-to-tl from-green-200 to-transparent rounded-tl-full opacity-50" />
            </div>
            <div className="p-4 bg-white border-t border-gray-100 text-center text-sm font-semibold text-gray-500">
              Tiffin Service Website
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
