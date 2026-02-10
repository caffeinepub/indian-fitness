import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: 'Amit Verma',
      role: 'Software Engineer',
      image: '👨‍💼',
      rating: 5,
      text: 'Lost 15 kg in 4 months! The trainers are incredibly supportive and the facilities are top-notch. Best decision I made for my health.',
    },
    {
      name: 'Sneha Reddy',
      role: 'Marketing Manager',
      image: '👩‍💼',
      rating: 5,
      text: 'The Zumba classes are so much fun! I actually look forward to working out now. The community here is amazing and welcoming.',
    },
    {
      name: 'Rahul Kapoor',
      role: 'Entrepreneur',
      image: '👨‍💻',
      rating: 5,
      text: 'Gained 8 kg of muscle with their strength training program. The personal trainers really know their stuff. Highly recommend!',
    },
    {
      name: 'Priya Desai',
      role: 'Teacher',
      image: '👩‍🏫',
      rating: 5,
      text: 'As a woman, I feel completely safe and comfortable here. The unisex environment is respectful and the staff is professional.',
    },
    {
      name: 'Vikram Singh',
      role: 'Doctor',
      image: '👨‍⚕️',
      rating: 5,
      text: 'The café is a game-changer! Healthy post-workout meals right at the gym. Nutrition and fitness under one roof - perfect!',
    },
  ];

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="mx-auto w-full max-w-5xl"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full border-border/40 bg-card">
              <CardContent className="flex flex-col p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
