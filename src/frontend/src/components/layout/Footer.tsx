import { Link } from '@tanstack/react-router';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { BRANDING } from '@/config/branding';
import { MARKETING_CONFIG } from '@/config/marketing';

export default function Footer() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'unknown-app';

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <img
                src={BRANDING.logo.path}
                alt={BRANDING.logo.alt}
                className="h-10 w-10"
              />
              <span className="text-lg font-bold text-green-accent">{BRANDING.companyName}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium unisex gym & fitness studio. Transform your body, elevate your life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-green-accent">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-green-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-green-accent transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-muted-foreground hover:text-green-accent transition-colors">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link to="/cafe" className="text-muted-foreground hover:text-green-accent transition-colors">
                  Café
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-green-accent">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{MARKETING_CONFIG.address}</li>
              <li>{MARKETING_CONFIG.city}, {MARKETING_CONFIG.state}</li>
              <li>{MARKETING_CONFIG.country}</li>
              <li className="pt-2">
                <a href={`tel:${MARKETING_CONFIG.phone}`} className="hover:text-green-accent transition-colors">
                  {MARKETING_CONFIG.phoneFormatted}
                </a>
              </li>
              <li>
                <a href={`mailto:${MARKETING_CONFIG.email}`} className="hover:text-green-accent transition-colors">
                  {MARKETING_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-green-accent">
              Follow Us
            </h3>
            <div className="mb-4 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-accent transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-accent transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-accent transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Hours</p>
              {MARKETING_CONFIG.workingHours.displayLines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()}. Built with <Heart className="inline h-4 w-4 text-green-accent" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
