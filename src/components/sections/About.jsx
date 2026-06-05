import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import AnimateOnScroll from '../common/AnimateOnScroll';

const About = () => {
  return (
    <section id="propos" className="py-20 bg-about-bg">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <AnimateOnScroll direction="up">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-title">
              {portfolioData.about.title}
            </h2>
            <div className="w-20 h-1 mx-auto bg-link"></div>
          </div>
        </AnimateOnScroll>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <AnimateOnScroll direction="left" delay={200}>
            <div className="flex justify-center">
              <div className="flex items-center justify-center overflow-hidden rounded-full shadow-2xl w-80 h-80 bg-card">
                <div className="overflow-hidden rounded-full w-72 h-72 bg-border">
                  <img
                    src={portfolioData.about.image}
                    alt={portfolioData.personal.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={400}>
            <div>
              <p className="mb-6 text-lg text-secondary">
                {portfolioData.about.description}
              </p>

              <h3 className="mb-4 text-2xl font-semibold text-title">
                Mes qualités
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {portfolioData.about.qualities.map((skill) => (
                  <div
                    key={skill}
                    className="p-4 transition-all duration-300 transform rounded-lg shadow-md bg-card hover:scale-105 active:scale-95"
                  >
                    <span className="font-medium text-title">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;