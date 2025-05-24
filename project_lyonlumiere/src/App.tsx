import React, { useState } from 'react';
import Introduction from './components/Introduction';
import Scene from './components/Scene';
import Navigation from './components/Navigation';
import Conclusion from './components/Conclusion';
import { scenes } from './data/scenes';

enum AppState {
  INTRODUCTION,
  JOURNEY,
  CONCLUSION
}

function App() {
  const [appState, setAppState] = useState<AppState>(AppState.INTRODUCTION);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  const startJourney = () => {
    setAppState(AppState.JOURNEY);
  };

  const finishJourney = () => {
    setAppState(AppState.CONCLUSION);
  };

  const restartJourney = () => {
    setCurrentSceneIndex(0);
    setAppState(AppState.INTRODUCTION);
  };

  const handleSceneNavigation = (index: number) => {
    if (index === scenes.length - 1 && currentSceneIndex !== index) {
      // Add a slight delay before showing conclusion when user directly navigates to last scene
      setCurrentSceneIndex(index);
      setTimeout(() => {
        finishJourney();
      }, 5000);
    } else if (index === scenes.length) {
      finishJourney();
    } else {
      setCurrentSceneIndex(index);
    }
  };

  // Custom effect for scene transitions
  React.useEffect(() => {
    if (appState === AppState.JOURNEY && currentSceneIndex === scenes.length - 1) {
      // Add a slight delay before showing conclusion when user navigates through all scenes
      const timer = setTimeout(() => {
        finishJourney();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [appState, currentSceneIndex]);

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Add global styles for smooth transitions */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .text-shadow-lg {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      {appState === AppState.INTRODUCTION && (
        <Introduction onStart={startJourney} />
      )}

      {appState === AppState.JOURNEY && (
        <>
          <div className="relative w-full h-screen overflow-hidden" style={{ animation: 'fadeIn 1s ease-out' }}>
            <Scene scene={scenes[currentSceneIndex]} />
          </div>
          <Navigation 
            scenes={scenes}
            currentSceneIndex={currentSceneIndex}
            onNavigate={handleSceneNavigation}
          />
        </>
      )}

      {appState === AppState.CONCLUSION && (
        <Conclusion onRestart={restartJourney} />
      )}
    </div>
  );
}

export default App;