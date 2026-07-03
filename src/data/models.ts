import type { InteriorModel } from '../types'
import { images } from './images'

/**
 * ============================================================================
 *  3D INTERIOR GALLERY
 *  Add more entries to grow the showcase. Three source types are supported:
 *
 *  1. type: 'procedural'  → a built-in Three.js room scene (no file needed).
 *                           Always works — great default / offline fallback.
 *
 *  2. type: 'local'       → loads a .glb / .gltf file you provide.
 *       ⚠️ Place model files in either:
 *            • public/models/      → modelPath: '/models/your-model.glb'
 *            • src/assets/models/  → import it, then set modelPath to the import
 *       The viewer shows a Suspense loader while it downloads and a graceful
 *       error message if the file is missing or fails to load.
 *
 *  3. type: 'sketchfab'   → embeds an external Sketchfab model via iframe.
 *       ⚠️ REPLACE embedUrl + attribution if you swap the model.
 * ============================================================================
 */

export const interiorModels: InteriorModel[] = [
  {
    id: 'living-room-procedural',
    name: 'Interactive Living Room',
    description:
      'A built-in 3D living room — rotate, zoom, and pan to explore furniture placement, a cove-lit ceiling, and warm lighting. Renders instantly, no download required.',
    type: 'procedural',
    poster: images.showcasePoster,
  },
  {
    id: 'loft-interior-sketchfab',
    name: 'Loft Interior Showcase',
    description:
      'An external high-detail loft interior model, embedded from Sketchfab. Drag to orbit, scroll to zoom, and explore a fully furnished loft space.',
    type: 'sketchfab',
    // ⚠️ REPLACE: Sketchfab embed link (the "/embed" URL of your model)
    embedUrl:
      'https://sketchfab.com/models/32b216c355894218a778345e9c91661d/embed?autospin=0&autostart=1&preload=1&ui_theme=dark',
    poster: images.showcasePoster,
    attribution: {
      // ⚠️ REPLACE with the actual author/license shown on the model page.
      author: 'Sketchfab Community',
      authorUrl: 'https://sketchfab.com',
      modelUrl:
        'https://sketchfab.com/3d-models/loft-interior-6-for-free-32b216c355894218a778345e9c91661d',
      license: 'CC Attribution (verify on the model page)',
    },
  },
  /**
   * EXAMPLE local-model entry — uncomment and drop a file at
   * public/models/interior.glb to enable it:
   *
   * {
   *   id: 'my-local-interior',
   *   name: 'My Interior Model',
   *   description: 'A local .glb interior model loaded from /public/models.',
   *   type: 'local',
   *   modelPath: '/models/interior.glb', // ⚠️ REPLACE: 3D model path
   *   poster: images.showcasePoster,
   * },
   */
]
