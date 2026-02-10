import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Dumbbell, Music, Coffee, Award, Users, Clock } from 'lucide-react';
import TestimonialsCarousel from '@/components/social/TestimonialsCarousel';
import TrainerHighlights from '@/components/sections/TrainerHighlights';
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
            backgroundImage: 'url(/assets/generated/hero-indian-fitness.dim_1920x1080.png)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <h1 className="mb-8 text-5xl font-black uppercase tracking-tighter text-white md:text-7xl lg:text-8xl" style={{ fontStyle: 'italic', letterSpacing: '-0.02em' }}>
            BE YOUR <span className="text-white">BEST</span>
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button size="lg" className="gap-2 text-lg font-bold px-12 py-7 bg-green-accent hover:bg-green-accent/90 text-black">
                JOIN TODAY
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-black uppercase tracking-tight md:text-4xl text-foreground">
            Our <span className="text-green-accent">Services</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-foreground">
            Everything you need to achieve your fitness goals under one roof
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="group overflow-hidden border-border/40 bg-card hover:border-green-accent transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-accent/10">
                  <Dumbbell className="h-10 w-10 text-green-accent" />
                </div>
                <CardTitle className="text-2xl font-black uppercase text-foreground">Gym</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4 text-foreground">
                  State-of-the-art equipment, strength training, cardio zones, and expert guidance for all fitness levels.
                </CardDescription>
                <Link to="/programs">
                  <Button variant="ghost" className="gap-2 text-green-accent hover:text-green-accent">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-border/40 bg-card hover:border-green-accent transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-accent/10">
                  <Music className="h-10 w-10 text-green-accent" />
                </div>
                <CardTitle className="text-2xl font-black uppercase text-foreground">Zumba</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4 text-foreground">
                  High-energy dance fitness classes that make working out fun. Burn calories while dancing to great music.
                </CardDescription>
                <Link to="/programs">
                  <Button variant="ghost" className="gap-2 text-green-accent hover:text-green-accent">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-border/40 bg-card hover:border-green-accent transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-accent/10">
                  <Coffee className="h-10 w-10 text-green-accent" />
                </div>
                <CardTitle className="text-2xl font-black uppercase text-foreground">Café</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4 text-foreground">
                  Healthy nutrition options including protein shakes, smoothies, and balanced meal plans to fuel your fitness.
                </CardDescription>
                <Link to="/cafe">
                  <Button variant="ghost" className="gap-2 text-green-accent hover:text-green-accent">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-black uppercase tracking-tight md:text-4xl text-foreground">
            Why Choose <span className="text-green-accent">Indian Fitness</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-foreground">
            We're more than just a gym - we're your fitness family
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-accent/10">
                <Award className="h-8 w-8 text-green-accent" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Expert Trainers</h3>
              <p className="text-foreground">
                Certified professionals dedicated to helping you reach your goals safely and effectively.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-accent/10">
                <Users className="h-8 w-8 text-green-accent" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Unisex & Inclusive</h3>
              <p className="text-foreground">
                A welcoming environment for everyone, regardless of fitness level or background.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-accent/10">
                <Clock className="h-8 w-8 text-green-accent" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Flexible Hours</h3>
              <p className="text-foreground">
                Open early morning to late evening to fit your busy schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-black uppercase tracking-tight md:text-4xl text-foreground">
            Success <span className="text-green-accent">Stories</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-foreground">
            Real transformations from real members
          </p>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Trainers */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <TrainerHighlights />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight md:text-5xl text-foreground">
            Ready to <span className="text-green-accent">Transform</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground">
            Join Indian Fitness today and start your journey to a healthier, stronger you.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button size="lg" className="gap-2 text-lg font-bold px-12 py-7 bg-green-accent hover:bg-green-accent/90 text-black">
                Book Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/membership">
              <Button size="lg" variant="outline" className="gap-2 text-lg font-bold px-12 py-7 border-foreground text-foreground hover:bg-foreground hover:text-background">
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
