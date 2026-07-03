import type { Project, ProjectCategory } from '../types'
import { images } from './images'

/** Filter tabs for the portfolio. 'All' shows everything. */
export const portfolioFilters: Array<'All' | ProjectCategory> = [
  'All',
  'Construction',
  'Interior Design',
  'Gypsum Ceiling',
  'Wooden Work',
  'Modular Kitchen',
]

export const projects: Project[] = [
  {
    id: 'premium-2bhk',
    title: 'Premium 2BHK Interior Transformation',
    category: 'Interior Design',
    description:
      'A complete interior makeover blending warm neutrals, smart storage, and layered lighting for a modern family home.',
    scope: 'Full home interior · 980 sq.ft',
    image: images.portfolio2bhk,
  },
  {
    id: 'cove-living-room',
    title: 'Modern Living Room with Cove Lighting',
    category: 'Gypsum Ceiling',
    description:
      'A layered gypsum ceiling with concealed cove lighting that gives the living hall a warm, luxurious ambience.',
    scope: 'Living hall · 320 sq.ft',
    image: images.portfolioLiving,
  },
  {
    id: 'elegant-modular-kitchen',
    title: 'Elegant Modular Kitchen Design',
    category: 'Modular Kitchen',
    description:
      'An ergonomic modular kitchen with BWP plywood carcass, soft-close hardware, and a premium laminate finish.',
    scope: 'Modular kitchen · L-shaped',
    image: images.portfolioKitchen,
  },
  {
    id: 'residential-construction',
    title: 'Complete Residential Construction',
    category: 'Construction',
    description:
      'End-to-end construction of an independent home — from foundation to final finishing with structured stage tracking.',
    scope: 'Independent home · 1,450 sq.ft',
    image: images.portfolioConstruction,
  },
  {
    id: 'luxury-wardrobe-tv',
    title: 'Luxury Wardrobe and TV Unit Setup',
    category: 'Wooden Work',
    description:
      'A sliding-door wardrobe paired with a wall-length TV unit, combining storage, display, and clean lines.',
    scope: 'Master bedroom · Wardrobe + TV unit',
    image: images.portfolioWardrobe,
  },
  {
    id: 'contemporary-gypsum',
    title: 'Contemporary Gypsum Ceiling Design',
    category: 'Gypsum Ceiling',
    description:
      'A geometric gypsum ceiling with profile lights that adds depth and a designer edge to the space.',
    scope: 'Living + dining · 420 sq.ft',
    image: images.portfolioGypsum,
  },
]
