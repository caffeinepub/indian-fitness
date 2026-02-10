import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar } from 'lucide-react';
import { MARKETING_CONFIG } from '@/config/marketing';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-3 md:hidden">
      <div className="flex gap-2">
        <Link to="/contact" className="flex-1">
          <Button className="w-full gap-2 bg-green-accent hover:bg-green-accent/90 text-black font-bold">
            <Calendar className="h-4 w-4" />
            Book Trial
          </Button>
        </Link>
        <a
          href={`https://wa.me/${MARKETING_CONFIG.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button variant="outline" className="w-full gap-2 border-green-accent text-green-accent hover:bg-green-accent hover:text-background font-bold">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
}
