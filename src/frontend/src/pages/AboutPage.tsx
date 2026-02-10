import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Heart, Users, Award, Zap, Shield } from 'lucide-react';
import Seo from '@/components/seo/Seo';
import { MARKETING_CONFIG } from '@/config/marketing';

export default function AboutPage() {
  return (
    <>
      <Seo
        title={`About Indian Fitness - Our Mission & Values | ${MARKETING_CONFIG.location.displayName} Gym`}
        description={`Learn about Indian Fitness, ${MARKETING_CONFIG.location.fullLocation}'s premier unisex gym and fitness studio. Discover our mission, values, and commitment to inclusive fitness for all.`}
      />

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-black uppercase tracking-tight md:text-5xl">
            About <span className="text-gold">Indian Fitness</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            More than just a gym - we're a community dedicated to transforming lives through fitness, nutrition, and unwavering support.
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border/40 bg-card">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                  <Target className="h-8 w-8 text-gold" />
                </div>
                <CardTitle className="text-2xl font-black uppercase">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower every individual in {MARKETING_CONFIG.location.fullLocation} and beyond to achieve their fitness goals through world-class facilities, expert guidance, and a supportive community. We believe fitness is not a destination but a lifelong journey, and we're here to walk that path with you every step of the way.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 bg-card">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                  <Heart className="h-8 w-8 text-gold" />
                </div>
                <CardTitle className="text-2xl font-black uppercase">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become India's most trusted and inclusive fitness brand, setting new standards in health, wellness, and community building. We envision a future where fitness is accessible to all, regardless of age, gender, or background, creating a healthier, stronger nation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Indian Fitness */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-black uppercase tracking-tight md:text-4xl">
            Why Choose <span className="text-gold">Us</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border/40 bg-card/50">
              <CardHeader>
                <Award className="mb-2 h-10 w-10 text-gold" />
                <CardTitle className="text-xl font-bold">Premium Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  State-of-the-art machines and free weights from leading international brands, maintained to the highest standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 bg-card/50">
              <CardHeader>
                <Users className="mb-2 h-10 w-10 text-gold" />
                <CardTitle className="text-xl font-bold">Expert Trainers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Certified fitness professionals with specialized training in strength, conditioning, nutrition, and injury prevention.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 bg-card/50">
              <CardHeader>
                <Zap className="mb-2 h-10 w-10 text-gold" />
                <CardTitle className="text-xl font-bold">Diverse Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From strength training to Zumba, weight loss to muscle building - programs tailored to every goal and fitness level.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 bg-card/50">
              <CardHeader>
                <Shield className="mb-2 h-10 w-10 text-gold" />
                <CardTitle className="text-xl font-bold">Safe Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clean, well-maintained facilities with proper safety protocols and equipment sanitization after every use.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 bg-card/50">
              <CardHeader>
                <Heart className="mb-2 h-10 w-10 text-gold" />
                <CardTitle className="text-xl font-bold">Nutrition Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  On-site café with healthy meal options, protein shakes, and personalized nutrition guidance from our experts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 bg-card/50">
              <CardHeader>
                <Target className="mb-2 h-10 w-10 text-gold" />
                <CardTitle className="text-xl font-bold">Results-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Proven track record of member transformations with personalized goal-setting and progress tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Unisex & Inclusive */}
        <section className="mb-16">
          <Card className="border-gold/40 bg-gradient-to-br from-card to-gold/5">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold/20">
                <Users className="h-10 w-10 text-gold" />
              </div>
              <CardTitle className="text-3xl font-black uppercase">
                Unisex & <span className="text-gold">Inclusive</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                At Indian Fitness, we believe fitness knows no gender. Our unisex gym welcomes men and women equally, creating a respectful, supportive environment where everyone can train comfortably. We celebrate diversity and foster a community where all members - regardless of age, gender, fitness level, or background - feel valued and empowered to reach their goals.
              </p>
              <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
                <div>
                  <h3 className="mb-2 font-bold text-gold">Equal Access</h3>
                  <p className="text-sm text-muted-foreground">
                    All equipment, classes, and facilities are available to all members without restriction.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-gold">Respectful Culture</h3>
                  <p className="text-sm text-muted-foreground">
                    We maintain a zero-tolerance policy for discrimination and promote mutual respect.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-gold">Supportive Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Members support and motivate each other, creating lasting friendships and accountability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Location Info */}
        <section className="text-center">
          <h2 className="mb-4 text-2xl font-black uppercase">
            Visit Us in <span className="text-gold">{MARKETING_CONFIG.location.displayName}</span>
          </h2>
          <p className="text-muted-foreground">
            {MARKETING_CONFIG.address}
          </p>
          <p className="text-muted-foreground">
            {MARKETING_CONFIG.city}, {MARKETING_CONFIG.state}
          </p>
          <p className="text-muted-foreground">
            {MARKETING_CONFIG.country}
          </p>
          <p className="mt-2 text-muted-foreground">
            Phone: <a href={`tel:${MARKETING_CONFIG.phone}`} className="text-gold hover:underline">{MARKETING_CONFIG.phoneFormatted}</a>
          </p>
        </section>
      </div>
    </>
  );
}
