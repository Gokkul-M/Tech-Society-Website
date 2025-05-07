import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import axios from 'axios';

type Member = {
  name: string;
  role: string;
  avatar: string;
  social: string;
};

type Community = {
  name: string;
  description: string;
  members: number;
  bgClass: string;
};

const CommunitySection = () => {
  const [featuredMembers, setFeaturedMembers] = useState<Member[]>([]);
  const [communities, setCommunities] = useState<Community[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [membersRes, communitiesRes] = await Promise.all([
          axios.get('/api/members'),
          axios.get('/api/communities'),
        ]);
  
        const membersData = Array.isArray(membersRes.data) ? membersRes.data : [];
        const communitiesData = Array.isArray(communitiesRes.data) ? communitiesRes.data : [];
  
        setFeaturedMembers(membersData);
        setCommunities(communitiesData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setFeaturedMembers([]); // fallback
        setCommunities([]);     // fallback
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink"></div>
      <div className="absolute inset-0 grid-pattern"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <div className="bg-accent px-4 py-1.5 rounded-full">
              <span className="text-sm font-medium text-accent-foreground">
                Meet Our Community
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            A diverse community of <span className="text-tech-purple text-glow">tech enthusiasts</span>
          </h2>

          <p className="text-muted-foreground">
            Connect with a global network of developers, designers, and innovators who share your passion for technology.
          </p>
        </div>

        {/* Featured Members */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-semibold mb-8 text-center">
            Featured Members
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <TooltipProvider>
              {featuredMembers.map((member, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Avatar className="h-12 w-12 border-2 border-background cursor-pointer transition-all hover:scale-110">
                      <AvatarImage src={`https://i.pravatar.cc/100?img=${index + 10}`} />
                      <AvatarFallback className="bg-tech-purple text-white">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="flex flex-col items-center">
                    <p className="font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                    <p className="text-xs text-tech-purple">{member.social}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
              <Avatar className="h-12 w-12 border-2 border-dashed border-muted-foreground bg-card flex items-center justify-center">
                <span className="text-xl text-muted-foreground">+</span>
              </Avatar>
            </TooltipProvider>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            ...and many more tech enthusiasts from around the world!
          </p>
        </div>

        {/* Community Groups */}
        <div>
          <h3 className="text-xl font-display font-semibold mb-8 text-center">
            Explore Our Groups
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:[grid-template-columns:repeat(5,minmax(0,1fr))] gap-6">
            {communities.map((community, index) => (
              <Card
                key={index}
                className={`p-6 transition-all hover:translate-y-[-5px] hover:shadow-lg ${community.bgClass}`}
              >
                <h4 className="text-lg font-medium mb-2">{community.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{community.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <Avatar key={i} className="h-6 w-6 border-2 border-background">
                        <AvatarImage src={`https://i.pravatar.cc/100?img=${index * 3 + i + 30}`} />
                        <AvatarFallback className="bg-tech-purple text-white text-xs">
                          {community.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-xs font-medium">{community.members} members</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
