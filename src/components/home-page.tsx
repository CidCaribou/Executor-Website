import { Hero } from "./hero"
import { DiscordSection } from "./discord-section"

export function HomePage() {
  return (
    <div>
      <Hero />
      <PremiumSection />
      <DiscordSection />
    </div>
  )
}
