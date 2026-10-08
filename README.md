# Cozy Morning

A cozy morning checklist with Standard Morning and Emergency Morning modes. No login, database, notifications, or automatic resets. Progress is saved on the device. This package reuses the existing prototype.

## Before you begin

Create or sign into a free GitHub account. A computer is recommended for the upload. No programming tools, paid subscription, or domain are needed. The repository and website will be public; checkmarks are not uploaded. Do not enable Pages until you are ready to publish.

## Upload (does not enable the website)

1. Download Cozy-Morning-GitHub-Pages.zip and extract it. On Windows use Extract All; on a Mac double-click the ZIP.
2. Sign into github.com. Use the + menu, then New repository.
3. Name it cozy-morning. Choose Public and check Add a README file. Click Create repository.
4. On its Code tab choose Add file, then Upload files.
5. Drag the CONTENTS of the extracted folder into the upload area. Do not upload the ZIP or an enclosing folder. index.html must be at the top level beside app.js and sw.js.
6. Click Commit changes. This saves the files; it does not enable GitHub Pages on this new repository.
7. Stop here until you understand the publishing step and are ready. The source files are already public once uploaded.

## Publish only when ready

1. In that same repository, open Settings, then Pages.
2. Under Build and deployment choose Deploy from a branch.
3. Select main and / (root), then Save. THIS ENABLES PUBLICATION.
4. Wait for GitHub to finish. Return to Settings > Pages and use the displayed website link; allow several minutes. It will normally resemble https://YOUR-USERNAME.github.io/cozy-morning/.
5. If needed enable Enforce HTTPS once available. Open the https address, not the repository's github.com address.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Open on iPhone and install

1. Open the published https website address in Safari while online.
2. Wait for the message Ready to use offline.
3. Tap Share (square with an upward arrow). Depending on Safari's layout it may be inside the More menu.
4. Choose Add to Home Screen. Leave Open as Web App enabled if that option appears. Tap Add.
5. Open Cozy Morning from its new icon WHILE STILL ONLINE. Wait for Ready to use offline there too.
6. Use that icon consistently. Safari and the Home Screen app can have separate progress; don't assume Safari checkmarks transfer during installation.

## Test on your phone

1. In Standard Morning check Drink a glass of water and Write a few thoughts. Confirm progress changes.
2. Switch to Emergency Morning. Water should stay checked; Write a few thoughts is hidden. Stretching is 1 minute, freshening up 3, breakfast 5, and planning 1. There are 9 tasks versus 12 in Standard.
3. Switch back. The optional task should still be checked. Uncheck and recheck a task.
4. Close the app, including dismissing it from the app switcher, and reopen from its Home Screen icon. Checkmarks and mode should remain. Repeat several times.
5. After Ready to use offline appears, switch on Airplane Mode and ensure Wi-Fi is off. Close and reopen from the icon. Check/uncheck tasks, switch modes, close, and reopen again. Restore connectivity afterward.
6. Tap Reset. Keep progress should cancel; Reset in the confirmation should clear every checkmark, including hidden optional tasks. Reopen to confirm it stays clear.
7. Repeat independently on iPad if desired. There is no device synchronization.

## Updates without a new address

Use the SAME repository and filenames. Upload replacement files using Add file > Upload files, then Commit changes. Once Pages is enabled this publishes the update automatically: don't commit changes to the publishing branch until ready.

Every release changing application files must also increment CACHE in sw.js (v1 to v2, then v3, etc.). Keep the storage key soft-morning-v1 and existing task IDs unchanged. Do not rename the repository or change domains unless prepared for storage/address changes. If asking for an update, request a complete replacement package with a new cache version.

Open online to allow the update to download. If an update-ready message appears, close all Cozy Morning windows/tabs and reopen. You can need a second visit while online to activate an update. Updating files does not intentionally clear checkmarks. Previously removed task IDs are retained for possible restoration; Reset clears them too.

Deleting website data, removing the app, or browser storage eviction may lose progress. Progress is not a cloud backup. Keep using the installed icon and don't use private browsing. Any progress from the old downloaded file does not automatically migrate to this new website.

## Validation completed

JavaScript syntax checks passed. Automated app-logic checks with a simulated document and storage passed: checking/unchecking, progress counts, both modes, optional progress retention, shorter durations, saved-state reload, reset/cancel, old storage key compatibility, unknown task retention, and no automatic date reset.

Offline-worker simulation passed with network unavailable: install asset list, every referenced cache file present, project-repository subpath, offline page and asset retrieval, navigation fallback, scoped requests, and safe cache cleanup.

These are simulations, not real browser tests. A previous browser launch was blocked by this environment. Actual Safari layout, touchscreen usability, browser storage persistence, service-worker installation/activation, offline cold reopening, and Home Screen behavior require the phone tests above. No app has been published yet.

## Files

index.html: screen and visual style
app.js: tasks, modes, progress and saving
sw.js: offline loading and update version
manifest.json: installed-app name, scope and icons
icon-192.png, icon-512.png, apple-touch-icon.png, icon.svg: app icons
.nojekyll: static publishing marker (may be hidden by your computer; this app also uses no special Jekyll filenames)
README.md: these instructions

No build commands or dependencies are required. All app resource paths are relative so a GitHub Pages project repository works.
