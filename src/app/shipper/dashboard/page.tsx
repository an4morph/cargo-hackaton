'use client'
import { PrimaryButton } from '@/components/button/primary'
import { ProfileReminder } from '@/components/profile-reminder/page'
import { UserTypes } from '@/types/base.d'
import notificatons from '@/store/notifications'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import { ShipmentItem } from '@/components/shipment-item'
import { mockShipments } from './mockData'


const ShipperDashboardPage = observer((): JSX.Element => {
  return (
    <div className="responsive py-10">
      <h1 className="text-xl mb-4">Мои заявки (shipments)</h1>
      <Link href="/shipments/new">
        <PrimaryButton>Новая отправка</PrimaryButton>
      </Link>
      <div className="flex mt-5">
        <div className="paper w-1/5 p-6 h-fit">
          фильтрация
        </div>
        <div className="paper ml-4 w-4/5 p-6">
          <h3 className="mb-10 text-2xl font-medium">Таблица с отправками</h3>
          <ul>
            {
              mockShipments.map(s => (
                <ShipmentItem
                  className="mb-4"
                  driverInfo={s.driverInfo}
                  description={s.description}
                  wayPercentage={s.wayPercentage}
                  fromDate={s.fromDate}
                  toDate={s.toDate}
                  status={s.status}
                  locationFrom={s.locationFrom}
                  locationTo={s.locationTo}
                  id={s.id}
                  key={s.id}
                />))
            }
          </ul>
        </div>
      </div>

      {notificatons.showProfileFillNotice && <ProfileReminder userType={UserTypes.shipper} />}
    </div>
  )
})

export default ShipperDashboardPage