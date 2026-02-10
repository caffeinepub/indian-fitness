import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Zap } from 'lucide-react';
import PlanComparisonTable from '@/components/sections/PlanComparisonTable';
import Seo from '@/components/seo/Seo';
import { MARKETING_CONFIG } from '@/config/marketing';

export default function MembershipPlansPage() {
  return (
    <>
      <Seo
        title={`Membership Plans & Pricing - Join Indian Fitness Gym | ${MARKETING_CONFIG.location.displayName}`}
        description={`Flexible membership plans for every budget. Choose from monthly, quarterly, half-yearly, or annually gym memberships in ${MARKETING_CONFIG.location.fullLocation}. Special offers available. Join Indian Fitness today!`}
      />

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-black uppercase tracking-tight md:text-5xl">
            Membership <span className="text-gold">Plans</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Flexible plans designed to fit your lifestyle and budget. All plans include full gym access, group classes, and expert support.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Monthly Plan */}
          <Card className="border-border/40 bg-card hover:border-gold transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-black uppercase">Monthly</CardTitle>
              <CardDescription>Perfect for trying us out</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-black text-gold">₹1,999</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Full gym access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">All group classes (Zumba, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Locker facility</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Basic fitness assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">10% café discount</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full gap-2 font-bold">
                  Join Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Quarterly Plan - Popular */}
          <Card className="relative border-gold bg-gradient-to-br from-card to-gold/5 shadow-lg shadow-gold/20 md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase text-background">
                <Zap className="h-3 w-3" />
                Most Popular
              </div>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-black uppercase">Quarterly</CardTitle>
              <CardDescription>Best value for committed members</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-black text-gold">₹4,999</span>
                <span className="text-muted-foreground">/3 months</span>
              </div>
              <p className="text-xs text-gold">Save ₹1,000!</p>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Everything in Monthly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">2 personal training sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Nutrition consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Body composition analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">15% café discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Priority class booking</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full gap-2 font-bold">
                  Join Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Half-yearly Plan */}
          <Card className="border-border/40 bg-card hover:border-gold transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-black uppercase">Half-yearly</CardTitle>
              <CardDescription>Great for long-term commitment</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-black text-gold">₹8,999</span>
                <span className="text-muted-foreground">/6 months</span>
              </div>
              <p className="text-xs text-gold">Save ₹3,000!</p>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Everything in Quarterly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">2 personal training sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Nutrition consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Body composition analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">15% café discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Priority class booking</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full gap-2 font-bold">
                  Join Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Annually Plan */}
          <Card className="border-border/40 bg-card hover:border-gold transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-black uppercase">Annually</CardTitle>
              <CardDescription>Maximum savings & benefits</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-black text-gold">₹14,999</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <p className="text-xs text-gold">Save ₹9,000!</p>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Everything in Quarterly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">8 personal training sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Monthly nutrition check-ins</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Quarterly body scans</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">20% café discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Guest passes (2/month)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm">Exclusive member events</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full gap-2 font-bold">
                  Join Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-black uppercase">
            Compare <span className="text-gold">Plans</span>
          </h2>
          <PlanComparisonTable />
        </section>

        {/* Additional Info */}
        <section className="mb-16">
          <Card className="border-border/40 bg-card/50">
            <CardContent className="p-8">
              <h2 className="mb-6 text-center text-2xl font-black uppercase">
                All Plans <span className="text-gold">Include</span>
              </h2>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="text-center">
                  <h3 className="mb-2 font-bold text-gold">No Hidden Fees</h3>
                  <p className="text-sm text-muted-foreground">
                    Transparent pricing with no surprise charges
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 font-bold text-gold">Flexible Timings</h3>
                  <p className="text-sm text-muted-foreground">
                    Access during all operating hours, 6 days a week
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 font-bold text-gold">Clean Facilities</h3>
                  <p className="text-sm text-muted-foreground">
                    Sanitized equipment and well-maintained spaces
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 font-bold text-gold">Expert Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Certified trainers available during all hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="mb-4 text-3xl font-black uppercase">
            Still Have <span className="text-gold">Questions</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Book a free trial to tour our facility, meet our trainers, and find the perfect plan for your goals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gap-2 text-lg font-bold px-8 py-6">
              Book Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </section>
      </div>
    </>
  );
}
