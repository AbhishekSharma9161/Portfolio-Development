import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  Code,
  Palette,
  Smartphone
} from "lucide-react";

export default function Index() {
  const skills = [
    { name: "React.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Next.js", category: "Framework" },
    { name: "MongoDB", category: "Database" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["React", "Firebase", "Material-UI"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather app with interactive maps and forecasts",
      tech: ["React", "API Integration", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20 sm:py-32">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <Badge variant="secondary" className="px-4 py-2">
                <span className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  Available for work
                </span>
              </Badge>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                Abhishek Sharma
              </span>
            </h1>
            
            <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            
            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
              I craft beautiful, functional, and user-centered digital experiences. 
              Specializing in React, Node.js, and modern web technologies to bring 
              ideas to life.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            
            <div className="mt-12 flex justify-center gap-6">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:hello@abhisheksharma.dev">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">What I Do</h2>
            <p className="mb-12 text-lg text-muted-foreground">
              I help businesses and individuals create amazing digital experiences
            </p>
          </div>
          
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Frontend Development</h3>
                <p className="text-muted-foreground">
                  Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  Designing intuitive and beautiful user experiences that delight users and drive engagement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Full-Stack Development</h3>
                <p className="text-muted-foreground">
                  Building complete web applications from database design to deployment and everything in between.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-muted/30 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Some of my recent work that I'm proud to share
            </p>
          </div>
          
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link to="/experience">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Skills & Technologies</h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                  {skill.name}
                </Badge>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link to="/skills">
                  View All Skills
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Let's Build Something Amazing Together
            </h2>
            <p className="mb-8 text-lg opacity-90">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
