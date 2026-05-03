import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyWhatsAppCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-border z-50 md:hidden animate-in slide-in-from-bottom-full duration-500">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block">
        <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full shadow-lg gap-2 text-lg h-14">
          <MessageCircle className="w-6 h-6" />
          Chat on WhatsApp
        </Button>
      </a>
    </div>
  );
}
