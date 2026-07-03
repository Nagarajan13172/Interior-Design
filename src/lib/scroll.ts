/**
 * Smoothly scroll to an in-page section by id, accounting for the sticky navbar.
 * Falls back gracefully if the target isn't found.
 */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // Update the URL hash without an extra jump.
  if (history.replaceState) {
    history.replaceState(null, '', `#${id}`)
  }
}
