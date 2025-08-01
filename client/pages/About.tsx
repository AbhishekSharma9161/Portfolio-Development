import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Download,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Coffee,
  Music,
  Camera,
  Gamepad2
} from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      year: "2018-2022",
      description: "Focused on software engineering, data structures, and web development"
    },
    {
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Tech Academy",
      year: "2022",
      description: "Intensive program covering modern web technologies and frameworks"
    }
  ];

  const certifications = [
    "React Developer Certification",
    "AWS Cloud Practitioner",
    "Google Analytics Certified",
    "MongoDB Developer"
  ];

  const personalInterests = [
    { name: "Coffee Brewing", icon: Coffee },
    { name: "Music Production", icon: Music },
    { name: "Photography", icon: Camera },
    { name: "Gaming", icon: Gamepad2 }
  ];

  const coreSkills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React & Next.js", level: 90 },
    { name: "Node.js & Express", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Database Design", level: 75 },
    { name: "DevOps & Deployment", level: 70 }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                  About Me
                </h1>
                <p className="mb-6 text-lg text-muted-foreground">
                  I'm a passionate full-stack developer with over 3 years of experience 
                  creating digital experiences that matter. Based in India, I specialize 
                  in building modern web applications that are both beautiful and functional.
                </p>
                <p className="mb-8 text-lg text-muted-foreground">
                  My journey in tech started with curiosity about how websites work, 
                  and it has evolved into a career focused on solving complex problems 
                  through clean, efficient code and thoughtful design.
                </p>
                
                <div className="mb-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Mumbai, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>3+ Years Experience</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Let's Work Together
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="h-80 w-80 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="Abhishek Sharma"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 rounded-xl bg-card p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
              Core Skills & Expertise
            </h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {coreSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-muted/30 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
              Education & Learning
            </h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.year}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
              Certifications & Achievements
            </h2>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 rounded-lg border p-4">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="bg-muted/30 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tight">
              Beyond Code
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              When I'm not coding, you'll find me exploring these passions
            </p>
            
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {personalInterests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="mb-3 flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-medium">{interest.name}</h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              My Development Philosophy
            </h2>
            <blockquote className="text-xl italic text-muted-foreground">
              "Great software is not just about clean code—it's about understanding 
              people, solving real problems, and creating experiences that matter. 
              I believe in building with empathy, learning continuously, and always 
              keeping the user at the center of every decision."
            </blockquote>
            <p className="mt-6 font-medium">— Abhishek Sharma</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Ready to Start a Project?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              I'm always excited to work on new challenges and collaborate with amazing people.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
