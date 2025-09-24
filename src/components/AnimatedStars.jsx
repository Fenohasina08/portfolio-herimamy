 
import React, { useState, useEffect } from 'react';

const AnimatedStars = ({ isDark }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random(),
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2
    });

    const initialStars = Array.from({ length: 50 }, createStar);
    setStars(initialStars);

    const interval = setInterval(() => {
      setStars(prev => {
        const newStars = [...prev];
        const randomIndex = Math.floor(Math.random() * newStars.length);
        newStars[randomIndex] = createStar();
        return newStars;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className={`absolute rounded-full ${isDark ? 'bg-yellow-300' : 'bg-blue-400'} animate-pulse`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedStars;
EOF