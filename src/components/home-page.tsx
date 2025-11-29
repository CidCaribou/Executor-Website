import { Hero } from "./hero"
import { DiscordSection } from "./discord-section"
import { PremiumSection } from "./premium-section"

export function HomePage() {
  return (
    <div>
      <Hero />
      <PremiumSection />
      <DiscordSection />
    </div>
  )
}
