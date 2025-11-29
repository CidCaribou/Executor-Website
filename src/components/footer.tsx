import { Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 lg:py-16">
      <div className="container flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-bold">
            <img src="/icon.png" alt="Executor Logo" className="h-6 w-6" />
            Executor
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Executor is a powerful and intuitive script management tool designed to enhance your experience.
          </p>
          <div className="mt-2">
            <a
              href="https://github.com/CidCaribou/Executor-Menu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub Repository
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Updates</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><a href="#documentation" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Script Hub</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Licenses</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-12">
        <div className="border-t pt-6">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} Executor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
