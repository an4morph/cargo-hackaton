export const Features = (): JSX.Element => {
  return (
    <div className="bg-white h-auto">
      <div className="responsive py-10">
        {/* <h2 className="mb-10 text-xl">Тут могут расписаны плюсы компании и почему надо выбрать именно их</h2> */}
        <div className="flex justify-between">
          <div className="text-l p-8 flex-col text-center">
            <h2 className="text-8xl font-extrabold">01</h2>
            <p className="text-4xl">Quickly</p>
          </div>
          <div className="text-l p-8 flex-col text-center">
            <h2 className="text-8xl font-extrabold">02</h2>
            <p className="text-4xl">Reliability</p>
          </div>
          <div className="text-l p-8 flex-col text-center">
            <h2 className="text-8xl font-extrabold">03</h2>
            <p className="text-4xl">Comfortable</p>
          </div>
        </div>
      </div>
    </div>
  )
}