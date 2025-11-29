import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { VersionDisplay } from "./version-display"

export function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container flex flex-col items-center text-center">
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            The <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Holy Grail</span> of School Hacks
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Discover the ultimate collection of powerful scripts to enhance your school experience.
            Executor gives you access to the most advanced tools and hacks available.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600" asChild>
              <Link to="/install">
                Download Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/features">
                View Features
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 w-full max-w-3xl overflow-hidden rounded-xl border shadow-xl">
          <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-1">
            <div className="flex h-8 items-center bg-background px-4">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <div className="h-2 w-2 rounded-full bg-green-500" />
              </div>
              <div className="mx-auto text-xs text-muted-foreground">
                Executor <VersionDisplay />
              </div>
            </div>
          </div>
          <div className="bg-muted p-4 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-card p-4 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-lg font-semibold">Game Hacks</h3>
                <p className="text-sm text-muted-foreground">Unlock powerful game enhancements and cheats</p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-lg font-semibold">Block Bypass</h3>
                <p className="text-sm text-muted-foreground">Access blocked games at school with ease</p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-lg font-semibold">Tools</h3>
                <p className="text-sm text-muted-foreground">Browser Cloaker and Custom Cursors.</p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-lg font-semibold">Fun</h3>
                <p className="text-sm text-muted-foreground">Draw on websites and cause earthquakes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
