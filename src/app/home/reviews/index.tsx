import Image from 'next/image'

export const Reviews = (): JSX.Element => {
  return (
    <div className="bg-white h-auto">
      <div className="responsive py-10">
        <h2 className="mb-10 text-4xl font-bold">Reviews</h2>
        <div className="flex justify-between w-full">
          <div className="text-l p-8 flex-col text-center items-center w-1/3">
            <div className="flex justify-center">
              <Image
                width="70"
                height="70"
                className="object-cover rounded-full"
                alt="reviewer avatar"
                src="/home/bob.jpg"
              />
            </div>
            <p className="text-2xl font-bold my-4">Bob Marley</p>
            <p className="text-1xl">I liked your platform for finding drivers, they always deliver quickly and reliably. Love you</p>
          </div>
          <div className="text-l p-8 flex-col text-center items-center w-1/3">
            <div className="flex justify-center">
              <Image
                width="70"
                height="70"
                className="object-cover rounded-full"
                alt="reviewer avatar"
                src="/home/michael.jpg"
              />
            </div>
            <p className="text-2xl my-4">Michael Jackson</p>
            <p className="text-1xl">I use only your platform for sending goods, I advise everyone, keep working in the same spirit, I am waiting for the expansion of your company</p>
          </div>
          <div className="text-l p-8 flex-col text-center items-center w-1/3">
            <div className="flex justify-center">
              <Image
                width="70"
                height="70"
                className="object-cover rounded-full"
                alt="reviewer avatar"
                src="/home/chuck.jpg"
              />
            </div>
            <p className="text-2xl my-4">Chuck Norris</p>
            <p className="text-1xl">I am a trucker with experience and you always have the best offers, it is convenient to negotiate an order without unnecessary bureaucracy thank you for your work</p>
          </div>
        </div>
      </div>
    </div>
  )
}