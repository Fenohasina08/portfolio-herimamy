// src/components/LogoTest.jsx
import React from 'react';
import { MessageCircle, Bot } from 'lucide-react';

const LogoTest = () => {
  const logos = [
    { name: 'Option 1: Gradient Simple', component: 'gradient' },
    { name: 'Option 2: Initiales HF', component: 'initials' },
    { name: 'Option 3: Robot Moderne', component: 'robot' },
    { name: 'Option 4: Neon Pulse', component: 'neon' },
    { name: 'Option 5: Minimal', component: 'minimal' },
  ];

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold">Tests de logos Chatbot</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {logos.map((logo) => (
          <div key={logo.name} className="p-4 border rounded-lg">
            <h3 className="mb-4 font-medium">{logo.name}</h3>
            <div className="flex justify-center">
              {/* Exemple du design gradient */}
              <button className="flex items-center justify-center w-16 h-16 text-white rounded-full shadow-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <MessageCircle className="w-7 h-7" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTest;