import type { WoodenStep } from '../types'

export const woodenIntro =
  'Woodwork is one of the most important parts of a home interior. It affects storage, usability, design, and overall finishing quality. A proper sequence helps avoid rework, delay, and unnecessary cost.'

export const woodenSteps: WoodenStep[] = [
  {
    step: 1,
    title: 'Planning & Design',
    description:
      'First, prepare a clear requirement list for each room. Decide where wardrobes, modular kitchen units, TV units, lofts, cots, study tables, dressing units, and storage areas are required. After site measurement, the designer should prepare 2D layouts, elevations, and 3D visuals. Materials, laminate finishes, handles, channels, and hardware must be finalised before production begins.',
    checklist: [
      'Room-wise requirement list',
      'Site measurement',
      '2D layout',
      '3D visualization',
      'Material selection',
      'Hardware selection',
      'Written quotation approval',
    ],
  },
  {
    step: 2,
    title: 'Complete Civil Work Before Woodwork',
    description:
      'Woodwork should begin only after major civil and wet works are completed. Flooring, wall putty, primer, kitchen tiles, bathroom tiles, and electrical points should be finalised before carpentry work starts.',
    checklist: [
      'Flooring completed',
      'Electrical points marked',
      'TV, AC, light, and switch points planned',
      'Putty and primer completed',
      'Kitchen and bathroom tile work completed',
      'Wet work completed',
    ],
  },
  {
    step: 3,
    title: 'Material Procurement',
    description:
      'Material quality directly affects the durability of the interior. Use moisture-resistant and water-resistant materials where required. Kitchen and utility areas should use higher-grade boards compared to wardrobes and dry areas.',
    materials: [
      'BWP plywood for kitchen and wet-prone areas',
      'MR plywood for wardrobes and dry storage',
      'Branded laminates for outer finish',
      'Good-quality hinges, channels, handles, and soft-close hardware',
      'Marine-grade adhesive where required',
      'Edge banding for clean and durable edges',
    ],
  },
  {
    step: 4,
    title: 'Frame / Carcass Work',
    description:
      'After marking the wall levels, the carpenter prepares the plywood carcass or frame. The box structure is fixed to the wall, levelled, and divided internally based on the design. Shelves, partitions, drawers, and internal storage layouts are completed at this stage.',
  },
  {
    step: 5,
    title: 'Shutter & Laminate Work',
    description:
      'Shutters are cut to size, laminated, edge-banded, and fitted with hinges, channels, locks, and handles. Proper gap alignment and smooth opening must be checked carefully.',
  },
  {
    step: 6,
    title: 'Finishing & Polish',
    description:
      'Final finishing includes edge correction, internal laminate, polish if required, touch-up work, handle fitting, and cleaning. Small gaps, nail marks, or wall damages should be corrected before handover.',
  },
  {
    step: 7,
    title: 'Final Handover',
    description:
      'Before handover, every shutter, drawer, handle, lock, and soft-close mechanism must be checked. Bills, warranty cards, material details, and hardware details should be collected.',
  },
]

export const woodenDos: string[] = [
  'Use BWP plywood for kitchens',
  'Use written quotations and contracts',
  'Approve design before work starts',
  'Take photos at every stage',
  'Use branded hardware',
  'Follow stage-wise payment',
]

export const woodenDonts: string[] = [
  'Do not use low-grade boards in moisture-prone areas',
  'Do not pay full advance',
  'Do not change design repeatedly after work starts',
  'Do not ignore electrical point planning',
  'Do not compromise on hinges and channels',
]
