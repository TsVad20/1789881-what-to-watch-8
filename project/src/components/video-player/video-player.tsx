import { useEffect, useRef, useState } from 'react';


type VideoPlayerProps = {
  src: string
  autoPlay: boolean
  activeFilm: number
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {

  const {src, autoPlay, activeFilm} = props;
  const [, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.muted = true;
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [activeFilm]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (autoPlay) {
      videoRef.current.play();
    }
  });

  return (
    <video src={src} ref={videoRef}></video>
  );
}

export default VideoPlayer;
