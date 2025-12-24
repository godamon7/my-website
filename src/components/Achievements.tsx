import React from 'react';
import { ACHIEVEMENTS } from '../data';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="text-blue-400">关键</span>
          <span className="text-white">成就</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-xl p-5 hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/30 hover:-translate-y-1"
            >
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-3 text-blue-400">{achievement.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{achievement.desc}</p>
                </div>
              </div>
              <p className="text-gray-200 text-base leading-relaxed">
                {achievement.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;