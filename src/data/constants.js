/* ------------------------------------------------------------------ */
/* DATA                                                                 */
/* ------------------------------------------------------------------ */
export const PRODUCTS = [
  {
    id: 1,
    category: 'FANS',
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
    category: 'HOME APPLIANCES',
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
    category: 'FANS',
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
    category: 'HOME APPLIANCES',
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
    category: 'COOLERS',
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
    category: 'SWITCHES & SOCKETS',
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
    category: 'FANS',
    heroes: [
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/ceiling_fans/CEILING+FANS/PILOT+SB.png',
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/ceiling_fans/CEILING+FANS/PILOT+BLUE.png',
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/ceiling_fans/CEILING+FANS/VENTI.png',
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/ceiling_fans/CEILING+FANS/FRESH+AIR.png',
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/PEDESTAL+FANS/AMPHAN.png",
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/PEDESTAL+FANS/CYCLONE.png"
    ]
  },
  {
    category: 'HOME APPLIANCES',
    heroes: [
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HEATER/004.png',
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HEATER/11.png',
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HEATER/HALCYON.png',
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HEATER/immersion+cu..png',
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HEATER/SUMO+STRONG+PLUS.png",
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/AMAZE+MG.png",
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/AMAZER+GAS.png",
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/VIVO.png",
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/WARMER+GAS+GEYSER.png"
    ]
  },
  {
    category: 'SERIES',
    heroes: [
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/SERIES/1.png',
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/SERIES/2.png',
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/SERIES/BLACK+SILVER.png',
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/SERIES/BLACK.png',
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/SERIES/LEATHER.png",
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/SERIES/WHITE+BLACK.png",
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/SERIES/WHITE+SILVER.png"
    ]
  },
  {
    category: 'COOLERS',
    heroes: [
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/COOLERS/1.1.png',
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/COOLERS/2.png',
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/COOLERS/3.png",
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/COOLERS/4.png',
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/COOLERS/6.png",
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/COOLERS/7.1.png"
    ]
  },
  {
    category: 'SWITCHES & SOCKETS',
    heroes: [
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AURIC/475A0724.png',
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AURIC/475A0726.png',
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AURIC/16A.+SOCKET+WITH+SHUTTER.png",
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AURIC/475A0732.png',
      "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AURIC/16A.+SOCKET+WITHOUT+SHUTTER.png",
      'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AURIC/13A.+INTERNATIONAL+SOCKET.png',
    ]
  }
]

export const FAM_TABS = ['FANS', 'HOME APPLIANCES', 'SERIES', 'COOLERS', 'SWITCHES & SOCKETS']

export const CATEGORIES = [
  {
    id: 1,
    name: 'Ceiling Fans',
    count: 7,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/ceiling_fans/CEILING+FANS/POLO+BROWN.jpg',
  },
  {
    id: 2,
    name: 'Pedestal Fans',
    count: 4,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/PEDESTAL+FANS/THUNDER.png',
  },
  {
    id: 3,
    name: 'Exhaust Fans',
    count: 3,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/ceiling_fans/CEILING+FANS/VENTI.png',
  },
  {
    id: 4,
    name: 'Heaters',
    count: 3,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HEATER/SUMO+FLAME.png',
  },
  {
    id: 5,
    name: 'Mixer',
    count: 3,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/MAGIC+2.png',
  },
  {
    id: 6,
    name: 'Iron Press',
    count: 3,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/BOLT.png',
  },
  {
    id: 7,
    name: 'Gas Gyser',
    count: 3,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/WARMER+GAS+GEYSER.png',
  },
  {
    id: 8,
    name: 'Switches',
    count: 3,
    image: "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/PEGASUS/FORTUNE.png",
  },
  {
    id: 9,
    name: 'Socket',
    count: 3,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/PEGASUS/16A.SOCKET+WITH+SHUTTER.png',
  },
  {
    id: 10,
    name: 'Series',
    count: 3,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/SERIES/LEATHER.png',
  },
  {
    id: 11,
    name: 'USB & TV SOCKETS',
    count: 3,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/PEGASUS/image+(1).png',
  },
  {
    id: 12,
    name: 'Coolers',
    count: 3,
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/COOLERS/6.1.png',
  }
]

export const IMAGE_BANNERS = [
  {
    id: 1,
    brand: 'RAGHAV FANS',
    headline: 'Touching every aspect of your Home Life.',
    sub: 'Innovative range of Electrical products and Home appliances from RAGHAV FANS.',
    bg: '#c0111f',
    textColor: '#fff',
    large: true,
    logo: 'R',
    image: 'https://havells.com/media/wysiwyg/700x700_Pixel_1.jpg',
  },
  {
    id: 2,
    brand: 'RAGHAV',
    headline: '— A RAGHAV Brand —',
    sub: '',
    bg: '#1a2f5e',
    textColor: '#fff',
    large: false,
    image: 'https://havells.com/media/wysiwyg/700x700_Pixel_1.jpg',
  },
  {
    id: 3,
    brand: 'RAGHAV',
    headline: 'Expert Quality',
    sub: '',
    bg: '#f5c842',
    textColor: '#1a1a1a',
    large: false,
    image: 'https://havells.com/media/wysiwyg/700x700_Pixel_1.jpg',
  },
  {
    id: 4,
    brand: 'RAGHAV Switches',
    headline: 'Smart Life Switches',
    sub: '',
    bg: '#1a2f5e',
    textColor: '#fff',
    large: false,
    image: 'https://havells.com/media/wysiwyg/700x700_Pixel_1.jpg',
  },
  {
    id: 5,
    brand: 'REO',
    headline: 'Trust in Quality.',
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
