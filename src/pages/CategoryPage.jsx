import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import ProductCard from '../components/ProductCard'
import './CategoryPage.css'

const CF = 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/ceiling_fans/CEILING+FANS/'
const HT = 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HEATER/'
const HA = 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/'
const PF = 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/PEDESTAL+FANS/'

const catalog = {
  'fans': {
    label: 'Ceiling Fans',
    products: [
      { img: CF+'AERO+IV.png',                    name: 'Aero IV',                   tagline: 'Aerodynamic blade design for superior room air circulation',        tag: 'Best Seller'   },
      { img: CF+'ALTO+3B+BROWN.jpg',              name: 'Alto 3B Brown',             tagline: 'Classic 3-blade warm-brown finish for timeless interiors',          tag: 'Classic'       },
      { img: CF+'ALTO+4B+BROWN.jpg',              name: 'Alto 4B Brown',             tagline: 'Enhanced 4-blade design for maximum airflow delivery',              tag: 'Popular'       },
      { img: CF+'BLOOM+BR.png',                   name: 'Bloom BR',                  tagline: 'Bloom-inspired blades with smooth, silent motor performance',       tag: 'New Arrival'   },
      { img: CF+'Bloom+Pearl+Ivory.jpg',          name: 'Bloom Pearl Ivory',         tagline: 'Pearlescent ivory finish with nature-inspired blade curves',        tag: 'Trending'      },
      { img: CF+'BRISK+SMOKE+BROWN.png',          name: 'Brisk Smoke Brown',         tagline: 'Brisk powerful airflow in a sophisticated smoke brown finish',      tag: 'Premium'       },
      { img: CF+'BUGATTI+BLUE.png',               name: 'Bugatti Blue',              tagline: 'Italian-inspired style with a powerful whisper-quiet motor',        tag: 'Top Rated'     },
      { img: CF+'BUGATTI+BROWN.png',              name: 'Bugatti Brown',             tagline: 'Timeless earthy tones with high-performance silent motor',          tag: 'Classic'       },
      { img: CF+'BUGATTI+IV..png',                name: 'Bugatti Ivory',             tagline: 'Premium ivory finish with iconic Bugatti blade design',             tag: "Editor's Pick" },
      { img: CF+'Cruise+Air+Ivory.jpg',           name: 'Cruise Air Ivory',          tagline: 'Smooth cruising airflow in a clean, elegant ivory finish',         tag: 'Popular'       },
      { img: CF+'CRUISE+AIR+SB.png',              name: 'Cruise Air SB',             tagline: 'Smoke brown Cruise Air for stylish, steady ventilation',            tag: 'Best Seller'   },
      { img: CF+'Cruise+Air+White.jpg',           name: 'Cruise Air White',          tagline: 'Crisp white finish with effortless cruising airflow comfort',      tag: 'New Arrival'   },
      { img: CF+'Dzire+Brown.jpg',                name: 'Dzire Brown',               tagline: 'Smooth, silent performance in a rich chocolate brown finish',       tag: 'Top Rated'     },
      { img: CF+'Dzire+Smoke+Brown.jpg',          name: 'Dzire Smoke Brown',         tagline: 'Luxurious smoke-brown with silent energy-efficient motor',          tag: 'Premium'       },
      { img: CF+'FESTIVE+BLUE.png',               name: 'Festive Blue',              tagline: 'Cool blue aesthetics to match your contemporary interior',          tag: 'New Arrival'   },
      { img: CF+'FESTIVE+GOLDEN.png',             name: 'Festive Golden',            tagline: 'Celebrate every season with golden elegance overhead',              tag: 'Trending'      },
      { img: CF+'FESTIVE+MAUVE.png',              name: 'Festive Mauve',             tagline: 'A bold mauve statement piece for the modern home',                 tag: 'Style Pick'    },
      { img: CF+'FESTIVE+WHITE.png',              name: 'Festive White',             tagline: 'Crisp white festive fan for bright and cheerful interiors',        tag: 'Popular'       },
      { img: CF+'FLORA+24.png',                   name: 'Flora 24',                  tagline: '24-inch compact Flora fan for smaller spaces and cozy rooms',      tag: 'Compact'       },
      { img: CF+'FLORA+600MM+S.B.jpg',            name: 'Flora 600MM SB',            tagline: '600mm Flora in smoke brown for medium and large rooms',            tag: 'Best Seller'   },
      { img: CF+'Flora+Ivory+Gold.jpg',           name: 'Flora Ivory Gold',          tagline: 'Elegant ivory-gold blend with nature-inspired blade design',       tag: 'Premium'       },
      { img: CF+'FLORA+SB.png',                   name: 'Flora SB',                  tagline: 'Nature-inspired curves with energy-efficient smooth airflow',       tag: 'Top Rated'     },
      { img: CF+'FORTUNE+COPPER.png',             name: 'Fortune Copper',            tagline: 'Rich copper finish that elevates your living space décor',          tag: "Editor's Pick" },
      { img: CF+'FORTUNE+GOLDEN.png',             name: 'Fortune Golden',            tagline: 'Golden finish that brings warmth and grandeur to any room',         tag: 'Premium'       },
      { img: CF+'FORTUNE+IVORY.png',              name: 'Fortune Ivory',             tagline: 'Pristine ivory finish for a clean and timeless home look',         tag: 'Classic'       },
      { img: CF+'FRESH+AIR.png',                  name: 'Fresh Air',                 tagline: 'Fresh, clean airflow engineered for modern Indian homes',           tag: 'Popular'       },
      { img: CF+'lumina.jpg',                     name: 'Lumina',                    tagline: 'Designer silhouette with a built-in warm LED light glow',          tag: 'New Arrival'   },
      { img: CF+'Magic+Blue.jpg',                 name: 'Magic Blue',                tagline: 'Enchanting blue hue with effortless breezy cooling comfort',       tag: 'Trending'      },
      { img: CF+'Magic+Smoke+Brown.jpg',          name: 'Magic Smoke Brown',         tagline: 'Magical smoke brown finish with whisper-quiet motor',               tag: 'Popular'       },
      { img: CF+'Orbit+Rose+Gold+Ivory.jpg',      name: 'Orbit Rose Gold Ivory',     tagline: 'Orbital rose-gold ivory design crafted for premium interiors',     tag: 'Premium'       },
      { img: CF+'PACER+BROWN.jpg',                name: 'Pacer Brown',               tagline: 'Paces the airflow perfectly in a rugged warm brown finish',        tag: 'Best Seller'   },
      { img: CF+'PEARL+IV.png',                   name: 'Pearl Ivory',               tagline: 'Lustrous pearl ivory coating with smooth silent operation',         tag: 'Classic'       },
      { img: CF+'PILOT+BLUE.png',                 name: 'Pilot Blue',                tagline: 'Bold pilot-blue finish with powerful directional airflow',          tag: 'Popular'       },
      { img: CF+'PILOT+SB.png',                   name: 'Pilot SB',                  tagline: 'Smoke-brown Pilot fan for stylish, directed ventilation',           tag: 'Trending'      },
      { img: CF+'POLO+BROWN.jpg',                 name: 'Polo Brown',                tagline: 'Classic polo brown — traditional style, modern performance',        tag: 'Best Seller'   },
      { img: CF+'POLO+PISTA+GREEN.png',           name: 'Polo Pista Green',          tagline: 'Fresh color, fresh air — where style meets performance',           tag: 'Summer Pick'   },
      { img: CF+'POLO+PURPLE.png',                name: 'Polo Purple',               tagline: 'Bold purple polo fan for spaces that love making statements',      tag: 'Style Pick'    },
      { img: CF+'RACER+BROWN.jpg',                name: 'Racer Brown',               tagline: 'Racing-inspired aerodynamic design with maximum speed airflow',    tag: 'High Power'    },
      { img: CF+'RIGO+SMOKE+PROWN.jpg',           name: 'Rigo Smoke Brown',          tagline: "Rigo's signature smoke brown for sophisticated, silent cooling",   tag: 'Top Rated'     },
      { img: CF+'ROVER+BLUE.png',                 name: 'Rover Blue',                tagline: 'Extra-wide blades for powerful full-room air distribution',        tag: 'Popular'       },
      { img: CF+'ROVER+GREY.png',                 name: 'Rover Grey',                tagline: 'Sleek grey Rover fan for minimalist modern interiors',              tag: 'New Arrival'   },
      { img: CF+'ROVER+IVORY.jpg',                name: 'Rover Ivory',               tagline: 'Elegant ivory Rover with wide-sweep air distribution',              tag: 'Classic'       },
      { img: CF+'Tejas+Deluxe+Smoke+Brown.jpg',   name: 'Tejas Deluxe Smoke Brown',  tagline: 'Tejas Deluxe performance in a smoldering smoke brown finish',      tag: 'Premium'       },
      { img: CF+'Tejas+Deluxe+White.jpg',         name: 'Tejas Deluxe White',        tagline: 'Bright Tejas Deluxe in pristine white for clean interiors',        tag: 'Top Rated'     },
      { img: CF+'Tejas+Flash+Smoke+Brown.jpg',    name: 'Tejas Flash Smoke Brown',   tagline: 'Flash series Tejas with rapid-speed smoke-brown performance',      tag: "Editor's Pick" },
      { img: CF+'TJS+DLX+SB.png',                 name: 'TJS DLX SB',                tagline: 'Tejas Deluxe SB — the pinnacle of style meets silent power',       tag: 'Best Seller'   },
      { img: CF+'Tornado+Brown.jpg',              name: 'Tornado Brown',             tagline: 'Powerful tornado airflow wrapped in rugged brown elegance',         tag: 'High Power'    },
      { img: CF+'VENTI.png',                      name: 'Venti',                     tagline: 'Slim, modern silhouette built for maximum airflow efficiency',      tag: 'Compact'       },
    ],
  },
  'home-appliances': {
    label: 'Home Appliances',
    products: [
      { img: HA+'AMAZE+MG.png',            name: 'Amaze MG',          tagline: 'Heavy-duty mixer grinder built for every Indian kitchen need',        tag: 'Best Seller'   },
      { img: HA+'AMAZER+GAS.png',          name: 'Amazer Gas',        tagline: 'Efficient gas appliance for fast, dependable everyday cooking',       tag: 'Popular'       },
      { img: HA+'BIGSOLE.png',             name: 'Big Sole',          tagline: 'Wide soleplate iron for faster, effortless crease-free ironing',      tag: 'Top Rated'     },
      { img: HA+'BLENDY.png',              name: 'Blendy',            tagline: 'Quick compact blender for fresh juices and healthy smoothies',        tag: 'Trending'      },
      { img: HA+'BOLT.png',                name: 'Bolt',              tagline: 'Lightning-fast steam iron with precision temperature control',        tag: 'New Arrival'   },
      { img: HA+'ELECTRIC+KETTLE.png',     name: 'Electric Kettle',   tagline: '1.5L rapid-boil kettle with automatic shutoff safety feature',       tag: 'Popular'       },
      { img: HA+'I-10.png',                name: 'I-10',              tagline: 'Feather-light iron with a smooth non-stick ceramic soleplate',       tag: "Editor's Pick" },
      { img: HA+'INFRARED.jpeg',           name: 'Infrared',          tagline: 'Infrared appliance for instant, targeted and efficient warming',      tag: 'Compact'       },
      { img: HA+'instant+geyser.png',      name: 'Instant Geyser',    tagline: 'Hot water in seconds — ISI certified and energy efficient',           tag: 'Premium'       },
      { img: HA+'madhana.png',             name: 'Madhana',           tagline: 'Traditional churner for fresh homemade butter and buttermilk',       tag: 'Classic'       },
      { img: HA+'madhani.jpeg',            name: 'Madhani',           tagline: 'Classic churner for authentic homemade dairy preparations',          tag: 'Value Pick'    },
      { img: HA+'madhani.png',             name: 'Madhani Pro',       tagline: 'Premium churner built for effortless daily dairy processing',        tag: 'Popular'       },
      { img: HA+'MAGIC+2.png',             name: 'Magic 2',           tagline: 'Powerful food processor for smarter, faster everyday meal prep',     tag: 'Trending'      },
      { img: HA+'MAGIC+3.png',             name: 'Magic 3',           tagline: 'Multi-jar grinding powerhouse with built-in overload protection',    tag: 'High Power'    },
      { img: HA+'VIVO.png',                name: 'Vivo',              tagline: 'Multi-function OTG oven for baking, grilling and toasting',          tag: 'New Arrival'   },
      { img: HA+'WARMER+GAS+GEYSER.png',   name: 'Warmer Gas Geyser', tagline: 'Instant gas geyser for high-demand hot water in large families',    tag: 'Family Pick'   },
    ],
  },
  'series': {
    label: 'Series',
    products: [
      { img: CF+'BUGATTI+BLUE.png',   name: 'Bugatti Blue',   tagline: 'Italian-inspired style with a powerful whisper-quiet motor',   tag: 'Top Rated'   },
      { img: CF+'BUGATTI+BROWN.png',  name: 'Bugatti Brown',  tagline: 'Timeless earthy tones with high-performance silent motor',     tag: 'Classic'     },
      { img: CF+'BUGATTI+IV..png',    name: 'Bugatti Ivory',  tagline: 'Premium ivory finish with iconic Bugatti blade design',        tag: "Editor's Pick"},
      { img: CF+'FESTIVE+BLUE.png',   name: 'Festive Blue',   tagline: 'Cool blue aesthetics to match your contemporary interior',     tag: 'New Arrival' },
      { img: CF+'FESTIVE+GOLDEN.png', name: 'Festive Golden', tagline: 'Celebrate every season with golden elegance overhead',         tag: 'Trending'    },
      { img: CF+'FESTIVE+MAUVE.png',  name: 'Festive Mauve',  tagline: 'A bold mauve statement piece for the modern home',            tag: 'Style Pick'  },
      { img: CF+'FESTIVE+WHITE.png',  name: 'Festive White',  tagline: 'Crisp white festive fan for bright and cheerful interiors',   tag: 'Popular'     },
      { img: CF+'FLORA+SB.png',       name: 'Flora SB',       tagline: 'Nature-inspired curves with energy-efficient smooth airflow', tag: 'Top Rated'   },
      { img: CF+'Flora+Ivory+Gold.jpg',name:'Flora Ivory Gold',tagline: 'Elegant ivory-gold blend with nature-inspired blade design',  tag: 'Premium'     },
      { img: CF+'POLO+BROWN.jpg',     name: 'Polo Brown',     tagline: 'Classic polo brown — traditional style, modern performance',  tag: 'Best Seller' },
      { img: CF+'POLO+PISTA+GREEN.png',name:'Polo Pista Green',tagline: 'Fresh color, fresh air — where style meets performance',     tag: 'Summer Pick' },
      { img: CF+'POLO+PURPLE.png',    name: 'Polo Purple',    tagline: 'Bold purple polo fan for spaces that love making statements', tag: 'Style Pick'  },
    ],
  },
  'coolers': {
    label: 'Pedestal Fans',
    products: [
      { img: PF+'AMPHAN.png',      name: 'Amphan',    tagline: 'Cyclone-class airflow engineered for large rooms and open halls',   tag: 'Best Seller'   },
      { img: PF+'ASANI.png',       name: 'Asani',     tagline: 'Effortless cooling with ultra-silent high-speed rotation',          tag: 'Top Rated'     },
      { img: PF+'CYCLONE.png',     name: 'Cyclone',   tagline: '360° powerful oscillation covering every corner of your room',      tag: 'Popular'       },
      { img: PF+'DORA.png',        name: 'Dora',      tagline: 'Compact and whisper-quiet — your perfect bedroom companion',        tag: "Editor's Pick" },
      { img: PF+'FARMER.png',      name: 'Farmer',    tagline: 'Built for tough conditions with all-day reliable strong cooling',   tag: 'Durable'       },
      { img: PF+'PLUTO.png',       name: 'Pluto',     tagline: 'Sleek modern pedestal with smooth 3-speed quiet operation',         tag: 'Value Pick'    },
      { img: PF+'SPEEDIO.png',     name: 'Speedio',   tagline: 'Rapid-speed blades for instant full-force cooling relief',          tag: 'New Arrival'   },
      { img: PF+'SWIFT.png',       name: 'Swift',     tagline: 'Lightweight and portable for effortless cooling anywhere, anytime', tag: 'Compact'       },
      { img: PF+'THUNDER.png',     name: 'Thunder',   tagline: 'Maximum airflow, minimum noise — unstoppable storm-like performance',tag: 'Premium'       },
      { img: PF+'TSUNAMI.png',     name: 'Tsunami',   tagline: 'Massive wave of cool air reaching every corner of your space',      tag: 'Trending'      },
      { img: PF+'Untitled-1.png',  name: 'Stand Fan', tagline: 'Powerful stand fan engineered for continuous, dependable airflow',  tag: 'Popular'       },
      { img: PF+'YAAS.png',        name: 'Yaas',      tagline: 'Youthful bold design packed with powerful airflow performance',     tag: 'Style Pick'    },
    ],
  },
  'switches-sockets': {
    label: 'Switches & Sockets',
    products: [
      { img: HT+'AURIC.png',          name: 'Auric',        tagline: 'Premium halogen radiance with a warm, ambient golden glow',  tag: 'Premium'     },
      { img: HT+'DROID.png',          name: 'Droid',        tagline: 'Smart heat distribution wrapped in a sleek modern design',   tag: 'Best Seller' },
      { img: HT+'HALCYON.png',        name: 'Halcyon',      tagline: 'Serene, even warmth engineered for a perfect night of rest', tag: 'Top Rated'   },
      { img: HT+'PLUTO.png',          name: 'Pluto',        tagline: 'Compact powerhouse that heats rooms within seconds',          tag: 'Popular'     },
      { img: HT+'SUMO+FLAME.png',     name: 'Sumo Flame',   tagline: 'Fierce infrared heat for large rooms and biting cold nights', tag: 'High Power'  },
      { img: HT+'SUMO+STRONG.png',    name: 'Sumo Strong',  tagline: 'Built tough for years of dependable, reliable winter warmth', tag: 'Durable'     },
      { img: HT+'SUN+HEATER.png',     name: 'Sun Heater',   tagline: 'Radiant warmth that mirrors the comfort of a sunny morning',  tag: "Editor's Pick"},
    ],
  },
}


export default function CategoryPage() {
  const { category } = useParams()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const data = catalog[category] ?? catalog['fans']
  const filtered = data.products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.tagline.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => { window.scrollTo(0, 0) }, [category])

  return (
    <div className="cat-page">
      <Navbar />
      <div className="cat-page__body">

        {/* Page header */}
        <div className="cat-page__header">
          <div className="cat-page__breadcrumb">
            <button onClick={() => navigate('/')}>Home</button>
            <span>/</span>
            <span>{data.label}</span>
          </div>
          <h1 className="cat-page__title">{data.label}</h1>
          <p className="cat-page__count">{filtered.length} products</p>
        </div>

        {/* Search bar */}
        <div className="cat-page__search-wrap">
          <input
            className="cat-page__search"
            type="text"
            placeholder={`Search in ${data.label}...`}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Product Grid */}
        <div className="cat-page__grid">
          {filtered.map((p, i) => (
            <ProductCard
              key={i}
              product={{
                id: `cat-${i}`,
                name: p.name,
                subtitle: data.label,
                tagline: p.tagline,
                image: p.img,
                imageHover: null,
                badges: [p.tag],
                rating: '4.8',
                ratingCount: '128',
                colors: [],
                priceOld: null,
                price: 'On Request',
                emi: null,
              }}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="cat-page__empty">No products found for "{search}"</div>
        )}
      </div>
      <Footer />
    </div>
  )
}
