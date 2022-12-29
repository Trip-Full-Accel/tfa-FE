import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../music/music.css";
const Player = () => {
  const musicList = ["ali", "christmas", "iu", "crush1", "miyazaki"];

  let random = Math.round(Math.random() * 4);
  console.log(random);
  return <AudioPlayer className="musicPlayer" src="/music/christmas.mp3" />;
};

export default Player;
