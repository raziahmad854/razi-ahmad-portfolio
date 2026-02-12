'use client'

import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}