import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  TrafficCone, 
  HardHat, 
  Leaf, 
  Building, 
  Droplets, 
  TrendingUp,
  CheckCircle
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: TrafficCone,
      title: "Infrastructure Design",
      description: "Complete design services for transportation networks, utilities, and public infrastructure projects.",
      features: [
        "Highway & TrafficCone Design",
        "Bridge Engineering", 
        "Utility Systems",
        "Traffic Engineering"
      ]
    },
    {
      icon: HardHat,
      title: "Construction Management",
      description: "Comprehensive project oversight ensuring quality, safety, and timely delivery within budget.",
      features: [
        "Project Planning",
        "Quality Control",
        "Safety Management", 
        "Schedule Control"
      ]
    },
    {
      icon: Leaf,
      title: "Environmental Solutions",
      description: "Sustainable engineering practices focused on environmental protection and resource conservation.",
      features: [
        "Impact Assessments",
        "Remediation Services",
        "Green Infrastructure",
        "Sustainability Planning"
      ]
    },
    {
      icon: Building,
      title: "Urban Planning",
      description: "Strategic development planning for sustainable, livable communities and urban spaces.",
      features: [
        "Master Planning",
        "Zoning Analysis",
        "Community Design",
        "Land Use Planning"
      ]
    },
    {
      icon: Droplets,
      title: "Water Resources",
      description: "Comprehensive water management solutions for municipal and industrial applications.",
      features: [
        "Stormwater Management",
        "Hydraulic Modeling",
        "Flood Control",
        "Water Treatment"
      ]
    },
    {
      icon: TrendingUp,
      title: "Structural Analysis",
      description: "Advanced structural engineering using state-of-the-art analysis and design software.",
      features: [
        "Building Design",
        "Bridge Analysis",
        "Seismic Engineering",
        "Specialty Structures"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin every project with a thorough consultation to understand your needs, objectives, and constraints."
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Our expert team develops comprehensive designs using the latest technology and best practices."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We manage the construction process with rigorous quality control and safety standards."
    },
    {
      step: "04",
      title: "Project Delivery",
      description: "We ensure successful project completion with final inspections and ongoing support."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Engineering Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From initial concept through final construction, we provide end-to-end engineering services 
              that meet the evolving needs of modern infrastructure development.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery from concept to completion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Industry Specializations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We serve diverse sectors with specialized expertise and industry-specific solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Transportation",
                description: "Highways, airports, railways, and public transit infrastructure",
                icon: "🚧"
              },
              {
                title: "Municipal",
                description: "Water treatment, waste management, and civic facilities",
                icon: "🏛️"
              },
              {
                title: "Commercial", 
                description: "Office buildings, retail centers, and mixed-use developments",
                icon: "🏢"
              },
              {
                title: "Industrial",
                description: "Manufacturing facilities, warehouses, and logistics centers",
                icon: "🏭"
              },
              {
                title: "Energy",
                description: "Power generation, transmission, and renewable energy projects",
                icon: "⚡"
              },
              {
                title: "Healthcare",
                description: "Hospitals, medical facilities, and specialized healthcare infrastructure",
                icon: "🏥"
              }
            ].map((specialization, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{specialization.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{specialization.title}</h3>
                  <p className="text-muted-foreground">
                    {specialization.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss how our engineering expertise can bring your vision to life. 
            Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold">
                Get a Quote
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
