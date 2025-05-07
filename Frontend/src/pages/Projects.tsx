import { useEffect, useState } from "react";
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Card, CardContent, CardDescription, CardFooter,
  CardHeader, CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Tabs, TabsContent, TabsList, TabsTrigger
} from '@/components/ui/tabs';
import {
  Dialog, DialogContent, DialogDescription, DialogHeader,
  DialogTitle, DialogTrigger, DialogFooter
} from "@/components/ui/dialog";
import { Github, ExternalLink, Star, Clock, Users } from 'lucide-react';

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: ProjectTag[];
  stars: number;
  contributors: number;
  timeframe: string;
  githubUrl: string;
  demoUrl?: string;
  detailedDescription: string;
  challenges: string[];
  outcomes: string[];
  images: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data: Project[]) => {
        setProjects(data);
        const uniqueCategories = [
          "All",
          ...new Set(data.map((project) => project.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <Layout>
      <div className="pt-20 pb-20 md:pt-28">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block mb-6">
              <div className="bg-accent px-4 py-1.5 rounded-full">
                <span className="text-sm font-medium text-accent-foreground">Projects</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Explore our <span className="text-tech-purple text-glow">innovations</span>
            </h1>
            <p className="text-muted-foreground">
              Discover the amazing projects built by our community members across various tech domains.
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-10">
            <div className="flex justify-center mb-8">
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Dialog key={project._id}>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                          <div className="absolute top-2 right-2 bg-card/90 backdrop-blur-sm py-1 px-2 rounded text-xs font-medium">
                            {project.category}
                          </div>
                        </div>

                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className={tag.color}>
                                {tag.name}
                              </Badge>
                            ))}
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4" /> <span>{project.stars}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" /> <span>{project.contributors}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" /> <span>{project.timeframe}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>

                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>{project.detailedDescription}</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Challenges</h4>
                          <ul className="list-disc list-inside text-muted-foreground">
                            {project.challenges.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Outcomes</h4>
                          <ul className="list-disc list-inside text-muted-foreground">
                            {project.outcomes.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 grid grid-cols-3 gap-2">
                        {project.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="rounded-lg object-cover w-full h-32"
                          />
                        ))}
                      </div>
                      <DialogFooter className="mt-6 flex justify-between">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="gap-2">
                            <Github className="w-4 h-4" /> GitHub
                          </Button>
                        </a>
                        {project.demoUrl && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Button className="gap-2">
                              <ExternalLink className="w-4 h-4" /> Live Demo
                            </Button>
                          </a>
                        )}
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
