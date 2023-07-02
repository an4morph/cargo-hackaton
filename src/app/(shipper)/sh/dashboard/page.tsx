import { PrimaryButton } from '@/components/button/primary'
import { ProfileReminder } from '@/components/profile-reminder/page'
import { UserTypes } from '@/types/base.d'
import Link from 'next/link'

const shipments = [
  { id: 1, from: 'NY', to: 'LA' },
  { id: 2, from: 'NY', to: 'LA' },
  { id: 3, from: 'NY', to: 'LA' },
  { id: 4, from: 'NY', to: 'LA' },
  { id: 5, from: 'NY', to: 'LA' },
]

export default async function ShipperDashboardPage(): Promise<JSX.Element> {
  return (
    <div className="responsive py-10">
      <h1 className="text-xl mb-4">Мои заявки (shipments)</h1>
      <Link href="/shipments/new">
        <PrimaryButton>Новая отправка</PrimaryButton>
      </Link>
      <div className="flex">
        <div className="paper w-1/3 p-6">
          фильтрация
        </div>
        <div className="paper ml-4 w-2/3 p-6">
          <h3>Таблица с отправками</h3>
          <ul>
            {
              shipments.map(s => (
                <li key={s.id}>
                  <Link
                    className="w-full flex paper border-[1px] border-slate-300 p-2 mb-2 hover:bg-slate-100"
                    href={`/shipments/${s.id}`}
                  >
                    {s.from} - {s.to}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <ProfileReminder userType={UserTypes.shipper} />
    </div>
  )
}