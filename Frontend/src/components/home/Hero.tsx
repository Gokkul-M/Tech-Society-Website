import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-tech-purple/20 dark:bg-tech-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-tech-blue/20 dark:bg-tech-blue/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="bg-accent px-4 py-1.5 rounded-full">
              <span className="text-sm font-medium text-accent-foreground">
                Join 1,000+ tech enthusiasts
              </span>
            </div>
          </div>

          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6",
            "bg-clip-text text-transparent bg-gradient-to-r from-tech-purple via-tech-blue to-tech-pink"
          )}>
            Innovate. <span className="text-glow">Connect</span>. Transform.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            A community of forward-thinking developers, designers, and tech enthusiasts
            building the future together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="btn-glow">
                Join Our Community <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline">
                Explore Projects
              </Button>
            </Link>
          </div>

          {/* 3D animated geometric shape */}
          <div className="mt-16 relative h-64 md:h-80">
            <div className="absolute left-1/2 transform -translate-x-1/2 animate-float">
              <div className="relative">
                {/* Purple cube */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-tech-purple/40 rounded-lg backdrop-blur-sm rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
                {/* Blue sphere */}
                <div className="absolute top-10 left-24 w-24 h-24 bg-tech-blue/40 rounded-full backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
                {/* Pink pyramid */}
                <div className="absolute top-10 left-10 w-0 h-0 border-left-20 border-right-20 border-bottom-40 border-transparent border-b-tech-pink/40 animate-float" style={{ animationDelay: '1.5s' }}></div>
                {/* Rings */}
                <div className="absolute top-5 left-20 w-36 h-36 rounded-full border-4 border-tech-purple/20 animate-spin-slow"></div>
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-tech-blue/20 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
              </div>
            </div>

            {/* Community names display */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6 md:gap-10">
              {[
                'Intelligent Systems',
                'Web Development',
                'Game Development',
                'Machine Learning',
                'Cyber Security',
              ].map((community, i) => (
                <div
                  key={community}
                  className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-lg flex items-center justify-center mb-2">
                    <span className="text-[10px] font-medium text-center px-1">
                      {community.split(' ').slice(0, 2).map(word => word[0]).join('')}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">
                    {community}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
