import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = () => (
  <AudioPlayer
    autoPlay
    src="/music/crush1.mp3"
    onPlay={(e) => console.log("onPlay")}
    // other props here
    volume={0.2}
  />
);
export default Player;
