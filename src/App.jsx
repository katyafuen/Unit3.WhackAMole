import { GameProvider } from "./context/GameContext";
import WelcomeScreen from "./components/WelcomeScreen";
import GameBoard from "./components/GameBoard";
import { useGame } from "./context/GameContext";

function Game() {
  const { isPlaying } = useGame();
  return isPlaying ? <GameBoard /> : <WelcomeScreen />;
}

export default function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}
