// yamsergey.linux.android (ADR 013): Mesa binds the software EGL device on Termux (patch 0012),
// so Firefox blocklists GL although zink renders on the GPU and presents through dmabuf.
pref("gfx.webrender.all", true);
pref("layers.acceleration.force-enabled", true);
