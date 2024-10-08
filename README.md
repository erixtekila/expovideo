# The purpose of this repository is to fix the behavior of the Picture-in-picture feature for android.

## Issue https://github.com/expo/expo/issues/31916
When the fullscreen is turned on, android puts the app in background.
If startsPictureInPictureAutomatically is set to true while going fullscreen, Picture-in-Picture will be actived too, on a separate window, without image and sound.
It's then impossible to go from fullscreen to PiP and back to the VideoView in the app. The video stream is "locked" in the fullscreen view.

Like in iOS, the video should be able to go from fullscreen state to PiP then foregrounded app respectively. It should be 3 differents states.


https://github.com/user-attachments/assets/39f6fcf5-345a-4ddb-a48f-24a67f803190



## Issue https://github.com/expo/expo/pull/31901
**Fixed by https://github.com/expo/expo/pull/31901**
When using `expo` [`video`](https://docs.expo.dev/versions/latest/sdk/video/) if one enable the `startsPictureInPictureAutomatically` property, then PiP will be used for the whole app. Eventhough the video player has been unmounted. See attached screenshot :

<img width="413" alt="Capture d’écran 2024-08-10 à 16 37 24" src="https://github.com/user-attachments/assets/5dfe6eb8-d6ec-47f1-8f14-b255af7a9ab2">
