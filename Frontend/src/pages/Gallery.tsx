import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface GalleryImage {
  _id: string;
  url: string;
  title: string;
  category: string;
  description: string;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/gallery');
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

  const categories = ["All", ...Array.from(new Set(images.map(img => img.category)))];

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <Layout>
      <div className="pt-20 pb-20 md:pt-28">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block mb-6">
              <div className="bg-accent px-4 py-1.5 rounded-full">
                <span className="text-sm font-medium text-accent-foreground">
                  Gallery
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Explore our <span className="text-tech-purple text-glow">moments</span>
            </h1>
            
            <p className="text-muted-foreground">
              A visual journey through our events, workshops, and community activities.
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className={filter === category ? "btn-glow" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {filteredImages.map((image) => (
              <div 
                key={image._id} 
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
                  <h3 className="text-white font-medium">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Dialog */}
          {selectedImage && (
            <Dialog 
              open={!!selectedImage} 
              onOpenChange={(open) => !open && setSelectedImage(null)}
            >
              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                <div className="relative">
                  <img 
                    src={selectedImage.url} 
                    alt={selectedImage.title} 
                    className="w-full h-auto"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-6">
                  <DialogHeader>
                    <DialogTitle>{selectedImage.title}</DialogTitle>
                    <DialogDescription className="mt-2">
                      <span className="inline-block bg-muted px-2 py-1 rounded-md text-xs mb-3">
                        {selectedImage.category}
                      </span>
                      <p>{selectedImage.description}</p>
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
