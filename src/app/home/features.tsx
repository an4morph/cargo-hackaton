export const Features = (): JSX.Element => {
  return (
    <div className="bg-green-200 h-[60vh]">
      <div className="responsive py-10">
        <h2 className="mb-10 text-xl">Тут могут расписаны плюсы компании и почему надо выбрать именно их</h2>
        <div className="flex justify-between">
          <div className="text-lg bg-green-400 p-8">Feature 1</div>
          <div className="text-lg bg-green-400 p-8">Feature 2</div>
          <div className="text-lg bg-green-400 p-8">Feature 3</div>
        </div>
      </div>
    </div>
  )
}