import React from 'react';
import { Weight, Clock, Star } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

interface Fighter {
  name: string;
  record: string;
  image: string;
}

interface FightProps {
  redCorner: Fighter;
  blueCorner: Fighter;
  weightClass: string;
  startTime: string;
  isMainEvent?: boolean;
}

const formatRecord = (record: string) => {
  const [wins, losses, nc] = record.split('-');
  return (
    <div className="flex items-center justify-center gap-1">
      <span className="text-blue-400">{wins}</span>
      <span className="text-gray-400">-</span>
      <span className="text-red-400">{losses}</span>
      <span className="text-gray-400">-</span>
      <span className="text-gray-500">{nc}</span>
    </div>
  );
};

export function FightCard({
  redCorner,
  blueCorner,
  weightClass,
  startTime,
  isMainEvent,
}: FightProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 p-6 mb-6 border border-opacity-20 ${
        isMainEvent ? 'border-red-500' : 'border-blue-400'
      } hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300`}
    >
      {isMainEvent && (
        <div className="absolute top-4 right-4 flex items-center text-yellow-400">
          <Star className="w-5 h-5 mr-1" />
          <span className="text-sm font-semibold">Main Event</span>
        </div>
      )}

      <div className="flex justify-between items-center gap-8">
        <div className="flex-1 text-center">
          <div className="w-32 h-32 mx-auto mb-3 relative">
            <img
              src={redCorner.image}
              alt={redCorner.name}
              className="w-full h-full rounded-full object-cover border-2 border-red-500 p-1"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">
            {redCorner.name}
          </h3>
          {formatRecord(redCorner.record)}
        </div>

        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-white mb-2">VS</div>
          <div className="flex items-center text-blue-400 mb-2">
            <Weight className="w-4 h-4 mr-1" />
            <span className="text-sm">{weightClass}</span>
          </div>
          <div className="flex items-center text-blue-400">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">
              {new Date(startTime).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
        </div>

        <div className="flex-1 text-center">
          <div className="w-32 h-32 mx-auto mb-3 relative">
            <img
              src={blueCorner.image}
              alt={blueCorner.name}
              className="w-full h-full rounded-full object-cover border-2 border-blue-500 p-1"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">
            {blueCorner.name}
          </h3>
          {formatRecord(blueCorner.record)}
        </div>
      </div>

      <CountdownTimer startTime={startTime} />
    </div>
  );
}

export default FightCard;
