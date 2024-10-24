import React from 'react';
import { FightCard } from './components/FightCard';
import { Trophy, Menu } from 'lucide-react';

const fights = [
  {
    redCorner: {
      name: "Ilia 'El Matador' Topuria",
      record: '15-0-0',
      image:
        'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4350812.png&w=350&h=254',
    },
    blueCorner: {
      name: "Max 'Blessed' Holloway",
      record: '26-7-0',
      image:
        'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2614933.png&w=350&h=254',
    },
    weightClass: 'Lightweight',
    startTime: '2024-03-23T22:00:00',
    isMainEvent: true,
  },
  {
    redCorner: {
      name: "Sarah 'The Storm' Johnson",
      record: '15-1-0',
      image:
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&h=400&fit=crop',
    },
    blueCorner: {
      name: "Maria 'Lightning' Rodriguez",
      record: '14-2-0',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    },
    weightClass: "Women's Bantamweight",
    startTime: '2024-03-23T21:00:00',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Trophy className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">
                ELITE FIGHTS
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Live Events
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Rankings
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  News
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Stats
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              UPCOMING FIGHTS
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the future of combat sports with real-time updates and
            live fight tracking
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {fights.map((fight, index) => (
            <FightCard key={index} {...fight} />
          ))}
        </div>
      </main>

      {/* Glowing Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent"></div>
      </div>
    </div>
  );
}

export default App;
