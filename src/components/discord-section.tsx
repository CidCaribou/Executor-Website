import { MessageSquare } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export function DiscordSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-violet-500">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-md text-white">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Discord Community</h2>
            <p className="mb-8">
              Get help, share scripts, and connect with other Executor users. Our Discord server is the best place to go for all things Executor!
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <span>Get help with script issues</span>
              </li>
              <li className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <span>Share and discover new scripts</span>
              </li>
              <li className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <span>Connect with experienced users</span>
              </li>
            </ul>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-white/90"
              onClick={() => window.open("https://discord.gg/EVDpJDudAa", "_blank")}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Join Discord Server
            </Button>
          </div>

          <div className="lg:w-1/2">
            <Card className="overflow-hidden border-none shadow-xl">
              <CardContent className="p-0">
                <div className="bg-[#5865F2] p-4">
                  <div className="flex items-center">
                    <MessageSquare className="h-8 w-8 text-white mr-2" />
                    <h3 className="text-xl font-bold text-white">Executor Discord</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                      <span className="text-violet-600 font-bold">A</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Admin</span>
                        <span className="text-xs text-muted-foreground">Today at 12:34 PM</span>
                      </div>
                      <p className="text-sm mt-1">Welcome to the Executor Discord! Feel free to make yourself at home and ask any questions if you have any.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">U</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">User</span>
                        <span className="text-xs text-muted-foreground">Today at 12:36 PM</span>
                      </div>
                      <p className="text-sm mt-1">Just used the Cookie Clicker Cheats and it works perfectly! Thanks for the help.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-bold">M</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Admin</span>
                        <span className="text-xs text-muted-foreground">Today at 12:40 PM</span>
                      </div>
                      <p className="text-sm mt-1">No problem! Remember to check out the #announcements channel for the latest updates to Executor.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t bg-gray-50 dark:bg-gray-900">
                  <Button
                    className="w-full bg-[#5865F2] hover:bg-[#4752c4]"
                    onClick={() => window.open("https://discord.gg/EVDpJDudAa", "_blank")}
                  >
                    Join Server
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
