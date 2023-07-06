import { BackButton } from '@/components/button/back'

// эта страница не нужна
export default function Loading(): JSX.Element {
  return (
    <div className="responsive py-10">
      <BackButton className="mb-4" />
      <div>Loading...</div>
    </div>
  )
}