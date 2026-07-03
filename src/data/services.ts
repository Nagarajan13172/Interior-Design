import {
  Building2,
  Sofa,
  Layers,
  Hammer,
  FileCheck2,
  Boxes,
} from 'lucide-react'
import type { Service } from '../types'
import { images } from './images'

export const services: Service[] = [
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    description:
      'Complete home construction services from site preparation, foundation, structural work, roofing, plumbing, electrical, plastering, flooring, painting, and final handover.',
    icon: Building2,
    image: images.serviceConstruction,
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    description:
      'Modern interior design solutions for living rooms, bedrooms, kitchens, dining areas, pooja rooms, study spaces, and complete home styling.',
    icon: Sofa,
    image: images.serviceInterior,
  },
  {
    id: 'gypsum-ceiling',
    title: 'Gypsum False Ceiling',
    description:
      'Elegant gypsum ceiling designs with cove lighting, profile lights, geometric patterns, and premium finishing for modern interiors.',
    icon: Layers,
    image: images.serviceGypsum,
  },
  {
    id: 'wooden-works',
    title: 'Wooden Works',
    description:
      'Wardrobes, modular kitchens, TV units, lofts, cots, study tables, storage units, partitions, and custom furniture solutions.',
    icon: Hammer,
    image: images.serviceWooden,
  },
  {
    id: 'plan-approval',
    title: 'Plan & Approval Guidance',
    description:
      'Professional guidance for building plan approval, documentation checks, layout verification, and authority-specific construction requirements.',
    icon: FileCheck2,
    image: images.serviceApproval,
  },
  {
    id: '3d-visualization',
    title: '3D Design Visualization',
    description:
      'Realistic 2D layouts, 3D interior previews, walkthrough-style visualization, and interactive 3D model showcases.',
    icon: Boxes,
    image: images.serviceVisualization,
  },
]
