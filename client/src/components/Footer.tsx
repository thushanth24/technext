import { Link } from "wouter";
import { Building, Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail, Globe, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Specialist Consultants for Geotechnical Engineering Design", href: "/services" },
    { name: "Civil and Infrastructure Design Consultancy", href: "/services" },
    { name: "Structural, Civil & Geotechnical engineering drawings", href: "/services" },
    { name: "Architectural and interior designs", href: "/services" },
    { name: "Structural Design Consultancy", href: "/services" },
    { name: "Structural Inspection", href: "/services" }
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Sitemap", href: "#" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/technext-consultants-pvt-ltd/?originalSubdomain=lk", label: "LinkedIn", target: "_blank" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100075684414875", label: "Facebook", target: "_blank" }
  ];

  const developerSocials = [
    { icon: Globe, href: "https://www.axzellin.com", label: "Website", color: "text-blue-500 hover:text-blue-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/axzell-innovations", label: "LinkedIn", color: "text-blue-500 hover:text-blue-700" },
    { icon: MessageCircle, href: "https://wa.me/94768180977", label: "WhatsApp", color: "text-green-500 hover:text-green-600" },
    { icon: Github, href: "https://github.com/axzellinnovations", label: "GitHub", color: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
  <img
    src="https://vqmchabrmytbadbqdwed.supabase.co/storage/v1/object/public/technext//WhatsApp%20Image%202025-07-22%20at%2009.44.05.jpeg"
    alt="Technext Logo"
    className="w-10 h-10 rounded-lg object-cover border border-accent"
  />
  <span className="text-xl font-bold text-accent">Technext</span>
</Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading civil engineering firm providing innovative infrastructure solutions for over 25 years.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  No 30 , Kodikamam Road<br />
                  Nelliady , Jaffna<br />
                  Sri Lanka
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-400">(+94) 74-344-5066</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-400">info@technextconsultants.com</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Developed by Axzell Innovation Section */}
      <div className="mt-4 pt-4 border-t border-gray-700/30 dark:border-gray-300/30">
        <h4 className="text-base font-semibold text-gray-400 dark:text-gray-400 text-center mb-4">Developed by</h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:flex-wrap">
          {/* Logo */}
          <img 
            src="/images/logo2.PNG" 
            alt="Axzell Innovations Logo" 
            className="h-12 w-12 flex-shrink-0 rounded-lg object-contain" 
          />

          {/* Name and Tagline */}
          <div className="flex items-center justify-center space-x-1 flex-shrink-0">
            <span className="font-bold text-base md:text-lg text-gray-200 dark:text-gray-200">axzell innovations</span>
            <span className="text-gray-400 dark:text-gray-400 hidden md:inline">• Professional Web Development & Digital Solutions</span>
          </div>

          {/* Contact Info (Phone and Website) */}
          <div className="flex items-center justify-center space-x-2 text-xs flex-shrink-0">
            <Phone className="h-3 w-3 text-blue-500 flex-shrink-0" />
            <span className="text-gray-200 dark:text-gray-200">+94 (768) 180-977</span>
            <span className="text-gray-400">•</span>
            <a 
              href="https://www.axzellin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center space-x-1"
            >
              <MapPin className="h-3 w-3 text-blue-500 flex-shrink-0" />
              <span>www.axzellin.com</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center gap-1.5 flex-shrink-0">
            {developerSocials.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`h-7 w-7 rounded-lg hover:bg-accent/50 transition-all duration-300 ${social.color}`}
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Axzell ${social.label}`}
                >
                  <social.icon className="h-3.5 w-3.5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
