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
