import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const Team = () => {
  const [teamGroups, setTeamGroups] = useState([]);

  useEffect(() => {
    // Fetch team members from the backend
    const fetchTeamData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/team");
        const data = await response.json();
        const groups = groupTeamMembersByRole(data);
        setTeamGroups(groups);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  // Function to group team members by role or group
  const groupTeamMembersByRole = (teamMembers) => {
    const groups = [
      { title: "Overall Coordinators", members: [] },
      { title: "Assistant Coordinators", members: [] },
      { title: "Web Development", members: [] },
      { title: "Game and App Development", members: [] },
      { title: "Machine Learning", members: [] },
      { title: "Intelligent Systems", members: [] },
      { title: "Cyber Security", members: [] },
    ];

    teamMembers.forEach((member) => {
      if (member.role.includes("Overall")) {
        groups[0].members.push(member);
      } else {
        groups[1].members.push(member);
      }
    });

    return groups;
  };

  return (
    <Layout>
      <div className="pt-20 pb-20 md:pt-28 relative">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block mb-6">
              <div className="bg-accent px-4 py-1.5 rounded-full">
                <span className="text-sm font-medium text-accent-foreground">
                  Our Team
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Meet the <span className="text-tech-purple text-glow">amazing people</span> behind Tech Society
            </h1>
            <p className="text-muted-foreground">
              Our diverse team of passionate volunteers who make everything possible.
            </p>
          </div>

          {/* Timeline line */}
          <div className="absolute left-5 top-64 bottom-20 border-l-2 border-muted z-0 hidden md:block" />

          {/* Team Groups */}
          {teamGroups.map((group) => (
            <div key={group.title} className="relative mb-20 md:pl-12">
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-4 h-4 rounded-full bg-tech-purple border-4 border-white shadow-md" />
                <h2 className="text-2xl font-display font-bold">{group.title}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 relative z-10">
                {group.members.map((member) => (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * member._id }}
                    viewport={{ once: true }}
                    className="transition-transform transform hover:-translate-y-1"
                  >
                    <Card className="group overflow-hidden shadow-sm hover:shadow-lg transition-shadow rounded-xl">
                      <CardContent className="p-0">
                        <div className="relative h-44 bg-muted">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                            <h3 className="text-white text-base font-semibold">{member.name}</h3>
                            <p className="text-white/80 text-sm">{member.role}</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-muted-foreground text-xs mb-3 line-clamp-3">
                            {member.bio}
                          </p>
                          <div className="flex gap-2">
                            <TooltipProvider>
                              {member.socials.github && (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <a
                                      href={member.socials.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                      <GithubIcon />
                                    </a>
                                  </TooltipTrigger>
                                  <TooltipContent>GitHub</TooltipContent>
                                </Tooltip>
                              )}
                              {member.socials.linkedin && (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <a
                                      href={member.socials.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                      <LinkedInIcon />
                                    </a>
                                  </TooltipTrigger>
                                  <TooltipContent>LinkedIn</TooltipContent>
                                </Tooltip>
                              )}
                              {member.socials.twitter && (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <a
                                      href={member.socials.twitter}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                      <TwitterIcon />
                                    </a>
                                  </TooltipTrigger>
                                  <TooltipContent>Twitter</TooltipContent>
                                </Tooltip>
                              )}
                            </TooltipProvider>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Team;
