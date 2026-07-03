/**
 * ============================================================================
 *  IMAGES — every image URL used on the site lives here for easy replacement.
 *
 *  These now point to the client's own project photography, stored in
 *  `public/images/work/` (work-01.jpg … work-63.jpg). Files in `public/` are
 *  served from the site root, so `/images/work/work-13.jpg` maps to
 *  `public/images/work/work-13.jpg`.
 *
 *  ⚠️  To swap an image: drop a new file into `public/images/work/` (or
 *  anywhere under `public/`) and update the path below. `w(n)` is a small
 *  helper that builds the path for the numbered work photos.
 * ============================================================================
 */

const WORK_DIR = '/images/work'

/** Build the path to a numbered work photo, e.g. w(13) → '/images/work/work-13.jpg'. */
const w = (n: number) => `${WORK_DIR}/work-${String(n).padStart(2, '0')}.jpg`

export const images = {
  // Hero — furnished living room with TV unit (warm, inviting)
  hero: w(13),

  // About — elegant wooden slat wall paneling with sofa
  about: w(20),

  // Service card images
  serviceConstruction: w(44), // grand staircase construction
  serviceInterior: w(23), // furnished living room
  serviceGypsum: w(14), // wooden-rafter cove-lit ceiling
  serviceWooden: w(9), // large designer wardrobe wall
  serviceApproval: w(42), // finished corridor / handover
  serviceVisualization: w(28), // designer LED profile ceiling

  // Construction process step images
  processDocuments: w(26), // interior at planning / early stage
  processPlanning: w(47), // units under design/build
  processSite: w(43), // bare area — site preparation
  processExecution: w(44), // staircase under construction
  processCompletion: w(53), // finished bright hall
  processCost: w(32), // study / planning space

  // Interior design gallery
  interiorLiving: w(12), // living room TV unit
  interiorBedroom: w(49), // bedroom with wooden window frame
  interiorKitchen: w(52), // modular kitchen with marble
  interiorDining: w(1), // dining area with crockery unit

  // Gypsum ceiling design ideas
  gypsumPeriphery: w(17), // bright layered false ceiling
  gypsumCove: w(27), // cove / profile LED ceiling
  gypsumIsland: w(19), // island-style designer ceiling
  gypsumGeometric: w(54), // geometric LED ceiling over staircase
  gypsumProfile: w(55), // linear profile-light ceiling
  gypsumLayered: w(57), // layered ceiling with chandelier

  // Wooden works
  woodenWardrobe: w(22), // full wooden wardrobe wall
  woodenKitchen: w(51), // modular kitchen
  woodenTvUnit: w(21), // backlit TV feature wall

  // Portfolio projects
  portfolio2bhk: w(6), // furnished living room transformation
  portfolioLiving: w(14), // living hall with cove lighting
  portfolioKitchen: w(48), // modular kitchen
  portfolioConstruction: w(36), // double-height construction
  portfolioWardrobe: w(34), // modern wardrobe + TV setup
  portfolioGypsum: w(55), // contemporary gypsum ceiling

  // 3D showcase poster / fallback — home theatre room
  showcasePoster: w(16),

  // Contact section background — finished bright hall
  contact: w(53),
} as const

export type ImageKey = keyof typeof images
