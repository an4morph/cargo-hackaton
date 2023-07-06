'use client'

import { ProfileReminder } from '@/components/profile-reminder/page'
import { UserTypes } from '@/types/base.d'
import notificatons from '@/store/notifications'
import { observer } from 'mobx-react-lite'
import { mockShipments } from './mockData'
import { ActiveShipmentsList } from './list'
import { DriverJobs } from './jobs'

const DriverDashboardPage = observer((): JSX.Element => {
  return (
    <div className="responsive py-10">
      <h2 className="text-xl mb-4">New recommended jobs</h2>
      <DriverJobs list={mockShipments.slice(-4)} />

      <h2 className="text-xl mb-4">My shipments ({mockShipments.length})</h2>
      <ActiveShipmentsList list={mockShipments} />

      {notificatons.showProfileFillNotice && <ProfileReminder userType={UserTypes.driver} />}
    </div>
  )
})

export default DriverDashboardPage