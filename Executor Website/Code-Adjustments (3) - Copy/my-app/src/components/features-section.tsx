import { Code, BookOpen, Globe, Gamepad2, Calculator, Shield, Zap, Cpu, Rocket, RefreshCw, Terminal, Store, AlertCircle, MousePointer, Laptop, Code2, FileSearch } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export function FeaturesSection() {
  return (
    <section id="features-list" className="py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Key Features
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Discover the powerful capabilities of Executor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-primary" />}
            title="Enhanced Security"
            description="All scripts are manually checked for malware, so you don't have to worry about security risks."
          />

          <FeatureCard
            icon={<Zap className="h-10 w-10 text-primary" />}
            title="Lightning Fast Updates"
            description="Always up to date with the latest and the greates new scripts."
          />

          <FeatureCard
            icon={<Gamepad2 className="h-10 w-10 text-primary" />}
            title="Game Enhancer"
            description="Enhance your gaming experience with specialized game modification tools."
          />

          <FeatureCard
            icon={<Cpu className="h-10 w-10 text-primary" />}
            title="Dynamic Script Execution"
            description="Execute multiple scripts seamlessly with intelligent adaptation to different web environments."
          />

          <FeatureCard
            icon={<RefreshCw className="h-10 w-10 text-primary" />}
            title="Automatic Updates"
            description="Scripts are kept up-to-date automatically, ensuring you always have the latest features."
          />

          <FeatureCard
            icon={<Terminal className="h-10 w-10 text-primary" />}
            title="Custom Scripting"
            description="Create and manage your own custom scripts with our integrated script editor. (Coming soon!)"
            comingSoon={true}
          />
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tighter text-center mb-8">More Powerful Features</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h4 className="font-medium text-lg mb-4">Hacks for Gamers</h4>
              <ul className="space-y-2">
                <FeatureListItem text="WASM-Patcher: A cheat engine for Unity games" />
                <FeatureListItem text="Auto-clicker for faster gameplay" />
                <FeatureListItem text="Game resource hacks" />
                <FeatureListItem text="Character unlocker tools" />
                <FeatureListItem text="Custom game tweaks and modifications" />
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h4 className="font-medium text-lg mb-4">Various Tools</h4>
              <ul className="space-y-2">
                <FeatureListItem text="Browser inside of a browser" />
                <FeatureListItem text="Custom cursors" />
                <FeatureListItem text="Element inspector" />
                <FeatureListItem text="Developer console" />
                <FeatureListItem text="Auto clicker" />
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button variant="default" size="lg" asChild>
            <a href="/install">
              <Rocket className="mr-2 h-5 w-5" />
              Get Started with Executor
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  comingSoon
}: {
  icon: React.ReactNode,
  title: string,
  description: string,
  comingSoon?: boolean
}) {
  return (
    <Card className="h-full relative">
      {comingSoon && (
        <div className="absolute top-2 right-2 bg-amber-500/10 text-amber-600 rounded-full px-2 py-0.5 text-xs font-medium">
          Coming Soon
        </div>
      )}
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function FeatureListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center">
      <span className="text-primary mr-2">✓</span>
      <span className="text-sm">{text}</span>
    </li>
  )
}
