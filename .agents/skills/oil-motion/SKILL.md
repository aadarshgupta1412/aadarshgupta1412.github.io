---
name: oil-motion
description: Design and refine subtle, input-driven UI motion, scroll companions, and character microinteractions that fit an existing website. Use for Oil Motion requests, interactive portfolio details, or theme-change choreography.
---

# Oil-inspired UI motion

A concise, project-shared distillation of [Oil Motion](https://github.com/oil-oil/oil-motion) and this portfolio's iteration. This is UI guidance, not the upstream skill or an npm animation library. For generated video or frame-sequence workflows, consult upstream rather than treating this as that pipeline.

## Design the interaction

- Start with an observable trigger and purpose: reveal information, acknowledge input, or express a character's response. Describe the action in one sentence before implementing it.
- Match the existing palette, stroke weight, typography, scale, and materials. Reuse design tokens and native SVG/CSS for small geometric effects; don't introduce generated media or a dependency just for them.
- Make motion readable through silhouette, timing, and clear cause and effect. A prop should visibly come from somewhere, be used, and return. Avoid piling decorations onto an idea the user has rejected; reconsider the action itself.
- Keep the page usable immediately. Decorative reactions must not delay navigation, theme switching, text, or controls. Prefer finite, input-driven sequences over idle loops.
- Treat duration as a budget. Keep feedback prompt and pauses purposeful; a short multi-stage character trick can take around 1–1.5 seconds. This is a starting point, not a rule for all animation.

## Implement predictably

- Keep essential state independent of animation state. Hydration and initial preference loading should not masquerade as deliberate user input.
- New input supersedes unfinished motion. Cancel animations and pending state-change timers together; never let an old timer restore stale state.
- Compose gaze, wing, prop, and body transforms on separate wrappers. Avoid multiple effects competing for the same transform or remounting a character just to replay one effect.
- Batch continuous pointer/scroll input into one pending animation frame. Avoid layout work on every event, retain native scrolling, and clean up listeners, timers, frames, and animations on unmount.
- Keep a persistent companion in the shared layout. Reserve room at narrow widths; it must not cover content, steal clicks, or create horizontal overflow.
- With reduced motion, apply the final functional state immediately. Also handle the preference changing during a sequence. Keep keyboard/touch access and visible focus; decorative SVG should be hidden from assistive technology.

## Verify the result users actually see

Inspect the built preview at desktop and narrow widths, in both themes. Check repeated/reversed input, navigation during a reaction, final resting state, overflow, and console errors. For timed motion, inspect meaningful intermediate poses as well as the endpoint. State when reduced motion was only reviewed in code.

Run checks appropriate to the change. If serving a static export, rebuild after edits and refresh the actual preview tab before claiming it is updated. A source edit or successful PR push does not update an already-open static preview or production deployment. Verify the displayed wording for copy edits.

## This portfolio's preferences

These are local preferences, not universal motion rules: subtle effects, no page-entry translateY, no bird enlargement, and no cloth/cape theme transformation. The current bird uses a brief double take and backpack wand spell with a thin accent circle; page colours switch normally. Preserve the user's latest direction over any example here.

For implementation locations, existing route props, and prior validation, read [portfolio motion notes](../../../docs/portfolio-motion.md) only when modifying this site. Keep detailed timings in the code/notes rather than duplicating them here.
