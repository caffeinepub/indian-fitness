export const MARKETING_CONFIG = {
  whatsappNumber: '917073007238',
  phone: '7073007238',
  phoneFormatted: '+91 7073007238',
  email: 'Lavishkodwani18@gmail.com',
  address: '1st Floor K.J Tower Above B.O.B Bank Ajmer Road Kekri',
  city: 'Kekri',
  state: 'Rajasthan',
  postalCode: '',
  country: 'India',
  
  // Google Maps embed URL
  // TO UPDATE: Replace the URL below with the new Google Maps embed URL when provided
  // Get embed URL from Google Maps: Share > Embed a map > Copy HTML > Extract the src URL
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.082177513865436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
  
  // Location configuration
  // TO UPDATE: When changing location, update these fields along with googleMapsEmbedUrl above
  location: {
    // Display name for SEO and page titles
    displayName: 'Kekri',
    // Full location string for descriptions
    fullLocation: 'Kekri, Rajasthan',
    // Geo coordinates for structured data (latitude, longitude)
    // TO UPDATE: Replace with actual coordinates of the new location
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
