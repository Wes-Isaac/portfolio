import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from './ui/button';

export default function MainSection() {
  return (
    <section className='min-h-screen flex flex-col justify-center px-8'>
      <div className='max-w-5xl mx-auto'>
        <div className="max-w-3xl">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">I build digital experiences that bridge technology and human needs.</h1>


          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed 
          mb-2">
            Currently at Inzzi Software, crafting scalable mobile applications with a focus on performance,
            accessibility, and user experience.
          </p>
          <p className="text-sm text-muted-foreground mb-12">Let's work together to create something amazing.</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="justify-start">
              <a href="#about" className="group">
                More about me
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="justify-start"
            >
              <a href="mailto:yisehakmitiku@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Get in touch
              </a>
            </Button>
          </div>

        </div>

      </div>

    </section>
  )
}
