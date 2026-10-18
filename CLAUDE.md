# Working rules for this repository

Fork of termux-packages. The `firefox-wayland` branch carries the Termux Firefox
build (`x11-packages/firefox`) with the media-recording patches 0034–0038.

## Comments and commit messages

- Keep code comments, patch descriptions and commit messages generic and technical.
  Never name a specific website, service or brand; describe the behaviour instead
  ("an adaptive player switches rendition", "a page may fill the buffers seconds
  apart", "a live stream's init segment may claim hours").
- Design mock-ups use invented placeholder domains only.

## Firefox package

- Firefox stays at the version pinned in `x11-packages/firefox/build.sh`; do not bump
  it to upstream's version without asking.
- Patches are regenerated from a pristine/modified source tree with `diff -u` and
  verified by applying them to the pristine files before committing; no hand-edited
  hunks, no manual `omni.ja` repacking on the device.
- Builds run in CI (about 95 minutes); keep the number of build iterations low and
  debug from CI logs and the device first.
- Never modify `.github/workflows`.

## Media recording feature

- API-first (WebDriver BiDi root module `termux`); no Android-side implementation
  unless asked.
- Test automated regressions on neutral pages (for example a public video site's
  test clip). Do not open the user's streaming sites through the automation; the user
  runs those tests and shares the recording's timestamp.
