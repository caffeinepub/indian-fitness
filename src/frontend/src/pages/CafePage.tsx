import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Droplets, UtensilsCrossed, ArrowRight, Leaf } from 'lucide-react';
import Seo from '@/components/seo/Seo';

export default function CafePage() {
  return (
    <>
      <Seo
        title="Fitness Café - Healthy Meals, Protein Shakes & Smoothies | Indian Fitness"
        description="Fuel your fitness with our healthy café. Fresh protein shakes, nutritious smoothies, and balanced meal plans. Located in Mumbai at Indian Fitness gym."
      />

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-black uppercase tracking-tight md:text-5xl">
            Fitness <span className="text-gold">Café</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Fuel your body with premium nutrition. Our café offers delicious, healthy options to complement your fitness journey.
          </p>
        </div>

        {/* Concept Section */}
        <section className="mb-16">
          <Card className="border-gold/40 bg-gradient-to-br from-card to-gold/5">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold/20">
                <Leaf className="h-10 w-10 text-gold" />
              </div>
              <CardTitle className="text-3xl font-black uppercase">
                Healthy Nutrition <span className="text-gold">Concept</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                At Indian Fitness Café, we believe that nutrition is 70% of your fitness success. That's why we've created a menu of delicious, nutrient-dense options that support your goals - whether you're building muscle, losing fat, or maintaining a healthy lifestyle. Every item is crafted with fresh, high-quality ingredients and designed by nutrition experts.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Menu Categories */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Protein Shakes */}
          <Card className="border-border/40 bg-card hover:border-gold transition-all duration-300">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <Coffee className="h-8 w-8 text-gold" />
              </div>
              <CardTitle className="text-2xl font-black uppercase">Protein Shakes</CardTitle>
              <CardDescription className="text-base">
                Premium protein blends for muscle recovery and growth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Our protein shakes use high-quality whey and plant-based proteins to help you recover faster and build lean muscle.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Chocolate Muscle Builder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Vanilla Power Shake</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Peanut Butter Blast</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Berry Protein Fusion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Banana Nut Recovery</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                25-30g protein per serving | Customizable with add-ons
              </p>
            </CardContent>
          </Card>

          {/* Smoothies */}
          <Card className="border-border/40 bg-card hover:border-gold transition-all duration-300">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <Droplets className="h-8 w-8 text-gold" />
              </div>
              <CardTitle className="text-2xl font-black uppercase">Fresh Smoothies</CardTitle>
              <CardDescription className="text-base">
                Nutrient-packed fruit and veggie blends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Fresh, natural smoothies loaded with vitamins, minerals, and antioxidants to fuel your day and support recovery.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Green Detox Smoothie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Tropical Energy Boost</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Berry Antioxidant Blast</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Mango Immunity Booster</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Açai Power Bowl (drinkable)</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                100% natural ingredients | No added sugar
              </p>
            </CardContent>
          </Card>

          {/* Meal Plans */}
          <Card className="border-border/40 bg-card hover:border-gold transition-all duration-300">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <UtensilsCrossed className="h-8 w-8 text-gold" />
              </div>
              <CardTitle className="text-2xl font-black uppercase">Meal Plans</CardTitle>
              <CardDescription className="text-base">
                Balanced, portion-controlled meals for your goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Pre-portioned, macro-balanced meals designed by nutritionists to support your specific fitness goals.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Grilled Chicken & Quinoa Bowl</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Paneer Tikka Protein Wrap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Salmon & Sweet Potato Plate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Egg White Veggie Omelette</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Custom Meal Plans Available</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Macro-balanced | Fresh daily | Customizable
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <section className="mt-16">
          <Card className="border-border/40 bg-card/50">
            <CardContent className="p-8">
              <h2 className="mb-6 text-center text-2xl font-black uppercase">
                Why Our <span className="text-gold">Café</span>?
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <h3 className="mb-2 font-bold text-gold">Fresh Daily</h3>
                  <p className="text-sm text-muted-foreground">
                    All items prepared fresh every day with no preservatives or artificial ingredients
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 font-bold text-gold">Expert Designed</h3>
                  <p className="text-sm text-muted-foreground">
                    Menu created by certified nutritionists to support your fitness goals
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 font-bold text-gold">Convenient</h3>
                  <p className="text-sm text-muted-foreground">
                    Located right inside the gym - grab your post-workout nutrition immediately
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <h2 className="mb-4 text-3xl font-black uppercase">
            Ready to Fuel Your <span className="text-gold">Fitness</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Visit our café during your next workout or book a trial to experience our full range of services.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button size="lg" className="gap-2 text-lg font-bold px-8 py-6">
                Book a Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="gap-2 text-lg font-bold border-gold text-gold hover:bg-gold hover:text-background px-8 py-6">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
