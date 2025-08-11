
const experience = [
  {
    year: "2024—Present",
    company: "Inzzi Software",
    role: "React Native Developer",
    description:
      "Spearheading MVP development for clients and internal projects. Collaborate with cross-functional teams to architect and deliver robust, scalable mobile apps using React Native, TypeScript, and advanced state management.",
  },
  {
    year: "2024—2025",
    company: "Two Matches",
    role: "Full Stack Developer",
    description:
      "Engineered multi-tenant web applications with Next.js, TanStack, and Nest.js, focusing on performance, maintainability, and seamless user experiences.",
  },
  {
    year: "August 2023 - January 2024",
    company: "Jebena Tech",
    role: "Mobile Developer",
    description:
      "Refactor existing mobile application codebase to improve performance and maintainability, implement new features, and ensure a seamless user experience.",
  },
  {
    year: "May 2023— October 2023",
    company: "Maado(Contract)",
    role: "Frontend Developer",
    description:
      "Developed an LMS web app for teacher onboarding and course management, registering students and providing different enrollment options, integrating Zoom and Stripe for enhanced functionality and streamlined workflows.",
  },

];

export default function AboutSection() {

  return (
    <section id="about" className="py-24 px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              Building for mobile and web
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate mobile and full-stack developer with 4+ years of experience crafting impactful digital products that address real-world challenges. I specialize in React Native, React, TypeScript, and modern web technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new frameworks, learning new languages, or probably drinking coffee. Outside of work, I enjoy staying updated with the latest tech trends and experimenting with side projects to sharpen my skills.
              </p>
              <p>
                I believe great software is built through
                collaboration, continuous learning, and
                attention to detail.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-8 tracking-wide uppercase">
              Experience Highlights
            </p>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="border-l-2 border-border pl-6"
                >
                  <p className="text-xs text-muted-foreground mb-2">
                    {job.year}
                  </p>
                  <h3 className="font-medium mb-1">
                    {job.role}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    {job.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}