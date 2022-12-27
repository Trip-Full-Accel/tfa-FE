import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import "../music/music.css";
const Player = () => {
  const musicList = ["ali", "christmas", "iu", "crush1", "miyazaki"];

  let random = Math.round(Math.random() * 4);
  console.log(random);
  return (
    <AudioPlayer
      // style={{
      //   marginTop: "20px",
      //   width: "80%",
      //   height: "10%",
      //   backgroundColor: "transparent",
      //   borderRadius: "20px",
      //   border: "2px solid",
      // }}
      className="musicPlayer"
      src="/music/christmas.mp3"
    />
  );
};

export default Player;
