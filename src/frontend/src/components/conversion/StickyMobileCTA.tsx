import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle } from 'lucide-react';
import { MARKETING_CONFIG } from '@/config/marketing';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/40 bg-background/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-background/90 md:hidden">
      <div className="flex gap-2">
        <Link to="/contact" className="flex-1">
          <Button className="w-full gap-2 font-bold" size="lg">
            <Calendar className="h-5 w-5" />
            Book Trial
          </Button>
        </Link>
        <a
          href={`https://wa.me/${MARKETING_CONFIG.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button variant="outline" className="w-full gap-2 border-gold text-gold hover:bg-gold hover:text-background font-bold" size="lg">
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
}
