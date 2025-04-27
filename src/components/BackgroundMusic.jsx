import { useState, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Initially not playing
  const [isMuted, setIsMuted] = useState(true);      // Initially muted

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // If already playing, pause and mute
      audioRef.current.pause();
      setIsPlaying(false);
      setIsMuted(true);
    } else {
      // If not playing, unmute and play
      audioRef.current.muted = false;
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
      setIsPlaying(true);
      setIsMuted(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} loop muted={isMuted}>
        <source src="/durgedurghatbhari.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleMusic}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
};

export default BackgroundMusic;
