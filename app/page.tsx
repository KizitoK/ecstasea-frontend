"use client"
import Hero from "@/components/Hero"
import FeatureSection from "@/components/FeatureSection"
import SubscriptionBar from "@/components/SubscriptionBar"
import TokenBar from "@/components/TokenBar"
import Trustees from "@/components/Trustees"
import Team from "@/components/Team"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Hero />
      <FeatureSection />
      <Trustees />
      <SubscriptionBar />
      <TokenBar />
      {/* <Team /> */}  
    </main>
  )
}
