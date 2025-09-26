import { useState } from "react"
import { Download, Chrome, Bookmark, AlertTriangle, Shield } from "lucide-react"
import { Button } from "../components/ui/button"
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
import { Separator } from "../components/ui/separator"

export function InstallPage() {
  const [bookmarkletDragged, setBookmarkletDragged] = useState(false)
  const [currentTab, setCurrentTab] = useState("bookmarklet")

  const bookmarkletCode = `javascript:(function(){try{if(typeof window.ExecutorUserScriptVersion==="function"){console.log("Executor Userscript detected — running the Userscript version.");ExecutorUserScriptVersion()}else{new Function("var testCSP='CSP check'")();var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Menu@main/menu.js';s.onload=function(){s.remove()};s.onerror=function(){alert('Error loading the script.\n\nTry:\n1. Visiting a different site (some block scripts)\n2. Reinstall the bookmarklet\n3. Contact the owner.');console.error('Script load error via <script src>')};document.body.appendChild(s)}}catch(e){if(e.message.includes('Content Security Policy')){var i=document.querySelector('iframe');var m='Script blocked by Content Security Policy.\n\nTry:\n1. Visit a different site\n2. Use the Spoofer\n3. Contact the owner.';i?i.contentWindow.alert(m):alert(m)}else{alert('Script execution failed.\n\nTry:\n1. Visit a different site\n2. Reinstall the bookmarklet\n3. Contact the owner.');console.error('Execution error:',e)}}})();
`;

  const handleBookmarkletDragStart = () => {
    setBookmarkletDragged(true)
    setTimeout(() => setBookmarkletDragged(false), 3000)
  }

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
            <Download className="mr-1 h-3 w-3" />
            Installation
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Install <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Executor</span>
          </h1>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Choose your preferred method to install Executor
          </p>
        </div>

        <Tabs
          defaultValue="bookmarklet"
          className="w-full"
          onValueChange={(value) => setCurrentTab(value)}
        >
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="bookmarklet">Bookmarklet</TabsTrigger>
            <TabsTrigger value="extension">Browser Extension</TabsTrigger>
            <TabsTrigger value="spoofer">Spoofer</TabsTrigger>
            <TabsTrigger value="userscript">Userscript</TabsTrigger>
          </TabsList>

          <TabsContent value="bookmarklet">
            <Card>
              <CardHeader>
                <CardTitle>Bookmarklet Installation</CardTitle>
                <CardDescription>
                  The simplest way to install Executor is by using a bookmarklet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Bookmark className="h-5 w-5 mr-2 text-primary" />
                    How to Install the Bookmarklet
                  </h3>

                  <ol className="list-decimal list-inside space-y-4">
                    <li className="text-sm flex items-center">
                      <span className="mr-2">
                        <strong>Drag the button to your bookmarks bar:</strong>
                      </span>
                      <a
                        href={bookmarkletCode}
                        className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md shadow-sm cursor-grab active:cursor-grabbing"
                        onDragStart={handleBookmarkletDragStart}
                        draggable
                      >
                        <Bookmark className="mr-2 h-4 w-4" />
                        Executor
                      </a>
                      {bookmarkletDragged && (
                        <span className="text-green-500 text-sm ml-2 flex items-center">
                          ✓ Now drag to your bookmarks bar!
                        </span>
                      )}
                    </li>
                    <li className="text-sm">
                      <strong>Visit the website</strong> where you want to use Executor
                    </li>
                    <li className="text-sm">
                      <strong>Click the Executor bookmark</strong> in your bookmarks bar to activate
                    </li>
                    <li className="text-sm">
                      The Executor menu will appear, ready to use!
                    </li>
                  </ol>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> If your bookmarks bar is not visible, press <kbd className="px-1 py-0.5 bg-muted-foreground/20 rounded text-xs">Ctrl+Shift+B</kbd> (Windows/Chrome) or <kbd className="px-1 py-0.5 bg-muted-foreground/20 rounded text-xs">Cmd+Shift+B</kbd> (Mac) to show it.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  If you're having trouble with the bookmarklet, try the manual installation method below.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="extension">
            <Card>
              <CardHeader>
                <CardTitle>Executor Extension</CardTitle>
                <CardDescription>
                  Install Executor as a browser extension for enhanced functionality and performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/40 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src="/downloads/Executor-Extension-Icon.png"
                      alt="Executor Extension"
                      className="h-12 w-12 mr-3"
                    />
                    <div>
                      <h3 className="text-xl font-medium">Executor Extension</h3>
                      <p className="text-muted-foreground">Enhanced browser extension version</p>
                    </div>
                  </div>

                  <p className="mb-4">
                    The Executor Extension provides the full Executor experience directly in your browser,
                    with enhanced performance, better script support, and seamless integration.
                  </p>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span className="text-sm">Runs in the background and activates when needed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span className="text-sm">Enhanced script library and performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span className="text-sm">Better compatibility with websites</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span className="text-sm">Automatic updates and improvements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span className="text-sm">One-click activation from browser toolbar</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium">Installation Steps:</h4>
                    <ol className="list-decimal list-inside space-y-2 pl-2">
                      <li className="text-sm">Download the Executor extension package</li>
                      <li className="text-sm">Extract the ZIP file to a folder on your computer</li>
                      <li className="text-sm">Open Chrome and go to chrome://extensions/</li>
                      <li className="text-sm">Enable "Developer mode" in the top-right corner</li>
                      <li className="text-sm">Drag and drop the crx file from the zip file you extracted</li>
                      <li className="text-sm">The Executor extension will now be installed in your browser</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg flex items-start mb-6">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> For best results, use the Executor Extension alongside the Spoofer extension when websites have strict security policies.
                    </p>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full" onClick={() => { window.location.href = '/downloads/Executor Extension.zip' }}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Executor Extension
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="spoofer">
            <Card>
              <CardHeader>
                <CardTitle>Spoofer Extension</CardTitle>
                <CardDescription>
                  Bypass Content Security Policy (CSP) and X-Frame-Options restrictions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/40 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src="/downloads/spoofer-icon.png"
                      alt="Spoofer Extension"
                      className="h-12 w-12 mr-3"
                    />
                    <div>
                      <h3 className="text-xl font-medium">Spoofer Extension</h3>
                      <p className="text-muted-foreground">Toggle CSP and X-Frame Options</p>
                    </div>
                  </div>

                  <p className="mb-4">
                    The Spoofer extension allows you to bypass Content Security Policy (CSP) and X-Frame-Options
                    restrictions on websites, making it easier to use Executor on sites with strict security policies.
                  </p>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span className="text-sm">Removes Content Security Policy restrictions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span className="text-sm">Bypasses X-Frame-Options headers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span className="text-sm">Toggle functionality with one click</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span className="text-sm">Works on all websites</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium">Installation Steps:</h4>
                    <ol className="list-decimal list-inside space-y-2 pl-2">
                      <li className="text-sm">Download the Spoofer extension package</li>
                      <li className="text-sm">Extract the ZIP file to a folder on your computer</li>
                      <li className="text-sm">Open Chrome and go to chrome://extensions/</li>
                      <li className="text-sm">Enable "Developer mode" in the top-right corner</li>
                      <li className="text-sm">Click "Load unpacked" and select the extracted folder</li>
                      <li className="text-sm">The Spoofer extension will now be installed in your browser</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg flex items-start mb-6">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Spoofer works best when used alongside Executor. Toggle Spoofer on when websites block the executor due to security restrictions.
                    </p>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full" onClick={() => { window.location.href = '/downloads/spoofer.zip' }}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Spoofer Extension
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="userscript">
  <Card>
    <CardHeader>
      <CardTitle>Executor Userscript</CardTitle>
      <CardDescription>
        Install Executor as a Userscript for Tampermonkey, Greasemonkey, or Violentmonkey
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-medium mb-2 flex items-center">
          <Bookmark className="h-5 w-5 mr-2 text-primary" />
          How to Install the Userscript
        </h3>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-sm">
            Install a Userscript manager if you don’t have one:
            <ul className="list-disc list-inside ml-4 text-sm">
              <li>Tampermonkey (Chrome/Edge/Opera)</li>
              <li>Greasemonkey (Firefox)</li>
              <li>Violentmonkey (Chrome/Firefox)</li>
            </ul>
          </li>
          <li className="text-sm">
            Click the download link below to get the Userscript:
            <Button className="ml-2" onClick={() => { window.location.href = 'https://github.com/CidCaribou/Executor-Menu/raw/refs/heads/main/Userscript/Menu.user.js' }}>
              <Download className="mr-2 h-4 w-4" />
              Download Userscript
            </Button>
          </li>
          <li className="text-sm">
            Open the downloaded script in your Userscript manager and approve installation.
          </li>
          <li className="text-sm">
            Once installed, use the bookmarklet to activate userscript version.
          </li>
        </ol>
      </div>
    </CardContent>
  </Card>
</TabsContent>
</Tabs>

        {currentTab === "bookmarklet" && (
          <div className="mt-10 bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-4">Manual Installation</h3>
            <p className="text-muted-foreground mb-4">
              If you prefer, you can also install Executor manually by copying and pasting the script into your browser's console:
            </p>
            <div className="bg-muted p-4 rounded-md font-mono text-xs overflow-x-auto mb-4">
              <code>
                {`fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Menu@latest/menu.js')
  .then(response => response.text())
  .then(code => eval(code))
  .catch(err => console.error('Failed to load Executor:', err));`}
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Copy the above code, open your browser's developer console (F12 or Ctrl+Shift+I), paste the code, and press Enter.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
