import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';
import { COACHES } from '@/config/coaches';

export default function TrainerHighlights() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-black uppercase tracking-tight md:text-4xl">
          Meet Our <span className="text-gold">Expert Coaches</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Certified professionals dedicated to helping you achieve your fitness goals
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {COACHES.map((coach) => (
            <Card key={coach.name} className="border-border/40 bg-card hover:border-gold transition-all duration-300">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                  <Award className="h-8 w-8 text-gold" />
                </div>
                <CardTitle className="text-xl font-bold">{coach.name}</CardTitle>
                <CardDescription className="text-gold">{coach.specialty}</CardDescription>
              </CardHeader>
              <CardContent>
                {coach.experience && (
                  <p className="mb-2 text-sm font-semibold text-muted-foreground">
                    Experience: {coach.experience}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
