import ffmpeg from "fluent-ffmpeg";
import ffprobePath from "@ffprobe-installer/ffprobe";

// Set ffprobe path
ffmpeg.setFfprobePath(ffprobePath.path);

export default ffmpeg;