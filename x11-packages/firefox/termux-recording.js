// yamsergey.termux.packages patches 0034-0037: record streamed (MSE) media per tab.
// SourceBuffers in a tab whose top BrowsingContext has termuxMediaRecording set
// write the segments they receive to this directory, one file per init segment
// (<time>-<host>-<video|audio>-<id>-pNNN.mp4|webm) plus a .json summary on stop.
// Toggled from the toolbar button or over WebDriver BiDi (termux.setMediaRecording).
pref("media.termux.recording.dir", "/data/data/com.termux/files/home/Recordings");
