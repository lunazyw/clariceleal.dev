import { Github, Linkedin, Twitter } from 'lucide-react'

export default function SocialLinks() {
  return (
    <section id="contact" className="bg-secondary py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-secondary-foreground">Connect with Me</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/lunazyw" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/clarice-leal-39a12830a/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
            <Linkedin size={32} />
          </a>
          <a href="https://x.com/llunazyl" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
            <Twitter size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}

