import { FeaturesSection } from "./features-section"

export function FeaturesPage() {
  return (
    <div>
      <div className="bg-background py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Executor Features</h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
              Discover all the powerful capabilities that make Executor a must-have browser extension for power users.
            </p>
          </div>
        </div>
      </div>
      <FeaturesSection />
    </div>
  )
}
