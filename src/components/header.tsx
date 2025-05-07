import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, Moon, Sun, Computer, Home } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"

export function Header() {
  const { theme, systemTheme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeIcon = () => {
    if (!mounted) return null;

    if (theme === 'system') {
      if (systemTheme === 'dark') {
        return <Moon className="h-5 w-5" />
      } else {
        return <Sun className="h-5 w-5" />
      }
    }

    switch (theme) {
      case 'dark':
        return <Moon className="h-5 w-5" />
      case 'light':
        return <Sun className="h-5 w-5" />
      default:
        return <Computer className="h-5 w-5" />
    }
  }

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/icon.png" alt="Executor Logo" className="h-8 w-8" />
            <span className="font-bold text-lg">Executor</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center flex-1 justify-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1 font-bold">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link to="/features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Features
            </Link>
            <Link to="/settings" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Settings
            </Link>
            <Link to="/news" className="transition-colors hover:text-foreground/80 text-foreground/60">
              News
            </Link>
            <Link to="/docs" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Documentation
            </Link>
            <Link to="/install" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Download
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-2"
              onClick={toggleTheme}
            >
              {renderThemeIcon()}
            </Button>
          )}
          <Button variant="outline" asChild>
            <a href="https://github.com/CidCaribou/Executor-Menu" target="_blank" rel="noreferrer" className="hidden md:block">
              GitHub
            </a>
          </Button>
          <Button variant="default" asChild className="ml-2">
            <Link to="/install">
              Download
            </Link>
          </Button>
          <button
            className="flex items-center ml-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              to="/features"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/settings"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Settings
            </Link>
            <Link
              to="/news"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <Link
              to="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              to="/install"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
