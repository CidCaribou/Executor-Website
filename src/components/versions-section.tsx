import { Archive, CheckCircle, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Link } from "react-router-dom"

export function VersionsSection() {
  return (
    <section id="versions" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
            <Archive className="mr-1 h-3 w-3" />
            Version History
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Install <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Custom Versions</span>
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Choose from our stable releases or try the latest experimental features
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <VersionCard
            version="3.2.1"
            date="June 12, 2024"
            description="Latest stable release with bug fixes and performance improvements"
            isRecommended={true}
          />

          <VersionCard
            version="3.1.0"
            date="May 3, 2024"
            description="Long-term support version with proven stability"
            isLTS={true}
          />

          <VersionCard
            version="4.0.0-beta"
            date="July 1, 2024"
            description="Beta version with upcoming features and experimental scripts"
            isBeta={true}
          />

          <VersionCard
            version="3.0.2"
            date="April 15, 2024"
            description="Previous stable version for legacy support"
            isLegacy={true}
          />

          <VersionCard
            version="2.5.0"
            date="February 28, 2024"
            description="Older version with different script compatibility"
            isLegacy={true}
          />

          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span>Custom Upload</span>
              </CardTitle>
              <CardDescription>
                Upload your own custom Executor version
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <Archive className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm text-center text-muted-foreground mb-4">
                Have a modified version or custom build? Upload and install it directly.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Upload Custom Version
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 bg-card rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Version Archive</h3>
          <p className="text-muted-foreground mb-6">
            Access our complete version history for development, testing, or compatibility purposes.
          </p>
          <Button asChild>
            <Link to="/versions">
              <Archive className="mr-2 h-4 w-4" />
              Browse All Versions
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

interface VersionCardProps {
  version: string
  date: string
  description: string
  isRecommended?: boolean
  isLTS?: boolean
  isBeta?: boolean
  isLegacy?: boolean
}

function VersionCard({
  version,
  date,
  description,
  isRecommended,
  isLTS,
  isBeta,
  isLegacy
}: VersionCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>Version {version}</CardTitle>
          {isRecommended && (
            <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full font-medium">
              Recommended
            </span>
          )}
          {isLTS && (
            <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded-full font-medium">
              LTS
            </span>
          )}
          {isBeta && (
            <span className="text-xs bg-amber-500/10 text-amber-600 px-2 py-1 rounded-full font-medium">
              Beta
            </span>
          )}
          {isLegacy && (
            <span className="text-xs bg-muted px-2 py-1 rounded-full font-medium">
              Legacy
            </span>
          )}
        </div>
        <CardDescription>
          Released: {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        {isRecommended && (
          <div className="flex items-center text-xs text-green-600 mb-2">
            <CheckCircle className="h-3 w-3 mr-1" /> Most stable and secure
          </div>
        )}
        {isLTS && (
          <div className="flex items-center text-xs text-blue-600 mb-2">
            <CheckCircle className="h-3 w-3 mr-1" /> Extended support until 2025
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Install v{version}
        </Button>
      </CardFooter>
    </Card>
  )
}
