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

One custom SVG bird stays fixed in the right margin at every viewport width. The shared layout reserves 48px of space below 1280px; larger screens use the existing outer margin. It never swaps into separate inline copies. Scroll progress moves its perch by up to 160px, and scroll direction turns its gaze down or up. Mouse movement changes gaze toward the pointer; the next scroll restores directional gaze. Section position selects a magnifying glass, camera, book, or envelope.

The companion lives in ClientLayout and persists across navigation. Each route (including individual notes), homepage section change, or click/Enter triggers one backpack sequence: a 1s reach/open/retrieve action, followed by an 850ms tool action. Photography uses one small shutter glint; Work sweeps a magnifier; About/Vitae unfold a map; Notes opens a book; Contact offers an envelope. Click/Enter also displays a short status greeting. There is no idle animation. A single pending requestAnimationFrame batches input. Hidden pages skip calculation. Listeners, pending frames, and greeting timers are cleaned up on unmount. Reduced motion disables gaze, travel, hover rotation, unpacking, and tool animations, leaving the finished tool pose and greeting text available.

Validation: production build and TypeScript checks passed. Browser checks confirmed exactly one bird at mobile width, downward gaze of +2.5px and upward gaze of -2.5px, and changing scroll travel. At 320px the content ends at x=272 and the bird's reserved margin starts there, with no horizontal overflow; 390px also passed. Desktop/mobile greetings, keyboard activation, section poses, and both themes were checked during this PR. Reduced-motion behavior was inspected in source without changing system preferences.

Backpack validation: production build and TypeScript passed. Navigated through Work, About, Vitae, Notes, Photo, and Contact: correct tool and exactly one bird. Direct loads at 320px across those routes showed no horizontal overflow. Inspected the open-pack pose and final camera/envelope poses, plus the narrow contact layout. Browser console had no errors.

## Theme-switch cloth reveal

A deliberate theme toggle plays a 1.6s cloth reveal at the bird's normal size. A lavender cloth unfolds from the backpack side, covers the bird, then folds back away. The bird retains its previous palette until 600ms, while fully covered; the rest of the page switches normally. No bird scaling or surprised-eye effect remains.

Initial hydration updates without playing. Repeated toggles cancel the previous animation and palette timer. Unmount cleans up both; reduced motion skips the reveal, and enabling it mid-animation immediately applies the current theme.

Validation: production build, TypeScript, and diff checks passed. Browser checks confirmed the cloth appears in both directions, the old bird palette remains visible during unfolding, and the bird returns at its original size. No console errors. Reduced-motion handling inspected in source.
