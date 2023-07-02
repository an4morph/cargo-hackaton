import { ProfileReminder } from '@/components/profile-reminder/page'
import { UserTypes } from '@/types/base.d'

export default async function DriverDashboardPage(): Promise<JSX.Element> {
  return (
    <div className="responsive">
      DriverDashboardPage
      <ProfileReminder userType={UserTypes.driver} />
    </div>
  )
}