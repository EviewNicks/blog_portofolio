"use client";

import { projects } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Github, Star, Clock, Award } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 bg-linear-to-b from-background via-telkomsel-red-50 to-background"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-telkomsel-red">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions yang menunjukkan technical expertise dan
            problem-solving skills
          </p>
        </div>

        {/* Featured Project - OMR System */}
        {featuredProject && (
          <div className="mb-16">
            <Card className="overflow-hidden border-telkomsel-red-200 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <div className="relative">
                {/* Project Image */}
                <div className="relative h-80 overflow-hidden bg-linear-to-br from-telkomsel-red-50 to-innovation-blue-100">
                  {featuredProject.image ? (
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      width={800}
                      height={320}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.parentElement?.classList.add("fallback-active");
                      }}
                    />
                  ) : null}

                  {/* Placeholder shown when image fails to load */}
                  <div className="fallback-hidden absolute inset-0 bg-linear-to-br from-telkomsel-red-100 to-innovation-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-telkomsel-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Award className="h-12 w-12 text-telkomsel-red" />
                      </div>
                      <h3 className="text-3xl font-bold text-telkomsel-red mb-2">
                        {featuredProject.title}
                      </h3>
                      <Badge className="bg-telkomsel-red text-white">
                        Featured Project
                      </Badge>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-10 right-10 w-16 h-16 bg-innovation-blue-200 rounded-full blur-xl animate-float" />
                    <div className="absolute bottom-10 left-10 w-20 h-20 bg-tech-green-200 rounded-full blur-xl animate-float-delay" />
                  </div>

                  {/* Overlay for better text visibility */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Project Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Project Overview
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {featuredProject.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {featuredProject.achievements?.map(
                          (achievement, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <Star className="h-4 w-4 text-telkomsel-red shrink-0" />
                              <span className="text-muted-foreground">
                                {achievement}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Technologies & Stats */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-telkomsel-red-300 text-telkomsel-red hover:bg-telkomsel-red hover:text-white transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-telkomsel-red-100 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-telkomsel-red">
                          95%+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Accuracy
                        </div>
                      </div>
                      <div className="bg-innovation-blue-100 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-innovation-blue">
                          5x
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Faster
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6 bg-telkomsel-red-200" />

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {featuredProject.githubUrl && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-telkomsel-red text-telkomsel-red hover:bg-telkomsel-red hover:text-white transition-colors duration-300"
                      onClick={() =>
                        window.open(featuredProject.githubUrl!, "_blank")
                      }
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View Source Code
                    </Button>
                  )}

                  {featuredProject.liveUrl && (
                    <Button
                      size="lg"
                      className="bg-telkomsel-red hover:bg-telkomsel-dark-red text-white transition-colors duration-300"
                      onClick={() =>
                        window.open(featuredProject.liveUrl!, "_blank")
                      }
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Other Projects
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden border-border hover:border-telkomsel-red-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="relative">
                    {/* Project Image */}
                    <div className="h-40 bg-linear-to-br from-telkomsel-red-50 to-innovation-blue-50 rounded-lg overflow-hidden mb-4">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={320}
                          height={160}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            const parent = target.parentElement;
                            if (
                              parent &&
                              !parent.classList.contains("fallback-applied")
                            ) {
                              parent.classList.add("fallback-applied");
                              target.style.display = "none";

                              // Create fallback element
                              const fallback = document.createElement("div");
                              fallback.className =
                                "w-full h-full flex items-center justify-center bg-gradient-to-br from-telkomsel-red-50 to-innovation-blue-50";
                              fallback.innerHTML = `
                                <div class="w-16 h-16 bg-muted rounded-xl flex items-center justify-center">
                                  <svg class="h-8 w-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                  </svg>
                                </div>
                              `;
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center">
                            <Clock className="h-8 w-8 text-muted-foreground" />
                          </div>
                        </div>
                      )}
                    </div>

                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-telkomsel-red transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {project.achievements && (
                      <div className="space-y-1">
                        {project.achievements
                          .slice(0, 2)
                          .map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-center space-x-2 text-xs text-muted-foreground"
                            >
                              <Star className="h-3 w-3 text-telkomsel-red shrink-0" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="pt-0">
                    <div className="flex gap-2 w-full">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-telkomsel-red-300 text-telkomsel-red hover:bg-telkomsel-red hover:text-white transition-colors duration-300"
                          onClick={() =>
                            window.open(project.githubUrl!, "_blank")
                          }
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}

                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="flex-1 bg-telkomsel-red hover:bg-telkomsel-dark-red text-white transition-colors duration-300"
                          onClick={() =>
                            window.open(project.liveUrl!, "_blank")
                          }
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
