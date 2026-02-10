import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import LeadForm from '@/components/sections/LeadForm';
import MapEmbed from '@/components/sections/MapEmbed';
import Seo from '@/components/seo/Seo';
import { MARKETING_CONFIG } from '@/config/marketing';

export default function ContactBookTrialPage() {
  return (
    <>
      <Seo
        title={`Contact Us & Book Free Trial - Indian Fitness Gym | ${MARKETING_CONFIG.location.displayName}`}
        description={`Book your free trial at Indian Fitness gym in ${MARKETING_CONFIG.location.fullLocation}. Contact us for membership inquiries, class schedules, and more. Visit us at ${MARKETING_CONFIG.address}.`}
      />

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-black uppercase tracking-tight md:text-5xl">
            Book Your <span className="text-gold">Free Trial</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Experience Indian Fitness firsthand. Fill out the form below to schedule your complimentary trial session.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <LeadForm />
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <Card className="border-border/40 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-black uppercase">Get in Touch</CardTitle>
                <CardDescription>We're here to help you start your fitness journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-sm text-muted-foreground">
                      {MARKETING_CONFIG.address}<br />
                      {MARKETING_CONFIG.city}, {MARKETING_CONFIG.state}<br />
                      {MARKETING_CONFIG.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href={`tel:${MARKETING_CONFIG.phone}`} className="text-sm text-gold hover:underline">
                      {MARKETING_CONFIG.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${MARKETING_CONFIG.email}`} className="text-sm text-gold hover:underline">
                      {MARKETING_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-sm text-muted-foreground">
                      {MARKETING_CONFIG.workingHours.displayLines.map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < MARKETING_CONFIG.workingHours.displayLines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <MapEmbed />
          </div>
        </div>
      </div>
    </>
  );
}
