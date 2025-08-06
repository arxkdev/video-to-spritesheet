Original Repository: https://github.com/verticalfx/video-to-spritesheet

# Installation
You need:
- Node (below v21)
- ffmpeg installed and added in your system path

# Setup
Clone this repo to your local machine and do ``npm install`` to install the dependencies.

Once you're in the repo, place your files into the input folder called "input_videos". supported video formats include:
```
.mp4
.mov
.avi
.mkv
.flv
.wmv
.webm
.gif
```

# Usage
## Running the regular script
Running the regular script will process videos and create spritesheets for each one and
then upload them to roblox.

Run the script with ``npm start`` and follow the prompts.

## Running the uploading images to Roblox script
Running the uploading images to Roblox script will only upload a folder of images to Roblox.

Run the script with ``npm run uploadSpritesToRoblox`` and follow the prompts.

# Output
- The script will process each video in the input folder and create a spritesheet for each one

- For each video, it extracts the frames and saves them in the results directory with a timestamped subfolder

- Frames are combined into sprite sheets saved in the sheets subdirectory within each video's results folder

- The script gives you the option to upload the spritesheets to Roblox and automatically generates a luau file with the urls of the spritesheets

# Special Notes
- The script will not overwrite existing spritesheets

- The script supports alpha channel (transparency) - it will preserve the alpha channel if your input video has it supported 

# Issues
If you find any issues, please open an issue.

### Feel free to use and modify this project as you like.