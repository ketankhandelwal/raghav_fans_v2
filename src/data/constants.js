/* ------------------------------------------------------------------ */
/* DATA                                                                 */
/* ------------------------------------------------------------------ */
export const PRODUCTS = [
  {
    id: 1,
    category: 'CEILING FANS',
    name: 'BUGATTI BLUE',
    subtitle: 'Premium Ceiling Fan',
    tagline: 'High-speed performance with elegant blue finish.',
    badges: ['bestseller'],
    rating: '4.8',
    ratingCount: '2414',
    colors: ['#1a1a1a', '#e0e0e0'],
    priceOld: null,
    price: 'Rs. 10,999',
    emi: null,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/ceiling_fans/CEILING+FANS/BUGATTI+BLUE.png',
    imageHover: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/ceiling_fans/CEILING+FANS/BUGATTI+BROWN.png',
  },
  {
    id: 2,
    category: 'HEATER',
    name: 'HALCYON',
    subtitle: 'Room Heater',
    tagline: 'Compact design with fast heating and safety protection.',
    badges: ['award'],
    rating: '4.9',
    ratingCount: '179',
    colors: ['#f48fb1', '#90caf9', '#a5d6a7', '#fff9c4'],
    priceOld: 'Rs. 2,700',
    price: 'Rs. 2,299',
    emi: 'or ₹766/Month',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HEATER/HALCYON.png',
    imageHover: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HEATER/004.png',
  },
  {
    id: 3,
    category: 'HOME APPLIANCES',
    name: 'AMAZE MG',
    subtitle: 'Mixer Grinder',
    tagline: 'Powerful motor with multi-purpose jars for daily use.',
    badges: ['new'],
    rating: '4.7',
    ratingCount: '3',
    colors: ['#1a1a1a', '#546e7a', '#e0e0e0', '#e57373'],
    priceOld: 'Rs. 2,408',
    price: 'Rs. 1,599',
    emi: 'or ₹533/Month',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/AMAZE+MG.png',
    imageHover: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/MAGIC+2.png',
  },
  {
    id: 4,
    category: 'TABLE FANS',
    name: 'FARMER',
    subtitle: 'Rechargeable Table Fan',
    tagline: 'Up to 17 hrs runtime with remote control & silent operation.',
    badges: ['new-gen'],
    rating: '4.8',
    ratingCount: '257',
    colors: ['#9e9e9e', '#f5f5f5', '#bdbdbd'],
    priceOld: 'Rs. 4,198',
    price: 'Rs. 3,099',
    emi: 'or ₹1033/Month',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/PEDESTAL+FANS/FARMER.png',
    imageHover: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/PEDESTAL+FANS/THUNDER.png',
  },
  {
    id: 5,
    category: 'AURIC',
    name: 'AURIC',
    subtitle: 'Cordless Vacuum Cleaner',
    tagline: '34kPa powerful suction with flexible stick design.',
    badges: ['bestseller', 'award'],
    rating: '4.7',
    ratingCount: '56',
    colors: [],
    priceOld: null,
    price: 'Rs. 19,999',
    emi: null,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AURIC/475A0726.png',
    imageHover: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AURIC/475A0732.png',
  },
  {
    id: 6,
    category: 'AIR COOLERS',
    name: 'COOLERS',
    subtitle: 'High Capacity Air Cooler',
    tagline: 'Powerful airflow with large water tank for long cooling.',
    badges: ['bestseller'],
    rating: '4.6',
    ratingCount: '112',
    colors: [],
    priceOld: 'Rs. 21,999',
    price: 'Rs. 19,999',
    emi: 'or ₹1666/Month',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/COOLERS/7.1.png',
    imageHover: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/COOLERS/2.png',
  },
  {
    id: 7,
    category: 'PEGASUS',
    name: 'SOFTY',
    subtitle: 'High-Speed Pedestal Fan',
    tagline: 'Adjustable height with strong air delivery.',
    badges: ['bestseller'],
    rating: '4.7',
    ratingCount: '89',
    colors: [],
    priceOld: null,
    price: 'Rs. 3,999',
    emi: null,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/PEGASUS/475A0646.png',
    imageHover: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/PEGASUS/SOFTY.png',
  },
  {
    id: 8,
    category: 'SERIES',
    name: 'SERIES',
    subtitle: 'High Performance Exhaust Fan',
    tagline: 'Efficient ventilation for kitchens and bathrooms.',
    badges: ['bestseller'],
    rating: '4.5',
    ratingCount: '64',
    colors: [],
    priceOld: null,
    price: 'Rs. 2,499',
    emi: null,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/SERIES/1.png',
    imageHover: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/SERIES/2.png',
  }
];

export const FAM_TABS_DATA = [
  {
    category: 'Fans',
    heroes: [
      'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
      'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    ]
  },
  {
    category: 'Kitchen Essentials',
    heroes: [
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&q=80',
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
      'https://images.unsplash.com/photo-1556911220-e15224bbaf47?w=600&q=80',
      'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=600&q=80',
    ]
  },
  {
    category: 'Vacuum Cleaners',
    heroes: [
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80',
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&q=80',
      'https://images.unsplash.com/photo-1563318991-64e7c3761dfa?w=600&q=80',
      'https://images.unsplash.com/photo-1509147814763-d47a0abcad49?w=600&q=80',
    ]
  },
  {
    category: 'Garment Care',
    heroes: [
      'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=600&q=80',
      'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=600&q=80',
      'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=600&q=80',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80',
    ]
  },
  {
    category: 'Heaters',
    heroes: [
      'https://images.unsplash.com/photo-1626245970176-02e088d8b672?w=600&q=80',
      'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?w=600&q=80',
      'https://images.unsplash.com/photo-1521334885634-954770305845?w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80',
    ]
  }
]

export const CATEGORIES = [
  {
    id: 1,
    name: 'Fans',
    count: 7,
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',
  },
  {
    id: 2,
    name: 'Kitchen\nEssentials',
    count: 4,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  },
  {
    id: 3,
    name: 'Vacuum\nCleaners',
    count: 3,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80',
  },
  {
    id: 4,
    name: 'Garment\nCare',
    count: 3,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
]

export const FAM_TABS = ['Fans', 'Kitchen Essentials', 'Vacuum Cleaners', 'Garment Care', 'Heaters']

export const IMAGE_BANNERS = [
  /* Keep existing banners or update images if needed */
  {
    id: 1,
    brand: 'HAVELLS',
    headline: 'Touching every aspect of your Home Life.',
    sub: 'Innovative range of Electrical products and Home appliances from Havells.',
    bg: '#c0111f',
    textColor: '#fff',
    large: true,
    logo: 'H',
    image: 'https://havells.com/media/wysiwyg/700x700_Pixel_1.jpg',
  },
  {
    id: 2,
    brand: 'LLOYD',
    headline: '— A HAVELLS Brand —',
    sub: '',
    bg: '#1a2f5e',
    textColor: '#fff',
    large: false,
    image: 'https://havells.com/media/wysiwyg/700x700_Pixel_1.jpg',
  },
  {
    id: 3,
    brand: 'HAVELLS',
    headline: 'Feel Beyond',
    sub: '',
    bg: '#f5c842',
    textColor: '#1a1a1a',
    large: false,
    image: 'https://havells.com/media/wysiwyg/700x700_Pixel_1.jpg',
  },
  {
    id: 4,
    brand: 'HAVELLS Crabtree',
    headline: 'Har Pal Ke Live Switch',
    sub: '',
    bg: '#1a2f5e',
    textColor: '#fff',
    large: false,
    image: 'https://havells.com/media/wysiwyg/700x700_Pixel_1.jpg',
  },
  {
    id: 5,
    brand: 'REO',
    headline: 'Trust Naam Mein. Perfect Kaam Mein.',
    sub: '',
    bg: '#e8f5e9',
    textColor: '#1a1a1a',
    large: false,
    image: 'https://havells.com/media/wysiwyg/700x700_Pixel_1.jpg',
  },
]

export const badgeLabel = (b) => ({
  bestseller: 'BESTSELLER',
  award: 'AWARD WINNER',
  new: 'NEW',
  'new-gen': 'NEW GEN',
}[b] || b.toUpperCase())
