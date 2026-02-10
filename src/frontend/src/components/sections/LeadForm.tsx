import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Loader2, MessageCircle, AlertCircle } from 'lucide-react';
import { useSubmitLead } from '@/hooks/useSubmitLead';
import { useActor } from '@/hooks/useActor';
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

  const { actor, isFetching: actorLoading } = useActor();
  const { mutate: submitLead, isPending, isSuccess, isError, error } = useSubmitLead();

  const isActorReady = !!actor && !actorLoading;
  const isSubmitDisabled = isPending || !isActorReady;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isActorReady) {
      return;
    }
    
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
      company: formData.phone,
      message: detailedMessage,
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      interest: '',
      preferredTime: '',
      message: '',
    });
  };

  if (isSuccess) {
    return (
      <Card className="border-primary bg-gradient-to-br from-card to-primary/5">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl text-foreground">Thank You!</CardTitle>
          <CardDescription className="text-base text-foreground">
            We've received your inquiry and will contact you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-card p-4 text-center">
            <p className="mb-2 text-sm text-foreground">
              Want to connect faster? Reach us on WhatsApp:
            </p>
            <a
              href={`https://wa.me/${MARKETING_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
          <Button
            variant="outline"
            onClick={handleReset}
            className="w-full text-foreground border-foreground hover:bg-foreground hover:text-background"
          >
            Submit Another Inquiry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Book Your Free Trial</CardTitle>
        <CardDescription className="text-foreground">
          Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isPending}
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              Phone / WhatsApp <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              disabled={isPending}
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isPending}
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest" className="text-foreground">
              I'm Interested In <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.interest}
              onValueChange={(value) => setFormData({ ...formData, interest: value })}
              required
              disabled={isPending}
            >
              <SelectTrigger id="interest" className="text-foreground">
                <SelectValue placeholder="Select a program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="strength-training">Strength Training</SelectItem>
                <SelectItem value="weight-loss">Weight Loss Program</SelectItem>
                <SelectItem value="zumba">Zumba Classes</SelectItem>
                <SelectItem value="personal-training">Personal Training</SelectItem>
                <SelectItem value="membership">General Membership</SelectItem>
                <SelectItem value="cafe">Café & Nutrition</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredTime" className="text-foreground">Preferred Contact Time</Label>
            <Select
              value={formData.preferredTime}
              onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
              disabled={isPending}
            >
              <SelectTrigger id="preferredTime" className="text-foreground">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (6 AM - 12 PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                <SelectItem value="evening">Evening (5 PM - 9 PM)</SelectItem>
                <SelectItem value="anytime">Anytime</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your fitness goals or any questions you have..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              disabled={isPending}
              className="text-foreground"
            />
          </div>

          {isError && (
            <div className="flex items-start gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
              <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <div>
                <p className="font-semibold">Submission Failed</p>
                <p className="text-xs">
                  {error?.message || 'Unable to submit your inquiry. Please try again or contact us directly.'}
                </p>
              </div>
            </div>
          )}

          {!isActorReady && (
            <div className="flex items-start gap-2 rounded-lg border border-muted bg-muted/20 p-3 text-sm text-foreground">
              <Loader2 className="mt-0.5 h-4 w-4 flex-shrink-0 animate-spin" />
              <p>Connecting to server...</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={isSubmitDisabled}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Inquiry'
            )}
          </Button>

          <p className="text-center text-xs text-foreground">
            By submitting this form, you agree to be contacted by our team.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
