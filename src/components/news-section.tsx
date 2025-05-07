import { FileText, Calendar, Newspaper } from "lucide-react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "./ui/tabs"

export function NewsSection() {
  return (
    <section id="news" className="py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
            <Newspaper className="mr-1 h-3 w-3" />
            Updates & News
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What's <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">New</span>
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Stay updated with the latest improvements and upcoming features for Executor
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="current" className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="current">Current (V1.9)</TabsTrigger>
              <TabsTrigger value="old">Whats New (V1.9)</TabsTrigger>
            </TabsList>

            <TabsContent value="current">
              <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
                <div className="flex items-center mb-4">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">Version 1.9 - Current Release</h3>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Planned Release 7/15/2025</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted/40 p-4 rounded-md">
                    <h4 className="font-medium mb-2">New Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Added support for custom themes and improved theme management</li>
                      <li>Implemented script auto-updating functionality</li>
                      <li>Introduced script categories for better organization</li>
                      <li>Added search functionality for scripts</li>
                      <li>Added WebGL-Fluid-Simulation</li>
                      <li>Added Matrix</li>
                      <li>Added Image Glitch</li>
                      <li>Added Clear Cookies</li>
                      <li>Added Auto Scroll</li>
                      <li>Added Clear Local Storage</li>
                      <li>Added Google Translate</li>
                      <li>Added Wordle Hacks</li>
                      <li>Added Time Shooter 2</li>
                      <li>Added Color Picker</li>
                      <li>Added Earthquake</li>
                      <li>Added Old School</li>
                      <li>Added Star Wars Intro</li>
                      <li>Added Clear IndexDB</li>
                      <li>Added Clear Cache</li>
                      <li>Added Clear Session Storage</li>
                      <li>Added Wasm-Patcher (Major Script)</li>
                      <li>Added 15th Anniversary MC Cape Exploit (Major Exploit) (Removed Due To It Being Patched)</li>
                  </ul>
                </div>

                <div className="bg-muted/40 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Improvements</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Enhanced UI responsiveness across different screen sizes</li>
                      <li>Improved script loading performance by 30%</li>
                      <li>Updated the settings interface for better user experience</li>
                      <li>Reduced memory usage during script execution</li>
                      <li>Updated Kahoot Botter</li>
                      <li>Small update preparing for V2</li>
                      <li>Updated text for fullscreen button</li>
                    </ul>
                  </div>

                <div className="bg-muted/40 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Bug Fixes</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Fixed an issue where some scripts would not load properly</li>
                      <li>Resolved a problem with theme switching not persisting between sessions</li>
                      <li>Fixed various minor UI glitches and visual artifacts</li>
                      <li>Corrected several script compatibility issues</li>
                      <li>Fixed issue with browser</li>
                      <li>Fixed light and dark mode making background transparent</li>
                      <li>Fixed Prodigy cheats changing the background to white</li>
                      <li>Fixed Gimkit hacks</li>
                      <li>Fixed bug where Kahoot Botter would not open</li>
                      <li>Fixed Executor Menu clipping into web elements issue</li>
                      <li>Fixed Prodigy cheats messing up website elements</li>
                      <li>Fixed custom cursors clipping into web elements issue</li>
                      <li>Fixed custom cursor being able to drag in fullscreen</li>
                      <li>Fixed custom cursor glitch where you could have multiple equipped cursors at once</li>
                      <li>Fixed glitch for Clear Local Storage (Name = "Operation Cancelled")</li>
                      <li>Fixed glitch for Clear Cookies (Name = "Operation Cancelled")</li>
                      <li>Fixed glitch for 15th Anniversary MC Cape Exploit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>


            <TabsContent value="old">
              <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
                <div className="flex items-center mb-4">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">Version 1.9 - Whats New</h3>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Released</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted/40 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>optimized the loading time for prodigy cheats so now it loads 2x faster</li>
                      <li>Added inspect</li>
                      <li>Updated Cookie Clicker Cheats To Add Dev Menu</li>
                      <li>optimized loading time for darkmode&lightmode so now it loads 2x faster</li>
                      <li> Bypassed CSP Blocking Alerts</li>
                      <li>Added Custom Cursors (Major Script)</li>
                      <li>Added Blooket Bot</li>
                      <li>Added Kahoot Bot</li>
                      <li>Added 2048</li>
                      <li>Added Minecraft (Offline)</li>
                      <li>Fixed Issue Where The Search Button Is Draggable As Well As Fullscreen Button Maximize Button And Close Menu Button</li>
                      <li>Added Browser (Major Script)</li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
                    <h4 className="font-medium mb-2 text-primary">Community Requested Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>None</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
