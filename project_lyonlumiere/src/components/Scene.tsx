import React, { useState } from 'react';
import { Scene as SceneType, LightPoint as LightPointType } from '../types';
import LightPoint from './LightPoint';
import Modal from './Modal';

interface SceneProps {
  scene: SceneType;
}

const Scene: React.FC<SceneProps> = ({ scene }) => {
  const [activePoint, setActivePoint] = useState<LightPointType | null>(null);
  
  const openModal = (lightPoint: LightPointType) => {
    setActivePoint(lightPoint);
  };
  
  const closeModal = () => {
    setActivePoint(null);
  };
  
  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-black"
      style={{ 
        backgroundImage: `url(${scene.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-filter backdrop-brightness-50"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 text-shadow-lg">
            {scene.title}
          </h2>
          <p className="text-lg text-gray-200 text-center max-w-2xl mx-auto mb-8">
            {scene.description}
          </p>
        </div>
      </div>
      
      {scene.lightPoints.map((point) => (
        <LightPoint key={point.id} lightPoint={point} onOpenModal={openModal} />
      ))}
      
      <Modal lightPoint={activePoint} onClose={closeModal} />
    </div>
  );
};

export default Scene;