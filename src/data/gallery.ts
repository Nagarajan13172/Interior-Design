/**
 * ============================================================================
 *  GALLERY — the client's OWN completed project photography.
 *  Files live in `public/images/work/` as work-01.jpg … work-64.jpg.
 *
 *  To add more photos: drop them in `public/images/work/` and append an entry
 *  below with g(number, category, title).
 * ============================================================================
 */

export type GalleryCategory =
  | 'Interior Design'
  | 'Wooden Work'
  | 'Modular Kitchen'
  | 'Gypsum Ceiling'
  | 'Construction'

export interface GalleryItem {
  id: string
  src: string
  category: GalleryCategory
  title: string
}

/** Filter tabs for the gallery. 'All' shows everything. */
export const galleryFilters: Array<'All' | GalleryCategory> = [
  'All',
  'Interior Design',
  'Wooden Work',
  'Modular Kitchen',
  'Gypsum Ceiling',
  'Construction',
]

/** Build a gallery item from a work-photo number. */
const g = (n: number, category: GalleryCategory, title: string): GalleryItem => ({
  id: `work-${String(n).padStart(2, '0')}`,
  src: `/images/work/work-${String(n).padStart(2, '0')}.jpg`,
  category,
  title,
})

export const galleryItems: GalleryItem[] = [
  g(1, 'Wooden Work', 'Dining Crockery Unit'),
  g(2, 'Wooden Work', 'Display & Crockery Cabinet'),
  g(3, 'Wooden Work', 'Wooden TV Back Panel'),
  g(4, 'Wooden Work', 'Wardrobe with Study'),
  g(5, 'Modular Kitchen', 'Kitchen & Utility Woodwork'),
  g(6, 'Interior Design', 'Living Room with TV Unit'),
  g(7, 'Wooden Work', 'Bedroom Loft & Wardrobe'),
  g(8, 'Wooden Work', 'Wardrobe with Window'),
  g(9, 'Wooden Work', 'Designer Wardrobe Wall'),
  g(10, 'Wooden Work', 'Bedroom Wooden Paneling'),
  g(11, 'Wooden Work', 'Wooden Pooja Unit'),
  g(12, 'Interior Design', 'Living Room TV Unit'),
  g(13, 'Interior Design', 'Furnished Living Room'),
  g(14, 'Gypsum Ceiling', 'Cove-Lit Wooden Ceiling'),
  g(15, 'Wooden Work', 'Corner Wardrobe'),
  g(16, 'Interior Design', 'Home Theatre Room'),
  g(17, 'Gypsum Ceiling', 'Layered False Ceiling'),
  g(18, 'Wooden Work', 'Dressing Vanity Unit'),
  g(19, 'Gypsum Ceiling', 'Designer Reception Ceiling'),
  g(20, 'Interior Design', 'Slat Wall & Lounge'),
  g(21, 'Interior Design', 'Backlit Feature Wall'),
  g(22, 'Wooden Work', 'Full Wardrobe Wall'),
  g(23, 'Interior Design', 'Living Room TV Setup'),
  g(24, 'Interior Design', 'Foyer & Glass Partition'),
  g(25, 'Wooden Work', 'Bedroom Wardrobe'),
  g(26, 'Construction', 'Interior Finishing Stage'),
  g(27, 'Gypsum Ceiling', 'Cove & Profile Lighting'),
  g(28, 'Gypsum Ceiling', 'Profile Light Ceiling'),
  g(29, 'Wooden Work', 'Crockery & Storage Unit'),
  g(30, 'Wooden Work', 'Wardrobe with Drawers'),
  g(31, 'Interior Design', 'Premium Pooja Room'),
  g(32, 'Interior Design', 'Study & Storage'),
  g(33, 'Interior Design', 'Bathroom Vanity'),
  g(34, 'Wooden Work', 'Modern Wardrobe Design'),
  g(35, 'Wooden Work', 'Bedroom Wardrobe & Mirror'),
  g(36, 'Construction', 'Double-Height Structure'),
  g(37, 'Interior Design', 'Marble Feature Wall'),
  g(38, 'Interior Design', 'Utility Vanity Counter'),
  g(39, 'Wooden Work', 'Modular Storage Units'),
  g(40, 'Interior Design', 'Wall Display Shelves'),
  g(41, 'Interior Design', 'TV Panel & Shelving'),
  g(42, 'Wooden Work', 'Wooden Door & Corridor'),
  g(43, 'Construction', 'Wet Area Preparation'),
  g(44, 'Construction', 'Staircase & Ceiling Build'),
  g(45, 'Wooden Work', 'Sliding Wardrobe'),
  g(46, 'Wooden Work', 'Geometric Wardrobe'),
  g(47, 'Wooden Work', 'Modular Storage Wall'),
  g(48, 'Modular Kitchen', 'L-Shaped Modular Kitchen'),
  g(49, 'Interior Design', 'Bedroom with Storage'),
  g(50, 'Gypsum Ceiling', 'Recessed Ceiling Lighting'),
  g(51, 'Modular Kitchen', 'Modular Kitchen Layout'),
  g(52, 'Modular Kitchen', 'Kitchen with Marble'),
  g(53, 'Interior Design', 'Spacious Hall Interior'),
  g(54, 'Construction', 'Staircase with Glass Railing'),
  g(55, 'Gypsum Ceiling', 'Linear LED Ceiling'),
  g(56, 'Interior Design', 'Modern TV Console'),
  g(57, 'Gypsum Ceiling', 'Chandelier Ceiling'),
  g(58, 'Wooden Work', 'Gloss Wardrobe'),
  g(59, 'Wooden Work', 'Sliding Gloss Wardrobe'),
  g(60, 'Wooden Work', 'Wardrobe & Window'),
  g(61, 'Interior Design', 'Wooden Slat Paneling'),
  g(62, 'Wooden Work', 'Bedroom Wardrobe Design'),
  g(63, 'Interior Design', 'Wooden TV Feature Wall'),
  g(64, 'Interior Design', 'Pooja Mandir Unit'),
]
