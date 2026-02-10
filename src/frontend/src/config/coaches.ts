export interface Coach {
  name: string;
  specialty: string;
  experience?: string;
}

export const COACHES: Coach[] = [
  {
    name: 'Lavesh Kodwani',
    specialty: 'Strength, Conditioning, Weight Loss & Nutrition Expert',
    experience: '8+ years',
  },
  {
    name: 'Hemraj Dhakar',
    specialty: 'Strength, Weight Loss',
    experience: '3+ Years',
  },
  {
    name: 'Ishika Sahu',
    specialty: 'Zumba & Dance Fitness',
  },
];
