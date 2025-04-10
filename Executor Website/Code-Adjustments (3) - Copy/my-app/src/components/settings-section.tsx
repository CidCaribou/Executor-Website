import { useState } from "react"
import { useTheme } from "../components/theme-provider"
import { Check, Save, Settings, Computer, Sun, Moon, RefreshCw, Package, Star, Github, Leaf, Droplet, Flame, Sunrise, AlertCircle, Lock, Code } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "../components/ui/tabs"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card"

export function SettingsSection() {
  const { theme, setTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)
  const [showSaved, setShowSaved] = useState(false)

  const saveSettings = () => {
    setTheme(selectedTheme || "system")
    setShowSaved(true)
    setTimeout(() => setShowSaved(false), 2000)
  }

  return (
    <section id="settings" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
            <Settings className="mr-1 h-3 w-3" />
            Settings & Preferences
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Customize Your <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Personalize Executor to match your preferences and style
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="appearance" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance Settings</CardTitle>
                  <CardDescription>
                    Customize how Executor looks and feels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4 text-center">Base Themes</h3>
                    <div className="grid grid-cols-3 gap-4 mx-auto">
                      <ThemeCard
                        icon={<Sun className="h-5 w-5" />}
                        title="Light"
                        description="Clean light theme"
                        onClick={() => setSelectedTheme("light")}
                        selected={selectedTheme === "light"}
                      />
                      <ThemeCard
                        icon={<Moon className="h-5 w-5 text-purple-400" />}
                        title="Dark"
                        description="Deep purple dark theme"
                        onClick={() => setSelectedTheme("dark")}
                        selected={selectedTheme === "dark"}
                      />
                      <ThemeCard
                        icon={<Computer className="h-5 w-5" />}
                        title="System"
                        description="Follow system theme"
                        onClick={() => setSelectedTheme("system")}
                        selected={selectedTheme === "system"}
                      />
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4 text-center">Color Themes</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto">
                      <ThemeCard
                        icon={<Leaf className="h-5 w-5 text-green-500" />}
                        title="Green"
                        description="Fresh green theme"
                        onClick={() => setSelectedTheme("green")}
                        selected={selectedTheme === "green"}
                      />
                      <ThemeCard
                        icon={<Droplet className="h-5 w-5 text-blue-500" />}
                        title="Blue"
                        description="Cool blue theme"
                        onClick={() => setSelectedTheme("blue")}
                        selected={selectedTheme === "blue"}
                      />
                      <ThemeCard
                        icon={<Flame className="h-5 w-5 text-red-500" />}
                        title="Red"
                        description="Vibrant red theme"
                        onClick={() => setSelectedTheme("red")}
                        selected={selectedTheme === "red"}
                      />
                      <ThemeCard
                        icon={<Sunrise className="h-5 w-5 text-orange-500" />}
                        title="Sunset"
                        description="Warm sunset theme"
                        onClick={() => setSelectedTheme("sunset")}
                        selected={selectedTheme === "sunset"}
                      />
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4 text-center">Special Themes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
                      <ThemeCard
                        icon={<Star className="h-5 w-5 text-purple-500" />}
                        title="Cosmic Purple"
                        description="Elegant cosmic purple theme"
                        onClick={() => setSelectedTheme("cosmic-purple")}
                        selected={selectedTheme === "cosmic-purple"}
                      />
                      <ThemeCard
                        icon={<Star className="h-5 w-5 text-cyan-500" />}
                        title="Ocean Blue"
                        description="Serene ocean blue theme"
                        onClick={() => setSelectedTheme("ocean-blue")}
                        selected={selectedTheme === "ocean-blue"}
                      />
                      <ThemeCard
                        icon={<Star className="h-5 w-5 text-orange-500" />}
                        title="Sunset Orange"
                        description="Warm sunset orange theme"
                        onClick={() => setSelectedTheme("sunset-orange")}
                        selected={selectedTheme === "sunset-orange"}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className={`text-sm text-green-500 transition-opacity ${showSaved ? "opacity-100" : "opacity-0"}`}>
                    <Check className="inline h-4 w-4 mr-1" /> Settings saved!
                  </p>
                  <Button onClick={saveSettings}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="performance">
              <Card className="relative">
                {/* Blur overlay with "Coming Soon" message */}
                <div className="absolute inset-0 backdrop-blur-sm bg-background/50 z-10 flex flex-col items-center justify-center rounded-lg">
                  <Lock className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">Coming Soon!</h3>
                  <p className="text-muted-foreground text-center max-w-md px-4">
                    Performance settings will be available in a future update.
                  </p>
                </div>

                <CardHeader>
                  <CardTitle>Performance Settings</CardTitle>
                  <CardDescription>
                    Optimize Executor's performance for your device
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Script Loading Speed</h3>
                      <p className="text-sm text-muted-foreground">Control how quickly scripts are loaded</p>
                    </div>
                    <Select options={["Fast", "Balance", "Thorough"]} defaultValue="Balance" />
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Auto-update Scripts</h3>
                      <p className="text-sm text-muted-foreground">Keep scripts updated automatically</p>
                    </div>
                    <Toggle defaultChecked />
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Background Processing</h3>
                      <p className="text-sm text-muted-foreground">Allow scripts to run in the background</p>
                    </div>
                    <Toggle />
                  </div>

                  <Separator />

                  <div className="py-2">
                    <Button variant="outline" className="w-full">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Reset to Default Settings
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-muted-foreground">Performance settings require premium for full customization</p>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="advanced">
              <Card className="relative">
                {/* Blur overlay with "Coming Soon" message */}
                <div className="absolute inset-0 backdrop-blur-sm bg-background/50 z-10 flex flex-col items-center justify-center rounded-lg">
                  <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">Coming Soon!</h3>
                  <p className="text-muted-foreground text-center max-w-md px-4">
                    Advanced settings will be available in a future update.
                  </p>
                </div>

                <CardHeader>
                  <CardTitle>Advanced Settings</CardTitle>
                  <CardDescription>
                    Advanced configuration options for power users
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Package className="h-5 w-5 mr-2 text-muted-foreground" />
                      <h3 className="font-medium">Script Execution Environment</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Configure how scripts are executed</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Sandbox Mode
                      </Button>
                      <Button variant="outline" size="sm">
                        Developer Mode
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-2">Version Control</h3>
                    <p className="text-sm text-muted-foreground mb-2">Select and manage different Executor versions</p>
                    <div className="flex flex-col space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Current Version</span>
                        <span className="text-sm font-medium">v3.2.1 (Latest)</span>
                      </div>
                      <select
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                      >
                        <option value="3.2.1">v3.2.1 - Latest Release</option>
                        <option value="3.1.0">v3.1.0 - LTS Version</option>
                        <option value="4.0.0-beta">v4.0.0-beta - Beta Version</option>
                        <option value="3.0.2">v3.0.2 - Legacy Version</option>
                        <option value="2.5.0">v2.5.0 - Legacy Version</option>
                      </select>
                      <Button variant="outline" size="sm">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Check for Updates
                      </Button>
                      <div className="text-xs text-muted-foreground">
                        Switching versions may affect script compatibility
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-2">Custom Script Manager</h3>
                    <p className="text-sm text-muted-foreground mb-4">Add and manage your own custom scripts</p>
                    <div className="space-y-4">
                      <textarea
                        className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                        placeholder="Paste your custom script here..."
                      />
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Code className="h-4 w-4 mr-2" />
                          Save Script
                        </Button>
                        <Button variant="outline" size="sm">
                          Import from File
                        </Button>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-md">
                        <h4 className="text-sm font-medium mb-2">Your Saved Scripts</h4>
                        <p className="text-xs text-muted-foreground">You don't have any saved scripts yet. Add one above to get started.</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-2">Browser Integration</h3>
                    <p className="text-sm text-muted-foreground mb-2">Configure how Executor integrates with your browser</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Toggle />
                        <span className="ml-2 text-sm">Integrated Developer Console</span>
                      </div>
                      <div className="flex items-center">
                        <Toggle />
                        <span className="ml-2 text-sm">Custom Script Injection</span>
                      </div>
                      <div className="flex items-center">
                        <Toggle />
                        <span className="ml-2 text-sm">Network Request Interceptor</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Apply Advanced Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

type ThemeCardProps = {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
  selected: boolean
}

function ThemeCard({ icon, title, description, onClick, selected }: ThemeCardProps) {
  // Handler to immediately blur the element after mousedown
  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent default focus behavior
    event.preventDefault();
    // Schedule a blur to happen after the current event
    setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }, 0);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseDown={handleMouseDown}
      className={`relative w-full h-40 border rounded-lg p-5 transition-all flex flex-col items-center justify-between ${
        selected
          ? "border-primary shadow-[0_0_0_1px_rgba(var(--primary),0.3)] bg-primary/5 hover:shadow-[0_0_0_1px_rgba(var(--primary),0.3)]"
          : "border-border hover:border-primary hover:shadow-md"
      } no-focus-visible`}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {selected && (
        <div className="absolute top-3 right-3 text-primary bg-primary/10 rounded-full p-0.5">
          <Check className="h-3.5 w-3.5" />
        </div>
      )}
      <div className={`rounded-full p-5 mb-2 transition-all ${selected ? 'bg-primary/15' : 'bg-muted'}`}>
        <div className="transform scale-125">
          {icon}
        </div>
      </div>
      <div className="text-center">
        <h4 className={`font-medium text-base mb-1 ${selected ? 'text-primary' : ''}`}>{title}</h4>
        <p className="text-xs text-muted-foreground leading-snug">{description}</p>
      </div>
    </button>
  );
}

function Select({ options, defaultValue }: { options: string[], defaultValue: string }) {
  return (
    <select
      className="w-32 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/40 focus-visible:ring-offset-1"
      defaultValue={defaultValue}
    >
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
}

function Toggle({ defaultChecked, disabled }: { defaultChecked?: boolean, disabled?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={defaultChecked}
      data-state={defaultChecked ? "checked" : "unchecked"}
      disabled={disabled}
      className={`peer inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors ${
        defaultChecked ? "bg-primary" : "bg-muted-foreground/20"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/20 focus-visible:ring-offset-1 focus-visible:ring-offset-background`}
    >
      <span
        data-state={defaultChecked ? "checked" : "unchecked"}
        className={`pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform ${
          defaultChecked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  )
}
