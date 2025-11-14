"use client";

import { personalInfo, socialLinks } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-telkomsel-red/5"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-grid-white opacity-3 bg-[size:50px_50px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-telkomsel-red/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-innovation-blue/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-tech-green/20 rounded-full blur-xl animate-float-delay" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Avatar Section */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <Avatar className="w-32 h-32 border-4 border-telkomsel-red shadow-xl transform hover:scale-105 transition-all duration-300">
              <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
              <AvatarFallback className="bg-telkomsel-red text-white text-2xl font-bold">
                {personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            {/* 3D Ring Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-telkomsel-red/30 animate-ping" />
            <div className="absolute inset-0 rounded-full border-2 border-telkomsel-red/20 animate-ping animation-delay-200" />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Name with 3D Effect */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground animate-slide-in-left">
            <span className="relative">
              {personalInfo.name}
              <span className="absolute inset-0 bg-gradient-to-r from-telkomsel-red to-innovation-blue bg-clip-text text-transparent opacity-20 transform translate-x-1 translate-y-1 blur-sm">
                {personalInfo.name}
              </span>
            </span>
          </h1>

          {/* Title with Innovation Badge */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-200">
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              {personalInfo.title}
            </h2>
            <Badge className="bg-telkomsel-red text-white hover:bg-telkomsel-dark-red transition-colors duration-300 shadow-lg transform hover:scale-105">
              Available for Internship
            </Badge>
          </div>

          {/* Tagline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-400">
            {personalInfo.tagline}
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-600">
            {personalInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in animation-delay-800">
            <Button
              size="lg"
              className="bg-telkomsel-red hover:bg-telkomsel-dark-red text-white px-8 py-6 text-lg shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact for Opportunities
              <Mail className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-telkomsel-red text-telkomsel-red hover:bg-telkomsel-red hover:text-white px-8 py-6 text-lg transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8 animate-fade-in animation-delay-1000">
            {socialLinks.map((link, index) => {
              const Icon =
                link.name === "GitHub"
                  ? Github
                  : link.name === "LinkedIn"
                  ? Linkedin
                  : link.name === "Email"
                  ? Mail
                  : Mail;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-telkomsel-red hover:text-white hover:border-telkomsel-red transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-telkomsel-red" />
        </div>
      </div>
    </section>
  );
}
