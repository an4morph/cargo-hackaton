import { BackButton } from '@/components/button/back'

export default async function ChatPage(): Promise<JSX.Element> {
  return (
    <div className="responsive py-10">
      <BackButton />
      Тут будет переписка
    </div>
  )
}