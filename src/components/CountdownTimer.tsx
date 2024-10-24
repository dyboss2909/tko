import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

interface CountdownTimerProps {
  startTime: string;
}

const CountdownTimer = ({ startTime }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(startTime).getTime() - new Date().getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLive: true,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isLive: false,
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [startTime]);

  if (timeLeft.isLive) {
    return (
      <div className="text-center">
        <div className="inline-block px-4 py-2 bg-red-500/20 rounded-lg animate-pulse">
          <span className="text-red-400 font-bold">LIVE NOW</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-gray-800 rounded-lg p-3">
      <div className="flex items-center justify-center text-blue-400 mb-2">
        <Timer className="w-4 h-4 mr-2" />
        <span className="text-sm">Fight Begins In:</span>
      </div>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-gray-900 rounded p-2">
          <span className="text-2xl font-bold text-white">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <p className="text-xs text-gray-400">DAYS</p>
        </div>
        <div className="bg-gray-900 rounded p-2">
          <span className="text-2xl font-bold text-white">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <p className="text-xs text-gray-400">HOURS</p>
        </div>
        <div className="bg-gray-900 rounded p-2">
          <span className="text-2xl font-bold text-white">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <p className="text-xs text-gray-400">MINUTES</p>
        </div>
        <div className="bg-gray-900 rounded p-2">
          <span className="text-2xl font-bold text-white">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <p className="text-xs text-gray-400">SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
