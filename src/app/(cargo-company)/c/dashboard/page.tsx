'use client'

import { ProfileReminder } from '@/components/profile-reminder/page'
import notifications from '@/store/notifications'
import { UserTypes } from '@/types/base.d'
import { observer } from 'mobx-react-lite'

const CompanyDashboardPage = observer((): JSX.Element => {
  return (
    <div className="responsive">
      CompanyDashboardPage
      {notifications.showProfileFillNotice && <ProfileReminder userType={UserTypes.company} />}
    </div>
  )
})

export default CompanyDashboardPage