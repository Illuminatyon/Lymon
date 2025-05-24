import React from 'react';
import { Scene } from '../types';

interface NavigationProps {
    scenes: Scene[];
    currentSceneIndex: number;
    onNavigate: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({
                                                   scenes,
                                                   currentSceneIndex,
                                                   onNavigate,
                                               }) => {
    return (
        <div className="fixed bottom-6 left-0 right-0 z-30 flex justify-center pointer-events-none">
            <div className="pointer-events-auto bg-black bg-opacity-60 backdrop-blur-md rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg border border-yellow-300">
                {scenes.map((scene, index) => (
                    <button
                        key={scene.id}
                        onClick={() => onNavigate(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-500 
              ${
                            currentSceneIndex === index
                                ? 'bg-yellow-400 scale-150 shadow-[0_0_10px_3px_rgba(255,215,0,0.7)]'
                                : 'bg-yellow-200 opacity-60 hover:opacity-100'
                        }`}
                        aria-label={`Scène ${index + 1}: ${scene.title}`}
                    />
                ))}
            </div>

            <div className="fixed bottom-6 right-6 flex space-x-3 pointer-events-auto">
                <button
                    onClick={() => onNavigate(Math.max(0, currentSceneIndex - 1))}
                    disabled={currentSceneIndex === 0}
                    className={`
            p-3 rounded-full bg-yellow-400 text-black font-bold shadow-md hover:scale-105 transition-all duration-300 
            disabled:opacity-40 disabled:cursor-not-allowed
          `}
                    aria-label="Scène précédente"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={() => onNavigate(Math.min(scenes.length - 1, currentSceneIndex + 1))}
                    disabled={currentSceneIndex === scenes.length - 1}
                    className={`
            p-3 rounded-full bg-yellow-400 text-black font-bold shadow-md hover:scale-105 transition-all duration-300 
            disabled:opacity-40 disabled:cursor-not-allowed
          `}
                    aria-label="Scène suivante"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Navigation;
