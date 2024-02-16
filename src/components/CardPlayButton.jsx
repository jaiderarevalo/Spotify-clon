import { usePlayerStore } from "@/store/playerStore";
import { Pause, Play } from "./Player";

export const CardPlayButton = ({ id, size = "small" }) => {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;
  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;
        setIsPlaying(true);
        setCurrentMusic({ songs, playlist, song: songs[0] });
        console.log({ songs, playlist });
      });
    /*     setCurrentMusic({ playlist: { id } });
    setIsPlaying(!isPlaying) */
  };
  const iconClassName = size === "small" ? "w-4 h-4" : "w-6 h-6";
  return (
    <button
      onClick={handleClick}
      className="card-play-button  rounded-full bg-green-500 p-4 hover:scale-110 transition hover:bg-green-400"
    >
      {isPlayingPlaylist ? <Pause className={iconClassName} /> : <Play />}
    </button>
  );
};
