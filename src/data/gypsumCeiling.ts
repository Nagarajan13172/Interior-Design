import type { ComparisonTable, DesignIdea } from '../types'
import { images } from './images'

export const gypsumIntro =
  'Gypsum false ceilings are one of the most popular choices for modern homes. They are lightweight, elegant, fast to install, and ideal for creating premium lighting effects such as cove lighting, profile lighting, and layered ceiling designs.'

export const gypsumWhatIs =
  'A gypsum ceiling is created by fixing gypsum boards on a metal frame below the main roof slab. It improves the appearance of the room, hides wiring, allows modern lighting layouts, and gives the space a clean designer finish.'

export const gypsumAdvantages: string[] = [
  'Smooth and seamless finish',
  'Lightweight structure',
  'Suitable for modern lighting designs',
  'Fast installation',
  'Helps reduce echo',
  'Gives a premium interior look',
  'Ideal for living rooms, bedrooms, dining areas, and halls',
]

export const gypsumLimitations: string[] = [
  'Not suitable for water-prone areas without proper precautions',
  'Damaged boards may require replacement',
  'Fan and heavy fixture points must be structurally supported',
  'Proper installation quality is very important',
]

export const gypsumVsPop: ComparisonTable = {
  headers: ['Feature', 'Gypsum Board', 'POP'],
  rows: [
    {
      cells: [
        'Finish',
        'Factory-made board with smooth finish',
        'Site-applied finish depending on labour skill',
      ],
    },
    { cells: ['Time', 'Faster installation', 'Slower installation'] },
    { cells: ['Weight', 'Lightweight', 'Comparatively heavier'] },
    {
      cells: [
        'Design',
        'Best for clean modern designs and cove lights',
        'Good for detailed moulding work',
      ],
    },
    {
      cells: [
        'Repair',
        'Board replacement may be needed',
        'Small repairs are easier',
      ],
    },
    {
      cells: [
        'Best Use',
        'Modern homes and premium lighting',
        'Decorative moulding and detailed design',
      ],
    },
  ],
}

export const gypsumDesignIdeas: DesignIdea[] = [
  {
    title: 'Periphery Ceiling',
    description:
      'A clean border drop around the room edge with a plain centre — subtle, elegant, and budget-friendly.',
    image: images.gypsumPeriphery,
  },
  {
    title: 'Cove Lighting Ceiling',
    description:
      'Concealed indirect lighting that washes the ceiling with a warm, luxurious glow.',
    image: images.gypsumCove,
  },
  {
    title: 'Island Ceiling',
    description:
      'A defined shape floating above the dining table to anchor and highlight the space.',
    image: images.gypsumIsland,
  },
  {
    title: 'Geometric Patterns',
    description:
      'Squares, circles, and layered cuts combined with profile lights for a designer statement.',
    image: images.gypsumGeometric,
  },
  {
    title: 'Profile Light Ceiling',
    description:
      'Slim linear profile lighting integrated into the ceiling for a sleek, modern edge.',
    image: images.gypsumProfile,
  },
  {
    title: 'Layered Luxury Ceiling',
    description:
      'Multi-level layers with combined cove and spot lighting for a premium hall look.',
    image: images.gypsumLayered,
  },
]

export const gypsumQualityChecklist: string[] = [
  'Use strong GI channel framing',
  'Maintain proper grid spacing',
  'Use branded gypsum boards',
  'Use correct screws and spacing',
  'Apply fibre tape and jointing compound',
  'Provide independent support for fans and heavy lights',
]
