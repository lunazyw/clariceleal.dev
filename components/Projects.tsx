import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of your first project.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 2",
    description: "A brief description of your second project.",
    technologies: ["Python", "TensorFlow", "Flask"],
    link: "https://github.com/yourusername/project2"
  },
  {
    title: "Project 3",
    description: "A brief description of your third project.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "https://github.com/yourusername/project3"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-secondary text-secondary-foreground">{tech}</Badge>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View on GitHub
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

