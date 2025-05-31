import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const timelineEvents = [
    {
      year: "1998",
      title: "Company Founded",
      description: "Started with 5 engineers and a vision for sustainable infrastructure.",
      side: "left"
    },
    {
      year: "2005",
      title: "Major Expansion",
      description: "Expanded to three offices and specialized divisions.",
      side: "right"
    },
    {
      year: "2015",
      title: "Innovation Award",
      description: "Received national recognition for sustainable engineering practices.",
      side: "left"
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Launched AI-powered design tools and smart city solutions.",
      side: "right"
    }
  ];

  const certifications = [
    "ISO 9001:2015",
    "ASCE Member", 
    "LEED Certified",
    "PE Licensed"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Engineering Excellence Since 1998
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sterling Civil Engineering was founded with a vision to create innovative, sustainable infrastructure 
              solutions that enhance communities and protect the environment. Over 25 years later, we continue 
              to lead the industry in engineering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our Story
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Founded in 1998 by a team of visionary engineers, Sterling Civil Engineering began as a small firm 
                with big ambitions. We believed that civil engineering could be a force for positive change, 
                creating infrastructure that not only serves communities but also protects and enhances the environment.
              </p>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Today, we've grown to a team of over 75 professionals, but our core values remain unchanged: 
                innovation, sustainability, and excellence in everything we do. Every project we undertake is 
                an opportunity to make a lasting positive impact on the world around us.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-primary dark:text-accent mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-primary dark:text-accent mb-2">75+</div>
                  <div className="text-sm text-muted-foreground">Expert Engineers</div>
                </Card>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Certifications & Memberships</h3>
                <div className="flex flex-wrap gap-4">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="px-4 py-2">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Sterling Civil Engineering headquarters" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
              
              <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-xl shadow-xl border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary dark:text-accent">1998</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">Our Journey</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary dark:bg-accent"></div>
            
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex items-center">
                  {event.side === "left" ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                      <div className="w-4 h-4 bg-primary dark:bg-accent rounded-full relative z-10 border-4 border-background"></div>
                      <div className="w-1/2 pl-8">
                        <div className="text-lg font-bold text-primary dark:text-accent">{event.year}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="text-lg font-bold text-primary dark:text-accent">{event.year}</div>
                      </div>
                      <div className="w-4 h-4 bg-primary dark:bg-accent rounded-full relative z-10 border-4 border-background"></div>
                      <div className="w-1/2 pl-8">
                        <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We embrace cutting-edge technology and creative problem-solving to deliver solutions that exceed expectations and set new industry standards."
              },
              {
                title: "Sustainability",
                description: "Environmental responsibility is at the heart of our practice. We design infrastructure that protects and enhances the natural world for future generations."
              },
              {
                title: "Excellence",
                description: "We are committed to the highest standards of quality in every aspect of our work, from initial design to final construction and beyond."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience and a shared vision for the future of civil engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "James Mitchell, PE",
                role: "Principal Engineer & Founder",
                description: "25+ years of experience in civil engineering with expertise in large-scale infrastructure projects.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
              },
              {
                name: "Sarah Thompson, PE",
                role: "Senior Project Manager",
                description: "Specializes in environmental engineering and sustainable infrastructure development.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
              },
              {
                name: "Michael Rodriguez, PE",
                role: "Structural Engineering Director",
                description: "Expert in structural analysis and design with focus on seismic engineering and bridge design.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
              }
            ].map((leader, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-primary dark:text-accent font-medium mb-4">{leader.role}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
