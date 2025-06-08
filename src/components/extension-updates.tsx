import { useState } from "react"
import { Download, CheckCircle, Clock, AlertTriangle } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

interface ExtensionVersion {
  version: string
  releaseDate: string
  status: "current" | "previous" | "beta"
  downloadUrl: string
  changes: string[]
  size: string
}

export function ExtensionUpdates() {
  const [versions] = useState<ExtensionVersion[]>([
    {
      version: "1.9.0",
      releaseDate: "2024-12-08",
      status: "current",
      downloadUrl: "/downloads/executor.zip",
      changes: [
        "Enhanced script performance and stability",
        "Improved compatibility with modern websites",
        "Added new script library features",
        "Fixed auto-update mechanism",
        "Better error handling and logging"
      ],
      size: "2.1 MB"
    },
    {
      version: "1.8.0",
      releaseDate: "2024-11-15",
      status: "previous",
      downloadUrl: "/downloads/executor-1.8.0.zip",
      changes: [
        "Added sweetalert2 integration",
        "Improved menu script functionality",
        "Enhanced content script injection",
        "Better CSP bypass techniques"
      ],
      size: "1.9 MB"
    }
  ])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "current":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "previous":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "beta":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current":
        return "bg-green-500"
      case "previous":
        return "bg-yellow-500"
      case "beta":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Extension Updates</h2>
        <p className="text-muted-foreground">
          Download the latest version or access previous releases
        </p>
      </div>

      <div className="space-y-4">
        {versions.map((version) => (
          <Card key={version.version} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CardTitle className="text-xl">Version {version.version}</CardTitle>
                  <Badge
                    variant="secondary"
                    className={`${getStatusColor(version.status)} text-white`}
                  >
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(version.status)}
                      <span className="capitalize">{version.status}</span>
                    </div>
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {version.releaseDate} • {version.size}
                </div>
              </div>
              <CardDescription>
                Released on {new Date(version.releaseDate).toLocaleDateString()}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">What's New:</h4>
                <ul className="space-y-1">
                  {version.changes.map((change, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2 text-green-500">•</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Button
                  className="w-full"
                  variant={version.status === "current" ? "default" : "outline"}
                  onClick={() => { window.location.href = version.downloadUrl }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download v{version.version}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
            Auto-Update Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            The Executor extension includes automatic update functionality. Once installed,
            the extension will check for updates periodically and notify you when a new version is available.
          </p>
          <div className="space-y-2">
            <div className="text-sm">
              <strong>Update Check Frequency:</strong> Every 5 hours
            </div>
            <div className="text-sm">
              <strong>Update Server:</strong> updates.xml
            </div>
            <div className="text-sm">
              <strong>Manual Update:</strong> Visit chrome://extensions/ and click "Update"
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
