'use client'
import { PrimaryButton } from '@/components/button/primary'
import { ProfileReminder } from '@/components/profile-reminder/page'
import { UserTypes } from '@/types/base.d'
import notificatons from '@/store/notifications'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import cx from 'classnames'

enum ShipmentStatuses {
    // wait = 'Looking for shipper',
    // load = 'Loading goods',
    delivering = 'Delivering',
    done = 'Completed'
}

const shipments = [
  { id: 1, from: 'Chikago', to: 'NY', status: ShipmentStatuses.delivering },
  { id: 2, from: 'NY', to: 'LA', status: ShipmentStatuses.delivering },
  { id: 3, from: 'NY', to: 'LA', status: ShipmentStatuses.delivering },
  { id: 4, from: 'NY', to: 'LA', status: ShipmentStatuses.done },
  { id: 5, from: 'NY', to: 'LA', status: ShipmentStatuses.done },
]

const ShipperDashboardPage = observer((): JSX.Element => {
  return (
    <div className="responsive py-10">
      <h1 className="text-xl mb-4">Мои заявки (shipments)</h1>
      <Link href="/shipments/new">
        <PrimaryButton>Новая отправка</PrimaryButton>
      </Link>
      <div className="flex mt-5">
        <div className="paper w-1/3 p-6">
          фильтрация
        </div>
        <div className="paper ml-4 w-2/3 p-6">
          <h3 className="mb-10 text-2xl font-medium">Таблица с отправками</h3>
          <ul>
            {
              shipments.map(s => (
                <div
                  className={cx(
                    'w-full paper border-[1px] border-slate-300 p-10 mb-2 hover:bg-slate-100',
                    // { 'bg-green-': s.status === ShipmentStatuses.done },
                    // { 'hover:bg-red-500': s.status === ShipmentStatuses.done },
                    // { 'bg-red-500': s.status === ShipmentStatuses.delivering },
                  )}
                  key={s.id}
                >
                  <div className="flex justify-between">
                    <div className="flex-col text-center">
                      <h2 className="text-4xl text-slate-500 font-medium">12:03</h2>
                      <li className="my-2 font-medium">
                        <Link
                          href={`/shipments/${s.id}`}
                        >
                          {s.from}
                        </Link>
                      </li>
                      <h3 className="font-medium">Sep 12, Fr.</h3>
                    </div>
                    <input className="w-3/5 text-white bg-black" type="range" min="0" value="20" max="100" />
                    <div className="flex-col text-center">
                      <h2 className="text-4xl text-slate-500">15:03</h2>
                      <li className="my-2">
                        <Link
                          href={`/shipments/${s.id}`}
                        >
                          {s.to}
                        </Link>
                      </li>
                      <h3>Sep 17, Mon.</h3>
                    </div>
                  </div>
                  <div className="font-medium mt-5 ">
                    <hr />
                    <p className="mt-4">Weight: 123</p>
                    <p className="my-2">Type: Container</p>
                    <p>Special Instruction: Pick up care</p>
                    <p className="mt-2 text-red-500 text-2xl">Destination Location: 50 Avenue</p>
                  </div>
                </div>
              ))
            }
          </ul>
        </div>
      </div>

      {notificatons.showProfileFillNotice && <ProfileReminder userType={UserTypes.shipper} />}
    </div>
  )
})

export default ShipperDashboardPage