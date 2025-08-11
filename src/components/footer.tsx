
export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 Wes Isaac. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}