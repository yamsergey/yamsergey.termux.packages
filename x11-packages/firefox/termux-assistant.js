// yamsergey.linux.android ADR 020: the assistant drives this Firefox through WebDriver BiDi on a
// Unix socket in the app's private directory (patch 0033), started in dynamic-start mode (no
// automation marker for sites; Firefox shows a "Remote control" banner). No TCP port.
// Firefox's own Allow/Deny prompt does not show in release builds (experiment F0): the app asks
// the user with its own notification before a session, so Firefox's prompt is off.
// "Disable remote control permanently" in Firefox's banner turns it off for this profile.
pref("remote.experimental.dynamicstart.enabled", true);
pref("remote.experimental.dynamicstart.prompt.enabled", false);
pref("remote.unixsocket.path", "/data/data/com.termux/files/apps/com.termux/firefox-bidi.sock");
pref("remote.prefs.recommended", false);
