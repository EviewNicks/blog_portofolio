import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import SkillsSection from "@/components/sections/Skills";
import ContactSection from "@/components/sections/Contact";
import { personalInfo } from "@/lib/data";

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-telkomsel-red text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-telkomsel-red font-bold text-sm">
                    TP
                  </span>
                </div>
                <span className="font-bold text-xl">Portfolio</span>
              </div>
              <p className="text-telkomsel-red-100">
                Product Development & Innovation Developer focused on creating
                innovative solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a
                  href="#home"
                  className="block text-telkomsel-red-100 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#projects"
                  className="block text-telkomsel-red-100 hover:text-white transition-colors duration-300"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="block text-telkomsel-red-100 hover:text-white transition-colors duration-300"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="block text-telkomsel-red-100 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-2 text-telkomsel-red-100">
                <p>{personalInfo.email}</p>
                <p>{personalInfo.phone}</p>
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-telkomsel-red-300 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-telkomsel-red-100 text-sm">
                © 2024 {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-telkomsel-red-100 text-sm mt-2 md:mt-0">
                Built with Next.js, Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export const metadata = {
  title: `${personalInfo.name} - Product Development & Innovation Developer`,
  description: personalInfo.description,
  keywords: [
    "Product Development",
    "Innovation",
    "Web Developer",
    "Next.js",
    "Python",
    "Telkomsel",
    "Internship",
    "Computer Vision",
    "OMR System",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: `${personalInfo.name} - Product Development & Innovation Developer`,
    description: personalInfo.description,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - Product Development & Innovation Developer`,
    description: personalInfo.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
