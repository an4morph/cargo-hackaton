import { BackButton } from '@/components/button/back'

export default function Loading(): JSX.Element {
  return (
    <div className="responsive py-10">
      <BackButton className="mb-4" />
      <div className="text-3xl">Loading...</div>
    </div>
  )
}