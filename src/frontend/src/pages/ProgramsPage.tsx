import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, TrendingDown, Music, User, ArrowRight } from 'lucide-react';
import Seo from '@/components/seo/Seo';

export default function ProgramsPage() {
  return (
    <>
      <Seo
        title="Fitness Programs - Strength Training, Weight Loss, Zumba | Indian Fitness"
        description="Explore our comprehensive fitness programs: strength training, weight loss, Zumba classes, and personal training. Expert-led programs for all fitness levels in Mumbai."
      />

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-black uppercase tracking-tight md:text-5xl">
            Our <span className="text-gold">Programs</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Comprehensive fitness programs designed by experts to help you achieve your goals, whether you're building strength, losing weight, or just having fun.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Strength Training */}
          <Card className="border-border/40 bg-card hover:border-gold transition-all duration-300">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <Dumbbell className="h-8 w-8 text-gold" />
              </div>
              <CardTitle className="text-2xl font-black uppercase">Strength Training</CardTitle>
              <CardDescription className="text-base">
                Build muscle, increase power, and transform your physique
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Our strength training program combines compound movements, progressive overload, and expert coaching to help you build lean muscle mass and increase overall strength. Perfect for beginners and advanced lifters alike.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Free weights, machines, and functional training equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Personalized workout plans based on your goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Form correction and technique guidance from certified trainers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Progressive programs for continuous improvement</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full gap-2 font-bold">
                  Start Strength Training
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Weight Loss */}
          <Card className="border-border/40 bg-card hover:border-gold transition-all duration-300">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <TrendingDown className="h-8 w-8 text-gold" />
              </div>
              <CardTitle className="text-2xl font-black uppercase">Weight Loss</CardTitle>
              <CardDescription className="text-base">
                Shed fat, boost metabolism, and achieve your ideal body
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Our scientifically-designed weight loss program combines cardio, resistance training, and nutrition guidance to help you lose fat sustainably while maintaining muscle mass. Get results that last.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>High-intensity interval training (HIIT) and cardio zones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Customized nutrition plans and meal guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Body composition tracking and progress monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Accountability and motivation from our expert team</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full gap-2 font-bold">
                  Start Weight Loss Journey
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Zumba & Group Classes */}
          <Card className="border-border/40 bg-card hover:border-gold transition-all duration-300">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <Music className="h-8 w-8 text-gold" />
              </div>
              <CardTitle className="text-2xl font-black uppercase">Zumba & Group Classes</CardTitle>
              <CardDescription className="text-base">
                Dance, sweat, and have fun while getting fit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Join our high-energy Zumba and group fitness classes where working out feels like a party! Burn calories, improve coordination, and make friends while dancing to infectious rhythms from around the world.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Multiple class times throughout the week</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Certified Zumba instructors with infectious energy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Suitable for all fitness levels - no dance experience needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Supportive group atmosphere and community vibes</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full gap-2 font-bold">
                  Join Zumba Classes
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Personal Training */}
          <Card className="border-border/40 bg-card hover:border-gold transition-all duration-300">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <User className="h-8 w-8 text-gold" />
              </div>
              <CardTitle className="text-2xl font-black uppercase">Personal Training</CardTitle>
              <CardDescription className="text-base">
                One-on-one coaching tailored to your unique goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Get undivided attention from our certified personal trainers who will design a completely customized program for your specific goals, fitness level, and lifestyle. Accelerate your results with expert guidance.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Fully personalized workout and nutrition plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>One-on-one sessions with certified trainers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Flexible scheduling to fit your busy lifestyle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Faster results with accountability and expert motivation</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full gap-2 font-bold">
                  Book Personal Training
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <section className="mt-16 rounded-lg bg-gradient-to-br from-card to-gold/5 p-8 text-center md:p-12">
          <h2 className="mb-4 text-3xl font-black uppercase">
            Not Sure Which Program is <span className="text-gold">Right for You?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Book a free consultation with our fitness experts. We'll assess your goals, fitness level, and preferences to recommend the perfect program for you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gap-2 text-lg font-bold px-8 py-6">
              Book Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </section>
      </div>
    </>
  );
}
