import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle, Star, ShieldCheck, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF5] via-[#FFF3D6] to-background -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-6 border border-orange-200">
                <MapPin className="w-4 h-4" />
                <span>Exclusively for Nagpur Businesses</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                Get More Customers for Your Business in Nagpur <span className="inline-block">🚀</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
                People are searching for your service every day. But right now, they may be calling your competitors.
              </p>
              
              <div className="flex flex-col items-center lg:items-start gap-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    <MessageCircle className="w-6 h-6" />
                    Chat on WhatsApp
                  </button>
                </a>
                
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                  <span>Website + Google Presence + WhatsApp Leads</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Visual / Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm"
            >
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl -z-10" />
              
              <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden relative">
                {/* Browser bar */}
                <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-2 flex-1 bg-white rounded-md h-6 px-3 flex items-center shadow-sm">
                    <span className="text-[10px] text-gray-400">google.com/search?q=pandit+in+nagpur</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <span className="text-xl">🕉️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Pandit Service in Nagpur</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <span className="text-yellow-500 flex">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </span>
                        <span className="font-medium ml-1">5.0</span>
                        <span className="text-gray-400">(42)</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Open now • Closes 9 PM</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-blue-50 text-blue-700 py-2.5 rounded-xl text-center font-semibold text-sm border border-blue-100 flex flex-col items-center gap-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      Call Now
                    </div>
                    <div className="bg-green-50 text-green-700 py-2.5 rounded-xl text-center font-semibold text-sm border border-green-100 flex flex-col items-center gap-1">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-6 -bottom-6 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">+1</span>
                </div>
                <div className="pr-2">
                  <p className="text-xs text-gray-500 font-medium">New Inquiry</p>
                  <p className="text-sm font-bold text-gray-900">Just now</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
