import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Dumbbell, Music, Coffee, Award, Users, Clock } from 'lucide-react';
import TestimonialsCarousel from '@/components/social/TestimonialsCarousel';
import TrainerHighlights from '@/components/sections/TrainerHighlights';
import LimitedTimeOfferBanner from '@/components/sections/LimitedTimeOfferBanner';
import Seo from '@/components/seo/Seo';
import { MARKETING_CONFIG } from '@/config/marketing';

export default function HomePage() {
  return (
    <>
      <Seo
        title={`Indian Fitness - Premium Unisex Gym, Zumba & Café | ${MARKETING_CONFIG.location.displayName}`}
        description={`Transform your body at Indian Fitness - ${MARKETING_CONFIG.location.fullLocation}'s premier unisex gym offering strength training, Zumba classes, personal training, and a healthy café. Book your free trial today!`}
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/generated/hero-signage.dim_1920x1080.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <h1 className="mb-6 text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Start Your Transformation{' '}
            <span className="text-gold">Today</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Join {MARKETING_CONFIG.location.displayName}'s premier unisex fitness studio. Expert trainers, world-class equipment, and a supportive community await you.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button size="lg" className="gap-2 text-lg font-bold px-8 py-6">
                Book Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/membership">
              <Button size="lg" variant="outline" className="gap-2 text-lg font-bold border-gold text-gold hover:bg-gold hover:text-background px-8 py-6">
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-black uppercase tracking-tight md:text-4xl">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Everything you need to achieve your fitness goals under one roof
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="group overflow-hidden border-border/40 bg-card hover:border-gold transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
                  <Dumbbell className="h-10 w-10 text-gold" />
                </div>
                <CardTitle className="text-2xl font-black uppercase">Gym</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  State-of-the-art equipment, strength training, cardio zones, and expert guidance for all fitness levels.
                </CardDescription>
                <Link to="/programs">
                  <Button variant="ghost" className="gap-2 text-gold hover:text-gold">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-border/40 bg-card hover:border-gold transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
                  <Music className="h-10 w-10 text-gold" />
                </div>
                <CardTitle className="text-2xl font-black uppercase">Zumba</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  High-energy dance fitness classes that make working out fun. Burn calories while dancing to great music.
                </CardDescription>
                <Link to="/programs">
                  <Button variant="ghost" className="gap-2 text-gold hover:text-gold">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-border/40 bg-card hover:border-gold transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
                  <Coffee className="h-10 w-10 text-gold" />
                </div>
                <CardTitle className="text-2xl font-black uppercase">Café</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  Healthy nutrition bar with protein shakes, smoothies, and meal plans to fuel your fitness journey.
                </CardDescription>
                <Link to="/cafe">
                  <Button variant="ghost" className="gap-2 text-gold hover:text-gold">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limited Time Offer Banner */}
      <LimitedTimeOfferBanner />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-black uppercase tracking-tight md:text-4xl">
            Why Choose <span className="text-gold">Indian Fitness</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Expert Trainers</h3>
              <p className="text-muted-foreground">
                Certified professionals with years of experience in fitness and nutrition
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Unisex & Inclusive</h3>
              <p className="text-muted-foreground">
                A welcoming space for everyone, regardless of gender or fitness level
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <Clock className="h-8 w-8 text-gold" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Flexible Hours</h3>
              <p className="text-muted-foreground">
                Open 6 AM to 10 PM, 6 days a week to fit your busy schedule
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-black uppercase tracking-tight md:text-4xl">
            Success <span className="text-gold">Stories</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Real transformations from real people
          </p>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Trainer Highlights */}
      <TrainerHighlights />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight md:text-4xl">
            Ready to <span className="text-gold">Transform</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Join hundreds of members who have already started their fitness journey with us
          </p>
          <Link to="/contact">
            <Button size="lg" className="gap-2 text-lg font-bold px-8 py-6">
              Book Your Free Trial Now
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
