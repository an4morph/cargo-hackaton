import { BackButton } from '@/components/button/back'

export default async function ChatPage(): Promise<JSX.Element> {
  return (
    <div className="responsive">
      <BackButton className="mt-10" />
      Тут будет переписка
    </div>
  )
}