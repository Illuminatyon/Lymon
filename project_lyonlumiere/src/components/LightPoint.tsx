import React, { useState } from 'react';
import { LightPoint as LightPointType } from '../types';

interface LightPointProps {
    lightPoint: LightPointType;
    onOpenModal: (lightPoint: LightPointType) => void;
}

const LightPoint: React.FC<LightPointProps> = ({ lightPoint, onOpenModal }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
            style={{
                left: `${lightPoint.x}%`,
                top: `${lightPoint.y}%`
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onOpenModal(lightPoint)}
        >
            {/* Halo lumineux */}
            <div
                className={`
          rounded-full 
          bg-yellow-400 bg-opacity-20 
          backdrop-blur-sm shadow-[0_0_30px_10px_rgba(255,215,0,0.4)]
          flex items-center justify-center
          transition-all duration-500 ease-in-out
          ${isHovered ? 'w-20 h-20 opacity-90' : 'w-10 h-10 opacity-60'}
        `}
            >
                {/* Point central */}
                <div
                    className={`
            rounded-full bg-yellow-300 
            transition-all duration-500
            ${isHovered
                        ? 'w-8 h-8 animate-ping shadow-[0_0_20px_8px_rgba(255,223,0,0.8)]'
                        : 'w-4 h-4 shadow-[0_0_10px_2px_rgba(255,223,0,0.6)]'}
          `}
                />
            </div>

            {/* Légende en hover */}
            {isHovered && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-1 rounded-full text-sm font-semibold tracking-wide text-yellow-100 bg-black bg-opacity-80 backdrop-blur-md shadow-lg border border-yellow-300 whitespace-nowrap">
                    🎥 {lightPoint.title}
                </div>
            )}
        </div>
    );
};

export default LightPoint;
