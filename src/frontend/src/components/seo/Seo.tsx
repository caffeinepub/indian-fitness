import { useEffect } from 'react';
import { MARKETING_CONFIG } from '@/config/marketing';
import { BRANDING } from '@/config/branding';

interface SeoProps {
  title: string;
  description: string;
}

export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [title, description]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SportsActivityLocation',
          name: 'Indian Fitness',
          description: `Premium unisex gym and fitness studio in ${MARKETING_CONFIG.location.displayName} offering strength training, Zumba classes, personal training, and a healthy café.`,
          image: BRANDING.logo.path,
          address: {
            '@type': 'PostalAddress',
            streetAddress: MARKETING_CONFIG.address,
            addressLocality: MARKETING_CONFIG.city,
            addressRegion: MARKETING_CONFIG.state,
            postalCode: MARKETING_CONFIG.postalCode,
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: MARKETING_CONFIG.location.geo.latitude,
            longitude: MARKETING_CONFIG.location.geo.longitude,
          },
          telephone: MARKETING_CONFIG.phoneFormatted,
          email: MARKETING_CONFIG.email,
          openingHoursSpecification: MARKETING_CONFIG.workingHours.openingHoursSpecification,
          priceRange: '₹₹',
          amenityFeature: [
            { '@type': 'LocationFeatureSpecification', name: 'Gym Equipment' },
            { '@type': 'LocationFeatureSpecification', name: 'Group Classes' },
            { '@type': 'LocationFeatureSpecification', name: 'Personal Training' },
            { '@type': 'LocationFeatureSpecification', name: 'Café' },
            { '@type': 'LocationFeatureSpecification', name: 'Locker Rooms' },
          ],
        }),
      }}
    />
  );
}
