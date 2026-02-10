import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Loader2, MessageCircle } from 'lucide-react';
import { useSubmitLead } from '@/hooks/useSubmitLead';
import { MARKETING_CONFIG } from '@/config/marketing';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    preferredTime: '',
    message: '',
  });

  const { mutate: submitLead, isPending, isSuccess, isError } = useSubmitLead();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct a detailed message with all form fields
    const detailedMessage = `
Interest: ${formData.interest || 'Not specified'}
Preferred Time: ${formData.preferredTime || 'Not specified'}
Phone/WhatsApp: ${formData.phone}
Message: ${formData.message || 'No additional message'}
    `.trim();

    submitLead({
      name: formData.name,
      email: formData.email || 'no-email@provided.com',
      company: formData.interest || 'General Inquiry',
      message: detailedMessage,
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSuccess) {
    return (
      <Card className="border-gold/40 bg-gradient-to-br from-card to-gold/5">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <CheckCircle2 className="mb-4 h-16 w-16 text-gold" />
          <h3 className="mb-2 text-2xl font-black uppercase">Thank You!</h3>
          <p className="mb-6 text-muted-foreground">
            We've received your trial booking request. Our team will contact you within 24 hours to confirm your session.
          </p>
          <a
            href={`https://wa.me/${MARKETING_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2 border-gold text-gold hover:bg-gold hover:text-background">
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </a>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/40 bg-card">
      <CardHeader>
        <CardTitle className="text-2xl font-black uppercase">Book Free Trial</CardTitle>
        <CardDescription>Fill out the form and we'll get back to you shortly</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
              disabled={isPending}
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone / WhatsApp Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              required
              disabled={isPending}
            />
          </div>

          <div>
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              disabled={isPending}
            />
          </div>

          <div>
            <Label htmlFor="interest">I'm Interested In *</Label>
            <Select
              value={formData.interest}
              onValueChange={(value) => handleChange('interest', value)}
              required
              disabled={isPending}
            >
              <SelectTrigger id="interest">
                <SelectValue placeholder="Select your interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Gym">Gym / Strength Training</SelectItem>
                <SelectItem value="Zumba">Zumba Classes</SelectItem>
                <SelectItem value="Weight Loss">Weight Loss Program</SelectItem>
                <SelectItem value="Personal Training">Personal Training</SelectItem>
                <SelectItem value="Café">Café / Nutrition</SelectItem>
                <SelectItem value="General">General Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="preferredTime">Preferred Time *</Label>
            <Select
              value={formData.preferredTime}
              onValueChange={(value) => handleChange('preferredTime', value)}
              required
              disabled={isPending}
            >
              <SelectTrigger id="preferredTime">
                <SelectValue placeholder="Select preferred time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Morning (5 AM - 9 AM)">Morning (5 AM - 9 AM)</SelectItem>
                <SelectItem value="Mid-Morning (9 AM - 12 PM)">Mid-Morning (9 AM - 12 PM)</SelectItem>
                <SelectItem value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</SelectItem>
                <SelectItem value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</SelectItem>
                <SelectItem value="Night (8 PM - 11 PM)">Night (8 PM - 11 PM)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Your Fitness Goals (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your fitness goals and any questions you have..."
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={4}
              disabled={isPending}
            />
          </div>

          {isError && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              Something went wrong. Please try again or contact us directly.
            </div>
          )}

          <Button type="submit" className="w-full gap-2 font-bold" size="lg" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Book My Free Trial'
            )}
          </Button>

          <div className="text-center">
            <p className="mb-2 text-sm text-muted-foreground">Or reach us directly:</p>
            <a
              href={`https://wa.me/${MARKETING_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2 border-gold text-gold hover:bg-gold hover:text-background" type="button">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
