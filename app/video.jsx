import { StyleSheet, View, Button } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useRef, useState } from 'react';

export default ()=>
{
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPiP, setPiP] = useState(true);
  const player = useVideoPlayer( 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', player => {
    player.loop = true;
    player.staysActiveInBackground = true;
    player.play();
  });

  useEffect(() => {
    const subscription = player.addListener('playingChange', isPlaying => {
      setIsPlaying(isPlaying);
    });

    return () => {
      subscription.remove();
    };
  }, [player]);

  // unmount
  useEffect
  (
    _ =>
    {
      return _ =>
      {
        console.log( ref.current );// null
      }
    },[]
  );

  return (
    <View style={styles.contentContainer}>
      <VideoView
        ref={ref}
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        startsPictureInPictureAutomatically
      />
      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? 'Pause' : 'Play'}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
            setIsPlaying(!isPlaying);
          }}
        />
        <Button
          title={isPiP ? 'PiP mode' : 'PiP disabled'}
          onPress={
            _ => {
            if (isPiP) 
            {
              ref.current.startPictureInPicture();
            } else {
              ref.current.stopPictureInPicture();
            }
            setPiP( ! isPiP );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});