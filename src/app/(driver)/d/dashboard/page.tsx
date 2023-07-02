'use client'

import { ProfileReminder } from '@/components/profile-reminder/page'
import { UserTypes } from '@/types/base.d'
import { observer } from 'mobx-react-lite'
import notificatons from '@/store/notifications'

const DriverDashboardPage = observer((): JSX.Element => {
  return (
    <div className="responsive">
      DriverDashboardPage
      {notificatons.showProfileFillNotice && <ProfileReminder userType={UserTypes.driver} />}
    </div>
  )
})

export default DriverDashboardPage