'use client';

import React, { useRef, useState, useEffect } from 'react';

interface CameraCaptureProps {
  onCapture: (image: string) => void;
  onClose?: () => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cameraMode, setCameraMode] = useState<'user' | 'environment'>('user');

  const startCamera = async () => {
    try {
      if (videoRef.current && videoRef.current.srcObject) {
         const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
         tracks.forEach(track => track.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: cameraMode },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsStreaming(true);
        setError(null);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError("Could not access camera. Please allow camera permissions.");
      setIsStreaming(false);
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      // Cleanup: stop stream when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [cameraMode]);

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        const { videoWidth, videoHeight } = videoRef.current;
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
        context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);
        const dataUrl = canvasRef.current.toDataURL('image/jpeg');
        onCapture(dataUrl);
      }
    }
  };

  const switchCamera = () => {
    setCameraMode(prev => prev === 'user' ? 'environment' : 'user');
  };

  return (
    <div className="relative w-full h-full bg-black rounded-[2rem] overflow-hidden flex flex-col">
      {/* Video Feed */}
      <div className="relative flex-1 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]" // Mirror effect for user cam
          style={{ transform: cameraMode === 'user' ? 'scaleX(-1)' : 'none' }}
          playsInline
          muted
        />
        
        {!isStreaming && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
                <p>Initializing camera...</p>
            </div>
        )}

        {error && (
             <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white p-4 text-center">
                <div>
                    <p className="text-red-400 mb-4">{error}</p>
                     <button 
                        onClick={startCamera}
                        className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold uppercase"
                     >
                        Retry
                     </button>
                </div>
            </div>
        )}
      </div>

      {/* Controls */}
      <div className="bg-gray-900 p-6 flex items-center justify-between z-20">
        <button 
            onClick={onClose}
            className="p-3 text-white/50 hover:text-white transition-colors"
        >
            <span className="text-xs font-bold uppercase tracking-widest">Cancel</span>
        </button>

        <button
          onClick={captureImage}
          className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center overflow-hidden hover:scale-105 transition-transform"
        >
            <div className="w-12 h-12 bg-white rounded-full"></div>
        </button>

        <button
            onClick={switchCamera}
            className="p-3 text-white/50 hover:text-white transition-colors"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        </button>
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default CameraCapture;
