import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "All Projects" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "environmental", label: "Environmental" },
    { id: "urban", label: "Urban Planning" },
    { id: "water", label: "Water Resources" }
  ];

  const projects = [
    {
      id: 1,
      title: "Metropolitan Bridge Project",
      category: "infrastructure",
      categoryLabel: "Infrastructure",
      budget: "$25M",
      year: "2023",
      description: "A $25M cable-stayed bridge project featuring innovative design and sustainable materials.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      tags: ["Bridge Design", "Structural Engineering", "Sustainable Materials"]
    },
    {
      id: 2,
      title: "Green Energy Infrastructure",
      category: "environmental",
      categoryLabel: "Environmental",
      budget: "$18M",
      year: "2023",
      description: "Sustainable energy infrastructure supporting renewable power generation and distribution.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      tags: ["Solar Energy", "Grid Integration", "Environmental Impact"]
    },
    {
      id: 3,
      title: "Downtown Revitalization",
      category: "urban",
      categoryLabel: "Urban Planning",
      budget: "$45M",
      year: "2022",
      description: "Comprehensive urban renewal project transforming 50 acres of downtown core infrastructure.",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      tags: ["Urban Design", "Mixed-Use Development", "Community Planning"]
    },
    {
      id: 4,
      title: "Water Treatment Facility",
      category: "water",
      categoryLabel: "Water Resources",
      budget: "$32M",
      year: "2022",
      description: "State-of-the-art water treatment plant serving 500,000 residents with advanced filtration systems.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      tags: ["Water Treatment", "Environmental Engineering", "Public Health"]
    },
    {
      id: 5,
      title: "Commercial Complex Development",
      category: "infrastructure",
      categoryLabel: "Infrastructure",
      budget: "$28M",
      year: "2021",
      description: "Mixed-use development with integrated transportation and utility infrastructure planning.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      tags: ["Commercial Development", "Infrastructure Integration", "Transportation Planning"]
    },
    {
      id: 6,
      title: "Wetland Restoration Project",
      category: "environmental",
      categoryLabel: "Environmental",
      budget: "$8M",
      year: "2021",
      description: "Ecological restoration of 200-acre wetland system with sustainable stormwater management.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      tags: ["Ecological Restoration", "Stormwater Management", "Biodiversity Conservation"]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
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
            {filterOptions.map((option) => (
              <Button
                key={option.id}
                variant={activeFilter === option.id ? "default" : "outline"}
                onClick={() => setActiveFilter(option.id)}
                className={cn(
                  "px-6 py-3 font-semibold",
                  activeFilter === option.id 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                )}
              >
                {option.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(project.category)}>
                      {project.categoryLabel}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{project.budget}</span>
                    <Button variant="link" className="text-primary hover:underline p-0">
                      View Details →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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

      {/* Featured Case Study */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4">Featured Case Study</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Metro Highway Expansion
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our largest infrastructure project to date, the Metro Highway Expansion represents the 
                pinnacle of modern transportation engineering. This $45M project involved complex 
                coordination between multiple stakeholders and innovative solutions for environmental protection.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Project Scope</h4>
                  <p className="text-muted-foreground">
                    12-mile highway expansion with 6 new interchanges, smart traffic systems, 
                    and integrated stormwater management.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Innovation Highlights</h4>
                  <p className="text-muted-foreground">
                    First highway in the region to integrate IoT sensors for real-time traffic monitoring 
                    and adaptive signal control systems.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Environmental Impact</h4>
                  <p className="text-muted-foreground">
                    40% reduction in environmental impact through innovative design and sustainable materials.
                  </p>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View Full Case Study
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Metro Highway Expansion project" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
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
