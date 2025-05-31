import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "James Mitchell, PE",
      role: "Principal Engineer & Founder",
      description: "25+ years of experience in civil engineering with expertise in large-scale infrastructure projects.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      specialties: ["MS Civil Engineering", "PE Licensed"],
      email: "james@sterlingcivil.com",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Sarah Thompson, PE",
      role: "Senior Project Manager",
      description: "Specializes in environmental engineering and sustainable infrastructure development.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      specialties: ["Environmental Engineering", "LEED AP"],
      email: "sarah@sterlingcivil.com",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Michael Rodriguez, PE",
      role: "Structural Engineering Director",
      description: "Expert in structural analysis and design with focus on seismic engineering and bridge design.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      specialties: ["Structural Engineering", "Bridge Design"],
      email: "michael@sterlingcivil.com",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Emily Chen, PE",
      role: "Transportation Engineer",
      description: "Transportation planning and traffic engineering specialist with smart city expertise.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      specialties: ["Transportation", "Smart Cities"],
      email: "emily@sterlingcivil.com",
      linkedin: "#"
    },
    {
      id: 5,
      name: "David Kim",
      role: "Construction Manager",
      description: "Construction oversight and quality control specialist with 15+ years of field experience.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      specialties: ["Construction Management", "Safety Management"],
      email: "david@sterlingcivil.com",
      linkedin: "#"
    },
    {
      id: 6,
      name: "Lisa Park",
      role: "Water Resources Engineer",
      description: "Hydraulic modeling and stormwater management expert with focus on sustainable solutions.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      specialties: ["Water Resources", "Hydraulic Modeling"],
      email: "lisa@sterlingcivil.com",
      linkedin: "#"
    }
  ];

  const departments = [
    {
      name: "Structural Engineering",
      count: 18,
      description: "Bridge design, building analysis, and seismic engineering"
    },
    {
      name: "Transportation",
      count: 15,
      description: "Highway design, traffic engineering, and smart transportation systems"
    },
    {
      name: "Environmental",
      count: 12,
      description: "Environmental impact assessment and sustainable design"
    },
    {
      name: "Water Resources",
      count: 10,
      description: "Hydraulic modeling, stormwater management, and water treatment"
    },
    {
      name: "Urban Planning",
      count: 8,
      description: "Master planning, zoning analysis, and community development"
    },
    {
      name: "Construction Management",
      count: 12,
      description: "Project oversight, quality control, and safety management"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our team of experienced engineers, project managers, and specialists brings decades of combined expertise 
              to every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary dark:text-accent font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Mail className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Team by the Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're proud of our diverse, talented team that brings together expertise from across the civil engineering spectrum.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            {[
              { number: "75+", label: "Team Members" },
              { number: "50+", label: "Licensed Engineers" },
              { number: "200+", label: "Years Combined Experience" },
              { number: "15+", label: "Specializations" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary dark:text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Departments */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{department.name}</h3>
                    <Badge variant="secondary">{department.count} Engineers</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {department.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're always looking for talented engineers and professionals who share our passion for excellence 
                and innovation. Join a team that values collaboration, professional growth, and making a positive 
                impact on communities.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Collaborative Environment</h4>
                  <p className="text-muted-foreground">
                    Work with talented professionals across disciplines in a supportive, team-oriented atmosphere.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Professional Development</h4>
                  <p className="text-muted-foreground">
                    Advance your career with mentorship programs, continuing education, and leadership opportunities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Innovation Focus</h4>
                  <p className="text-muted-foreground">
                    Be part of cutting-edge projects using the latest technology and sustainable design practices.
                  </p>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View Open Positions
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 italic">
              "Our success comes from the dedication and expertise of our team. Every project we complete 
              is a testament to their commitment to engineering excellence and innovative problem-solving."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80" 
                alt="James Mitchell" 
                className="w-16 h-16 rounded-full"
              />
              <div className="text-left">
                <div className="font-semibold text-accent">James Mitchell, PE</div>
                <div className="opacity-90">Principal Engineer & Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
