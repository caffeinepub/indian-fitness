import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PlanComparisonTable() {
  const features = [
    { name: 'Full Gym Access', monthly: true, quarterly: true, halfYearly: true, annually: true },
    { name: 'All Group Classes', monthly: true, quarterly: true, halfYearly: true, annually: true },
    { name: 'Locker Facility', monthly: true, quarterly: true, halfYearly: true, annually: true },
    { name: 'Basic Fitness Assessment', monthly: true, quarterly: true, halfYearly: true, annually: true },
    { name: 'Personal Training Sessions', monthly: false, quarterly: '2 sessions', halfYearly: '2 sessions', annually: '8 sessions' },
    { name: 'Nutrition Consultation', monthly: false, quarterly: true, halfYearly: true, annually: 'Monthly' },
    { name: 'Body Composition Analysis', monthly: false, quarterly: true, halfYearly: true, annually: 'Quarterly' },
    { name: 'Café Discount', monthly: '10%', quarterly: '15%', halfYearly: '15%', annually: '20%' },
    { name: 'Priority Class Booking', monthly: false, quarterly: true, halfYearly: true, annually: true },
    { name: 'Guest Passes', monthly: false, quarterly: false, halfYearly: false, annually: '2/month' },
    { name: 'Exclusive Member Events', monthly: false, quarterly: false, halfYearly: false, annually: true },
  ];

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="mx-auto h-5 w-5 text-gold" />
      ) : (
        <X className="mx-auto h-5 w-5 text-muted-foreground/30" />
      );
    }
    return <span className="text-sm font-semibold text-gold">{value}</span>;
  };

  return (
    <Card className="border-border/40 bg-card overflow-hidden">
      <CardContent className="p-0">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border/40">
                <TableHead className="w-1/3 font-bold">Feature</TableHead>
                <TableHead className="text-center font-bold">Monthly</TableHead>
                <TableHead className="text-center font-bold text-gold">Quarterly</TableHead>
                <TableHead className="text-center font-bold">Half-yearly</TableHead>
                <TableHead className="text-center font-bold">Annually</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.name} className="border-border/40">
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">{renderCell(feature.monthly)}</TableCell>
                  <TableCell className="bg-gold/5 text-center">{renderCell(feature.quarterly)}</TableCell>
                  <TableCell className="text-center">{renderCell(feature.halfYearly)}</TableCell>
                  <TableCell className="text-center">{renderCell(feature.annually)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Stacked View */}
        <div className="md:hidden space-y-6 p-4">
          {['monthly', 'quarterly', 'halfYearly', 'annually'].map((plan) => (
            <div key={plan} className={`rounded-lg border p-4 ${plan === 'quarterly' ? 'border-gold bg-gold/5' : 'border-border/40'}`}>
              <h3 className="mb-4 text-center text-xl font-black uppercase">
                {plan === 'quarterly' && <span className="text-gold">★ </span>}
                {plan === 'halfYearly' ? 'Half-yearly' : plan.charAt(0).toUpperCase() + plan.slice(1)}
                {plan === 'quarterly' && <span className="text-gold"> ★</span>}
              </h3>
              <div className="space-y-2">
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{feature.name}</span>
                    <span>{renderCell(feature[plan as keyof typeof feature] as boolean | string)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
