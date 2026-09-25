---
name: ui-slice-engineer
description: Triggers whenever the user uploads/attaches an image, screenshot, Figma export, mockup, or UI design, or asks to recreate, slice, code, or build a UI from an image (including short casual requests like "buatkan seperti ui ini", "buatkan seperti gambar", "convert this design to code", "implement this UI"). Converts visual designs into responsive front-end code (Flutter, React Native, React/Next.js/Tailwind).
---

# Procedural Steps for UI Slicing & Implementation

When this skill is triggered with a design asset (Figma export, screenshot, or mockup), perform the following steps sequentially:

1. **Visual Breakdown & Design Token Extraction**:
   - **Color & Gradients**: Identify exact HEX/RGBA values, linear/radial gradient stops, angles, blend modes, and opacity levels.
   - **Typography**: Match font weight, relative sizing, letter-spacing (tracking), and line-height.
   - **Layout & Spatial Geometry**: Detect padding, gap spacing, alignment, nested containers, and aspect ratios.
   - **Elevation & Visual Effects**: Note drop shadows, inner shadows, border radius, blur filters (e.g., backdrop-filter/glassmorphism), and overlapping z-index layers.

2. **Structural & Component Architecture**:
   - Deconstruct the UI into modular, reusable components (Atomic Design pattern: Atoms -> Molecules -> Organisms).
   - Determine how complex shapes are achieved:
     - Prefer native styling (CSS/Tailwind/StyleSheet/BoxDecoration) for simple geometric shapes, borders, and shadows.
     - Isolate non-standard geometry (polygons, organic blobs, custom waves, intricate icons) as inline SVG paths or vector canvases.
   - Ensure responsive containment (handling multi-screen widths, safe area insets, and overflow states).

3. **Complex Styling & Animation Blueprint**:
   - Define stateful appearances: idle, active, hover, focused, disabled, and loading skeletons.
   - Map out micro-interactions and transitions (duration, easing curves like cubic-bezier, spring physics, keyframes, or transform origins) evident or implied in the visual.

4. **Production-Ready Code Generation**:
   - Write clean, type-safe code using the active project's tech stack (e.g., React Native StyleSheet, Tailwind CSS, Flutter Widgets, or CSS Modules).
   - Ensure semantic markup, accessibility (ARIA roles, accessible touch targets), and clean separation between presentation and dummy data.
   - Avoid hardcoded magic numbers for overall screen dimensions; rely on flexible layout primitives (Flexbox/Grid).

5. **Self-Audit Fidelity Verification**:
   - Compare the output against the original image:
     - Check contrast, alignment margins, and optical balance.
     - Confirm nested borders, complex gradients, and clip-paths render without visual artifacting.