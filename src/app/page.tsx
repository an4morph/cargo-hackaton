import { Features } from '@/app/home/features'
import { Hero } from '@/app/home/hero'
import { About } from './home/about'
import { Reviews } from './home/reviews'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Reviews />
    </>
  )
}
