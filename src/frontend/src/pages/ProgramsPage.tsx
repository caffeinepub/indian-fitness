import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, TrendingDown, Music, User, ArrowRight } from 'lucide-react';
import Seo from '@/components/seo/Seo';
import { MARKETING_CONFIG } from '@/config/marketing';

export default function ProgramsPage() {
  return (
    <>
      <Seo
        title="Fitness Programs - Strength Training, Weight Loss, Zumba | Indian Fitness"
        description={`Explore our comprehensive fitness programs: strength training, weight loss, Zumba classes, and personal training. Expert-led programs for all fitness levels in ${MARKETING_CONFIG.location.fullLocation}.`}
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
                  <span>Accountability and support from trainers and community</span>
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

          {/* Zumba */}
          <Card className="border-border/40 bg-card hover:border-gold transition-all duration-300">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <Music className="h-8 w-8 text-gold" />
              </div>
              <CardTitle className="text-2xl font-black uppercase">Zumba Classes</CardTitle>
              <CardDescription className="text-base">
                Dance your way to fitness with high-energy group classes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Our Zumba classes combine Latin and international music with dance moves to create a dynamic, exciting, and effective fitness program. Burn calories while having fun!
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
                  <span>All fitness levels welcome - no dance experience needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Full-body cardio workout that doesn't feel like exercise</span>
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
                Get personalized attention and customized programming with our expert personal trainers. Perfect for those who want accelerated results, specific goals, or prefer individualized coaching.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Fully customized workout and nutrition plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Dedicated trainer focused solely on your progress</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Flexible scheduling to fit your lifestyle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Accountability, motivation, and expert guidance</span>
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
        <section className="mt-16 text-center">
          <h2 className="mb-4 text-3xl font-black uppercase">
            Ready to <span className="text-gold">Get Started</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Book a free trial to experience our programs firsthand and find the perfect fit for your fitness goals.
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
