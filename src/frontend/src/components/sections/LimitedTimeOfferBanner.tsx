import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Zap, ArrowRight } from 'lucide-react';

export default function LimitedTimeOfferBanner() {
  return (
    <section className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Zap className="h-6 w-6 text-gold" />
            <span className="text-sm font-bold uppercase tracking-wider text-gold">
              Limited Time Offer
            </span>
            <Zap className="h-6 w-6 text-gold" />
          </div>
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight md:text-4xl">
            Get <span className="text-gold">50% Off</span> Your First Month
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            New members only. Join this month and save big on your fitness journey. Offer ends soon!
          </p>
          <Link to="/contact">
            <Button size="lg" className="gap-2 text-lg font-bold px-8 py-6">
              Claim Your Offer
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
