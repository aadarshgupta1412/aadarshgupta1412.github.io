# Portfolio motion

Design reference: [Oil Motion](https://github.com/oil-oil/oil-motion), especially its concepts and runtime guidance. Applied as design guidance; no third-party runtime code or generated media is included.

## Intent and boundaries

Make existing work easier to explore and links easier to discover. Keep the current text, portrait, photography, page backgrounds, navigation, and normal scrolling. No autoplay, scroll capture, page-entry translation, generated footage, or device-orientation permissions.

## Interactions

- Project processes: three explicitly selectable steps. The selected marker changes and its explanatory note fades in. Click/tap selects; Up/Down and Home/End move through the vertical tab list. The selected panel follows the tab list in keyboard order. Rapid input immediately selects the latest step. All notes share a CSS grid cell so the tallest note reserves space at every width.
- Homepage photographs: fine-pointer hover rotates the existing print by -0.6 degrees and scales it to 1.008; pointer exit returns it to rest. Touch retains the normal link. Keyboard focus receives an outline and shadow.
- Text links: an underline grows on hover or keyboard focus. Writing arrows move two pixels on hover/focus.

The page owns every background. Input is discrete component state or hover/focus, using native DOM and CSS. The Oil Motion video-generation, frame timeline, and media-budget pipeline is not applicable to these small geometric interactions. There are no new assets or dependencies.

## Reduced motion and lifecycle

Reduced motion disables the photo/arrow transforms and note animation; selected state and full content remain available. Existing global reduced-motion rules suppress transition durations. Native CSS and React state need no timer, animation loop, observers, or global event listeners. Native scrolling and browser zoom remain available.

## Validation

Run the existing production build and TypeScript check. In the browser, verify pointer selection, vertical keyboard navigation including wrapping and Home/End, panel relationships, stable section height, rapid reversal, touch-width layout, and desktop photo hover/reset. Inspect the reduced-motion rules for each new animated element. Check light/dark themes and mobile navigation.

Verified on the production export: build and TypeScript checks passed; desktop pointer selection and Up/Down, Home/End, wraparound, rapid reversal, and Tab-to-panel behavior passed. The first project row stayed 340.75px high across different selections. Width checks at 390px and 320px found no page or tab overflow; mobile menu opening/closing and both themes passed. Browser console reported no errors. Reduced-motion handling was inspected in source; OS-level reduced-motion and physical touch hardware were not emulated.

## Trail companion

A custom inline SVG bird adds a personal character without a raster/video dependency. On screens at least 1280px wide it lives in the spare right margin. Its eyes follow the pointer within a two-pixel range and its perch travels at most 160px with page progress. Section position selects a magnifying glass, camera, book, or envelope. Below that breakpoint the same character occupies normal layout space beside section headings, so it never floats over mobile content.

Click or Enter triggers a single 650ms wing flap/nod and a short status greeting. There is no idle animation. A single pending requestAnimationFrame batches scroll, resize, and pointer input; no self-scheduling animation loop runs. Hidden pages skip calculation. Listeners and pending frames/timers are cleaned up on unmount. Reduced motion disables gaze, travel, hover rotation, and the greeting animation; the button still displays text. Display size is 60px with a keyboard focus outline.

Companion validation: production build passed; desktop greeting, scroll-derived camera/contact poses, gaze variables, keyboard greeting, and mobile in-flow perches checked. 320px and 390px layouts remained within viewport bounds, including the greeting bubble. Both themes checked. No console errors. Reduced-motion behavior inspected in source, without changing the user's system preference.
