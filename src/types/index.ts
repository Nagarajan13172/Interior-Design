/**
 * Shared TypeScript interfaces used across data files and components.
 */
import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  /** In-page anchor id (without the #) or route path. */
  href: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  image: string
}

export interface ChecklistBlock {
  title?: string
  items: string[]
}

export interface ProcessTableRow {
  cells: string[]
}

export interface ProcessTable {
  headers: string[]
  rows: ProcessTableRow[]
}

export interface EstimateCard {
  label: string
  value: string
  note?: string
}

export interface ProcessStepData {
  step: number
  title: string
  description: string
  image: string
  checklist?: string[]
  /** Sub-stages rendered as a mini timeline (used in Construction Execution). */
  stages?: string[]
  table?: ProcessTable;
  note?: string
  estimates?: EstimateCard[]
}

export interface ComparisonTable {
  headers: string[]
  rows: ProcessTableRow[]
}

export interface DesignIdea {
  title: string
  description: string
  image: string
}

export interface WoodenStep {
  step: number
  title: string
  description: string
  checklist?: string[]
  materials?: string[]
}

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  scope: string
  image: string
}

export type ProjectCategory =
  | 'Construction'
  | 'Interior Design'
  | 'Gypsum Ceiling'
  | 'Wooden Work'
  | 'Modular Kitchen'

export interface Faq {
  question: string
  answer: string
}

export interface InteriorModel {
  id: string
  name: string
  description: string
  /**
   * Source of the 3D model:
   *  - 'local'     → load a .glb / .gltf from `modelPath`
   *  - 'sketchfab' → embed an external Sketchfab model via `embedUrl`
   *  - 'procedural'→ render a built-in Three.js room scene (no file needed)
   */
  type: 'local' | 'sketchfab' | 'procedural'
  modelPath?: string
  embedUrl?: string
  /** Attribution shown for external models (required by Sketchfab license). */
  attribution?: {
    author: string
    authorUrl: string
    modelUrl: string
    license: string
  }
  poster?: string
}
