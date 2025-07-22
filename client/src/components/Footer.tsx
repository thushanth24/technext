import { Link } from "wouter";
import { Building, Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

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
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Sitemap", href: "#" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Technext Consultants. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            {legal.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
