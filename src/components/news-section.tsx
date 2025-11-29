import { FileText, Calendar, Newspaper } from "lucide-react"
import { VersionDisplay } from "./version-display"
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
              <TabsTrigger value="current">Current Release</TabsTrigger>
              <TabsTrigger value="old">Whats New (V2)</TabsTrigger>
            </TabsList>

            <TabsContent value="current">
              <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
                <div className="flex items-center mb-4">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">Version <VersionDisplay /> - Current Release</h3>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Planned Completion 4/14/2026</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted/40 p-4 rounded-md">
                    <h4 className="font-medium mb-2">New Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Finished New Executor Menu</li>
                      <li>
                        Added a new feature where if you add ?executor at the end of a url it
                        will auto run Executor (Extension Version Only & Userscript version)
                      </li>
                      <li>Added the ?executor url feature for the userscript version</li>
                      <li>Added nice animations for minimize and fullscreen (new menu)</li>
                      <li>Kahoot Nickname Bypass (Script)</li>
                      <li>Emoji Rain (Script)</li>
                      <li>Flappy Bird Hacks</li>
                      <li>ev.io hacks</li>
                      <li>bloxd.io hacks</li>
                      <li>Slope Hacks</li>
                      <li>Kirka.io Hacks</li>
                      <li>voxiom.io hacks</li>
                      <li>
                        Krunker.io hacks (⚠️Only supported on Userscript version for now⚠️)
                      </li>
                      <li>minefun.io hacks</li>
                      <li>narrow.one hacks</li>
                      <li>vectaria.io hacks</li>
                      <li>cryzen.io hacks</li>
                    </ul>
                  </div>
                  <div className="bg-muted/40 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Improvements</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Executor Official Userscript. (Medium Update)</li>
                      <li>Updated Executor Extension Version to 2.0.0</li>
                      <li>Updated Userscript Version (Auto Updates Instantly now)</li>
                      <li>Updated website</li>
                      <li>Renamed Cloaker to Tab Cloaker</li>
                      <li>Updated Tab Cloaker</li>
                      <li>Updated Color Picker</li>
                      <li>Updated bloxd.io hacks</li>
                      <li>Updated Kirka.io Hacks</li>
                      <li>Updated Chrome Dino Hacks</li>
                      <li>Updated Gimkit hacks</li>
                      <li>
                        Loading alert now shows until script either fails to load or succeeds
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/40 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Bug Fixes</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Fixed Search Bar Not Working In New Menu</li>
                      <li>Fixed major issue with where menu spawns</li>
                      <li>Fixed blooket hacks</li>
                      <li>Fixed bug (not being able to open executor when closed)</li>
                      <li>Fixed sweet alert bug</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="old">
              <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
                <div className="flex items-center mb-4">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">Version 2 - Whats New</h3>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Released 1/8/2025</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted/40 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Fixed Issue With Browser</li>
                      <li>Fixed Light And Dark Mode Making Background Transparent</li>
                      <li>Added WebGL-Fluid-Simulation</li>
                      <li>Fixed Prodigy Cheats Changing The Background To White</li>
                      <li>Small Update Preparing For V2</li>
                      <li>Updated Kahoot Botter</li>
                      <li>Added Matrix</li>
                      <li>Added Image Glitch</li>
                      <li>Added Clear Cookies</li>
                      <li>Added Auto Scroll</li>
                      <li>Added Clear Local Storage</li>
                      <li>Added Google Translate</li>
                      <li>added Wordle Hacks</li>
                      <li>added Time Shooter 2</li>
                      <li>Fixed Gimkit hacks</li>
                      <li>added color picker</li>
                      <li>added earthquake</li>
                      <li>added old school</li>
                      <li>added star wars intro</li>
                      <li>Fixed Bug Where Kahoot Botter Would Not Open</li>
                      <li>Fixed Executor Menu Clipping Into Web Elements Issue</li>
                      <li>Fixed Prodigy Cheats Messing Up Website Elements</li>
                      <li>Fixed Custom Cursors Clipping Into Web Elements Issue</li>
                      <li>Fixed Custom Cursor Being Able To Drag In Fullscreen</li>
                      <li>Fixed Custom Cursor Glitch Where You Could Have Multiple Equipped Cursors At Once</li>
                      <li>Updated Text for fullscreen button</li>
                      <li>Fixed Glitch For Clear Local Storage Name=Operation Cancelled</li>
                      <li>Fixed Glitch For Clear Cookies Name=Operation Cancelled</li>
                      <li>Added 15th anniversary mc cape Exploit (Major Exploit) (Removed Due To It Being Patched)</li>
                      <li>Fixed Glitch For 15th anniversary mc cape Exploit</li>
                      <li>Added Clear IndexDB</li>
                      <li>Added Clear Cache</li>
                      <li>Added Clear Session Storage</li>
                      <li>Added Wasm-Patcher (Major Script)</li>
                      <li>Added Auto Clicker V2 (Major Script)</li>
                      <li>Fixed Issue for Auto Clicker V2 where the mac os buttons do not work.</li>
                      <li>Added Wordle Unlimited Hack</li>
                      <li>Added scan fsm and ui labels to Wasm-Patcher</li>
                      <li>Fixed Ui issue with settings button</li>
                      <li>Added Mobile Support</li>
                      <li>Added Flappy Bird</li>
                      <li>Fixed Time Shooter 2</li>
                      <li>Fixed Wordle+</li>
                      <li>Fixed Wordle Hacks</li>
                      <li>Added DragonX V2 International (Eaglercraft Hacked Client)</li>
                      <li>Added Slope</li>
                      <li>Added DOMI</li>
                      <li>Fixed Wordle hacks</li>
                      <li>Small Updates To Website</li>
                      <li>Updated Injection Method</li>
                      <li>Renamed Prodigy Cheats to Prodigy Cheats (Outdated)</li>
                      <li>Optimized Executor's code and scripting</li>
                      <li>Fixed Chrome Dino Cheats</li>
                      <li>Added X-Ray</li>
                      <li>Updated Prod Cheats to newest version (uses pxi-fusions menu)</li>
                      <li>Fixed error with "Inspect (Toggle)"</li>
                      <li>Updated PXI-Fusion (Prodigy Cheats) to V2</li>
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
