/**
 * ============================================================================
 *  IMAGES — contextual imagery for the site sections (hero, services, process,
 *  gypsum ideas, portfolio, etc.).
 *
 *  These are free, high-quality Unsplash photographs used as generic
 *  "contextual" visuals. The client's OWN project photography lives separately
 *  in the Gallery section (see `src/data/gallery.ts` → public/images/work/).
 *
 *  ⚠️  REPLACE with your own photography for production.
 *  To use LOCAL images instead of these URLs:
 *    • public/images/…  → reference by path, e.g. '/images/hero.jpg'
 *    • src/assets/images/… → import the file, then reference the import
 * ============================================================================
 */

export const images = {
  // Hero — luxury living room / architecture
  hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80',

  // About — modern home exterior / interior
  about: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1974&q=80',

  // Service card images
  serviceConstruction:
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1470&q=80',
  serviceInterior:
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1632&q=80',
  serviceGypsum:
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1470&q=80',
  serviceWooden:
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1470&q=80',
  serviceApproval:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1631&q=80',
  serviceVisualization:
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2070&q=80',

  // Construction process step images
  processDocuments:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1470&q=80',
  processPlanning:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1631&q=80',
  processSite:
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1469&q=80',
  processExecution:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1470&q=80',
  processCompletion:
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2070&q=80',
  processCost:
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1526&q=80',

  // Interior design gallery
  interiorLiving:
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1470&q=80',
  interiorBedroom:
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1470&q=80',
  interiorKitchen:
    'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1470&q=80',
  interiorDining:
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1470&q=80',

  // Gypsum ceiling design ideas
  gypsumPeriphery:
    'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1480&q=80',
  gypsumCove:
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2074&q=80',
  gypsumIsland:
    'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1480&q=80',
  gypsumGeometric:
    'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1470&q=80',
  gypsumProfile:
    'https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=1470&q=80',
  gypsumLayered:
    'https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1470&q=80',

  // Wooden works
  woodenWardrobe:
    'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1470&q=80',
  woodenKitchen:
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1468&q=80',
  woodenTvUnit:
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1470&q=80',

  // Portfolio projects
  portfolio2bhk:
    'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1470&q=80',
  portfolioLiving:
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1470&q=80',
  portfolioKitchen:
    'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2070&q=80',
  portfolioConstruction:
    'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=1470&q=80',
  portfolioWardrobe:
    'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1470&q=80',
  portfolioGypsum:
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1470&q=80',

  // 3D showcase poster / fallback
  showcasePoster:
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2070&q=80',

  // Contact section background
  contact:
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2074&q=80',
} as const

export type ImageKey = keyof typeof images
