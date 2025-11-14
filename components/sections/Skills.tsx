"use client";

import { skills } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Settings, Zap, Target } from "lucide-react";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 bg-linear-to-b from-background to-telkomsel-red-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-telkomsel-red">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern tech stack dan engineering practices yang relevant untuk
            Product Development & Innovation
          </p>
        </div>

        {/* Skills Categories */}
        <Tabs defaultValue="primary" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-telkomsel-red-100 border border-telkomsel-red-200">
            <TabsTrigger
              value="primary"
              className="data-[state=active]:bg-telkomsel-red data-[state=active]:text-white transition-colors duration-300"
            >
              <Code className="mr-2 h-4 w-4" />
              Primary Skills
            </TabsTrigger>
            <TabsTrigger
              value="secondary"
              className="data-[state=active]:bg-telkomsel-red data-[state=active]:text-white transition-colors duration-300"
            >
              <Settings className="mr-2 h-4 w-4" />
              Supporting Skills
            </TabsTrigger>
          </TabsList>

          {/* Primary Skills */}
          <TabsContent value="primary" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {skills.primary.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="border-border hover:border-telkomsel-red-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold group-hover:text-telkomsel-red transition-colors duration-300">
                        {skill.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant="outline"
                          className="text-xs border-telkomsel-red/30 text-telkomsel-red"
                        >
                          {skill.level}%
                        </Badge>
                        <div className="w-8 h-8 bg-telkomsel-red-100 rounded-lg flex items-center justify-center group-hover:bg-telkomsel-red group-hover:text-white transition-colors duration-300">
                          {skill.name === "Next.js" && (
                            <Code className="h-4 w-4" />
                          )}
                          {skill.name === "Python" && (
                            <Zap className="h-4 w-4" />
                          )}
                          {skill.name === "Software Engineering" && (
                            <Settings className="h-4 w-4" />
                          )}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit text-xs">
                      {skill.category}
                    </Badge>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Proficiency
                        </span>
                        <span className="font-medium text-telkomsel-red">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-telkomsel-red-200"
                        // Add custom progress indicator color
                        style={{
                          background: `linear-gradient(to right, #e32636 0%, #e32636 ${skill.level}%, #f1f5f9 ${skill.level}%, #f1f5f9 100%)`,
                        }}
                      />
                    </div>

                    {/* Description */}
                    <CardDescription className="text-sm leading-relaxed">
                      {skill.description}
                    </CardDescription>

                    {/* Skill Level Indicator */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-2 rounded-full ${
                            i < Math.floor(skill.level / 20)
                              ? "bg-telkomsel-red"
                              : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Secondary Skills */}
          <TabsContent value="secondary" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.secondary.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="border-border hover:border-telkomsel-red/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-semibold group-hover:text-telkomsel-red transition-colors duration-300">
                        {skill.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="text-xs border-telkomsel-red/30 text-telkomsel-red"
                      >
                        {skill.level}%
                      </Badge>
                    </div>
                    <Badge variant="secondary" className="w-fit text-xs">
                      {skill.category}
                    </Badge>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <Progress
                        value={skill.level}
                        className="h-1 bg-telkomsel-red-200"
                      />
                    </div>

                    <CardDescription className="text-xs leading-relaxed">
                      {skill.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Innovation Mindset Section */}
        <div className="mt-16 text-center">
          <div className="bg-linear-to-r from-telkomsel-red-100 to-innovation-blue-100 rounded-2xl p-8 border border-telkomsel-red-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-telkomsel-red rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-3">
              Innovation Mindset
            </h3>

            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Berfokus pada developing innovative solutions dengan
              problem-solving approach yang efektif dan modern engineering
              practices untuk menghadapi challenges di Product Development &
              Innovation.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-telkomsel-red text-white hover:bg-telkomsel-dark-red transition-colors duration-300">
                Problem Solver
              </Badge>
              <Badge className="bg-innovation-blue text-white hover:bg-blue-600 transition-colors duration-300">
                Innovation Focused
              </Badge>
              <Badge className="bg-tech-green text-white hover:bg-green-600 transition-colors duration-300">
                Technical Excellence
              </Badge>
              <Badge className="bg-telkomsel-red text-white hover:bg-telkomsel-dark-red transition-colors duration-300">
                Product Development
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
