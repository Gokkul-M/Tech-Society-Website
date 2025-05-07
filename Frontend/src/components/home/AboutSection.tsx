
import React from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-1/4 -top-40 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&q=80" 
                alt="Team collaboration" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Floating stats card */}
            <div className={cn(
              "absolute -bottom-6 -right-6 md:bottom-20 md:-right-10",
              "glass p-4 rounded-xl shadow-lg animate-float"
            )}>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-tech-purple">500+</p>
                  <p className="text-xs text-muted-foreground">Members</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-tech-blue">25+</p>
                  <p className="text-xs text-muted-foreground">Events</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className={cn(
              "absolute -top-4 -left-4 md:top-10 md:-left-10",
              "glass py-2 px-4 rounded-full shadow-lg animate-float",
              "flex items-center gap-2"
            )}>
              <span className="h-2.5 w-2.5 bg-green-500 rounded-full"></span>
              <span className="text-xs">Est. 2023</span>
            </div>
          </div>
          
          <div>
            <div className="inline-block mb-6">
              <div className="bg-accent px-4 py-1.5 rounded-full">
                <span className="text-sm font-medium text-accent-foreground">
                  About Tech Society
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Building the future of technology, <span className="text-tech-purple text-glow">together</span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Tech Society is a vibrant community of passionate developers, designers, engineers, and tech enthusiasts. 
              Founded in 2023, we've grown into a thriving ecosystem where innovation meets collaboration.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: "Our Mission",
                  description: "Fueled by passion, we shape tech titans—transforming raw talent into masterful coders, game creators, and AI pioneers. Through collaboration and innovation, we push boundaries and solve real-world challenges with code. Join us and ignite the future, one breakthrough at a time."
                },
                {
                  title: "Our Vision",
                  description: "Our vision is to build a vibrant college tech community where diverse learners unite to explore, innovate, and advance technology. Through collaboration, mentorship, and cutting-edge research, we empower learners to become experts and drive positive impact with technology."
                },
                {
                  title: "Our Values",
                  description: "Innovation, Collaboration, Inclusivity, Knowledge Sharing, and Making Technology Accessible to All."
                }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-tech-purple pl-4">
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
