import { useState } from "react"
import { CheckCircle2, Sparkles, XCircle, Info } from "lucide-react"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "./ui/tabs"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card"

export function PremiumSection() {
  const [showNotAvailable, setShowNotAvailable] = useState(false);

  const handlePremiumClick = () => {
    setShowNotAvailable(true);
    setTimeout(() => setShowNotAvailable(false), 3000);
  };

  return (
    <section id="premium" className="py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
            <Sparkles className="mr-1 h-3 w-3" />
            Premium Features
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unlock the <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Full Power</span>
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Get access to exclusive premium features and enhance your experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>Basic access for everyone</CardDescription>
              <div className="mt-4 text-3xl font-bold">$0</div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                  <div>
                    <p className="font-medium">Auto Updates</p>
                    <p className="text-sm text-muted-foreground">Scripts update automatically to latest versions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                  <div>
                    <p className="font-medium">Suggest Updates</p>
                    <p className="text-sm text-muted-foreground">Submit your ideas for future updates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                  <div>
                    <p className="font-medium">Free Scripts Library</p>
                    <p className="text-sm text-muted-foreground">Access to tons of amazing free scripts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-5 w-5 mr-2 text-muted-foreground/70 shrink-0" />
                  <div>
                    <p className="font-medium text-muted-foreground/70">Premium Scripts</p>
                    <p className="text-sm text-muted-foreground/70">Advanced and exclusive scripts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-5 w-5 mr-2 text-muted-foreground/70 shrink-0" />
                  <div>
                    <p className="font-medium text-muted-foreground/70">Priority Support</p>
                    <p className="text-sm text-muted-foreground/70">Dedicated support channel</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-5 w-5 mr-2 text-muted-foreground/70 shrink-0" />
                  <div>
                    <p className="font-medium text-muted-foreground/70">Suggestion Priority</p>
                    <p className="text-sm text-muted-foreground/70">Your suggestions get implemented first</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Current Plan</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-purple-500 shadow-md">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Premium</CardTitle>
                <div className="inline-flex items-center rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-semibold text-purple-500">
                  Recommended
                </div>
              </div>
              <CardDescription>Enhanced experience with all features</CardDescription>

              <Tabs defaultValue="monthly" className="mt-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger
                    value="monthly"
                    className="data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:border-b-2"
                  >
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger
                    value="yearly"
                    className="data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:border-b-2"
                  >
                    Yearly
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="monthly">
                  <div className="flex items-baseline">
                    <div className="text-3xl font-bold">$5</div>
                    <div className="text-sm text-muted-foreground ml-1">/ month</div>
                  </div>
                </TabsContent>
                <TabsContent value="yearly">
                  <div className="flex items-baseline">
                    <div className="text-3xl font-bold">$45</div>
                    <div className="text-sm text-muted-foreground ml-1">/ year</div>
                    <div className="ml-2 inline-flex items-center rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-semibold text-green-500">
                      Save 25%
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                  <div>
                    <p className="font-medium">All Free Features</p>
                    <p className="text-sm text-muted-foreground">Everything in the free tier</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                  <div>
                    <p className="font-medium">Premium Scripts</p>
                    <p className="text-sm text-muted-foreground">Access to exclusive premium scripts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                  <div>
                    <p className="font-medium">Control Auto Updates</p>
                    <p className="text-sm text-muted-foreground">Enable or disable auto-updates as you prefer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                  <div>
                    <p className="font-medium">Suggestion Priority</p>
                    <p className="text-sm text-muted-foreground">Your feature ideas get implemented first</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                  <div>
                    <p className="font-medium">Priority Support</p>
                    <p className="text-sm text-muted-foreground">Dedicated support and faster response</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                  <div>
                    <p className="font-medium">Extended Script Library</p>
                    <p className="text-sm text-muted-foreground">Full access to our entire script collection</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-500" onClick={handlePremiumClick}>
                  Get Premium
                </Button>
                {showNotAvailable && (
                  <div className="mt-2 text-center text-amber-500 text-sm flex items-center justify-center">
                    <Info className="h-4 w-4 mr-1" />
                    Not available yet. Coming soon!
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 p-4 bg-muted/50 rounded-lg flex items-start max-w-5xl mx-auto">
          <Info className="h-5 w-5 text-primary mr-3 mt-0.5" />
          <div>
            <p className="text-sm">
              <strong>Need help?</strong> If you have any questions about Premium features or pricing, feel free to{" "}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a href="#" className="text-primary hover:underline">contact us</a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-medium">Contact our support team</h4>
                    <p className="text-sm text-muted-foreground">
                      You can reach us via Discord for the fastest response or email us at support@example.com
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              {" "}or join our Discord community for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
