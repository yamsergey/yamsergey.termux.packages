// yamsergey.termux.packages patches 0034-0037: record streamed (MSE) media per tab.
// SourceBuffers in a tab whose top BrowsingContext has termuxMediaRecording set
// write the segments they receive to this directory, one part per init segment
// (<time>-<host>-<video|audio>-<id>-pNNN.mp4|webm). On stop, Firefox merges the
// parts with ffmpeg into <time>-<host>.mp4 (or .webm) next to a .json summary.
// Toggled from the toolbar button or over WebDriver BiDi (termux.setMediaRecording).
pref("media.termux.recording.dir", "/data/data/com.termux/files/home/Recordings");
pref("media.termux.recording.ffmpeg", "/data/data/com.termux/files/usr/bin/ffmpeg");
// Keep the parts after a successful merge.
pref("media.termux.recording.keepParts", false);
// Re-encode the parts of another size than the main rendition (H.264 only).
pref("media.termux.recording.rescaleParts", true);
// A tab being recorded keeps reporting document.visibilityState "visible"
// while its window is in the background, so that the page's player neither
// pauses nor lowers the quality for a hidden page.
pref("media.termux.recording.keepVisible", true);
// One folder per recording, "<start time> <tab title>", holding its parts
// while it runs and the merged file and summary afterwards.
pref("media.termux.recording.folderPerRecording", true);
