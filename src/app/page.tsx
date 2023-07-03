import { Features } from '@/app/home/features/index'
import { Hero } from '@/app/home/hero/index'
import { About } from './home/about/index'
import { Reviews } from './home/reviews/index'

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
