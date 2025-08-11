import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export default function ContactSection() {

  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-medium mb-8">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            I'm always interested in new opportunities and
            collaborations. Whether you have a project in mind
            or just want to chat about technology, I'd love to
            hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild>
              <a
                href="mailto:yisehakmitiku@gmail.com"
                className="group"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send me an email
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Wes-Isaac/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yishak-wesego/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}