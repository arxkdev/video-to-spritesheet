import ffmpeg from "./ffmpeg";

export function getVideoFrameRate(inputVideoPath: string): Promise<number> {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(inputVideoPath, (err: Error, data) => {
      if (err) return reject(err);
  
      const Stream = data.streams[0];
      if (!Stream) return reject(new Error("No stream found"));
  
      const FrameRate = Stream.r_frame_rate;
      if (!FrameRate) return reject(new Error("No frame rate found"));
  
      resolve(eval(FrameRate) as number);
    });
  });
}