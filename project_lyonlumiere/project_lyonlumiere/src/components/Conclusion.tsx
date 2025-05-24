import React from 'react';
import { Sparkles } from 'lucide-react';

interface ConclusionProps {
  onRestart: () => void;
}

const Conclusion: React.FC<ConclusionProps> = ({ onRestart }) => {
  return (
      <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url(https://images.pexels.com/photos/577697/pexels-photo-577697.jpeg)",
              filter: "brightness(0.5) contrast(1.2)"
            }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

        <div className="container mx-auto px-4 z-10 text-center max-w-3xl">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-300" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Vous avez éclairé l'âme lumineuse de Lyon
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Du cinéma à la Fête des Lumières, votre voyage vous a permis de découvrir comment
            Lyon est devenue une ville emblématique des lumières, tant sur le plan technique qu'artistique
            et symbolique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <a
                href="https://www.lyon-france.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 border border-gray-700 rounded-lg p-6 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Visiter Lyon</h3>
              <p className="text-gray-300">
                Découvrez les merveilles de Lyon et planifiez votre prochain voyage dans la capitale des Gaules.
              </p>
            </a>

            <a
                href="https://www.fetedeslumieres.lyon.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 border border-gray-700 rounded-lg p-6 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Fête des Lumières</h3>
              <p className="text-gray-300">
                Informez-vous sur les prochaines éditions de ce festival unique au monde.
              </p>
            </a>
          </div>

          <button
              onClick={onRestart}
              className="relative inline-flex items-center px-8 py-3 text-lg font-semibold text-yellow-300 border border-yellow-300 rounded-full group overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full blur-sm"></span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3 transition-transform duration-300 group-hover:rotate-[-20deg]"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
              />
            </svg>
            <span className="relative z-10">Recommencer le voyage</span>
          </button>
        </div>
      </div>
  );
};

export default Conclusion;
