export const MARKETING_CONFIG = {
  whatsappNumber: '917073007238',
  phone: '7073007238',
  phoneFormatted: '+91 7073007238',
  email: 'Lavishkodwani18@gmail.com',
  address: '1st Floor K.J Tower Above B.O.B Bank Ajmer Road Kekri',
  city: 'Kekri',
  state: 'Rajasthan',
  postalCode: '305404',
  country: 'India',
  
  // Google Maps embed URL
  // Updated to show the correct location for Indian Fitness in Kekri
  // Location: 1st Floor K.J Tower Above B.O.B Bank Ajmer Road Kekri, Rajasthan
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.8234567890123!2d75.14166!3d25.97667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU4JzM2LjAiTiA3NcKwMDgnMzAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
  
  // Location configuration
  // Updated for Indian Fitness location in Kekri, Rajasthan
  location: {
    // Display name for SEO and page titles
    displayName: 'Kekri',
    // Full location string for descriptions
    fullLocation: 'Kekri, Rajasthan',
    // Geo coordinates for structured data (latitude, longitude)
    // Coordinates for Kekri, Rajasthan, India
    geo: {
      latitude: '25.9767',
      longitude: '75.1439',
    },
  },
  
  // Working hours configuration
  workingHours: {
    // UI display lines
    displayLines: [
      'Mon-Sat: 6:00 AM - 10:00 PM',
      'Sunday: Closed',
    ],
    // Schema.org structured data
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '06:00',
        closes: '22:00',
      },
      // Sunday is closed - represented by omitting opens/closes
    ],
  },
};
