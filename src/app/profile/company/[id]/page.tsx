import Image from 'next/image'

interface IProps {
  params: {
    id: string
  }
}

export default async function ProfileCompanyPage({ params: { id } }: IProps): Promise<JSX.Element> {
  return (
    <div className="responsive py-10">
      <h1 className="text-3xl">(company) GoCargo USA</h1>
      <p>{id}</p>

      <div className="flex">
        <Image
          width="300"
          height="300"
          className="object-cover"
          alt="company avatar"
          src="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1689&q=80"
        />

        <div className="[&>p]:mb-8">
          <h2 className="font-bold">Company Info</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sed voluptatibus quod ratione necessitatibus impedit aspernatur aperiam ex pariatur cupiditate quaerat expedita corporis, beatae molestias, cumque reiciendis ut adipisci deleniti accusamus delectus! Accusantium, nam quo praesentium voluptatibus magni error dolorum?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet ducimus animi eligendi placeat quod deserunt quia nobis, officiis sit!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, necessitatibus?</p>
        </div>
      </div>
    </div>
  )
}