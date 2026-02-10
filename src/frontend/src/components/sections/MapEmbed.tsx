import { Card, CardContent } from '@/components/ui/card';
import { MARKETING_CONFIG } from '@/config/marketing';

export default function MapEmbed() {
  return (
    <Card className="overflow-hidden border-border/40 bg-card">
      <CardContent className="p-0">
        <div className="aspect-video w-full">
          <iframe
            src={MARKETING_CONFIG.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Indian Fitness Location"
          />
        </div>
      </CardContent>
    </Card>
  );
}
