
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Users,
  Rocket,
  GraduationCap,
  Calendar,
  Search,
  Heart
} from 'lucide-react';

const WhyJoinSection = () => {
  const reasons = [
    {
      icon: <Users className="h-8 w-8 text-tech-purple" />,
      title: "Networking",
      description: "Connect with like-minded individuals, industry experts, and potential collaborators."
    },
    {
      icon: <Rocket className="h-8 w-8 text-tech-blue" />,
      title: "Innovation",
      description: "Work on cutting-edge projects and bring your creative ideas to life."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-tech-pink" />,
      title: "Learning",
      description: "Access workshops, talks, and resources to enhance your technical skills."
    },
    {
      icon: <Calendar className="h-8 w-8 text-tech-purple" />,
      title: "Events",
      description: "Participate in hackathons, conferences, and tech meetups."
    },
    {
      icon: <Search className="h-8 w-8 text-tech-blue" />,
      title: "Opportunities",
      description: "Discover internship, job, and research opportunities in tech."
    },
    {
      icon: <Heart className="h-8 w-8 text-tech-pink" />,
      title: "Community",
      description: "Be part of a supportive community that grows and learns together."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tech-purple via-tech-blue to-tech-pink"></div>
      <div className="absolute inset-0 grid-pattern"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <div className="bg-accent px-4 py-1.5 rounded-full">
              <span className="text-sm font-medium text-accent-foreground">
                Why Join Us
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Six compelling reasons to become part of our <span className="text-tech-purple text-glow">tech family</span>
          </h2>
          
          <p className="text-muted-foreground">
            Being a member of Tech Society means more than just adding a line to your resume. 
            It's about growth, connections, and making a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border"
            >
              <div className="flex flex-col h-full">
                <div className="bg-accent/50 rounded-lg w-14 h-14 flex items-center justify-center mb-5">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{reason.description}</p>
                <div className="w-12 h-1 bg-tech-purple/30 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/register">
            <Button size="lg" className="btn-glow">
              Join Us Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
