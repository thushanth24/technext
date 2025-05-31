import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { 
  Building, 
  TrafficCone, 
  HardHat, 
  Leaf, 
  MapPin, 
  Droplets, 
  TrendingUp,
  CheckCircle,
  Star
} from "lucide-react";

export default function Home() {
  const { data: blogPosts = [] } = useQuery({
    queryKey: ["/api/blog"],
  });

  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Modern office building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building Tomorrow's{" "}
              <span className="text-accent">Infrastructure</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Sterling Civil Engineering delivers innovative, sustainable solutions for complex infrastructure challenges. 
              From concept to completion, we engineer excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold">
                  View Our Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Engineering Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive civil engineering solutions across multiple disciplines, 
              ensuring projects are delivered on time, within budget, and to the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrafficCone,
                title: "Infrastructure Design",
                description: "Comprehensive design services for roads, bridges, utilities, and transportation systems that form the backbone of modern communities."
              },
              {
                icon: HardHat,
                title: "Construction Management",
                description: "Full-service project management from planning to completion, ensuring quality, safety, and adherence to schedules and budgets."
              },
              {
                icon: Leaf,
                title: "Environmental Solutions",
                description: "Sustainable engineering practices including environmental impact assessments, remediation, and green infrastructure solutions."
              },
              {
                icon: Building,
                title: "Urban Planning",
                description: "Strategic planning and design for sustainable urban development, zoning analysis, and community infrastructure optimization."
              },
              {
                icon: Droplets,
                title: "Water Resources",
                description: "Water management systems, stormwater solutions, hydraulic modeling, and flood mitigation infrastructure design."
              },
              {
                icon: TrendingUp,
                title: "Structural Analysis",
                description: "Advanced structural engineering and analysis for buildings, bridges, and specialized structures using cutting-edge technology."
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've transformed communities through innovative engineering solutions and sustainable design practices.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Metro Highway Expansion" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                Featured Project
              </Badge>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">Metro Highway Expansion</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                A complex $45M infrastructure project involving the design and construction of a 12-mile highway expansion 
                with integrated smart traffic systems, sustainable drainage, and minimized environmental impact.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "12 miles of new highway infrastructure",
                  "Smart traffic management integration",
                  "Environmental impact reduction by 40%",
                  "Completed 2 months ahead of schedule"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <Link href="/projects">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    View Case Study
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline">
                    See All Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-primary rounded-xl p-8 text-primary-foreground">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "$2.5B", label: "Total Project Value" },
              { number: "25+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Sterling Civil Engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Sterling Civil exceeded our expectations on the downtown revitalization project. Their innovative approach and attention to detail resulted in a transformative infrastructure upgrade.",
                author: "Michael Johnson",
                role: "City Planning Director",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
              },
              {
                quote: "The team's expertise in environmental engineering helped us achieve LEED certification while staying within budget. Their sustainable solutions were impressive.",
                author: "Sarah Chen",
                role: "Development Manager",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
              },
              {
                quote: "From initial consultation to project completion, Sterling Civil demonstrated professionalism and technical excellence. They delivered exactly what we needed, on time.",
                author: "David Rodriguez",
                role: "Project Owner",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      {featuredPosts.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay informed with the latest trends and innovations in civil engineering.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                      <Link href={`/blog/${post.slug}`} className="text-primary hover:underline font-medium">
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/blog">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
