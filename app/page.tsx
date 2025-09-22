import Hero from '@/components/main/Hero'
import Phone from '@/components/main/Phone'
import Section from '@/components/main/Section'
import Encryption from '@/components/main/Encryption'
import BacktoTop from '@/components/sub/BacktoTop'
import Skills from '@/components/main/Skills'
import Project from '@/components/main/Project'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
         <Hero />
        <Phone />
        <Section />
        <Skills />
        <Encryption />
        <Project />
        <BacktoTop />
      </div>
    </main>
  )
}