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
      icon: () => <span>🏗️</span>,
      title: "Specialist Consultants for Geotechnical Engineering Design",
      description: "",
      features: [
        "All types of ground work design, Deep Excavation",
        "Basement Excavation Design for basement construction",
        "Slope stability analyses & Ground Improvement",
        "Earth Retaining & Stabilizing Structure (ERSS)",
        "Geotechnical Building Work (GBW) Design",
        "Soil Nail & Ground Anchor Design",
        "Tunnelling & Pipe Jacking Design",
        "Deep trench excavation and caisson design",
        "Deep & Shallow Foundation Design"
      ]
    },
    {
      icon: () => <span>🏢</span>,
      title: "Civil and Infrastructure Design Consultancy",
      description: "",
      features: [
        "Curtain Wall, Cladding, Skylight, Façade",
        "Underground Structure design",
        "Canopy",
        "Barrier design",
        "Tentages Design and endorsement",
        "Demolition work with the construction sequences",
        "Road Works",
        "Drainage Works design",
        "General Building Works design"
      ]
    },
    {
      icon: () => <span>📐</span>,
      title: "Structural, Civil & Geotechnical engineering drawings",
      description: "",
      features: [
        "MEP (M&E) Drawings",
        "Architectural Drawings / Interior Drawings",
        "Technical Drawings",
        "Shop Drawings",
        "As Built Drawings",
        "Schematic Drawings",
        "Revisions and Mark Up Drawings",
        "Building Information Modelling (BIM)",
        "3D Drawing / 3D Modelling",
        "3D Rendering / 3D Design",
        "3D Animation / 3D Simulation / 3D Walkthrough",
        "3D Laser Scanning"
      ]
    },
    {
      icon: () => <span>🏠</span>,
      title: "Architectural and interior designs",
      description: "",
      features: [
        "Architectural design & space planning",
        "Technical planning drawings services",
        "Spatial planning",
        "3D drawings",
        "Interior and exterior renovation design",
        "Office furniture, lighting, fixture and accessory selection",
        "Wallpaper, curtain and soft furnishing selection"
      ]
    },
    {
      icon: () => <span>👷‍♂️</span>,
      title: "Structural Design Consultancy",
      description: "Building design such as",
      features: [
        "High Rise Building Design, Addition and alteration work to the existing building, Bungalow & Detached house design & Reconstruction houses",
        "Factory Design",
        "Specification and Repair Proposals to the damage structural elements"
      ]
    },
    {
      icon: () => <span>🛠️</span>,
      title: "Structural Inspection",
      description: "",
      features: [
        "Periodic Structural Inspection"
      ]
    },
    {
      icon: () => <span>🔧</span>,
      title: "Specialist Engineering Works",
      description: "",
      features: [
        "Qualified Erosion Control Professional",
        "Design for safety professional consultancy services",
        "Design of Water, Drainage and Sewer"
      ]
    },
    {
      icon: () => <span>🧮</span>,
      title: "Value Engineering Services",
      description: "",
      features: [
        "Value engineering design and consultancy to do the economical design"
      ]
    },
    {
      icon: () => <span>✅</span>,
      title: "Tender / Feasibility stages design",
      description: "",
      features: [
        "Provide technical, financial, legal and sustainable viability for a tender project"
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
                    {typeof service.icon === 'function' && service.icon.name !== ''
                      ? <service.icon />
                      : null}
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
