import { PrimaryButton } from '@/components/button/primary'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  params: {
    id: string
  }
}

const responses = [
  {
    id: 1,
    name: 'Name Surname',
    photo: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
    chatId: 1,
  },
  {
    id: 2,
    chatId: 2,
    name: 'Name Surname',
    photo: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  },
]

export default async function ShimpmentPage({ params: { id } }: IProps): Promise<JSX.Element> {
  return (
    <div className="responsive py-10">
      <h1 className="text-xl mb-4">Отправка №{id}</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum maxime incidunt doloribus natus, dolores aliquam commodi ex suscipit sed molestias distinctio quaerat repudiandae reiciendis saepe quidem rem harum deleniti facilis voluptates facere. Eaque eveniet quo quos eligendi tempore, voluptatem dolore labore veritatis fugit tenetur pariatur corrupti sunt magnam totam necessitatibus aut sint perspiciatis hic aperiam maxime inventore dolores ratione nulla voluptate! Tenetur ipsa perferendis amet, odit maiores in dolorem numquam veniam repellendus, ab excepturi aliquam dolorum eius nobis veritatis error asperiores! Totam labore reprehenderit, eum harum, vel, ratione minima eveniet eligendi accusantium consectetur optio rem blanditiis autem repellat rerum.</p>


      <h2 className="text-xl mb-4 mt-10">Отклики</h2>
      <ul className="flex flex-wrap gap-4">
        {
          responses.map((r) => (
            <li key={r.id} className="w-full flex paper p-4">
              <div className="flex">
                <div className="shrink-0">
                  <Link href={`/profile/driver/${r.id}`}>
                    <h3>{r.name}</h3>
                  </Link>
                  <Image
                    className="aspect-square object-cover"
                    src={r.photo}
                    alt="driver avatar"
                    width="100"
                    height="100"
                  />
                </div>

                <div className="text-slate-500 ml-8">
                  Здравствуйте Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sit.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, molestias?
                </div>
              </div>

              <Link
                href={`/chat/${r.chatId}`}
                className="self-center shrink-0"
              >
                <PrimaryButton>Начать общение</PrimaryButton>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}