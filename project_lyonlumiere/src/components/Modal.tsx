import React, { useEffect, useRef } from 'react';
import { LightPoint } from '../types';

interface ModalProps {
  lightPoint: LightPoint | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ lightPoint, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Prevent scrolling of background
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);
  
  if (!lightPoint) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300">
      <div 
        ref={modalRef}
        className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden max-w-3xl w-full max-h-[90vh] shadow-2xl transform transition-all duration-300"
        style={{ animation: 'modalFadeIn 0.3s ease-out' }}
      >
        <div className="relative">
          {lightPoint.image && (
            <div className="w-full h-60 md:h-80 overflow-hidden">
              <img 
                src={lightPoint.image} 
                alt={lightPoint.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-4">{lightPoint.title}</h3>
          <p className="text-gray-300 leading-relaxed">{lightPoint.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;