# UI/UX best practices for a freelance backend developer's portfolio

Research for issue #10 "Choose or create a design system". Compiled 2026-10-23. Terms (Client, Visitor, Case study, Claim, Evidence, Shipped work, Exploration) follow `GLOSSARY.md`.

Labels used throughout: **[Evidence]** = research or a normative spec; **[Convention]** = what established design systems or authoritative style guides do; **[Opinion]** = judgement, including mine. **[Unverified]** = only found secondhand.

## Summary

The research agrees on a short list. Visitors form a visual judgement in milliseconds, and that judgement favours **low visual complexity and familiar layout** ([Google Research](https://research.google/blog/users-love-simple-and-familiar-designs-why-websites-need-to-make-a-great-first-impression/)). Credibility is read from a professional look, easy contact, real people behind the site, and absence of errors or hype ([Stanford guidelines](https://credibility.stanford.edu/guidelines/index.html), [NN/g](https://www.nngroup.com/articles/communicating-trustworthiness/)). Hiring readers scan, not read, and want a few detailed Case studies with a plain-looking site that does not compete with the content ([NN/g](https://www.nngroup.com/articles/ux-design-portfolios/)). Typography consensus is 16-20px body, 1.5ish line height, 45-90 characters per line, one or two fonts, few colours. WCAG 2.2 AA needs 4.5:1 text contrast, 3:1 for UI/focus indicators, 24px minimum targets (44px is the AAA/Apple-style target), reflow at 320px. Offer dark mode as a user choice following the system setting, not as a default imposed on everyone ([NN/g](https://www.nngroup.com/articles/dark-mode/)). For a one-page site, a small set of custom CSS tokens is well supported; the biggest finding for adoption is that **Pico CSS (variant A) is archived and unmaintained** ([README](https://github.com/picocss/pico#pico-css-is-no-longer-maintained)). There is **no primary research specific to freelance developer portfolios**; the portfolio evidence is NN/g's UX-job-hiring material, which is the closest analogue, so treat it as transferable, not direct.

---

## 1. Credibility and trust

| Finding | Type | Source |
|---|---|---|
| Ten guidelines. Those that bear on a portfolio: "Make it easy to contact you", "Show that honest and trustworthy people stand behind your site", "Design your site so it looks professional (or is appropriate for your purpose)", "Make your site easy to use -- and useful", "Avoid errors of all types, no matter how small they seem", "Highlight the expertise in your organization and in the content and services you provide", "Make it easy to verify the accuracy of the information on your site". | Evidence (research programme; guidelines are a synthesis) | [Stanford Web Credibility Guidelines](https://credibility.stanford.edu/guidelines/index.html) |
| Four trust factors: design quality, up-front disclosure, comprehensive/correct/current content, connection to the rest of the web. "Typos or difficult navigation communicate disregard for the users." "Isolated sites feel like they have something to hide." | Evidence | [NN/g, Trust or Bust](https://www.nngroup.com/articles/communicating-trustworthiness/), [NN/g, Trustworthy design](https://www.nngroup.com/articles/trustworthy-design/) |
| Users trust external sources more than company-sponsored content; testimonials on a site's own pages are viewed with suspicion ("leery as to whether the company had curated the reviews"). | Evidence | [NN/g, About Us info](https://www.nngroup.com/articles/about-us-information-on-websites/) |
| Users "see right through complex corporate speak, jargon, and stock photography"; an "honest and straightforward tone of voice eased fears and skepticism". | Evidence | [NN/g, About Us info](https://www.nngroup.com/articles/about-us-information-on-websites/) |
| Users scan: 79% always scanned new pages, 16% read word by word. NN/g advises avoiding "marketese" and cutting word count. | Evidence (1997 study, widely re-confirmed by NN/g) | [NN/g, How users read](https://www.nngroup.com/articles/how-users-read-on-the-web/) |
| First impression: "In less than 50 milliseconds, users build an initial 'gut feeling'". Two factors: visual complexity ("how complex the visual design of a website looks") and prototypicality ("how representative a design looks for a certain category of websites"). "If the visual complexity of a website is high, users perceive it as less beautiful, even if the design is familiar"; unfamiliar designs read as uglier even if simple. Measures perceived beauty, not trust or conversion. | Evidence (2012, Univ. of Basel + Google; measured aesthetic ratings only) | [Google Research blog](https://research.google/blog/users-love-simple-and-familiar-designs-why-websites-need-to-make-a-great-first-impression/) |
| Aesthetic-usability effect: "users' tendency to perceive attractive products as more usable"; "A pretty design can make users forgiving of minor usability problems, but not of large ones." Core study is 1995 (26 ATM variants). | Evidence (old, small) | [NN/g](https://www.nngroup.com/articles/aesthetic-usability-effect/) |
| "People quickly evaluate a site by visual design alone" and a large share of credibility comments in the 2002 Stanford-Makovsky study cited visual design (the figure 46.1% circulates). Comment share, not a causal effect; I did not open the primary PDF. | Evidence for direction; the number is **[Unverified]** | [Stanford guidelines](https://credibility.stanford.edu/guidelines/index.html) (quote); 46.1% only via secondary summaries |

Caveats worth knowing: the visual-appeal studies measure snap ratings, not hiring decisions. NN/g notes trust is "hard to build and easy to lose" and that design only signals it; real treatment builds it.

**Relevance to this site [Opinion, derived]:** the Glossary rule that every Claim must stand on Evidence is exactly what Stanford #1 and NN/g "connection to the rest of the web" reward. Anonymous Case studies lose the third-party check, so linking to public repositories and an external profile (GitHub, LinkedIn) where allowed substitutes for it. Restrained copy is supported by NN/g; avoid superlatives.

## 2. Portfolio- and freelancer-specific guidance

**What primary sources exist:** NN/g publishes on UX-job portfolios and corporate About/Contact pages. Nothing primary was found on developer/freelancer portfolios or on how founders/CTOs vet freelancers. The rest of the web on this is blog-level and was excluded.

- **Few, detailed Case studies.** "Choose 3-5 Projects as Detailed Case Studies"; "Quality over quantity is the best rule" ([NN/g](https://www.nngroup.com/articles/ux-design-portfolios/)). Issue #6 plans six; that is slightly above NN/g's range (which is written for UX designers). [Opinion] Make the lead Accomplishment of each scannable so six read as quickly as four.
- **Scannable.** "Very rarely will hiring managers take the time to read your entire portfolio word for word"; case studies "should be displayed in a way that is scannable and easy to follow" ([NN/g](https://www.nngroup.com/articles/ux-design-portfolios/)).
- **The site should not compete with the work.** "Resist the urge to go overboard on a flashy template." "Your content should be the main focus and your site should be easy to navigate and consume." ([NN/g](https://www.nngroup.com/articles/ux-design-portfolios/))
- **Impact over screenshots.** For researchers: "Hiring managers reviewing portfolios are ultimately making a business decision"; show whether an outcome improved and by how much ([NN/g, researcher portfolios](https://www.nngroup.com/articles/ux-researcher-portfolio/), page content summarised from search excerpt). This matches the Glossary ranking of Accomplishments by impact first.
- **Confidential work.** NN/g suggests writing it up "without revealing protected information or sensitive client data" and asking former clients for a testimonial ([NN/g](https://www.nngroup.com/articles/apply-secure-ux-job/), from search excerpt). This is the anonymous-Case-study approach, with the caveat above on self-hosted testimonials.
- **Contact.** "Make it easy to contact you" is a Stanford guideline. NN/g: "Offer a contact form only in addition to telephone numbers, not as a replacement"; give "the phone number and email address"; put a noticeable Contact link "in your main navigation or utility navigation and in the footer"; if you do use a form "limit it to 3-5 fields". Those are guidelines for corporate sites ([NN/g Contact Us pages](https://www.nngroup.com/articles/contact-us-pages/)). **No source compares mailto links with forms for conversion.** For a sole freelancer a visible email address meets NN/g's "don't replace direct contact with a form" principle; a `mailto:` does have the usual drawback that it fails for people without a configured mail client, so show the address as text too [Opinion].
- **Button/link labels.** NN/g's "4 Ss": specific, sincere, substantial, succinct; "A link is a promise" ([NN/g](https://www.nngroup.com/articles/better-link-labels/)). "Tell me about your project" is sincere if it opens an email draft to Valerio; "See my work" is specific. A mailto that opens a mail client is consistent with the promise only if the label says email.
- **Scanning pattern.** F-pattern is the default "when there are no strong cues to attract the eyes". Recommendations: key points in the first two paragraphs, headings that stand out, informative first words, bullets, descriptive link text ([NN/g, F-pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/), updated 2026). Z-pattern is popular design-blog lore with no NN/g study behind it that I found: **[Unverified]**.

## 3. Readability and typography

| Topic | Value | Type | Source |
|---|---|---|---|
| Line length | "The average line length should be 45-90 characters (including spaces)." 66 is "widely regarded as ideal" (Bringhurst) | Convention (typographer) | [Butterick](https://practicaltypography.com/summary-of-key-rules.html), [web.dev](https://web.dev/learn/design/typography/) |
| Line length (spec) | "Width is no more than 80 characters" | Evidence/spec, but **AAA** | [WCAG 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html) |
| Implementation | Use `ch` not px so wrap tracks user font scaling; `max-inline-size: 66ch` | Convention | [web.dev](https://web.dev/learn/design/typography/) |
| GOV.UK | body column two-thirds so lines do not get too long; ~75 characters upper limit (from a search excerpt) | Convention, research-backed system | [GOV.UK Layout](https://design-system.service.gov.uk/styles/layout/) |
| Body size | "15-25 pixels on the web" | Convention | [Butterick](https://practicaltypography.com/summary-of-key-rules.html) |
| Body size (GOV.UK) | 19px body / 25px line height; 16px "used sparingly" | Convention | [GOV.UK type scale](https://design-system.service.gov.uk/styles/type-scale/) |
| Body size (Tailwind) | base 1rem, line height 1.5 | Convention | [Tailwind theme](https://tailwindcss.com/docs/theme) |
| Line height | "120-145% of the point size" | Convention | [Butterick](https://practicaltypography.com/summary-of-key-rules.html) |
| Line height (spec) | AAA 1.4.8: "at least space-and-a-half"; AA 1.4.12: layout must survive overriding to 1.5x line height, 2x paragraph spacing, 0.12em letter spacing, 0.16em word spacing | Evidence/spec | [1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html), [1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) |
| Line height implementation | unitless values, e.g. 1.5; shorter lines tolerate more | Convention | [web.dev](https://web.dev/learn/design/typography/) |
| Fluid size | never `vw` alone in `font-size`; mix with `rem` / `clamp()` so text stays resizable | Convention | [web.dev](https://web.dev/learn/design/typography/) |
| Number of fonts | "limit your design to 1-2 fonts" | NN/g guidance | [NN/g](https://www.nngroup.com/articles/why-does-design-look-good/) |
| Number of sizes | No primary source gives a number. GOV.UK has 7 steps with line heights on a 5px multiple; Tailwind ships 13; Pico ~6. Keep to a scale you actually use | Convention | [GOV.UK](https://design-system.service.gov.uk/styles/type-scale/) |
| Avoid justified text | AAA | Spec | [1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html) |
| Resize | text resizable to 200% (1.4.4, AA); use rem | Spec | [WCAG](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html) (1.4.8 text; 1.4.4 not fetched) |
| Hierarchy | Establish with size, colour, placement; spacing between groups wider than within; "whitespace before borders" | Evidence/guidance | [NN/g](https://www.nngroup.com/articles/why-does-design-look-good/) and [NN/g visual hierarchy](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/) (summarised via search) |

Font choice is taste. Butterick argues against system fonts such as Times New Roman and Arial; web.dev calls system fonts a good fit for body text because "installed fonts need no download". Both are conventions and they pull opposite ways.

**Web-font performance** ([web.dev font best practices](https://web.dev/articles/font-best-practices), [typography](https://web.dev/learn/design/typography/)): WOFF2 is the default; subset with `unicode-range`; `font-display: swap` shows text quickly (possible late shift) and `optional` favours performance; `size-adjust` on the fallback reduces CLS; "a single variable font can be used as a replacement for multiple font files" but may be bigger than one static file; "self-hosting isn't automatically faster" unless on a CDN with HTTP/2 (Cloudflare Workers serves static assets from its CDN).

## 4. Layout

- **Mobile first.** "Design the content to fit on a small screen size first, then expand the screen until a breakpoint becomes necessary" ([web.dev](https://web.dev/articles/responsive-web-design-basics)). GOV.UK: "Design for small screens first, starting with a single-column layout" ([GOV.UK layout](https://design-system.service.gov.uk/styles/layout/)). Always include `width=device-width, initial-scale=1`, and do not disable zoom.
- **Breakpoints.** web.dev: "Don't define breakpoints based on device classes"; let content decide, e.g. when text exceeds about 10 words per line. NN/g: "A breakpoint defines a screen size where the design should adjust to a different layout"; designers "usually support only 2-3 breakpoints"; its starting points are up to 500px, 500-1200px, 1200px+ ([NN/g](https://www.nngroup.com/articles/breakpoints-in-responsive-design/)). Tailwind defaults for reference: 40rem, 48rem, 64rem, 80rem, 96rem ([Tailwind](https://tailwindcss.com/docs/theme)); GOV.UK's type scale switches at a 640px "tablet breakpoint" and its default maximum page width is 1020px ([type scale](https://design-system.service.gov.uk/styles/type-scale/), [layout](https://design-system.service.gov.uk/styles/layout/)). Material 3 window-size classes could not be fetched (page requires JS) so I cite none.
- **Mobile-first is not mobile-only.** NN/g "content dispersion": "Mobile-first web designs cause significant usability issues when viewed on desktop" (oversized, stretched content; check the desktop rendering) ([NN/g](https://www.nngroup.com/articles/content-dispersion/)). Relevance: huge headings and big empty bands on desktop are a known failure, not just a style.
- **Reflow.** WCAG 1.4.10 AA: no two-dimensional scrolling at "a width equivalent to 320 CSS pixels" ([W3C](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)).
- **Cards vs lists.** NN/g: a card "groups related information in a flexible-size container" and "offers a linked entry point to further details"; "borders are often added in an abundance of caution... this approach can result in busy, cluttered designs, so a container should be used only when proximity alone won't carry the grouping" ([NN/g cards](https://www.nngroup.com/articles/cards-component/), search excerpt). List view is "space efficient"; card view "visually engaging". For six text-heavy Case studies a list with whitespace is supported; cards are not contraindicated.
- **Sticky headers.** NN/g: keep small, "Use an opaque header background" (translucent "reduce readability"), minimise motion, consider whether one is needed ([NN/g](https://www.nngroup.com/articles/sticky-headers/)). WCAG 2.4.11 AA: focused components must not be "entirely hidden due to author-created content"; use `scroll-padding` ([W3C](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)). For a one-page site with 4-6 anchors a sticky header is optional.
- **Cards/pills/rounded corners vs. restraint.** No primary research ranks corner radius or shadows for trust. "Limit your design to 1-2 fonts" and "limiting the color palette to a few colors" are the NN/g restraint guidance ([NN/g](https://www.nngroup.com/articles/why-does-design-look-good/)).

## 5. Accessibility: WCAG 2.2 AA specifics

All from W3C Understanding documents.

| SC | Level | Requirement | Note for this site |
|---|---|---|---|
| [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | AA | "at least 4.5:1"; large text (18pt, or 14pt bold) 3:1; logotypes exempt; no rounding (4.499 fails) | Check muted/secondary text and chip text, which are the usual failures |
| [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) | AA | UI components/states and meaningful graphics "at least 3:1 against adjacent color(s)"; author-styled focus indicators are covered; a button with a text label needs no contrasting border | Pale chip borders and divider rules are decorative and exempt; an input or an icon-only control is not |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) | A | colour is not the only means of conveying information; technique G183 allows inline links 3:1 vs surrounding text | Underline links in running text (convention); "available" status dot must have text |
| [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) | AA | no 2-D scroll at 320 CSS px wide | Test at 320 |
| [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) | AA | content survives 1.5x line height, 2x paragraph spacing, 0.12em letter, 0.16em word spacing | No fixed-height text boxes |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) | AA | keyboard focus indicator is visible | Use `:focus-visible` |
| [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) | AA (new in 2.2) | focused item not entirely hidden by sticky content | `scroll-padding-top` if sticky header |
| [2.4.13 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html) | **AAA** | focus indicator area at least a 2px-thick perimeter, 3:1 change between focused/unfocused | Not required for AA, but a 2px, 3:1 outline meets it cheaply |
| [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | AA (new in 2.2) | "at least 24 by 24 CSS pixels" with exceptions for spacing, equivalents, inline text targets | Floor for AA |
| [2.5.5 Target Size (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html) | **AAA** | "at least 44 by 44 CSS pixels" | The issue's 44px goal is the **AAA** value, a good one to keep. Apple's 44pt figure is from memory; the HIG page could not be fetched, so **[Unverified]**. web.dev: "around 48 device independent pixels", spaced ~8px ([web.dev](https://web.dev/articles/accessible-tap-targets)) |
| [2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) | AAA | motion triggered by interaction can be disabled; technique C39 is the `prefers-reduced-motion` query | Not AA, but cheap and expected |
| `prefers-reduced-motion` | n/a | "to minimize the amount of non-essential motion"; vestibular triggers include scaling/panning large objects ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)) | Wrap any transition in `no-preference`, as the variants did |
| `color-scheme` | n/a | Switches canvas, scrollbars, form controls and system colours to match; custom colours still need `prefers-color-scheme`; add `<meta name="color-scheme">` to avoid a flash ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme)) | |

New in 2.2 at AA: 2.4.11, 2.5.7, 2.5.8, 3.3.8; 4.1.1 Parsing removed ([W3C](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)).

Semantic HTML: no single primary page was fetched on this; use landmarks (`header/nav/main/footer`), one `h1`, headings in order, lists for chip groups, a skip link. [Convention]

## 6. Dark mode

- **Evidence** ([NN/g, Dark mode](https://www.nngroup.com/articles/dark-mode/)): "in users with normal vision, light mode leads to better performance most of the time"; the advantage grows as text gets smaller; at simulated daytime polarity had no significant effect, at night light still performed better; participants' stated preference did not match their performance. Some users with cloudy ocular media (e.g. cataracts) read faster in dark mode (7 participants); a myopia-related finding rests on 7 participants and the authors present it as a possible cost, not established.
- **NN/g recommendation:** do not default to dark for a general audience; **let users switch**; "If the operating system offers a dark-mode API, use it".
- **Reading it for this site [Opinion]:** the research supports following `prefers-color-scheme` (the OS signal is the user's own choice) with light as the fallback, and supports keeping text large and contrast high in dark. It does not tell you to build a manual toggle; none of the four variants shipped one beyond a `data-theme` hook. The research does not show dark mode improves trust or hiring outcomes.
- Craft points [Convention]: dark mode is not an inversion; Radix designs separate dark scales ([Radix usage](https://www.radix-ui.com/colors/docs/overview/usage)).

## 7. Colour

- **Restraint.** NN/g: "By limiting the color palette to a few colors, you provide focus to the design" ([NN/g](https://www.nngroup.com/articles/why-does-design-look-good/)). Practical shape of that [Convention]: neutrals for text/background/borders plus one accent used only for links, primary action, and focus.
- **Colour psychology.** I found no study showing that blue (or any hue) makes a *website* more trustworthy. The closest hit (a store background study) measured purchase intent, not trust ([Hsieh et al. 2018](https://journals.sagepub.com/doi/abs/10.1016/j.intmar.2017.08.001), via search summary). The standard review of the field is Elliot 2019 ([APA](https://journals.sagepub.com/doi/10.1037/gpr0000170)); I could not open it (403) so its conclusion is not quoted here. Treat "blue = trust" and "green = go" claims as **weak/[Unverified]**. Stanford/NN/g tie trust to professionalism and consistency, not to a hue ([Stanford](https://credibility.stanford.edu/guidelines/index.html)).
- **Contrast tooling.** WCAG 2.x ratio is the normative test. WCAG 3.0 is a "W3C Working Draft"; it states "WCAG 3 does not replace WCAG 2" and "The contrast algorithm used in WCAG 3 is yet to be determined" ([W3C WCAG 3](https://www.w3.org/TR/wcag-3.0/)). So APCA is **not** a conformance route; claims of AA conformance have to be measured with the WCAG 2 formula. Radix Colors is built with APCA: steps 11 and 12 target "Lc 60 and Lc 90 APCA contrast ratio on top of a step 2 background" ([Radix](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)), which does not guarantee WCAG 2 4.5:1 (see section on variant D).
- **Status colours.** The "Open to new freelance projects" dot: colour alone must not carry the meaning (1.4.1); the text already does.

## 8. Choosing a design system

| Option | What it is | Weight / status | Fit for a one-page portfolio |
|---|---|---|---|
| **Pico CSS** | Class-light CSS for semantic HTML | Conditional build in the prototype: 87 kB min, ~12 kB gzip (prototype `tokens` text, not independently measured). **Archived**: "Pico CSS is no longer maintained. v2.1.1 is the final release"; repo archived, npm/CDN "stay online for the long term", MIT, forks possible ([README](https://github.com/picocss/pico#pico-css-is-no-longer-maintained)). | Good semantic baseline, but picking an archived dependency is a risk to disclose |
| **Open Props** | Design tokens as CSS custom properties | Main bundle about 4 kB min+Brotli; import only the packs you need ([open-props.style](https://open-props.style/)) | Closest to "tokens without a component framework" |
| **Radix Colors** | 12-step colour scales, light and dark, step-by-use-case (step 11 low-contrast text, 12 high-contrast text) | Colour tokens only ([Radix](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)) | Gives a defensible dark palette, but APCA-designed, so verify with WCAG 2 |
| **Tailwind** | Utility CSS; theme exposed as CSS variables (`--text-base`, `--breakpoint-md`, `--spacing`) | Needs a build step; unused CSS not emitted ([Tailwind](https://tailwindcss.com/docs/theme)) | Defaults are a reference scale even if not adopted |
| **GOV.UK Design System** | Research-backed: "When we publish new styles, components or patterns we include details of how and when it's been tested in user research" ([GOV.UK](https://design-system.service.gov.uk/get-started/)) | Government-styled brand | Use as a *reference* for type scale, breakpoints, measure |
| **Material / Apple HIG / Primer** | Large component systems | Page content could not be fetched (JS-rendered); not assessed | App-oriented; heavy for one page |
| **Custom tokens** | Handful of CSS variables in `globals.css` | Zero dependency | Matches current stack (plain CSS) |

- **Token format.** W3C Design Tokens Community Group format is a **draft** ("This is a preview draft of in progress changes. Do not attempt to implement this version"); latest published version 2025.10; media type `application/design-tokens+json`; types include color, dimension, fontFamily, shadow, typography ([DTCG](https://www.designtokens.org/tr/drafts/format/)). A site this size needs no tooling; CSS custom properties already are the token layer. A JSON file is only worthwhile if tokens will feed other tools. [Opinion]
- **Cost/benefit [Opinion, from the above]:** for one page and about six components (button, chip, Case study entry, section heading, link, badge) the system part that matters is *decisions* (scale, colours, spacing) not code. Those decisions can be borrowed from GOV.UK/Tailwind/Radix and written as about 40 lines of custom properties. Adopting a framework buys mostly a reset and default focus/typography, at the price of overriding defaults for the chips and Case study entry, which no system ships. Dependency weight matters because Core Web Vitals are measured (below), but 4-90 kB of CSS is rarely the limiting factor.

## 9. Performance as UX

- **Core Web Vitals thresholds** ([web.dev](https://web.dev/articles/vitals)): "LCP should occur within 2.5 seconds", "INP of 200 milliseconds or less", "CLS of 0.1 or less", measured at the 75th percentile.
- **Response times** ([NN/g](https://www.nngroup.com/articles/response-times-3-important-limits/)): "0.1 second is about the limit for having the user feel that the system is reacting instantaneously"; "1.0 second is about the limit for the user's flow of thought to stay uninterrupted".
- **Fonts as the main design-driven risk.** Late web fonts cause layout shift (CLS) and invisible text; mitigations are above (`font-display`, `size-adjust`, WOFF2, subset, preload only critical file) ([web.dev](https://web.dev/articles/font-best-practices)). The current site loads Inter weights 300-700 from Google Fonts via `<link>` in `index.html` (five weights); each extra weight is an extra request/file unless a variable font is used. Using fewer weights is also the typographic restraint NN/g recommends.
- **Perceived quality [Opinion]:** a plain, fast, stable page is consistent with the "easy to use" and "avoid errors" credibility guidelines; no study I found quantifies performance's effect on freelancer enquiries.

---

## Implications for #10

Each line is checkable. "Source" gives the strength of the basis.

### Choice

1. **Recommend: custom tokens (about 30-50 CSS custom properties in `globals.css`), borrowing values from GOV.UK / Radix / Tailwind, not a framework.** Basis: one page, plain-CSS stack, no system ships chips or Case study entries, Pico is archived, DTCG is draft. [Opinion backed by Convention]. If the owner wants a ready base anyway, the least-risk options are Open Props (tokens only) or Radix Colors (colour scales only), both dependency-light.
2. **Do not add a heavy dependency.** The issue asks it to justify itself; I found no research benefit a framework gives a one-page site.

### Tokens

| Token | Recommendation | Basis |
|---|---|---|
| Body size | 17-20px (1.0625-1.25rem); never below 16px for body-level text | Butterick 15-25px, GOV.UK 19px, Tailwind 16px |
| Secondary/meta text | 14px minimum (inference: 12px appeared in variants C and D) | Convention; no spec minimum |
| Line height body | 1.5-1.6, unitless | WCAG 1.4.8 (AAA 1.5), Butterick 1.2-1.45 range, web.dev |
| Line height headings | 1.15-1.3 | Convention |
| Measure | `max-width: 60-70ch` on prose (hard ceiling 80ch) | Butterick 45-90, Bringhurst 66, WCAG 1.4.8 |
| Distinct type sizes | 5-6 total (small, body, lead/h3, h2, h1), on a scale where each step is visibly different | NN/g (restraint), GOV.UK 7 steps; the count is [Opinion] |
| Fonts | 1 family (2 max, e.g. a mono for code-ish labels only if it earns it); 2-3 weights | NN/g "1-2 fonts" |
| Font delivery | system-ui stack (zero cost) or self-hosted, subset, WOFF2 variable font with `font-display` and a `size-adjust` fallback | web.dev |
| Fluid headings | `clamp()` with rem bounds; cap the h1 so it does not balloon on desktop | web.dev, NN/g content dispersion |
| Spacing | one scale (e.g. 4/8px multiples); more space between groups than within | NN/g proximity |
| Radii / shadows | pick one radius value and at most one shadow, or none; whitespace before borders and boxes | NN/g; no trust evidence either way |
| Breakpoints | 2-3, content-driven: base (mobile, about 320-599px), one near 40rem (tablet), one near 64rem (desktop); verify prose measure and h1 size at each | web.dev, NN/g, Tailwind/GOV.UK values |
| Max content width | around 1000-1200px; prose column narrower | GOV.UK 1020px |

### Colour

- Neutral text, background and border colours, plus **one accent** for links, primary button and focus ring. [NN/g restraint]
- **Contrast targets:** body text 7:1 or better (comfort margin, [Opinion]) and never below 4.5:1; muted/secondary text at 4.5:1 against every surface it sits on (including chip and card backgrounds); UI boundaries and the focus ring 3:1 against adjacent colours. Verify both light and dark with the WCAG 2 formula, not APCA.
- Dark mode: honour `prefers-color-scheme` and set `color-scheme: light dark`; keep light as the no-preference default. A manual toggle is optional. [NN/g]
- Do not rely on hue for trust claims. [Weak evidence]

### Components

- **Buttons:** at least 44px high [AAA 2.5.5; Apple figure unverified], 8px between targets, labels that state the outcome ("Tell me about your project", "See my work") per NN/g link-label rules. Primary and secondary must differ by more than colour (fill versus outline/text).
- **Links in text:** underlined (G183 alternative: 3:1 vs surrounding text plus another cue).
- **Chips:** non-interactive, so no 44px requirement; keep them text, not styled like buttons (affordance mismatch, [Opinion]); ≥14px text; group labels as text headings (list semantics).
- **Case study entry:** list-with-whitespace by default; add a container only if proximity does not carry the grouping (NN/g). Lead Accomplishment first, scannable.
- **Section heading:** one `h2` per section, heading closer to its content than to the preceding section.
- **Focus:** 2px+ outline, 3:1, offset from the element; works on light and dark; `scroll-padding-top` if the header is sticky.
- **Motion:** none required; if any, only inside `prefers-reduced-motion: no-preference`.
- **Header:** if sticky, opaque and short; otherwise skip stickiness.

### Layout/page

- Check 320px reflow, 200% text resize and WCAG 1.4.12 overrides.
- Put Contact (email visible as text and as a link) in the header or hero area and the footer; Contact link label "Contact", not "Say hello". NN/g.
- Keep the first screen simple: name, one-line value statement, availability, two CTAs (Google's complexity/prototypicality finding; prototypical for a portfolio means a recognisable hero-then-sections structure).
- Link out to verifiable external proof for any Case study where the Glossary allows it (public repositories, profiles). NN/g "connection to the rest of the web".

---

## How the rejected variants measure up

Measured from the code on `prototype/design-system` (CSS files, `VariantA-D.jsx`). Contrast ratios were computed by me with the WCAG 2 relative-luminance formula from the CSS colours (script in the scratchpad, not committed); Pico values from `@picocss/pico@2.1.1/css/pico.css`. The owner gave no reasons for rejecting them; this is not an explanation of the rejections.

| | A: Pico | B: Editorial | C: Technical | D: Radix + Inter |
|---|---|---|---|---|
| Body size / line height | 16px fluid up to 131.25% (21px) at the widest breakpoint, 1.5 | 18px serif, 1.7 | 16px, 1.65 | 16px, 1.6 |
| Measure | Container up to 1200px with no paragraph cap (my inference: lines well over 80 characters on desktop) | 38rem column, `max-width: 65ch` | `70ch` | `68ch` |
| Type sizes in CSS (approx.) | ~6 (Pico scale) | ~7 incl. 13px labels | ~7 incl. 12px mono | ~7 incl. 12px chips |
| Fonts / delivery | System stack, no web font | Source Serif 4 + system sans; Google Fonts `@import` | IBM Plex Sans + Mono; Google Fonts `@import` | Inter; Google Fonts `@import` |
| Lowest text contrast I computed (light / dark) | muted 5.36 / 4.77 | muted on chip 6.09 / 7.29 | muted 6.01 / 7.27 | amber chip 4.25 (fails) / white-on-indigo button 5.21 |
| Targets | `role=button` links; Pico buttons ~50px (inference from padding) | 44px min-height | 44px min-height | 44px min-height |
| Focus | Pico default focus ring | 3px outline | 2px outline | 2px outline |
| Reduced motion | Pico | gated on `no-preference` | gated | gated |
| Dark mode | built in, `prefers-color-scheme` | yes + `data-theme` hook | yes + hook | yes + hook |

**A (Pico defaults).**
- Followed: semantic HTML, system font (no font cost), reasonable contrast (all my measured pairs at least 4.77:1), built-in dark scheme, 44px+ buttons.
- Broke or risked: archived dependency (README above); no paragraph cap, so measure likely exceeds the 80-character AAA limit on wide screens (inference, not tested in a browser); default Pico look is "familiar" (Google prototypicality) but not distinctive.

**B (editorial).**
- Followed: strongest on measure (65ch), line height (1.7, above the 1.5 AAA floor), contrast (accent 7.9:1; muted 6.8:1), restraint (two fonts, one accent, no shadows), single column and whitespace-before-borders, 3px focus ring, visually low complexity.
- Broke or risked: 13px uppercase labels and 13px chips are small (below Butterick's lower range for body, though they are not body); a long-form single column may bury the two CTAs on mobile (my layout reading); serif body is a typographic choice with no performance or trust evidence either way; external font `@import` is an extra request chain (web.dev says to preload and `font-display`, inference that `@import` delays discovery).

**C (technical).**
- Followed: 16px/1.65, 70ch, strong contrast (accent text 6.9:1; secondary-button border 3.8:1 for 1.4.11), restrained single teal accent, 44px targets, mono used sparingly for labels.
- Broke or risked: two font families (within NN/g's "1-2", at the limit); 12px mono labels; a 100vh sticky sidebar at desktop is a more distinctive layout, so it likely scores lower on prototypicality, and it needs a different mobile/desktop navigation pattern (extra complexity); the "available" dot uses a glow ring (decorative).

**D (Radix + Inter).**
- Followed: most prototypical for a modern marketing/SaaS page (Google: familiar designs score well on appeal), Radix step usage for dark mode, `scroll-padding-top` for the sticky header (WCAG 2.4.11), 44px buttons.
- Broke or risked: translucent blurred sticky header (NN/g: use an opaque background, "translucent headers reduce readability"); amber chip text computes to 4.25:1 on its background at 12px (below 4.5:1, WCAG 1.4.3 fail; the Radix scale targets APCA, not WCAG 2); larger visual complexity (rounded shadowed cards, pills, a filled CTA band, an icon tile, centred hero) versus the Google finding that low complexity is rated more appealing; centred hero text with a 4rem h1 raises the content-dispersion risk on desktop; most type sizes in the 12-14px band (chips) among the four. Prototypicality works in its favour but that is the same look as many templates, so "familiar" and "distinctive" trade off.

None of the four was tested with real Visitors, and no source says which of these looks better to Clients.

## Open questions for the owner

Research cannot settle these.

1. **Voice and aesthetic.** Serif editorial (B), neutral sans (C/D/A), or something else is taste. The evidence only says: low complexity, familiar structure, professional execution, no gimmicks.
2. **Distinctive vs. prototypical.** Google's finding favours familiar layouts, but a portfolio also needs to be remembered. How much recognisability to trade away?
3. **Number of Case studies shown at once.** NN/g (for UX portfolios) says 3-5; issue #6 has six. Show all six at equal weight, or lead with fewer and fold the rest?
4. **Mailto only, or also a form?** No source compares conversion. NN/g says never replace direct contact with a form. Is a visible address plus `mailto:` enough, given spam and no-mail-client users?
5. **Dark mode: follow the OS only, or add a manual toggle?** Research supports OS-following with a light default; the toggle is extra scope.
6. **Accent colour.** No hue is evidence-backed; pick for brand and contrast. Which?
7. **Fonts.** System stack (fastest, no decision), Inter (current), or self-hosted variable font? Performance cost differs, trust effect is unmeasured.
8. **Photo or face.** NN/g and Stanford favour showing the real person; the content issues (#4-#7) list no photo. Is one wanted?
9. **Sticky header or none.** Optional on a one-page site; NN/g says to question it.
10. **How strict on AAA extras.** 44px targets, 7:1 text contrast and reduced-motion handling are AAA or beyond AA but cheap; keep them as goals?

## Source list

- Stanford Web Credibility Guidelines: https://credibility.stanford.edu/guidelines/index.html
- Google Research, Users love simple and familiar designs: https://research.google/blog/users-love-simple-and-familiar-designs-why-websites-need-to-make-a-great-first-impression/
- NN/g: [Trust or Bust](https://www.nngroup.com/articles/communicating-trustworthiness/), [Trustworthy design](https://www.nngroup.com/articles/trustworthy-design/), [About Us info](https://www.nngroup.com/articles/about-us-information-on-websites/), [Contact Us pages](https://www.nngroup.com/articles/contact-us-pages/), [UX portfolios](https://www.nngroup.com/articles/ux-design-portfolios/), [How users read](https://www.nngroup.com/articles/how-users-read-on-the-web/), [F-pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/), [Link labels](https://www.nngroup.com/articles/better-link-labels/), [Dark mode](https://www.nngroup.com/articles/dark-mode/), [Sticky headers](https://www.nngroup.com/articles/sticky-headers/), [Breakpoints](https://www.nngroup.com/articles/breakpoints-in-responsive-design/), [Content dispersion](https://www.nngroup.com/articles/content-dispersion/), [Why does a design look good](https://www.nngroup.com/articles/why-does-design-look-good/), [Aesthetic-usability](https://www.nngroup.com/articles/aesthetic-usability-effect/), [Response times](https://www.nngroup.com/articles/response-times-3-important-limits/)
- W3C: WCAG 2.2 Understanding documents linked in section 5; [WCAG 3.0 draft](https://www.w3.org/TR/wcag-3.0/); [Design Tokens format draft](https://www.designtokens.org/tr/drafts/format/)
- MDN: [color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme), [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- web.dev: [Typography](https://web.dev/learn/design/typography/), [Font best practices](https://web.dev/articles/font-best-practices), [Vitals](https://web.dev/articles/vitals), [Responsive basics](https://web.dev/articles/responsive-web-design-basics), [Tap targets](https://web.dev/articles/accessible-tap-targets)
- Butterick, [Practical Typography summary](https://practicaltypography.com/summary-of-key-rules.html)
- GOV.UK Design System: [type scale](https://design-system.service.gov.uk/styles/type-scale/), [layout](https://design-system.service.gov.uk/styles/layout/), [get started](https://design-system.service.gov.uk/get-started/)
- Pico: [GitHub README](https://github.com/picocss/pico), Open Props: https://open-props.style/, Radix Colors: https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale, Tailwind: https://tailwindcss.com/docs/theme

**Not reached (content is JS-rendered or blocked):** Apple HIG, Material 3, Primer, Elliot 2019 abstract (403). Claims that would rest on them are marked unverified or omitted. Several NN/g facts (cards, visual hierarchy, researcher portfolios, apply-secure-ux-job) come from search result summaries rather than a full page read.
