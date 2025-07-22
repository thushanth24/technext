import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

import { useRef } from "react";

function ProjectImageSlider({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hovered && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 2000);
    } else if (!hovered) {
      setIndex(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hovered, images]);

  const imgSrc = images && images.length > 0 ? images[index] : "https://via.placeholder.com/600x400?text=No+Image";

  return (
    <div
      className="relative overflow-hidden rounded-t-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minHeight: "12rem" }}
    >
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {images.length > 1 && (
        <div className="absolute bottom-2 right-2 flex gap-1">
          {images.map((_, i) => (
            <span
              key={i}
              className={`block w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-gray-400 opacity-50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [categories, setCategories] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data: catData, error: catError } = await supabase
          .from('project_categories')
          .select('*')
          .order('name');
        if (catError) throw catError;
        setCategories([{ id: 'all', name: 'All Projects' }, ...(catData || [])]);

        const { data: projData, error: projError } = await supabase
          .from('projects')
          .select('*');
        if (projError) throw projError;
        setProjects(projData || []);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch data');
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.category_id === activeFilter);

  // Optionally map category id to color
  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case "infrastructure":
        return "bg-primary/10 text-primary";
      case "environmental":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "urban":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "water":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-secondary/10 text-secondary";
    }
  };

  // Helper to get category name from id
  const getCategoryName = (categoryId: string) => {
    if (categoryId === 'all') return 'All Projects';
    const cat = categories.find((c) => c.id === categoryId);
    return cat ? cat.name : categoryId;
  };


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Project Portfolio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our diverse portfolio of successful engineering projects that have transformed communities 
              and set new standards for infrastructure excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Project Filter & Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeFilter === cat.id ? "default" : "outline"}
                onClick={() => setActiveFilter(cat.id)}
                className={cn(
                  "px-6 py-3 font-semibold",
                  activeFilter === cat.id 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                )}
              >
                {cat.name}
              </Button>
            ))}
          </div>

          {/* Loading/Error States */}
          {loading ? (
            <div className="text-center text-lg py-12">Loading projects...</div>
          ) : error ? (
            <div className="text-center text-red-500 py-12">{error}</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300">
                  <ProjectImageSlider images={project.images || (project.image ? [project.image] : [])} title={project.title} />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(project.category_id)}>
                        {getCategoryName(project.category_id)}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{project.year || project.created_at?.slice(0,4)}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.tags || []).map((tag: string, index: number) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-end">
                      <Button variant="link" className="text-primary hover:underline p-0">
                        View Details →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Over 25 years of engineering excellence, delivering transformative infrastructure projects.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed", description: "Successfully delivered projects across multiple sectors" },
              { number: "$2.5B", label: "Total Project Value", description: "Combined value of all completed infrastructure projects" },
              { number: "98%", label: "Client Satisfaction", description: "Based on post-project surveys and testimonials" },
              { number: "25+", label: "Years Experience", description: "Decades of engineering expertise and innovation" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm md:text-base font-semibold mb-2">{stat.label}</div>
                <div className="text-xs md:text-sm opacity-80">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's discuss how we can bring your infrastructure vision to life with our proven expertise 
            and innovative approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
                Start a Project
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="px-8 py-4 text-lg font-semibold">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
