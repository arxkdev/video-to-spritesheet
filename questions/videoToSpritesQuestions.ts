import os from "os";
import { readdirSync } from "fs";

import type { DistinctQuestion } from "inquirer";
import type { VideoToSpritesOptions } from "utils/videoToSprites";

const DEFAULT_FRAME_RATE = 25;
const DEFAULT_THREADS = os.cpus().length;
const DEFAULT_FRAME_SIZE = 1024;
const DEFAULT_MAX_SHEET_SIZE = 4096;
const DEFAULT_INPUT_DIR = "input_videos";

export function getVideoToSpritesQuestions(): DistinctQuestion<VideoToSpritesOptions>[] {
  return [
    {
      type: "input",
      name: "inputDir",
      message: "Input directory containing videos:",
      default: DEFAULT_INPUT_DIR,
      required: true,
    },
    {
      type: "list",
      name: "videosToProcess",
      message: "Which videos do you want to process?",
      choices: (answers) => {
        if (!answers.inputDir) {
          return [];
        }

        const Videos = readdirSync(answers.inputDir).map((file) => {
          return {
            name: file,
            value: file,
          };
        });
        Videos.unshift({
          name: "All",
          value: "All",
        });

        return Videos;
      },
      when: (answers) => {
        if (!answers.inputDir) {
          return false;
        }
        return readdirSync(answers.inputDir).length > 1;
      },
      default: "All",
    },
    {
      type: "number",
      name: "frameSize",
      message: "Frame size (in pixels):",
      default: DEFAULT_FRAME_SIZE,
      max: 1024,
    },
    {
      type: "number",
      name: "maxSheetSize",
      message: "Max sheet size (in pixels):",
      default: DEFAULT_MAX_SHEET_SIZE,
      max: 4096,
    },
    {
      type: "confirm",
      name: "useVideoFrameRate",
      message: "Use video frame rate?",
      default: true, // Whether to calculate the video frame rate and use it as the frame rate
    },
    {
      type: "number",
      name: "frameRate",
      message: "Frame rate (frames per second):",
      default: DEFAULT_FRAME_RATE,
      when: (answers) => !answers.useVideoFrameRate,
    },
    {
      type: "number",
      name: "threads",
      message: "Threads (for faster processing):",
      default: DEFAULT_THREADS,
    }
  ];
};