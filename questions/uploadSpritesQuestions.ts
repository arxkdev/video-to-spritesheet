import env from "env";

import type { DistinctQuestion } from "inquirer";
import type { UploadSpritesAnswers } from "utils/uploadSprites";

export function getUploadSpritesQuestions(videoChoices: string[]): DistinctQuestion<UploadSpritesAnswers>[] {
  return [
    {
      type: "confirm",
      name: "upload",
      message: "Upload to Roblox?",
      default: false,
    },
    {
      type: "list",
      name: "videoToProcess",
      message: "Which video sheets do you want to upload?",
      choices: videoChoices,
      default: 0,
      when: (answers) => {
        if (!answers.upload) {
          return false;
        }
        if (!env.API_KEY) {
          throw new Error("Cannot upload to Roblox: Missing API_KEY. Please set it in your .env file.");
        }
        return videoChoices.filter(choice => choice !== "All").length > 1;
      },
    },
    {
      type: "list",
      name: "uploadType",
      message: "Do you want to upload from your Roblox Account or a Group?",
      choices: ["Group", "User"],
      default: "User",
      when: (answers) => answers.upload === true && !env.GROUP_ID && !env.USER_ID,
    },
    {
      type: "input",
      name: "id",
      message: "Group ID:",
      when: (answers) => answers.uploadType === "Group" && answers.upload === true && !env.GROUP_ID,
    },
    {
      type: "input",
      name: "id",
      message: "User ID:",
      when: (answers) => answers.uploadType === "User" && answers.upload === true && !env.USER_ID,
    }
  ];
};