import { FileText, Github, Code, AlertTriangle, Users } from "lucide-react"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export function DocumentationSection() {
  return (
    <section id="documentation" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
            <FileText className="mr-1 h-3 w-3" />
            Documentation & License
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How to Use and <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Contribute</span>
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Learn how to use Executor and understand the terms for modifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Github className="h-5 w-5 mr-2 text-primary" />
              <h3 className="text-xl font-semibold">GitHub Repository</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Executor is available on GitHub. You can access the source code, contribute to the project, or fork it for your own use according to our licensing terms.
            </p>
            <div className="bg-muted rounded-md p-4 mb-4 overflow-hidden">
              <code className="text-sm font-mono break-all">https://github.com/CidCaribou/Executor-Menu</code>
            </div>
            <Button asChild variant="outline" className="w-full">
              <a
                href="https://github.com/CidCaribou/Executor-Menu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>

          <div className="bg-card rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Code className="h-5 w-5 mr-2 text-primary" />
              <h3 className="text-xl font-semibold">Getting Started</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              To use Executor, follow these simple steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li className="text-sm">Copy the script from the GitHub repository</li>
              <li className="text-sm">Create a new bookmark and for the url put javascript: then paste the code</li>
              <li className="text-sm">Give it a name then press save</li>
              <li className="text-sm">Click the bookmark to run the code</li>
            </ol>
            <p className="text-sm text-muted-foreground">
              For more detailed instructions, check out the full documentation on our GitHub repository.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-12 bg-card rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-semibold mb-4">License & Contribution Terms</h3>

          <Separator className="my-6" />

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-2 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                Modification Terms
              </h4>
              <p className="text-muted-foreground">
                You are allowed to edit and modify Executor for your personal use. However, by making modifications, you agree that the original creator may incorporate your edits into the official version and give you credit for your contributions without requiring explicit permission.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="text-lg font-medium mb-2">Distribution Rights</h4>
              <p className="text-muted-foreground">
                The original creator retains the right to distribute any modifications you make to the script. Your contributions may be incorporated into future releases with attribution, but this does not grant you ownership over the project.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="text-lg font-medium mb-2">Anti-Piracy Protection</h4>
              <p className="text-muted-foreground">
                You are not permitted to pirate Executor, which means obtaining it without authorization, redistributing premium features for free, or bypassing any payment systems in place. Doing so violates our terms and may result in legal action.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="text-lg font-medium mb-2">Fair Usage Policy</h4>
              <p className="text-muted-foreground">
                When using Executor, please adhere to ethical standards and respect the intellectual property rights of the creator. Do not use the script for harmful, illegal, or unethical purposes.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="text-lg font-medium mb-2">Attribution Requirements</h4>
              <p className="text-muted-foreground">
                If you distribute a modified version of Executor, you must provide clear attribution to the original creator and indicate that you have made changes. Removing attribution notices is not permitted.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="text-lg font-medium mb-2 flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Credits
              </h4>
              <p className="text-muted-foreground mb-4">
                Not all scripts in Executor are made by me. I will not sell other people's work. Below are the credits for scripts included in Executor:
              </p>
              <div className="bg-muted rounded-md p-4 space-y-2 text-sm">
                <p>• UI For Custom Cursors And Games-3 Made By SimplyFOV</p>
                <p>• Dark Mode Light Mode Switch Made By RiccardoRapelli</p>
                <p>• Draw On Website Made By Legend7269</p>
                <p>• Wordle Hack (Could Not Find Original Owner)</p>
                <p>• Gimkit Hacks Made By (Could Not Find Original Owner)</p>
                <p>• Kahack made by jokeri2222 and Epic0001</p>
                <p>• Ego-Client Made By Ego</p>
                <p>• Blooket Botter Created By Ducklife3141</p>
                <p>• Dev Console Made By (Could Not Find Original Owner)</p>
                <p>• Car Axle Client Made By Penguinify</p>
                <p>• Minecraft Overlay Made By Luphoria#7398</p>
                <p>• Duolingo Cheats By Rxzyx</p>
                <p>• Google Snake Hacks Made By (Could Not Find Original Owner)</p>
                <p>• Executor Made By Wasd.</p>
                <p>• Logo Made by Bharat Icons on https://www.freepik.com/icon/file_8083509</p>
                <p>• DOMI Made by https://blog.roysolberg.com/js/dom2.min.js</p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                If you have made something in Executor and want credits, then join the discord server and create a bug report, providing valid proof that you own it.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="text-lg font-medium mb-2 text-purple-500">Content Usage and Credits</h4>
              <p className="text-muted-foreground">
                You are permitted to create separate copies or derivative works based on Executor without asking for explicit permission. However, you <strong>must</strong> provide proper credits to the original creator in any derivative work or copy. This includes acknowledging the original author in your documentation, about section, or any other appropriate place in your project.
              </p>
              <p className="text-muted-foreground mt-2">
                Any content from Executor that you use in your own projects (code snippets, design elements, graphics, etc.) must include a visible credit that states: "Based on or includes elements from Executor by Wasd". Failure to provide proper attribution is a violation of these terms.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-muted rounded-md">
            <p className="text-sm text-muted-foreground">
              By downloading, using, or modifying Executor, you agree to abide by these terms. The original creator reserves the right to modify these terms at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
